//@ts-nocheck
"use client"
import React,{useState, useEffect} from 'react'
import Popup from '@/components/product/Popup'
import { getDownloadURL, getStorage,ref, uploadBytesResumable} from 'firebase/storage';
import { app } from '@/libs/firebase';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function AddProducts() {

  const[categoryData,setCategoryData]=useState([])
  const[someData,setSomeData]=useState([])
  const[selectedData,setSelectedData]=useState()
  const [val,setVal]=useState([]); 

  const[varientData, setVarientData]=useState([])
  const[toggleDropDown,setToggleDropDown]=useState(false)

  const [imageUploadError, setImageUploadError] = useState(false);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const[formData,setFormData]=useState({
        name:'',
        description:'',
        regularPrice:50,
        discountPrice:0,
        CategoryName:'',
        productImage:[],
        varients:[]
    })
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

const router=useRouter() 
const filtered =someData.filter(sa=>sa.name===selectedData).map((res)=>res.property).map((rs)=>rs)


console.log(filtered)
console.log(formData)

formData.varients=["no varients",'']
formData.regularPrice=+formData.regularPrice
formData.discountPrice=+formData.discountPrice

const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.productImage.length < 7) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            productImage: formData.productImage.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError('Image upload failed (2 mb max per image)');
          setUploading(false);
        });
    } else {
      setImageUploadError('You can only upload 6 images per listing');
      setUploading(false);
    }
  };

const storeImage = async (file:any) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

const handleRemoveImage = (index:any) => {
    setFormData({
      ...formData,
      productImage: formData.productImage.filter((_, i) => i !== index),
    });
  };

 useEffect(()=>{
        const fetchData=async()=>{
          try{
            const response=await fetch('/api/category')
            if(!response.ok){
              throw new Error("failed to fetch catrgory data")
            }
            const data=await response.json()
            const catdata=data.category
            const nameData=catdata.map(name=> name.name)

            console.log(data)
            setSomeData( catdata)
            
            setCategoryData(nameData)
          }catch(err){
             console.log(err)
          }
        };
        fetchData()
      },[])

   

    const handleChange = (e:any) => {
      if (
        e.target.type === 'number' ||
        e.target.type === 'text' ||
        e.target.type === 'textarea'
      ) {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
      }
    }

    const handleSubmit = async (e:any) => {
      e.preventDefault();
      try{
        if (formData.productImage.length < 1)   
            return setError('You must upload at least one image')
          
       if (+formData.regularPrice < +formData.discountPrice)
            return setError('Discount price must be lower than regular price');
        setLoading(true);
        setError(false);
        axios.post('/api/products', formData)
          .then(() => alert('Product has been added!'))
          .catch(() => alert('Something went wrong!'))

         
          router.push('/')
          router.push('/products')
          router.refresh();

      }catch(error){
        setError(error.message);
        setLoading(false);

      }
          
       
     }
 
   
  return (
    <header className='p-3 max-w-4xl mx-auto'>
      <form 
      onSubmit={handleSubmit} 
      className='flex gap-4 flex-col sm:flex-row'>
     
     <div className='flex flex-col gap-4 flex-1 p-3'>
        <div >
            <p>Product name</p>
        <input
             type='text'
             placeholder='Name'
             className='border p-3 rounded-lg w-full'
             id='name'
             onChange={handleChange}
             maxLength='62'
             minLength='10'
             required 
           />
        </div>
         <div>
            <p>Product Description</p>
         <textarea
             type='text'
             placeholder='Write about your product'
             className='border p-3 rounded-lg w-full'
             id='description'
             onChange={handleChange}
             required  
           />
         </div>
         <div>
             <p>Category</p>
             <select 
             onChange={(e) => setFormData({...formData,  CategoryName: e.target.value})}
            
             id='CategoryName'
                className='p-3 border border-gray-300 rounded-lg w-full'>
                  <option selected
                  disabled="disabled"
                  className='text-slate-200 hidden'
                  >Choose category
                  </option>
                    
                    {categoryData.map(opt=>
                     <option 
                         className='p-3 border border-gray-300 rounded-lg w-full h-10'>
                        {opt}
                      </option>
                      )}
                 
             </select>
         </div>

         <div className='flex w-full'>
            <button 
            type='button'
            className='p-3 bg-white text-green-800 border-2 border-green-800 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 cursor-pointer text-center w-full'
            onClick={()=>setToggleDropDown(true)}>
               Manage Varients
            </button>
              
            <Popup trigger={toggleDropDown}
               setTrigger={setToggleDropDown}>
            
            </Popup>
            </div>
         <div>      
         </div>
     </div>
 
     <div className='flex flex-col flex-1 gap-4 p-3'>
         <div>
             <p>Price</p>
            <input
             type='number'
             id='regularPrice'
             min='50'
             max='1000000000'
             onChange={handleChange}
             className='p-3 border border-gray-300 rounded-lg w-full'
             value={formData.regularPrice}
           />
         </div>
 
         <div>
             <p>Discount</p>
            <input
             type='number'
             id='discountPrice'
             min='0'
             max='1000000000'
             onChange={handleChange}
             value={formData.discountPrice}
             className='p-3 border border-gray-300 rounded-lg w-full'
           />
         </div>
         
 
         <div className='flex flex-col'>
          <p>Upload Images</p>
           <div className='flex gap-4'>
             <input
               onChange={(e) => setFiles(e.target.files)}
               className='p-3 border border-gray-300 rounded w-full'
               type='file'
               id='images'
               accept='image/*'
               multiple
             />
 
             <button
               onClick={handleImageSubmit}
               disabled={uploading}
               type='button'
               className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
             >
               {uploading ? 'Uploading...' : 'Upload'}
             </button>
            
             </div>

             <p className='text-red-700 text-sm'>
            {imageUploadError && imageUploadError}
          </p>

          {formData.productImage.length > 0 &&
            formData.productImage.map((url, index) => (
              <div
                key={url}
                className='flex justify-between p-3 border items-center'
              >
                <img
                  src={url}
                  alt='listing image'
                  className='w-20 h-20 object-contain rounded-lg'
                />
                <button
                  type='button'
                  onClick={() => handleRemoveImage(index)}
                  className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                >
                  Delete
                </button>
              </div>
            ))}

         </div>
         <p>{error}</p>
 
            <button
               
               className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
              >
               Add Product
            </button>
      
     </div>
 
  
     </form>
    </header>
    
  
  )
}

export default AddProducts