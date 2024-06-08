//@ts-nocheck
import React from 'react'
import './Popup.css'
import { FaRegWindowClose } from "react-icons/fa";



function Popup(props) {
  return (props.trigger) ?(
    <div className='popup'> 
      <div className='popup-inner '>
       <div className='flex justify-between sm:p-0 p-4'> 
       <h1 className='text-2xl'>Varient management</h1>
       <button 
             className='text-2xl text-red-500 hover:bg-red-500 hover:text-white'
             onClick={()=>props.setTrigger(false)}> 
           <FaRegWindowClose />
         </button>
       </div>
      
       
        {props.children}
        </div>
    </div>
    ):"";
     
}

export default Popup