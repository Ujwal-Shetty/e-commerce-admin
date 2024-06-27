//@ts-nocheck
"use client"
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { MdDeleteOutline } from "react-icons/md"

function RemoveCateBtn({id}) {
    const router=useRouter()
    const removeCategory=async()=>{
        const confirmed = confirm("Are you sure?");
        if (confirmed) {
            axios
            .delete(`/api/category/${id}`)
            .then((res) => {
              router.refresh();
              alert(res.data);
            })
            .catch((err) => {
              alert("This category contains products, Delete the products to continue")
            })
           
        }
    }
    

  return (
    
    <button onClick={removeCategory}>
    <MdDeleteOutline 
        className='text-red-700 text-2xl hover:cursor-pointer'
        />
    </button>
    
  )
}

export default RemoveCateBtn