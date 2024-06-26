import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(
    request : Request
) {
    try{
    const body = await request.json();
    console.log(body);
    const {
        name,
        email,
        password
    }  = body;

    if(!email || !password || !name ){
        return new NextResponse("Missing Info", {status : 400});
    }

    const hashedPassword = await bcrypt.hash(password,12);

    const user = await prisma.user.create({
        data : {
          email,
          name,
          hashedPassword
        }
    });

    return NextResponse.json(user);
  } catch(error){
    console.log(error,'REGISTRATION_ERROR');
    return new NextResponse('Internal error', {status : 500});
  }
};
