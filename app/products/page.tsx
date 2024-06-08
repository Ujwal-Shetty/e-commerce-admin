//@ts-nocheck

import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md"
import { FaRegEye } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from 'axios';
import RemoveProBtn from '@/components/product/RemoveProBtn';
import { AiFillWallet } from 'react-icons/ai';

const getProductsList =async ()=>{
  try {
 const res = await fetch("http://localhost:3000/api/products", {
 cache: "no-store",
           });
           if (!res.ok) {
            throw new Error("Failed to fetch categories");
            }
  console.log(res)
   return await res.json()
   
   } catch (error) {
    
   console.log("Error loading categories: ", error);
   }
   
}

export default async function ProductssList() {

 const {products}=await getProductsList()

  return (
    
      <div className=" p-5 ">
        
                <div className="flex justify-between items-center">
                    <h1 className="font-bold  text-2xl">Products</h1>
                </div>
                <div className="text-right mb-5">
                    <Link className="w-auto  bg-black text-white p-3 rounded-xl" href={"/products/add-products"}>
                        Add Products
                    </Link>
                </div>

              <div className='border-2 p-3 rounded-xl overflow-auto h-96'>
                <table className=" w-full ">
                <thead className=' w-full justify-around  border-b-2'>
                <tr className=''>
                    
                    <th className=' text-start'>Name</th>
                    <th  className=' text-start'>Category</th>
                    <th className='text-end mr-3'>Actions</th>
                    
                    <th />
                </tr>
                </thead>
                <tbody>
                  
                  {products.map((rs) => (
                  
                      <tr className="hover:bg-slate-200 p-3 h-12 border-b-2" key={rs._id}>
                        
                        <td className='p-2'>
                              
                                <div className="font-bold flex gap-2">
                                <img className='rounded-full h-8 w-8  object-cover cursor-pointer hover:opacity-90'
                                 src={rs.productImage}
                                 alt=''
                                />
                                  {rs.name}</div>
                        </td>
                        
                        <td className=' p-2'>
                            {rs.CategoryName}
                        </td>
                        
                        
                     
      
                        <td>
                          <div className='flex gap-4 justify-end'>
                          <div className='text-blue-700'>
                          
                            <FaRegEye  className='text-xl hover:cursor-pointer'/>
                            </div>
                            <div>
                              <Link href={`/products/update-product/${rs.id}`}>
                                <FaEdit className='text-green-700 text-xl hover:cursor-pointer'/>
                              </Link>
                           
                            </div>
                            <div>
                             <RemoveProBtn id={rs.id}/>
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