import { NextRequest, NextResponse } from "next/server";

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
    const body = (await request.json()) as {
      paypalOrderId?: string;
    };

    if (!body.paypalOrderId) {
      return NextResponse.json({ error: "paypalOrderId manquant." }, { status: 400 });
    }

    const token = await getAccessToken();
    if (!token) {
      return NextResponse.json({ ok: true, demo: true });
    }

    const captureRes = await fetch(
      `${getPayPalBaseUrl()}/v2/checkout/orders/${encodeURIComponent(body.paypalOrderId)}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!captureRes.ok) {
      const raw = await captureRes.text();
      return NextResponse.json({ error: raw }, { status: 502 });
    }

    const data = (await captureRes.json()) as { status?: string };
    return NextResponse.json({ ok: true, status: data.status ?? "UNKNOWN" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "PayPal indisponible.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

