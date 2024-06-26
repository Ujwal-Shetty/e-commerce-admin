
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/context/AuthProvider";
import Navbar from "@/components/Navbar";
import Side from "@/components/Side";
import BottomNavBar from "@/components/BottomNavBar";
import SearchBar from "@/components/SearchBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce admin",
  description: "Generated by create next app",
};

export default  async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
      
        <div className='flex flex-row'>
          <div className="m-3 sm:block hidden">
            <Side/>
          </div>

        <div className="w-full">
          <div>
          <Navbar/>
          </div>
          <div className="pt-20 p-4 sm:hidden block"> 
            <SearchBar/>
            </div>

          <div className="">
            {children}
          </div>
          <div className="h-24 w-full fixed bottom-0 p-2 sm:hidden block">
          <BottomNavBar/>
          </div>
            
          
        </div>
      </div>
        </Provider>
        </body>
    </html>
  );
}
