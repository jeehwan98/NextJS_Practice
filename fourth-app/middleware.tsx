import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // console.log(request);
  return NextResponse.next();
}

export const config = { // must be an object
  matcher: ''

}