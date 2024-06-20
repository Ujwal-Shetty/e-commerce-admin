//@ts-nocheck
"use client"

import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function UpdateIntentory(props) {

    const [updateToggle,setUpdateToggle]=useState(false)

    const[quantityValue,setQauantityvalue]=useState(props.quantity)
    const router=useRouter()
    
    console.log(quantityValue)

   const handleIncrement = () =>{
      setQauantityvalue(
       quantityValue + 1
      )}

   const handleDecrement = () =>{
    if(quantityValue>=1)
      setQauantityvalue(
        quantityValue - 1
      )
     
  
  }
  const handleCancel =()=>{
   
    setUpdateToggle(false)
  } 

  const handleSubmit = async (e:any) => {
       e.preventDefault()
      const confirmed = confirm("Are you sure?");
      if (confirmed) {
          axios
          .patch(`/api/products/${props.id}`,quantityValue)
          .then((res) => {
            router.refresh();
            console.log(res)
            setUpdateToggle(false)
           

          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
           
          });
      }
  }
   
  
  
  
  return (
    <>
    <div className={` flex absolute text-white w-72 justify-between bg-slate-700 rounded-full text-sm p-1 ${updateToggle ?'block':'hidden'}`}>
                              <form
                              onSubmit={handleSubmit}>
                                <div className='flex'>

                                <div className='flex p-2'>
                                 
                                 <FaPlus
                                 onClick={handleIncrement}
                                className='text-center text-black bg-white w-full h-full p-2 rounded-l-full cursor-pointer hover:bg-slate-900 hover:text-white'/>
                                       
                                
                                <input
                  
                                  value={quantityValue}
                                  type='number'
                                  id='intentoryQuantity'
                                  className='text-black w-12  outline-none text-center h-full'
                                   />
                                <FaMinus
                                onClick={handleDecrement}
                                className='text-center text-black bg-white w-full h-full  p-2 rounded-r-full cursor-pointer hover:bg-slate-900 hover:text-white '/>
                                </div>

                                <div className='flex items-center justify-center'>
                                 <button
                                className='bg-slate-300 p-2 pt-1 pb-1 rounded-full text-slate-800'>Submit</button>
                                </div>
                                
                                
                                </div>
                             
                              </form>
                              <div className='flex text-center justify-center items-center'>
                              <button onClick={ handleCancel}>
                               <ImCancelCircle className='text-3xl text-red-400 pr-2' />
                              </button>
                              </div>                
                            </div>
                            <div className='bg-black p-3 pt-2 pb-2 text-white rounded-full text-sm'>
                            
                             <button 
                             onClick={()=>setUpdateToggle(true)}
                              >
                              Update 
                              </button>
                            </div>

    </>
  )
}