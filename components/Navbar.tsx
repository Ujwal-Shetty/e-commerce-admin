//@ts-nocheck
import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa';
import Avatar from './Avatar';

export default function Navbar() {

  return (
    <header className='bg-slate-200 shadow-md  w-full'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link href='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-red-500'>ECOMMERCE</span>
            <span className='text-slate-700'>Admin</span>
          </h1>
        </Link>

        <form
          className='bg-slate-100 p-3 rounded-lg flex items-center'
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
    
        <ul className='flex gap-5'>
          <Link href='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              View Orders
            </li>
          </Link>

          <Avatar/>
        </ul>
      </div>
      
    </header>
  )
}
