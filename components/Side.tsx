
'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { RxDashboard } from "react-icons/rx";
import { BsGift } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";


function Side() {
    const pathname=usePathname()
    const navLink=[
        {
        name:"Dashboard",
        link:'/dashboard',
        
        icon:<RxDashboard className='mr-2' />
        },
        {
        name:"Products",
        link:'/view-products',
        
        icon:<BsGift className='mr-2'/>
        },
        {
        name:"Orders",
        link:'/view-orders',
        
        icon:<MdOutlineProductionQuantityLimits className='mr-2' />
        },
        {
        name:"Inventory",
        link:'/intentory',
        
        icon:<MdOutlineInventory2 className='mr-2' />
        },
        {
        name:"Category",
        link:'/view-categories',
        
        icon:<MdOutlineCategory className='mr-2'/>
        },    
    ];
  return (
    <div className='h-screen w-72 bg-slate-700 rounded-xl flex flex-col items-center'>
        <h1 className='w-full  h-12 flex justify-center  items-center cursor-pointer mb-16 pt-5 text-xl'>
         <span className='text-red-300'>ECOMMERCE</span>
         <span className='text-slate-100'>Admin</span>
        </h1>

        <div className='gap-6 flex flex-col items-start text-xl'>
            {navLink.map((herf)=>{
                const isActive=pathname.startsWith(herf.link)
                return(
                <Link
                key={herf.name}
                href={herf.link}
                className={`${isActive ? 'bg-slate-500 text-white justify-center' :''} text-slate-200 w-full hover:bg-opacity-50 hover:bg-slate-300 hover:text-black hover:shadow-md h-12 flex justify-start  items-center cursor-pointer pr-8 pl-8 rounded-xl`}
                >
                 {herf.icon}{herf.name}
                </Link>
            )
            })}
     
        </div>
    </div>
  )
}

export default Side