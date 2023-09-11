import { NextResponse } from "next/server";

export async function GET(request, data) {
    console.log(data);
    return NextResponse.json({name: "Hello"}, {status: 200});
}