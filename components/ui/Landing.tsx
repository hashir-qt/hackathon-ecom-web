import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import hero from "../public/Frame 2.jpg"
import hero01 from "../public/Hero Blocks.jpg"
import { CheckCircle2Icon, CreditCard, LeafIcon, Truck } from 'lucide-react'
import photo1 from "../public/Photo1.jpg"
import photo2 from "../public/photo2.jpg"
import photo3 from "../public/photo3.jpg"
import photo4 from "../public/photo4.png"
import photobg from "../public/Image Block.jpg"
import Link from 'next/link'
const Landing = () => {
  return (
    <div>
     
      <div className='md:hidden mt-5 text-[25px] text-[#2A254B] mx-2  '>
      <h1>Luxury homeware for people who love timeless design quality</h1>
      </div>
      <p className='md:hidden text-[#2A254B] mx-2 mt-2'>
      With our new collection, view over 400 bespoke pieces from homeware through to furniture today
      </p>
     
    <div className='mt-4 mb-5 items-center flex justify-center md:hidden'>
      <Button variant="default" className='items' >View Collection</Button>
    </div>
 <div className='min-w-full flex justify-center items-center md:hidden'>
    <Image 
    src={hero}
    alt='hero'
    sizes='w-[390px] h-[304px]'
    />
 </div>
  
  <div className='hidden md:block md:w-full'>
      <Image
        src={hero01}
        alt='hero01'
        width={1560}
        height={700} // Instead of sizes, set explicit width and height
      />
    </div>
   
    <div className='mt-16 mx-6 md:mt-24 text-[#2A254B]'>
  <h1 className='text-[25px] md:text-center text-left'>What Makes Our Brand Different</h1>
</div>

<div className='flex flex-wrap md:flex-nowrap justify-center mt-6 gap-10'>
  {/* Card 1 */}
  <div className='md:h-[244px] md:w-[305px] bg-[#F9F9F9] h-[196px] w-[342px]'>
    <div className='flex flex-col gap-3 px-12 justify-center py-4'>
      <Truck className='size-7' />
      <div className='text-2xl'>Next Day As Standard</div>
      <div className='text-[14px]'>
        Order before 3pm and get your order the next day as standard
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className='md:h-[244px] md:w-[305px] bg-[#F9F9F9] h-[196px] w-[342px]'>
    <div className='flex flex-col gap-3 px-12 justify-center py-4'>
      <CheckCircle2Icon className='size-7' />
      <div className='text-2xl'>Made By True Artisans</div>
      <div className='text-[14px]'>
      Handmade crafted goods made with real passion and craftmanship
      </div>
    </div>
  </div>

  {/* Card 3*/}
  <div className='md:h-[244px] md:w-[305px] bg-[#F9F9F9] h-[196px] w-[342px]'>
    <div className='flex flex-col gap-3 px-12 justify-center py-4'>
      <CreditCard className='size-7' />
      <div className='text-2xl'>Unbeatable Prices</div>
      <div className='text-[14px]'>
      For our materials and quality you won’t find better prices anywhere
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className='md:h-[244px] md:w-[305px] bg-[#F9F9F9] h-[196px] w-[342px] mb-10'>
    <div className='flex flex-col gap-3 px-12 justify-center py-4'>
      <LeafIcon className='size-7' />
      <div className='text-2xl'>Recycled Packaging</div>
      <div className='text-[14px]'>
      We use 100% recycled to ensure our footprint is more manageablerd
      </div>
    </div>
  </div>
  </div>
  <div className="bg-white text-gray-900">
  <div className="container mx-auto px-4 md:px-28 py-8">
   <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-4 gap-4">
    <div className="text-left">
    <Link href="/details"><Image
    src={photo1}
    alt='product'
    width={305}
    height={375}
    /></Link>
     <h2 className="mt-4 text-lg font-medium">
      The Dandy chair
     </h2>
     <p className="mt-2 text-gray-600">
      £250
     </p>
    </div>
    <div className="text-left">
    <Link href="/details"><Image
    src={photo2}
    alt='product'
    width={305}
    height={375}
    /></Link>
     <h2 className="mt-4 text-lg font-medium">
      Rustic Vase Set
     </h2>
     <p className="mt-2 text-gray-600">
      £155
     </p>
    </div>
    <div className="text-left">
    <Link href="/details"><Image
    src={photo3}
    alt='product'
    width={305}
    height={375}
    /></Link>
     <h2 className="mt-4 text-lg font-medium">
      The Silky Vase
     </h2>
     <p className="mt-2 text-gray-600">
      £125
     </p>
    </div>
    <div className="text-left">
    <Link href="/details"><Image
    src={photo4}
    alt='product'
    width={305}
    height={375}
    /></Link>
     <h2 className="mt-4 text-lg font-medium">
      The Lucy Lamp
     </h2>
     <p className="mt-2 text-gray-600">
      £399
     </p>
    </div>
   </div>
    
   <div className='mt-10 mb-4 items-center flex justify-center '>
      <Button variant="default" className='items' >View Collection</Button>
    
   </div>
   <div className="flex flex-col md:flex-row gap-4">
   <div className="bg-[#2E1A47] text-white p-10 flex-1 mt-10 md:mb-14 flex flex-col justify-left items-left">
    <h1 className="text-3xl md:text-4xl mb-4">
     It started with a small idea
    </h1>
    <p className="text-lg md:text-xl mb-6">
     A global brand with local beginnings, our story began in a small studio in South London in early 2014
    </p>
    <button className="bg-[#4E4D93] text-[#f9f9f9] py-2 px-4 md:w-[170px] md:h-[56px] w-60 h-12 md:mt-48 ">
     View collection
    </button>
   </div>
   <div className="flex-1 mb-14 md:mt-10">
    <Image
     src={photobg}
     alt='sidehero'
     width={630}
     height={478}
    />
   </div>
  </div>
 
 
   <div className="bg-[#2E1A47] bg-opacity-75 p-10 md:p-20 text-center text-white">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
     Join the club and get the benefits
    </h2>
    <p className="text-lg md:text-xl mb-6 md:mb-10 md:mx-72">
     Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
    </p>
    <div className="md:flex md:justify-center items-center md:gap-14 mb-6 md:mb-10">
     <div className="flex items-center gap-2 ">
     <CheckCircle2Icon/>
      <span>
       Exclusive offers
      </span>
     </div>
     <div className="flex items-center gap-2">
     <CheckCircle2Icon/>
      <span>
       Free events
      </span>
     </div>
     <div className="flex items-center gap-2">
     <CheckCircle2Icon/>
      <span>
       Large discounts
      </span>
     </div>
    </div>
    <div className="flex justify-center">
     <input className="p-2  w-64 md:w-[472px] md:h-16" placeholder="your@email.com" type="email"/>
     <button className="bg-[#2A254B] text-white w-32 py-2 px-4 ">
      Sign up
     </button>
    </div>
   </div>
  </div>

   </div>
   </div>

    
  )
}

export default Landing
