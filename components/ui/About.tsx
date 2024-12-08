import React from 'react'
import {  } from "module";
import { Button } from './button';
import photobg from "../public/Image Block.jpg"
import Image from 'next/image';
import Image1 from "../public/Image.jpg"
import { CheckCircle2Icon, CreditCard, LeafIcon, Truck } from 'lucide-react';
const About = () => {
  return (
    <div>
      <div className='flex flex-wrap mx-4 md:mx-32 md:mt-16 md:gap-36 justify-center md:mb-24 md:flex-nowrap'>
<div className='md:text-[36px] text-[#2E1A47] text-[34px]  mt-7'>A brand built on the love of craftmanship,
quality and outstanding customer service</div>
<div className='mt-10 mb-4 items-center '>
      <Button variant="default" className='items' >View Collection</Button>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-4">
   <div className="bg-[#2E1A47] text-white p-10 flex-1 md:ml-16 md: mt-10 md:mb-14 flex flex-col justify-left items-left">
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
  <div className="container md:mx-0  md:px-0 md:py-0 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
            <Image
            src={Image1}
            alt='about hero'
            width={760}
            height={603}
            />
        </div>
        <div className="w-full md:w-1/2 md:h-[640px] h-full py-4 mt-8 md:mt-0 md:pl-0 bg-[#f9f9f9]">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mx-4 md:mx-16 md:mt-16">
                Our service isn't just personal, it's actually hyper personally exquisite
            </h2>
            <p className="text-gray-600 mb-4 mx-4 md:mx-16">
                When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            </p>
            <p className="text-gray-600 mb-8  mx-4 md:mx-16 ">
                Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
            <button className="bg-white text-gray-800 border border-gray-300 py-2 px-4 mx-4 md:mx-16 md:mt-40 md:w-[150px] md:h-[56px] rounded hover:bg-gray-100">
                Get in touch
            </button>
        </div>
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

  {/* Card 23*/}
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
  <div className="bg-white bg-opacity-75 p-10 md:p-20 text-center text-[#2A254B]">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
     Join the club and get the benefits
    </h2>
    <p className="text-lg md:text-xl mb-6 md:mb-10 md:mx-72">
     Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
    </p>
   
 <div className="flex justify-center">
     <input className="p-2  w-64 md:w-[472px] md:h-16" placeholder="your@email.com" type="email"/>
     <button className="bg-[#2A254B] text-white w-32 py-2 px-4 ">
      Sign up
     </button>
    </div>
   </div>
  </div>
  
 
    
  )
}

export default About
