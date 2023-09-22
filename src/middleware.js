import { NextResponse } from "next/server";

export function middleware(req, res, next) {
    console.log("Middleware here");

    return NextResponse.next();
}

export const config = {
    matcher: '/'
}