import Link from 'next/link'
import React from 'react'

function Categories() {
  return (
    <div>
      Categories
      <div>
        <Link href='/create-categories'>
        Create category
        </Link>
        
      </div>
      </div>
  )
}

export default Categories