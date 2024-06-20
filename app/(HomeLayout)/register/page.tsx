//@ts-nocheck
'use client'

import Link from 'next/link'
import { useState } from "react";
import axios from "axios"
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";


export default function SignUp() {
  const [showPassword,setShowPassword]=useState(false)
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
        
    })
    console.log(data)
    const registerUser = async (e) => {
        e.preventDefault()
        axios.post('/api/register', data)
        .then(() => alert('User has been registered!'))
        .catch(() => alert('Something went wrong!'))

     }

  return (
    <div className='p-4 max-w-lg mx-auto mt-10 sm:mt-0'>
    <h1 className='text-3xl text-center font-semiblod my-7'>Sign up</h1>

    <form onSubmit={registerUser} className='flex flex-col gap-4'>
      <input type="text" 
      name='name'
      placeholder='Fullname' 
      value={data.name}
      onChange={(e) => setData({...data, name: e.target.value})}
      className='border p-3 rounded-full' 
      id='name' />

      <input type="email" 
      placeholder='Email' 
      name='email'
      value={data.email}
      onChange={(e) => setData({...data, email: e.target.value})}
      className='border p-3 rounded-full' 
      id='email' />

<div className='flex'>

<input
  type={ showPassword ? "text" : "password" }
  placeholder='Password'
  name='password'
  value={data.password}
  onChange={e => setData({ ...data, password: e.target.value })}
  className='border p-3 rounded-l-full  w-full border-e-0'
  id='password'
 
 />
 <div className={`flex justify-center items-center text-xl border border-s-0 p-3 rounded-r-full cursor-pointer ${showPassword ? 'hidden':'block'}`}
 onClick={()=>setShowPassword(true)}><FaRegEyeSlash /></div>

 <div className={`flex justify-center items-center text-xl border border-s-0 p-3 rounded-r-full cursor-pointer ${showPassword ? 'block':'hidden'}`}
 onClick={()=>setShowPassword(false)}><FaRegEye /></div>

</div>
      
      <button  className='bg-black text-white p-3 rounded-full text-lg hover:opacity-95 disabled:opacity-80'>
       Sign up
      </button>
      <button
         
         className='flex justify-center text-lg items-center gap-2 p-3 rounded-full border-2 hover:opacity-95 disabled:opacity-80'
       >
         Continue with <FcGoogle />
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

