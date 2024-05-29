//@ts-nocheck
import Link from 'next/link'
import React from 'react'
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md"
import { FaRegEye } from "react-icons/fa";


const getCategoryList =async ()=>{
     try {
           const res = await fetch("http://localhost:3000/api/category", {
                cache: "no-store",
            });
     
            if (!res.ok) {
                throw new Error("Failed to fetch categories");
            }
     
            return res.json();
        } catch (error) {
            console.log("Error loading categories: ", error);
        }
}

export default async function ProductssList() {
   const {category}= await getCategoryList()

  return (
  <>
      <div className="overflow-x-auto p-5 h-screen">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold  text-2xl">Category</h1>
                </div>
                <div className="text-right mb-5">
                    <Link className="w-auto  bg-black text-white p-3 rounded-xl" href={"/category/add-category"}>
                        Add Category
                    </Link>
                </div>

              <div className='border-2 p-3 rounded-xl'>
                <table className=" w-full ">
                <thead className=' w-full justify-around  border-b-2'>
                <tr className=''>
                    
                    <th className=' text-start'>Name</th>
                    <th  className=' text-start'>Property</th>
                    <th className='text-start'>Actions</th>
                    
                    <th />
                </tr>
                </thead>
                <tbody>
                  
                  {category.map((rs) => (
                  
                      <tr className="hover:bg-slate-200 p-3 h-12 border-b-2" key={rs._id} >
                        
                        <td className='p-2'>
                                <div className="font-bold">{rs.name}</div>
                        </td>
                        
                        <td className='flex flex-wrap border-r-2'>
                            {rs.property.map((name,index)=>{return(<span className=''>{(index ?', ':'')+name}</span>)}
                          )}
                        </td>

                        <td>
                          <div className='flex gap-4'>
                          <div className='text-blue-700'>
                          
                            <FaRegEye  className='text-xl hover:cursor-pointer'/>
                            </div>
                            <div>
                            <FaEdit className='text-green-700 text-xl hover:cursor-pointer'/>
                            </div>
                            <div>
                            <MdDeleteOutline className='text-red-700 text-xl hover:cursor-pointer'/>
                            </div>
                            
                          </div>
                        </td>
                        
                    </tr>
                   
                    
                    ))}               
                  
                         
                </tbody>
            </table>
                </div>
            
            </div>
        
  </>
  )
}