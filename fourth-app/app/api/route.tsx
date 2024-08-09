import { NextRequest } from "next/server";


export function GET(request: NextRequest) {
  console.log(request);

  // return Response.json();
  return new Response('Hello!');
}

// export function POST(request) {
//   console.log(request);
// }