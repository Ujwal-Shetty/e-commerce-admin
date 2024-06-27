//@ts-nocheck
import prisma from "@/prisma/prismadb";
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';


export const GET = async (request, {params}) => {
    try {

        const {id} = params;
        const userId=parseInt(id)
        console.log(id)
      await connectToDatabase();

      const user = await prisma.user.findUnique({
          where: {
              id:userId
          } ,
        include:{products:true}
      });
  
      if(!user) {
          return NextResponse.json(
              {message: " not found", err},
              {status: 404}
          )
      }
  
      return NextResponse.json(user);
    } catch (err) {
      return NextResponse.json({ message: "GET Error", err }, { status: 500 });
    }
  };