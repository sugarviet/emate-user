import { NextResponse } from "next/server";

export function middleware(req, res, next) {
    let cookie = req.cookies.get('next-auth.session-token')
    if(cookie?.value){
        return NextResponse.next();
    }
    else{
        return NextResponse.redirect(new URL("/signIn", req.url))

    }

}

export const config = {
    matcher: ['/chat', '/user/:path']
}