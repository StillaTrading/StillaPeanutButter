import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hasVisited = request.cookies.get("stilla_visited")?.value === "true"

  if (request.nextUrl.pathname === "/" && !hasVisited) {
    return NextResponse.redirect(new URL("/welcome", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
}
