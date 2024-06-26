//@ts-nocheck
import prisma from "@/prisma/prismadb";
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';


export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    console.log(id)
    const catId=parseInt(id)
    await connectToDatabase();
    const category = await prisma.category.findUnique({
        where: {
            id:catId
        }
    });

    if(!category) {
        return NextResponse.json(
            {message: " not found", err},
            {status: 404}
        )
    }

    return NextResponse.json(category);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};


export const PUT = async (request, {params}) => {
  try {
      const body = await request.json();
      const {name, property} = body;
      console.log( property)

      const {id} = params;
      const catId=parseInt(id)
      await connectToDatabase();
      const updateCategory = await prisma.category.update({
          where: {
              id:catId
          },
          data: {
              name,
              property
          }
      })

      if(!updateCategory) {
          return NextResponse.json(
              {message: "category not found", err},
              {status: 404}
          )
      }

      return NextResponse.json(updateCategory);

  } catch(err) {
      return NextResponse.json({message: "update Error", err}, {status: 500})
  }
}


export const DELETE = async (request,{ params }) => {
    try {
      const { id } = params;
      const catId=parseInt(id)
      console.log(catId)
      await connectToDatabase();
      
      await prisma.category.delete({
          where: {
              id:catId
          }
      });
  
      return NextResponse.json("Category has been deleted");
    } catch (err) {
      return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
    }
  };