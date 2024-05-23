//@ts-nocheck
'use client'
import Link from 'next/link'
import React,{useState ,useRef} from 'react'
import { FaSearch } from 'react-icons/fa';
import { useSession } from 'next-auth/react';

export default function Navbar() {

  const {data:session}=useSession();
  const[toggleDropDown,setToggleDropDown]=useState(false)
  const menuRef=useRef()
  const imgRef=useRef()
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
          
         <div className=' flex relative'>
           {session ? (
          <img
          className='rounded-full h-7 w-7 object-cover cursor-pointer hover:opacity-90'
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          alt='profile'
          />
         
        ):(
          <Link href='/login'>
             <li className=' text-slate-700 hover:underline'> Sign in</li>
              </Link>
            )} 
          
            </div>
        </ul>
      </div>
      
    </header>
  )
}
