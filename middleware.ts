import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { checkAuth } from "./actions/auth";

export default async function middleware(req: NextRequest) {
  const isAuth = await checkAuth();

  const isAuthRoute = req.nextUrl.pathname.includes("/en/admin");
  const isAuthPage =
    req.nextUrl.pathname === "/en/auth" || req.nextUrl.pathname === "/ar/auth";

  if (isAuth && isAuthPage) {
    return NextResponse.redirect(new URL("/en/admin/products", req.url));
  }

  if (!isAuth && isAuthRoute) {
    return NextResponse.redirect(new URL("/en/auth", req.url));
  }

  return createMiddleware(routing)(req);
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
