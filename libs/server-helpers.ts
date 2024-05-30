import prisma from '@/prisma/prismadb'

export const connectToDatabase =async()=>{
    try{
     await prisma.$connect()
    }catch(error){
        throw new Error("unable to connect")
    }
}
