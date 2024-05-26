//@ts-nocheck
"use client"
import Link from 'next/link'
import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { BsGift } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { usePathname } from "next/navigation";

function Sidebar() {
    const pathname = usePathname();
    const isActive=pathname.startsWith()
  return (
    <header className='h-screen w-72 bg-slate-700 rounded-xl'>
     <div className='gap-6 flex flex-col items-start text-xl'>
       
         <div className='w-full  h-12 flex justify-center  items-center cursor-pointer mb-10 mt-5'>
           <Link href='/' className='flex items-center gap-2'> 
           <span className='text-red-300'>ECOMMERCE</span>
            <span className='text-slate-100'>Admin</span>
           </Link> 
        </div>

         <div className='text-slate-200 w-full hover:ml-5 hover:bg-opacity-50 hover:bg-slate-300 hover:text-black hover:rounded-l-xl h-12 flex justify-start pl-16  items-center cursor-pointer'>
           <Link href='/' className='flex items-center gap-2'>
           <RxDashboard />
           Dashboard
           </Link> 
        </div>

        <div className='text-slate-200  hover:ml-5 hover:bg-white hover:text-black hover:rounded-l-xl w-full h-12 flex justify-start pl-16  items-center cursor-pointer'>
           <Link href='/' className='flex items-center gap-2'>
           <BsGift />
           Products
           </Link> 
        </div>

        <div className='text-slate-200 w-full h-12 flex hover:ml-5 hover:bg-white hover:text-black hover:rounded-l-xl  justify-start pl-16   items-center cursor-pointer'>
           <Link href='/' className='flex items-center gap-2'>
           <MdOutlineProductionQuantityLimits />
           Orders
           </Link> 
        </div>

        <div className='text-slate-200 hover:ml-5 hover:bg-white hover:text-black hover:rounded-l-xl w-full h-12 flex justify-start pl-16   items-center cursor-pointer '>
           <Link href='/' className='flex items-center gap-2'>
           <MdOutlineInventory2 />
           Inventory
           </Link> 
        </div>

        <div className='text-slate-200 hover:ml-5 hover:bg-white hover:text-black hover:rounded-l-xl w-full h-12 flex justify-start pl-16   items-center cursor-pointer '>
           <Link href='/' className='flex items-center gap-2'>
           <MdOutlineCategory />
           Category
           </Link> 
        </div>


     </div>
    </header>
   
  )
}

export default Sidebar