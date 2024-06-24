//@ts-nocheck
import NextAuth from "next-auth/next";
import prisma from '@/prisma/prismadb';
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
                username: { label: "Username", type: "text", placeholder: "John Smith" },
            },
            async authorize(credentials) {
                
                if(!credentials.email || !credentials.password) {
                    throw new Error('Please enter an email and password')
                }

                // check to see if user exists
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                // if no user was found 
                if (!user || !user?.hashedPassword) {
                    throw new Error('No user found')
                }

                // check to see if password matches
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

                // if password does not match
                if (!passwordMatch) {
                    throw new Error('Incorrect password')
                }

                return user;
            },
        }),  
    ],
    callbacks:{
        async jwt ({token,user,session}){
            if(user){
                return{
                    ...token,
                    id:user.id,
                    avatar:user.avatar
                }
            }
        return token
        },

        async session({session,token,user}){
        return{
            ...session,
            user:{
                ...session.user,
                id:token.id,
                avatar:token.avatar
            }
            
        }
        }
       
    },
    

    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development"

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}