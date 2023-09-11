// import { redirect } from 'next/navigation'
import connectMongoDB from '@/lib/db';
import User from '@/models/users';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  await connectMongoDB();
  const data = await User.find();
  return NextResponse.json({ data });
//   const users = [
//     {id: 1, name: 'ABC' },
//     {id: 2, name: 'DEF' },
//     {id: 3, name: 'GHI' },
//     {id: 4, name: 'JKL' },
//     {id: 5, name: 'MNO' },
// ];
  // return NextResponse.json({data: "users"}, {status: 200});
}

export async function POST(request) {
  let payload = await request.json();
  return NextResponse.json({...payload, success: true}, {status: 200});
}