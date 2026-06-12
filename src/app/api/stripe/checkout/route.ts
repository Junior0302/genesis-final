import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getTraining } from "@/lib/trainings";

function buildOrderNumber() {
  const date = new Date();
  const stamp = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(
    date.getDate()
  ).padStart(2, "0")}`;
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `GC-${stamp}-${random}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { slug?: string; locale?: string };
    const slug = body.slug;
    const locale = body.locale ?? "fr";

    if (!slug) {
      return NextResponse.json({ error: "Formation manquante." }, { status: 400 });
    }

    const training = getTraining(slug);

    if (!training) {
      return NextResponse.json({ error: "Formation introuvable." }, { status: 404 });
    }

    const orderNumber = buildOrderNumber();
    const origin =
      request.headers.get("origin") ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "http://localhost:3000";

    const successUrl = `${origin}/${locale}/formation/success?order=${orderNumber}&slug=${training.slug}`;
    const cancelUrl = `${origin}/${locale}/formation/${training.slug}/conditions`;

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({
        url: `${successUrl}&demo=1`,
      });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-05-27.dahlia",
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${successUrl}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl,
      customer_creation: "always",
      billing_address_collection: "auto",
      invoice_creation: {
        enabled: true,
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: training.price * 100,
            product_data: {
              name: training.title.fr,
              description: training.shortDescription.fr,
              images: training.coverImage.startsWith("http")
                ? [training.coverImage]
                : [`${origin}${training.coverImage}`],
              metadata: {
                slug: training.slug,
              },
            },
          },
        },
      ],
      metadata: {
        orderNumber,
        trainingSlug: training.slug,
        locale,
      },
      payment_intent_data: {
        metadata: {
          orderNumber,
          trainingSlug: training.slug,
          locale,
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Impossible de lancer Stripe.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
