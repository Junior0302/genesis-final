import { NextRequest, NextResponse } from "next/server";
import { getTraining } from "@/lib/trainings";

function buildOrderNumber() {
  const date = new Date();
  const stamp = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(
    date.getDate()
  ).padStart(2, "0")}`;
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `GC-${stamp}-${random}`;
}

function getPayPalBaseUrl() {
  const env = (process.env.PAYPAL_ENV ?? "sandbox").toLowerCase();
  return env === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";
}

async function getAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return null;
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const res = await fetch(`${getPayPalBaseUrl()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  const data = (await res.json()) as { access_token?: string };
  return data.access_token ?? null;
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

    const origin =
      request.headers.get("origin") ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "http://localhost:3000";

    const orderNumber = buildOrderNumber();
    const returnUrl = `${origin}/${locale}/formation/paypal/return?slug=${training.slug}&order=${orderNumber}`;
    const cancelUrl = `${origin}/${locale}/formation/${training.slug}/conditions`;

    const token = await getAccessToken();
    if (!token) {
      return NextResponse.json({
        url: `${origin}/${locale}/formation/success?order=${orderNumber}&slug=${training.slug}&demo=paypal`,
      });
    }

    const createRes = await fetch(`${getPayPalBaseUrl()}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            custom_id: orderNumber,
            description: training.title.fr,
            amount: {
              currency_code: "EUR",
              value: String(training.price),
            },
          },
        ],
        application_context: {
          brand_name: "Genesis Connect",
          landing_page: "LOGIN",
          user_action: "PAY_NOW",
          return_url: returnUrl,
          cancel_url: cancelUrl,
        },
      }),
      cache: "no-store",
    });

    if (!createRes.ok) {
      const raw = await createRes.text();
      return NextResponse.json(
        { error: `PayPal indisponible. ${raw}` },
        { status: 502 }
      );
    }

    const data = (await createRes.json()) as {
      id: string;
      links: Array<{ rel: string; href: string }>;
    };

    const approveUrl = data.links?.find((link) => link.rel === "approve")?.href;
    if (!approveUrl) {
      return NextResponse.json({ error: "Lien PayPal manquant." }, { status: 502 });
    }

    return NextResponse.json({ url: approveUrl });
  } catch (error) {
    const message = error instanceof Error ? error.message : "PayPal indisponible.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

