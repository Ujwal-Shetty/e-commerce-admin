import prisma from '@/prisma/prismadb'
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';


export async function POST(request:any){
try{
    const { name,description,productImage,regularPrice,discountPrice,varients,CategoryName}:{ name:string,description:string,productImage:string[],regularPrice:number,discountPrice:number,varients:string,CategoryName:string } = await request.json();
    if(!name) 
        return new NextResponse('Missing Fields', { status: 400 })
        await connectToDatabase()    
    const exist = await prisma.product.findUnique({
        where: {
            name:name
        }
    });


    if(exist) {
        throw new Error('category already exists')
    }
    
    const cat = await prisma.category.findUnique({
        where: {
            name:CategoryName
        },
        select:{
          id:true,
          name:true,
          property:true
        }   
    });

    

    console.log(cat)
    
    const product = await prisma.product.create({

        data: {
            name,
            description,
            productImage,
            regularPrice,
            discountPrice,
            varients,
            CategoryName,
            category:{
                connect:{
                    id:cat.id
                }
            }
        }
    });
    return NextResponse.json(product)
}catch(error){
   console.log(error)
}
}

export async function GET() {
    try{
        await connectToDatabase();
        const products = await prisma.product.findMany()
          console.log(products)
        return NextResponse.json({ products });
    }catch(error){
        console.log(error)
    }
    }