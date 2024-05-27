//@ts-nocheck
import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa';
import Avatar from './Avatar';
import { IoMdNotificationsOutline } from "react-icons/io"

export default function Navbar() {

  return (
    <header className='w-full flex gap-4 sm:mb-10 mb-10'>
      <div className='sm:hidden'>
      <h1 className=' ml-3 w-auto  h-12 flex justify-center  items-center cursor-pointer text-xl'>
         <span className='text-red-300'>EC</span>
         <span className='text-slate-500'>A</span>
        </h1>
      </div>
     
      <div className='flex justify-end gap-4 sm:gap-10 items-center w-full'>  
        <form
          className='bg-slate-200 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-36 sm:w-64'
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
         <button>
         <IoMdNotificationsOutline />
         </button>

          <Avatar/>
      </div>
      
    </header>
  )
}
