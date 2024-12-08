import { Facebook, LinkedinIcon } from 'lucide-react'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-[#2A254B] text-white py-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-5 justify-between md:mx-10 md:ml-24 md:px-6">
        <div className="mb-6 md:mb-0">
          <h2 className="text-4xl  mb-4">Avion</h2>
          <address className="not-italic mb-4">
            21 New York Street<br />
            New York City<br />
            United States of America<br />
            432 34
          </address>
        

        </div>
       
        <div className="mb-6 md:mb-0 ">
          <h3 className="text-xl  mb-4">Social links</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white"><FaFacebook/></a>
            <a href="#" className="text-white"><FaLinkedin/></a>
            <a href="#" className="text-white"><FaInstagram/></a>
            <a href="#" className="text-white"><FaSkype/></a>
            <a href="#" className="text-white"><FaTwitter/></a>
            <a href="#" className="text-white"><FaPinterest/></a>
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl mb-4">Our company</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-white">About us</a></li>
            <li className="mb-2"><a href="#" className="text-white">Vacancies</a></li>
            <li className="mb-2"><a href="#" className="text-white">Contact us</a></li>
            <li className="mb-2"><a href="#" className="text-white">Privacy</a></li>
            <li className="mb-2"><a href="#" className="text-white">Returns policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl  mb-4 ">Menu</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-white">New arrivals</a></li>
            <li className="mb-2"><a href="#" className="text-white">Best sellers</a></li>
            <li className="mb-2"><a href="#" className="text-white">Recently viewed</a></li>
            <li className="mb-2"><a href="#" className="text-white">Popular this week</a></li>
            <li className="mb-2"><a href="#" className="text-white">All products</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl  mb-4 ">Categories</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-white">Crockery</a></li>
            <li className="mb-2"><a href="#" className="text-white">Furniture</a></li>
            <li className="mb-2"><a href="#" className="text-white">Homeware</a></li>
            <li className="mb-2"><a href="#" className="text-white">Plant Pots</a></li>
            <li className="mb-2"><a href="#" className="text-white">Chair</a></li>
          </ul>
        </div>
      
      </div>
      <div className='border-t-2 border-[#4E4D93] mt-10'></div>
      <div className="text-center mt-5">

        <p>Copyright 2022 Avion LTD</p>
      </div>
    </div>
  
</div>
  )
}

export default Footer
