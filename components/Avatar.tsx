//@ts-nocheck
'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import {useState ,useRef} from 'react'

function Avatar() {
    const {data:session}=useSession();
    const[toggleDropDown,setToggleDropDown]=useState(false)
    const menuRef=useRef()
    const imgRef=useRef()

    window.addEventListener('click',(e)=>{
        if(e.target !==menuRef.current && e.target !==imgRef.current){
          setToggleDropDown(false)
        }
      })
  return (
    <div className=' flex relative'>
    {session ? (
      <div className='flex'>
         <img
         ref={imgRef}
         onClick={()=>setToggleDropDown((prev)=>!prev)}
         className=' shadow-lg rounded-full h-8 w-8 border-2 border-slate-600 object-cover cursor-pointer hover:opacity-90'
         src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
         alt='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
       />
       {toggleDropDown && (
         <div ref={menuRef} className='absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white border-2 border-slate min-w-[210px] flex flex-col gap-5 justify-center items-center shadow-xl'>
             <img
       
         className='rounded-full h-14 w-14 object-cover'
         src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
         alt='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
       />
           <Link
           href='/'
           className='text-lg text-gray-700 hover:text-gray-500 font-medium'
           onClick={()=>setToggleDropDown(false)}
           >View Profile
           </Link>
           <span className='text-red-700 text-lg'>
            Sign out
           </span>

           

           </div>

           )}
           </div>
 ):(
   <Link href='/login'>
      <li className=' text-slate-700 hover:underline'> Sign in</li>
       </Link>
     )} 
   
     </div>
  )
}

export default Avatar