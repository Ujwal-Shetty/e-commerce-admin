//@ts-nocheck
"use client"
import React, { useState,useRef, useEffect } from 'react'
import { IoReorderThree } from "react-icons/io5"
import { GoHome } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineMail } from "react-icons/md";
import { usePathname } from 'next/navigation'
import Link from 'next/link';

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

function HomeSideBar() {
    const[toggleSideBar,setToggleSideBar]=useState(false)
    const pathname=usePathname()
   

    let domNode = useClickOutside(() => {
      setToggleSideBar(false);
    });

    const navLink=[
      {
      name:"Home",
      link:'/',
      icon:<GoHome />
     
      },
      {
      name:"About us",
      link:'/about',
     icon: <RxAvatar />
     
      },
      {
      name:"Contact us",
      link:'/contact',
      icon:<MdOutlineMail />
      
      }
  ];

 

  return (
    <div 
    ref={domNode}
    className='sm:hidden block  '
    >
      <div className='p-3'>
      <IoReorderThree 
      
        onClick={()=>setToggleSideBar(true)}
        className='cursor-pointer'/>
      </div>
        

        <div  className={`fixed h-screen bg-slate-900 w-3/5 right-0 top-0 flex  ${toggleSideBar ?'block ':'hidden'}`}>
        <div className='flex flex-col w-full'>
        <button
        className='w-full text-end text-white p-3 pr-7'
        onClick={()=>setToggleSideBar(false)}>
            x
        </button>

         {navLink.map((herf)=>{
                const isActive=pathname.endsWith(herf.link)
                return(
                <Link
                key={herf.name}
                href={herf.link}
                className={`  hover:bg-opacity-50 ${isActive ? ' text-red-500 ' :''}   cursor-pointer  p-5`}
                >
                  <div onClick={()=>setToggleSideBar(false)}
                  className={`flex gap-4 text-2xl text-white justify-start items-center hover:text-red-500 `}>
                  {herf.icon}{herf.name}
                  </div>
                
                </Link>
            )
            })}
        </div>
              
        
        </div>

    </div>
    
  )
}

export default HomeSideBar