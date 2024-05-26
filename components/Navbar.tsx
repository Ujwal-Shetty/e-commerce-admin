//@ts-nocheck
import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa';
import Avatar from './Avatar';
import { IoMdNotificationsOutline } from "react-icons/io"

export default function Navbar() {

  return (
    <header className='w-full'>
      <div className='flex justify-end gap-12 items-center max-w-6xl mx-auto'>
        
        <form
          className='bg-slate-200 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
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
