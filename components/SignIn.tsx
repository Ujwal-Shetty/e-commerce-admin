//@ts-nocheck
"use client"

import Link from 'next/link';
import React,{useState} from 'react'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function page() {
  
  const [showPassword,setShowPassword]=useState(false)

  const router=useRouter()
  const [data, setData] = useState({
        email: '',
        password: ''
        })

  const onLogin=async(e)=>{
        e.preventDefault()
                signIn('credentials',
                 {...data, redirect: false
                })
                .then((callback) => {
                    if (callback?.error) {
                      alert(callback.error)
                    }

                    if(callback?.ok && !callback?.error) {
                      alert('Logged in successfully!')
                      router.push('/dashboard')
                    }
                } )
                
                 
                         
       }

  return (
    <div className='p-4 max-w-lg mx-auto  mt-10 sm:mt-0'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={onLogin} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={data.email}
          onChange={e => setData({ ...data, email: e.target.value })}
          className='border p-3 rounded-full'
          id='email'
          
        />
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
        

        <button
         
          className='bg-black text-white p-3 rounded-full text-lg hover:opacity-95 disabled:opacity-80'
        >
          Sign in
        </button>

        <button
         
          className='flex justify-center items-center text-lg gap-3 p-3 rounded-full border-2 hover:opacity-95 disabled:opacity-80'
        >
          Continue with <FcGoogle />
        </button>
        
        
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link href={'/register'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      
    </div>
  );
}

  

