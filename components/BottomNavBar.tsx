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
        icon:<RxDashboard  />
        },
        {
        
        link:'/products',
        icon:<BsGift />
        },
        {
        
        link:'/orders',
        icon:<MdOutlineProductionQuantityLimits  />
        },
        {
        
        link:'/intentory',
        icon:<MdOutlineInventory2  />
        },
        {
        
        link:'/category',
        icon:<MdOutlineCategory/>
        },    
    ];
  return (
    <div className='  flex justify-evenly items-center p-2 h-full  rounded-xl bg-slate-800 shadow-lg'>
       
         {navLink.map((herf)=>{
                const isActive=pathname.startsWith(herf.link)
                return(
                    
                  <Link href={herf.link}>

                       <div 
                       className={`${isActive ? 'bg-slate-500 text-white' :''} text-slate-200  hover:bg-opacity-50 hover:bg-slate-300 hover:text-black text-center  p-3 text-xl cursor-pointer flex items-center justify-center rounded-full h-12 w-12`}>
                        {herf.icon}
                        </div>
                    
                    
                    
                
                </Link>
               
            )
            })}
            
        
     </div>
   
     
    
   
  )
}

export default BottomNavBar