//@ts-nocheck
import prisma from "@/prisma/prismadb";
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/libs/server-helpers';


export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    await connectToDatabase();
    const category = await prisma.category.findUnique({
        where: {
            id
        }
    });

    if(!category) {
        return NextResponse.json(
            {message: " not found", err},
            {status: 404}
        )
    }

    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};


export const PATCH = async (request, {params}) => {
  try {
      const body = await request.json();
      const {name, property} = body;

      const {id} = params;
      await connectToDatabase();
      const updateCategory = await prisma.category.update({
          where: {
              id
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
      await connectToDatabase();
      
      await prisma.category.delete({
          where: {
              id
          }
      });
  
      return NextResponse.json("Category has been deleted");
    } catch (err) {
      return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
    }
  };