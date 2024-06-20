'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import HomeSideBar from './HomeSideBar';


function HomeNav() {
    const pathname=usePathname()
    const navLink=[
        {
        name:"Home",
        link:'/',     
       
        },
        {
        name:"About us",
        link:'/about',   
       
        },
        {
        name:"Contact us",
        link:'/contact',     
        
        }
    ];

  return (
    <div className='w-full h-20 flex justify-between '>
        <div className='flex justify-center items-center pl-3'>
          <h1 className='text-4xl text-slate-900 font-bold font-mono'>
           EzyBuss
          </h1>
        </div>
        <div className='flex justify-center items-center '>
        {navLink.map((herf)=>{
                const isActive=pathname.endsWith(herf.link)
                return(
                <Link
                key={herf.name}
                href={herf.link}
                className={`${isActive ? ' text-red-500 ' :'text-black'} text-black mr-7 hover:bg-opacity-50  hover:text-red-500 cursor-pointer  hidden sm:block`}
                >
                  <div className='flex gap-1 text-xl  items-center justify-center'>
                  {herf.name}
                  </div>
                
                </Link>
            )
            })}
            <div className=' text-4xl flex items-center justify-center'>
            <HomeSideBar/>
            </div>
           

        </div>
    

    </div>
  )
}

export default HomeNav