//@ts-nocheck
"use client"
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { useRouter } from 'next/navigation';

function UpdateCateForm({id,name,property}) {
    const router=useRouter()
    const [newName, setNewName] = useState(name);
    const [newProperty,setNewProperty]=useState([property]);

   const handleAdd=()=>{  
       const abc=[...val,[]]
       setNewProperty(abc)
   }

   const handleChange=(onChangeValue,i)=>{
    const inputdata=[...val]
    inputdata[i]=onChangeValue.target.value;
    setNewProperty(inputdata)
   }

   const handleDelete=(i)=>{
       const deletVal=[...val]
       deletVal.splice(i,1)
       setNewProperty(deletVal)   
   }

   const handleSubmit = async (e) => {
    e.preventDefault();
   try{
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newName, newProperty }),
            });
 
            if (!res.ok) {
                throw new Error("Failed to update Product");
            }
 
            router.refresh();

       }catch(err){
        console.log(error);
       }
    
     
   }
  return (
    <main className="h-screen overflow-y-auto flex flex-col gap-14">
        <h1 className="ml-4 text-2xl text-slate-700">Category</h1>
        <div className='flex flex-col justify-center items-center gap-5 '>
           <h2 className="text-xl text-slate-700">Update category</h2>
           <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-7 w-full'>
                <div className='flex flex-col w-80'>
                 
                 <input
                  type='text'
                  placeholder='Category name'
                  className='border p-3 rounded-lg'
                  id='name'
                  name='name'
                  onChange={(e) => setNewName({...data, name: e.target.value})}
                  value={data.name}
                   />
                </div>

                <div className="flex flex-col gap-2">
                 
                <div
                 className=' text-center p-3 bg-transparent border-2 text-black rounded-lg uppercase hover:opacity-95 disabled:opacity-80 w-full cursor-pointer'
                 onClick={()=>handleAdd()}
                >
                Add Property
               </div>

               <div className="flex flex-col gap-2">
               {val.map((data,i)=>{
            return(
               <div className="flex">
                 <div className="w-full">
                   <input 
                    id="property"
                    name='property'
                    value={data.property} 
                    onChange={e=>handleChange(e,i)}
                    className='border p-3 rounded-l-lg w-full' />
                 </div>
                    
                 <div>
                    <MdDeleteOutline className="text-3xl p-2 cursor-pointer w-full h-full border rounded-r-lg hover:bg-red-500"
                    onClick={()=>handleDelete(i)}/>
                    </div>
                    </div>
            )
        })}
        </div>
                </div>
                <button
                 className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
                >
                 Update data
               </button>
            </div>
           </form>
        </div>
    </main>
  )
}

export default UpdateCateForm