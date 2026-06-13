import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  const { pathname } = request.nextUrl;

  if (pathname === "/") return response;

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (!first) return response;
  if (!routing.locales.includes(first as (typeof routing.locales)[number])) {
    return response;
  }

  if (segments.length <= 1) return response;

  const url = new URL(`/${first}`, request.url);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
