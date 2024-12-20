import React from 'react'
import Image from 'next/image'
import product01 from "../public/Photo1.jpg"
import product02 from "../public/Parent (1).png"
import product03 from "../public/photo3.jpg"
import product04 from "../public/photo4.png"
import product05 from "../public/photo2.jpg"
import { Button } from './button'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
const ProductLists = () => {
    return (
      <div>
        <div className='flex justify-around mt-4 md:hidden'>
       <Button className='bg-[#f9f9f9] h-[56px] w-[160px]'>Filters <ChevronDown/></Button>
       <Button className='bg-[#f9f9f9] h-[56px] w-[160px]'>Sorting <ChevronDown/></Button>
       </div>
       <div className='sm:block hidden md:flex mt-6 mb-4 justify-between mx-16  '>
        <div className='flex gap-12'>
        <button className='flex gap-2' >Category<ChevronDown className='size-5 mt-1'/></button>
        <button className='flex gap-2' >Product Type<ChevronDown className='size-5 mt-1'/></button>
        <button className='flex gap-2' >Price<ChevronDown className='size-5 mt-1'/></button>
        <button className='flex gap-2' >Brand<ChevronDown className='size-5 mt-1'/></button>
       </div>
        <div className='flex gap-5'>
       <div>Sorting By:</div>
       <button className='flex gap-2' >Date Added<ChevronDown className='size-5 mt-1'/></button>
        </div>
       </div>
        <div className="bg-white text-gray-900">
          <div className="container mx-auto px-4 md:px-28 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-left">
               <Link href="/details"> 
               <Image src={product01}
                 alt="product" 
                 width={305} 
                 height={375} /></Link>
                <h2 className="mt-4 text-lg font-medium">The Dandy Chair</h2>
                <p className="mt-2 text-gray-600">£250</p>
              </div>
              <div className="text-left">
                <Image src={product02} alt="product" width={305} height={375} />
                <h2 className="mt-4 text-lg font-medium">Rustic Vase Set</h2>
                <p className="mt-2 text-gray-600">£155</p>
              </div>
              <div className="text-left">
                <Image src={product03} alt="product" width={305} height={375} />
                <h2 className="mt-4 text-lg font-medium">The Silky Vase</h2>
                <p className="mt-2 text-gray-600">£125</p>
              </div>
              <div className="text-left">
                <Image src={product05} alt="product" width={305} height={375} />
                <h2 className="mt-4 text-lg font-medium">The Lucy Lamp</h2>
                <p className="mt-2 text-gray-600">£399</p>
              </div>
              <div className="text-left">
                <Image src={product01} alt="product" width={305} height={375} />
                <h2 className="mt-4 text-lg font-medium">The Lucy Lamp</h2>
                <p className="mt-2 text-gray-600">£399</p>
              </div>
              <div className="text-left">
                <Image src={product04} alt="product" width={305} height={375} />
                <h2 className="mt-4 text-lg font-medium">The Lucy Lamp</h2>
                <p className="mt-2 text-gray-600">£399</p>
              </div>
              <div className="text-left">
                <Image src={product03} alt="product" width={305} height={375} />
                <h2 className="mt-4 text-lg font-medium">The Lucy Lamp</h2>
                <p className="mt-2 text-gray-600">£399</p>
              </div>
              <div className="text-left">
                <Image src={product01} alt="product" width={305} height={375} />
                <h2 className="mt-4 text-lg font-medium">The Lucy Lamp</h2>
                <p className="mt-2 text-gray-600">£399</p>
              </div>
              <div className="text-left">
                <Image src={product02} alt="product" width={305} height={375} />
                <h2 className="mt-4 text-lg font-medium">The Lucy Lamp</h2>
                <p className="mt-2 text-gray-600">£399</p>
              </div>
              <div className="text-left">
                <Image src={product01} alt="product" width={305} height={375} />
                <h2 className="mt-4 text-lg font-medium">The Lucy Lamp</h2>
                <p className="mt-2 text-gray-600">£399</p>
              </div>
              <div className="text-left">
                <Image src={product05} alt="product" width={305} height={375} />
                <h2 className="mt-4 text-lg font-medium">The Lucy Lamp</h2>
                <p className="mt-2 text-gray-600">£399</p>
              </div>
              <div className="text-left">
                <Image src={product04} alt="product" width={305} height={375} />
                <h2 className="mt-4 text-lg font-medium">The Lucy Lamp</h2>
                <p className="mt-2 text-gray-600">£399</p>
              </div>
              <div className='mt-10 mb-4  items-center '>
      <Button variant="default" className='justify-center' >View Collection</Button>
    
   </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductLists;
  