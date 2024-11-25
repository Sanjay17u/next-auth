import { NextRequest, NextResponse } from "next/server";
import corsMiddleware from './corsMiddleware'; 

export async function middleware(req: NextRequest) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const res = corsMiddleware(req);  

 
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("token")?.value || "";  
  const isPublicPath = path === "/login" || path === "/signup"; 

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  
  return NextResponse.next();
}


export const config = {
  matcher: [
    "/",       
    "/login",  
    "/signup", 
  ]
};
