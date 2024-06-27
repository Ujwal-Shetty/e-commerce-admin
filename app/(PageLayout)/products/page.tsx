//@ts-nocheck
import Link from 'next/link'
import { FaEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import RemoveProBtn from '@/components/product/RemoveProBtn';
import { getServerSession } from "next-auth"
import { authOptions } from '@/app/api/auth/[...nextauth]/route';



const getUserListss =async ()=>{
  try {
    const session=await getServerSession(authOptions)
    const id=session?.user.id
    console.log(id)
 const res = await fetch(`http://localhost:3000/api/register/${id}`, {
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

export default async function ProductssList({ searchParams }:{ searchParams :string}) {
  
 

  
  

 const products=await getUserListss()
 console.log(products)

const getProducts=products.products
 
console.log(getProducts)
 

 const params = searchParams.search
 console.log(params)

  return (
    
      <div className="p-5 ">
        
                <div className="flex justify-between items-center">
                    <h1 className="font-bold  text-2xl">Products</h1>
                </div>
                <div className="text-right mb-5">
                    <Link className="w-auto  bg-black text-white p-3 rounded-full" href={"/products/add-products"}>
                        Add Products
                    </Link>
                </div>

              <div className='border-2 p-3 rounded-xl overflow-auto h-96 no-scrollbar sm:block hidden'>
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
                  
                  {getProducts
                  .filter((rs:any)=>{
                    if(params===undefined){
                      return rs
                    }
                    return params.toLowerCase() === '' ? rs:rs.name.toLowerCase().includes(params)
                  })
                  .map((rs:any) => (
                  
                      <tr className="hover:bg-slate-200 p-3 h-12 border-b-2" key={rs._id}>
                        
                        <td className='p-2 truncate'>
                              
                                <div className="font-bold flex gap-2 truncate">
                                <img className='rounded-full h-8 w-8  object-cover cursor-pointer hover:opacity-90'
                                 src={rs.productImage}
                                 alt=''
                                />
                                  {rs.name}</div>
                        </td>
                        
                        <td className='truncate p-2'>
                            {rs.CategoryName}
                        </td>
                        <td>
                          <div className='flex gap-4 justify-end'>
                          <div className='text-blue-700'>
                          
                            <FaRegEye  className='text-xl hover:cursor-pointer'/>
                            </div>
                            <div>
                              <Link href={`/products/update-products/${rs.id}`}>
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

                <div className='sm:hidden flex gap-4 flex-col pb-16 '>
                {getProducts
                  .filter((rs:any)=>{
                    if(params===undefined){
                      return rs
                    }
                    return params.toLowerCase() === '' ? rs:rs.name.toLowerCase().includes(params)
                  })
                  .map((rs:any) => (
                    <div className='p-3 bg-slate-200 w-full rounded-xl flex flex-col gap-2'>

                      <div className='flex truncate'>
                         <div className='font-bold'>Product name : </div>
                         <div className='ml-4'>{rs.name}</div> 
                       </div>

                      <div className='flex truncate'>
                        <p className='font-bold'>Category : </p>
                         <p className='ml-14'>{rs.CategoryName}</p> 
                       </div>
                     
                      <div className='flex gap-5 justify-end p-2'>
                          <div className='text-blue-700'>
                          
                            <FaRegEye  className='text-2xl hover:cursor-pointer'/>
                           </div>
                            <div>
                              <Link href={`/products/update-products/${rs.id}`}>
                                <FaEdit className='text-green-700 text-2xl hover:cursor-pointer'/>
                              </Link>
                           
                            </div>
                            <div>
                             <RemoveProBtn id={rs.id}/>
                            </div>
                            
                          </div>
                       

                    </div>
                  ))}
                </div>
            
            </div>
        

  )
}