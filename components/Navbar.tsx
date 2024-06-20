//@ts-nocheck
import Link from 'next/link'
import React from 'react'

import Avatar from './Avatar';
import { IoMdNotificationsOutline } from "react-icons/io"
import SearchBar from './SearchBar';

export default function Navbar() {

  return (
    <header className='w-full flex gap-4 sm:mb-10 mb-10 fixed sm:relative bg-white p-3'>
      <div className='sm:hidden'>
      <h1 className=' ml-3 w-auto  h-12 flex justify-center  items-center cursor-pointer text-xl'>
         <span className='text-red-300'>EC</span>
         <span className='text-slate-500'>A</span>
        </h1>
      </div>
     
      <div className='flex justify-end gap-5 sm:gap-10 items-center w-full'>  
       <SearchBar/>
         <button>
         <IoMdNotificationsOutline className='text-2xl'/>
         </button>

          <Avatar/>
      </div>
      
    </header>
  )
}
