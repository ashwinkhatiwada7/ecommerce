import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const session = getSessionCookie(request);

  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/api/auth")) return NextResponse.next();

  console.log("pathname is ===" + pathname);

  //   if (!session) {
  //      return NextResponse.redirect()
  //   }
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/addcart/:path*",
  ],
};
