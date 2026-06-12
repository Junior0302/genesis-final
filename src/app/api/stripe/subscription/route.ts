import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function buildOrderNumber() {
  const date = new Date();
  const stamp = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(
    date.getDate()
  ).padStart(2, "0")}`;
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `GC-SUB-${stamp}-${random}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { locale?: string };
    const locale = body.locale ?? "fr";

    const origin =
      request.headers.get("origin") ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "http://localhost:3000";

    const orderNumber = buildOrderNumber();

    const cancelUrl = `${origin}/${locale}/abonnement`;
    const successUrl = `${origin}/${locale}/abonnement/success?order=${orderNumber}`;

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({
        url: `${successUrl}&demo=1`,
      });
    }

    const priceId = process.env.STRIPE_WEB_PRO_PRICE_ID;
    if (!priceId) {
      return NextResponse.json(
        { error: "STRIPE_WEB_PRO_PRICE_ID manquant." },
        { status: 500 }
      );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-05-27.dahlia",
    });

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      success_url: `${successUrl}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl,
      customer_creation: "always",
      line_items: [{ price: priceId, quantity: 1 }],
      subscription_data: {
        metadata: {
          orderNumber,
          plan: "web_pro_30_month",
          locale,
        },
      },
      metadata: {
        orderNumber,
        plan: "web_pro_30_month",
        locale,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Impossible de lancer Stripe.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

