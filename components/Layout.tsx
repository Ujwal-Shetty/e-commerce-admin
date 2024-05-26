import Link from 'next/link'
import React from 'react'
import SignIn from './SignIn'

function Layout() {
  return (
    <div>
       <Link href='/login'>
       signin
       </Link>
       <SignIn/>
    </div>
  )
}

export default Layout