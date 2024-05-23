//@ts-nocheck
'use client'

import Link from 'next/link'
import { useState } from "react";
import axios from "axios"


export default function SignUp() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
        
    })

    const registerUser = async (e) => {
        e.preventDefault()
        axios.post('/api/register', data)
        .then(() => alert('User has been registered!'))
        .catch(() => alert('Something went wrong!'))

     }

  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semiblod my-7'>Sign up</h1>

    <form onSubmit={registerUser} className='flex flex-col gap-4'>
      <input type="text" 
      name='name'
      placeholder='Fullname' 
      value={data.name}
      onChange={(e) => setData({...data, name: e.target.value})}
      className='border p-3 rounded-lg' 
      id='name' />

      <input type="email" 
      placeholder='email' 
      name='email'
      value={data.email}
      onChange={(e) => setData({...data, email: e.target.value})}
      className='border p-3 rounded-lg' 
      id='email' />

      <input type="password"
      placeholder='password' 
      name='password'
      value={data.password}
      onChange={(e) => setData({...data, password: e.target.value})}
      className='border p-3 rounded-lg' 
      id='password'/>
      
      <button  className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
       Sign up
      </button>

    </form>
    <div className='flex gap-2 mt-5'>
      <p>Have an account already?</p>
      <Link href="/login">
         <span className='text-blue-700'>Sign in</span>
      </Link>
    </div>
    
  </div>
  )
}

