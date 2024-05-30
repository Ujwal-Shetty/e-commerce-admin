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
    
    <button onClick={removeCategory}>
    <MdDeleteOutline 
        className='text-red-700 text-xl hover:cursor-pointer'
        />
    </button>
    
  )
}

export default RemoveCateBtn