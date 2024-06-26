//@ts-nocheck

import UpdateIntentory from "@/components/intentory/UpdateIntentory";


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



export default async function ProductssList({ searchParams }:{ searchParams :string}) {

 const {products}=await getProductsList()

 const params = searchParams.search

  return (
    
      <div className=" p-5 ">
        
                <div className="flex justify-between items-center mb-5">
                    <h1 className="font-bold  text-2xl">Intentory</h1>
                </div>
               

              <div className='border-2 p-3 rounded-xl overflow-auto h-[37rem] sm:h-96 no-scrollbar sm:block hidden'>
                <table className=" w-full ">
                <thead className=' w-full justify-around  border-b-2'>
                <tr className=''>
                    
                    <th className=' text-start'>Product name</th>
                    <th  className=' text-start  hidden sm:block'>Category</th>
                    <th  className=' text-start'>Product quantity</th>
                    <th className='text-end mr-3'>Actions</th>
                    
                    <th />
                </tr>
                </thead>
                <tbody>
                  
                  {products
                    .filter((rs:any)=>{
                      if(params===undefined){
                        return rs
                      }
                      return params.toLowerCase() === '' ? rs:rs.name.toLowerCase().includes(params)
                    })
                  .map((rs) => (
                  
                      <tr className="hover:bg-slate-200 p-3 h-12 border-b-2" key={rs._id}>
                        
                        <td className='p-2 '>
                              
                                <div className="font-bold flex gap-2">
                                <img className='rounded-full h-8 w-8  object-cover cursor-pointer hover:opacity-90'
                                 src={rs.productImage}
                                 alt=''
                                />
                                  {rs.name}</div>
                        </td>
                        
                        <td className=' p-2 hidden sm:block'>
                            {rs.CategoryName}
                        </td>

                        <td className=' p-2'>
                            {rs.intentoryQuantity}
                        </td>
                        <td>
                          <div className='flex gap-4 justify-end items-center relative'>
                            <UpdateIntentory id={rs.id} quantity={rs.intentoryQuantity}/>
                          </div>
                        </td>
                        
                    </tr>
                   
                    
                    ))}               
                 
                         
                </tbody>
            </table>
                </div>

                <div className='sm:hidden flex gap-4 flex-col pb-16 '>
                {products
                  .filter((rs:any)=>{
                    if(params===undefined){
                      return rs
                    }
                    return params.toLowerCase() === '' ? rs:rs.name.toLowerCase().includes(params)
                  })
                  .map((rs:any) => (
                    <div className='p-3 bg-slate-200 w-full rounded-xl flex flex-col gap-3 '>

                      <div >
                         <div className='flex truncate '>
                            <p className="font-semibold flex">Product name :</p>
                            <p className="pl-3">{rs.name}</p>
                           
                         </div>

                         <div className="flex truncate ">
                              <p className="font-semibold">Category : </p>
                              <p className="pl-12 " >{rs.CategoryName}</p>

                         </div>
                      </div>

                      
                       
                        <div className="bg-slate-300 p-2 rounded-xl">
                        <p className="font-semibold"> Stock :</p>
                        <div className='flex  justify-between items-center'>
                         
                         <p className="pl-8 text-xl font-bold">{rs.intentoryQuantity}</p>
                            <UpdateIntentory id={rs.id} quantity={rs.intentoryQuantity}/>
                         </div>

                        </div>
                       
                      
                     
                       

                    </div>
                  ))}
                </div>
            
            </div>
        

  )
}