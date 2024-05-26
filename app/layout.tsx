//@ts-nocheck
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/context/AuthProvider";
import Navbar from "@/components/Navbar";
import Side from "@/components/Side";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import HomePage from "@/components/HomePage";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce admin",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
   const session =await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {session ? (
              <div className='flex flex-row'>
              <div className="m-3">
                <Side/>
              </div>
    
              <div className="w-full">
                <div className="mt-3 mb-3 mr-3">
                <Navbar/>
                </div>
                <div>
                  {children}
                </div>
              </div>
            </div>
          ):
          (<Layout/>
         
          )}
  
        
        
        </Provider>
        </body>
    </html>
  );
}
