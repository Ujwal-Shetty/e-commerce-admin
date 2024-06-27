//@ts-nocheck
import prisma from "@/prisma/prismadb";
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';


export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    const proId=parseInt(id)
    console.log(proId)
    await connectToDatabase();
    const product = await prisma.product.findUnique({
        where: {
            id:proId
        }
    });

    if(!product) {
        return NextResponse.json(
            {message: " not found", err},
            {status: 404}
        )
    }

    return NextResponse.json(product);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};


export const PUT = async (request, {params}) => {
  try {
      const body = await request.json();
      const { name,description,productImage,regularPrice,discountPrice,varients,CategoryName}:{ name:string,description:string,productImage:string[],regularPrice:number,discountPrice:number,varients:string,CategoryName:string } = body;

      const {id} = params;
      const proId=parseInt(id)
      await connectToDatabase();
      console.log(id)

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
      const updateProduct = await prisma.product.update({
          where: {
              id:proId
          },
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
    })

      if(!updateProduct) {
          return NextResponse.json(
              {message: "category not found", err},
              {status: 404}
          )
      }

      return NextResponse.json(updateProduct);

  } catch(err) {
      return NextResponse.json({message: "update Error", err}, {status: 500})
  }
}


export const DELETE = async (request,{ params }) => {
    try {
      const { id } = params;
      const proId=parseInt(id)

      await connectToDatabase();
    
      await prisma.product.delete({
          where: {
              id:proId
          }
      });
  
      return NextResponse.json("Product has been deleted");
    } catch (err) {
      return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
    }
  };

export const PATCH = async (request,{ params }) => {
 
    try {
      const value = await request.json();
      const quantityValue=parseInt(value)
      console.log(quantityValue)
      console.log(value)
      const { id } = params;
      const proId=parseInt(id)

      await connectToDatabase();

      await prisma.product.update({
          where: {
            id:proId
          },
          data:{
            intentoryQuantity:quantityValue
          }
      });
  
      return NextResponse.json("Product has been deleted");
    } catch (err) {
      return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
    }
  };