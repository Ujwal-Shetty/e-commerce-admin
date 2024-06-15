import Link from 'next/link'
import React from 'react'
import dashImage from '@/public/AdobeStock_549929578.png'
import Image from 'next/image'

function HomePage() {
  return (
    <div className='flex'>
      
      <div className='h-full w-1/2'>
      <Link href='/login'>
        sign in
      </Link>
      </div>
      <div  className='h-full w-1/2'>
        <Image
        src={dashImage}
        alt=''
        />
      </div>
      
    </div>
  )
}

export default HomePage