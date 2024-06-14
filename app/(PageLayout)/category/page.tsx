//@ts-nocheck
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md"
import { FaRegEye } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from 'axios';
import RemoveCateBtn from '@/components/category/RemoveCateBtn';
import { AiFillWallet } from 'react-icons/ai';
import './styles.module.css'

const getCategoryList =async ()=>{
  try {
 const res = await fetch("http://localhost:3000/api/category", {
 cache: "no-store",
           });
           if (!res.ok) {
            throw new Error("Failed to fetch categories");
            }
 
   return await res.json()
   
   } catch (error) {
    
   console.log("Error loading categories: ", error);
   }
   
}

export default async function ProductssList() {

  const {category}=await getCategoryList()

  return (
    
      <div className=" p-5 ">
        
                <div className="flex justify-between items-center">
                    <h1 className="font-bold  text-2xl">Category</h1>
                </div>
                
                <div className=" mb-5 flex items-end justify-end">

                  <div className="bg-black text-white p-3 rounded-full w-36 text-center">
                  <Link  href={"/category/add-category"}>
                        Add Category
                    </Link>
                  </div>
                   
                </div>

              <div className='border-2 p-3 rounded-xl overflow-auto h-96 no-srcollbar'>
                <table className=" w-full ">
                <thead className=' w-full justify-around  border-b-2'>
                <tr className=''>
                    
                    <th className=' text-start'>Name</th>
                    <th  className=' text-start'>Properties</th>
                    <th className='text-end mr-3'>Actions</th>
                    
                    <th />
                </tr>
                </thead>
                <tbody>
                  
                  {category.map((rs) => (
                  
                      <tr className="hover:bg-slate-200 p-3 h-12 border-b-2" key={rs._id} >
                        
                        <td className='p-2'>
                                <div className="font-bold">{rs.name}</div>
                        </td>
                        
                        <td className='flex flex-wrap '>
                            {rs.property.map((name,index)=>{return(<span className=''>{(index ?', ':'')+name}</span>)}
                          )}
                        </td>
                        
                        
                     
      
                        <td>
                          <div className='flex gap-4 justify-end'>
                          <div className='text-blue-700'>
                          
                            <FaRegEye  className='text-xl hover:cursor-pointer'/>
                            </div>
                            <div>
                              <Link href={`/category/update-category/${rs.id}`}>
                                <FaEdit className='text-green-700 text-xl hover:cursor-pointer'/>
                              </Link>
                           
                            </div>
                            <div>
                             <RemoveCateBtn id={rs.id}/>
                            </div>
                            
                          </div>
                        </td>
                        
                    </tr>
                   
                    
                    ))}               
                 
                         
                </tbody>
            </table>
                </div>
            
            </div>
        

  )
}