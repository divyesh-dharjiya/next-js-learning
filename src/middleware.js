import { NextResponse } from "next/server";

const isLoogedIn = true;

export function middleware(request) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/login';
    // const token = request.cookies.get('token')?.value || ''
    if(isPublicPath && isLoogedIn) {
      return NextResponse.redirect(new URL('/', request.nextUrl))
    }
  
    if (!isPublicPath && !isLoogedIn) {
      return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

export const config = {
    matcher: ["/", "/:path*/form", "/login", "/contact", "/about", "/blogs", "/setting", "/user"]
}