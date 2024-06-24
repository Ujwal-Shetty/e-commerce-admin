//@ts-nocheck
"use client"
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { MdDeleteOutline } from "react-icons/md"

function RemoveProBtn({id}) {
    const router=useRouter()
    const removeProduct=async()=>{
        const confirmed = confirm("Are you sure?");
        if (confirmed) {
            axios
            .delete(`/api/products/${id}`)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              router.refresh();
            });
        }
    }
    

  return (
    
    <button onClick={removeProduct}>
    <MdDeleteOutline 
        className='text-red-700 text-2xl hover:cursor-pointer'
        />
    </button>
    
  )
}

export default RemoveProBtn