"use client"
import Link from 'next/link';
import React from 'react'
import { BsGift } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { usePathname } from 'next/navigation'

function BottomNavBar() {
    const pathname=usePathname()
    const navLink=[
        {
        
        link:'/dashboard',
        icon:<RxDashboard className='mr-2' />
        },
        {
        
        link:'/products',
        icon:<BsGift className='mr-2'/>
        },
        {
        
        link:'/orders',
        icon:<MdOutlineProductionQuantityLimits className='mr-2' />
        },
        {
        
        link:'/intentory',
        icon:<MdOutlineInventory2 className='mr-2' />
        },
        {
        
        link:'/category',
        icon:<MdOutlineCategory className='mr-2'/>
        },    
    ];
  return (
    <div className='  flex justify-center items-center p-2 h-full  rounded-xl bg-slate-600 shadow-lg'>
       
         {navLink.map((herf)=>{
                const isActive=pathname.startsWith(herf.link)
                return(
                    
                   
                         <Link
                         href={herf.link}
                         className={`${isActive ? 'bg-slate-500 text-white' :''} text-slate-200 w-full hover:bg-opacity-50 hover:bg-slate-300 hover:text-black text-center  h-full flex justify-center  items-center cursor-pointer  rounded-full`} >
                    
                     {herf.icon}
                    
                
                </Link>
               
            )
            })}
            
        
     </div>
   
     
    
   
  )
}

export default BottomNavBar