import Link from 'next/link'
import React from 'react'
import './styles.module.css'

function loading() {
  return (
    <div className=" p-5 ">
        <div className="flex justify-between items-center">
                    <h1 className="font-bold  text-2xl">Category</h1>

                </div>
                <div className="flex items-end justify-end mb-5">
                <div className="bg-black text-white p-3 rounded-full w-36 text-center">
                  <Link  href={"/category/add-category"}>
                        Add Category
                    </Link>
                  </div>
                </div>
                <div className='border-2 p-3 rounded-xl overflow-auto h-96 no-srcollbar'>
                <table className=" w-full ">
                <thead className=' w-full justify-around  border-b-2'>
                <tr className='w-full'>
                    
                    <th className=' text-start'>Name</th>
                    <th  className=' text-start'>Properties</th>
                    <th className='text-end mr-3'>Actions</th>
                    
                    <th />
                </tr>
                </thead>

                <tbody>
                  {Array.from({length:8}).map((_,index)=>(
                <tr key={index} className="hover:bg-slate-200 p-3 h-12 border-b-2">
                <td className='p-2'>
                  <div className="font-bold flex gap-2  items-center justify-center'">

                    
                    <div className='w-full h-3 bg-slate-300 animate-pulse'> </div>

                  </div>
                </td>

                <td>
                <div className='w-full h-3 bg-slate-300 animate-pulse'> </div>
                </td>

                <td>
                <div className='w-full h-3 flex justify-end gap-4'> 
                  <div className='p-2 bg-slate-300 animate-pulse'></div>
                  <div className='p-2 bg-slate-300 animate-pulse'></div>
                  <div className='p-2 bg-slate-300 animate-pulse'></div>
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

export default loading