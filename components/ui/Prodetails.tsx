import React from 'react'
import Image from 'next/image'
import picture from "../public/Image Left.jpg"

const Prodetails = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
   <div className="w-full lg:w-1/2">
    <Image
    src={picture}
    alt='product'
    width={721}
    height={759}
    />
   </div>
   <div className="w-full lg:w-1/2 mx-2 md:mx-20 mt-6 md:mt-20 ">
    <h1 className="text-3xl mx-2 font-semibold text-gray-800">
     The Dandy Chair
    </h1>
    <p className="text-2xl mx-2 text-gray-600 mt-2">
     £250
    </p>
    <div className="mt-6">
     <h2 className="text-lg mx-2 font-medium text-gray-800">
      Product description
     </h2>
     <p className="text-gray-600 mx-2 mt-2">
      A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
     </p>
    </div>
    <div className="mt-6">
     <h2 className="text-lg mx-2 font-medium text-gray-800">
      Dimensions
     </h2>
     <div className="flex mt-2">
      <div className="mr-6">
       <p className="text-gray-600 mx-2">
        Height
       </p>
       <p className="text-gray-800 mx-2">
        110cm
       </p>
      </div>
      <div className="mr-6 ">
       <p className="text-gray-600">
        Width
       </p>
       <p className="text-gray-800">
        75cm
       </p>
      </div>
      <div>
       <p className="text-gray-600">
        Depth
       </p>
       <p className="text-gray-800">
        50cm
       </p>
      </div>
     </div>
    </div>
    <div className="mt-6">
     <h2 className="text-lg mx-2 font-medium text-gray-800">
      Quantity
     </h2>
     <div className='flex justify-between'>
     <div className="flex items-center mt-2">
      <button className="bg-gray-200 text-gray-800 px-3 ml-2 md:ml-0 py-1">
       -
      </button>
      <input className="w-12 text-center border border-gray-300 mx-2 py-1" type="text" value="1"/>
      <button className="bg-gray-200 text-gray-800 px-3 py-1">
       +
      </button>
      </div>
      <div className="mt-6 flex">
     <button className="bg-indigo-900 text-white mb-2 px-6 py-3 mr-4">
      Add to cart
     </button>
    
    </div>
     </div>
    </div>
   
   </div>
  </div>
    </div>
  )
}

export default Prodetails
