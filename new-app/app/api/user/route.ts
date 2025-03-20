import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const client = new PrismaClient();

export async function GET(req: NextRequest){
    const user = await client.user.findFirst();

    return NextResponse.json({
        email: user?.email,
        name: "piyush"
    })
}



export async function POST( req: NextRequest ){

    const body = await req.json();
    try {
        await client.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        })
    
        return NextResponse.json({
            body
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "error while signing up"
        },{
            status: 411
        })
    }
}
