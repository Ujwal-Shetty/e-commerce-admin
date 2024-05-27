
import prisma from '@/prisma/prismadb'
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';

export async function POST(request:any){
try{
    const { name, property } = await request.json();

    if(!name) 
        return new NextResponse('Missing Fields', { status: 400 })
        await connectToDatabase()
        
    const exist = await prisma.category.findUnique({
        where: {
            name:name
        }
    });

    if(exist) {
        throw new Error('category already exists')
    }

    const category = await prisma.category.create({
        data: {
            name,
            property
        }
    });



    return NextResponse.json(category)
}catch(error){
   console.log(error)
}
}