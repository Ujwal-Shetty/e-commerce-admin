import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <div>
      <Link href='/login'>
      sign in
      </Link>
    </div>
  )
}

export default HomePage