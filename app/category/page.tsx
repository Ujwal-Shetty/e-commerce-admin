import Link from 'next/link'
import React from 'react'

function Category() {
  return (
    <div>
        Category
        <Link href='/category/add-category'>
         Add category
        </Link>
        </div>
  )
}

export default Category