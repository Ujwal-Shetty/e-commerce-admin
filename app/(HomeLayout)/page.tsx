//@ts-nocheck
import Link from 'next/link'
import React from 'react'
import dashImage from '@/public/AdobeStock_549929578.png'
import Image from 'next/image'


async function  HomePage() {
  
  return (
    <div className='flex'>
      
      <div className='h-full w-full sm:w-1/2 p-3 flex flex-col gap-6'>
      <div className='w-full h-3/4 p-3'>
      <p className='h-3/4 text-3xl leading-10'>Ecommerce or electronic commerce refers to a business model that involves sales transactions being done on the web.<br></br> Virtually every online shopping website - big or small - follows this structure. Any site where you can obtain items for sale over the internet is considered an ecommerce website.</p>
      </div>

      <div >
       <Link href='/login'
       className='bg-black text-white w-auto p-4 pt-3 pb-3 text-2xl rounded-full'>  
         Get Started    
       </Link>
      </div>

      </div>
      <div  className=' w-1/2 hidden sm:block'>
        <Image
        src={dashImage}
        alt=''
        />
      </div>
      
    </div>
  )
}

export default HomePage