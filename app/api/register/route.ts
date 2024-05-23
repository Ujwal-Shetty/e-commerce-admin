
import bcrypt from 'bcrypt'
import prisma from '@/prisma/prismadb'
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';

export async function POST(request:any){
try{
    const { name, email, password } = await request.json();

    if(!name || !email || !password) 
        return new NextResponse('Missing Fields', { status: 400 })
        await connectToDatabase()
        
    const exist = await prisma.user.findUnique({
        where: {
            email:email
        }
    });

    if(exist) {
        throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword
        }
    });



    return NextResponse.json(user)
}catch(error){

}
}