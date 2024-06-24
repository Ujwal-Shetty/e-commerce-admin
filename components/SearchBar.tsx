
//@ts-nocheck
"use client"
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useSearchParams,useRouter, usePathname } from 'next/navigation'

function SearchBar() {
    const[searchValue,setSearchValue]=useState('')
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter();

    console.log(searchValue)
    console.log(pathname)
    

    const handleSearchParams =(e)=>{
        e.preventDefault();
      const params = new URLSearchParams(searchParams);
       params.set('search',searchValue)
      
      
          replace(`${pathname}?${params.toString()}`);
        

    }
  return (
    <form
    className='bg-slate-200 p-3 rounded-full flex items-center shadow-lg justify-between'
  >
    <input
      type='text'
      placeholder='Search...'
      id='search'
      onChange={(e)=>setSearchValue( e.target.value)}
      className='bg-transparent focus:outline-none sm:w-64 w-full'
    />
    <button 
    onClick={handleSearchParams}
    >
      <FaSearch className='text-slate-600' />
    </button>
  </form>
  )
}

export default SearchBar