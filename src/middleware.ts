import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import APP_ROUTES from "./settings/APP_ROUTES";

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    //  return if not in route
    if (
        request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname.includes('/api/') ||
        PUBLIC_FILE.test(request.nextUrl.pathname) ||
        url.pathname.startsWith('/_next') ||
        url.pathname.endsWith('.txt') || // example = /robots.txt
        url.pathname.endsWith('.ico') ||   //example = /favicon.ico
        url.pathname.startsWith('/files')  // public files
    ) {
        return NextResponse.next()
    }
    const token = request.cookies.get("token")?.value;
    if (url.pathname !== APP_ROUTES.SIGN_IN && !token) {
        return NextResponse.redirect(new URL(APP_ROUTES.SIGN_IN, request.url));
    }

    return NextResponse.next();
}