import React from 'react'
import Link from 'next/link'
import { SearchIcon, ShoppingCart, UserCircle2, X, Menu, Search} from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Header = () => {
  return (
    <div>
       <div>
                    {/* Top Bar */}
                    <div className="bg-[#2A254B] text-white flex md:justify-between justify-center md:gap-3 gap-4 text-center py-2 md:text-[16px ] text-[12px]">
                         <div className='md:ml-[570px] '>Free delivery on all orders over £50 with code easter checkout</div>
                        <button className="text-white focus:outline-none">
                            <i><X className='md:mr-[16px] mr-2 '/></i>
                        </button>
                      </div> 
                
                    {/* Navigation Bar */}
                    <nav className="bg-white ">
                        <div className="container  py-4 h-[69px] flex justify-between items-center ">
                            <Link href="/" className="text-2xl ml-7  text-gray-900"> Avion</Link>
                            <div className="flex items-center justify-between px-4 py-0 bg-white  md:hidden ">
          {/* Hamburger Menu */}
          <div className="flex items-center gap-4  text-gray-900">
          <Search className='size-[20px]'/>
          <Link href="/cart" className="hover:text-gray-900"><i><ShoppingCart className='size-[20px]'/></i></Link>
            <Sheet>
              <SheetTrigger className="">
                <Menu className='size-[20px]' />
              </SheetTrigger>
              <SheetContent side="right">
                <div className=" mt-10 p-4 flex flex-col   gap-2 text-gray-800">
                  
                <Link href="/"  className="text-lg font-medium hover:underline hover:underline-offset-4">Home</Link>
                <Link href="/about"  className="text-lg font-medium hover:underline hover:underline-offset-4">About Us</Link>                  
                <Link href="/"  className="text-lg font-medium hover:underline hover:underline-offset-4">Contact</Link>                  
                <Link href="/"  className="text-lg font-medium hover:underline hover:underline-offset-4">Blog</Link>
                   
                  </div>
                  </SheetContent>
            </Sheet>
                       
                </div>
                </div>
                            <div className="hidden md:flex md:gap-10 text-gray-500">
                                <Link href="/about" className="hover:text-gray-900">About us</Link>
                                <Link href="/about" className="hover:text-gray-900">Contact</Link>
                                <Link href="/about" className="hover:text-gray-900">Blog</Link>
                                <div className='flex gap-4'>
                                <a href="#" className="hover:text-gray-900 "><i><SearchIcon className='size-[20px]'/></i></a>
                                <Link href="/cart" className="hover:text-gray-900"><i><ShoppingCart className='size-[20px]'/></i></Link>
                                <a href="#" className="hover:text-gray-900 mr-14 "><i><UserCircle2 className='size-[20px]'/></i></a>
                                </div>
                            </div>
                            </div>
                            </nav>
                             {/* Mobile Navbar */}
                             <div className=" mx-auto">
            <ul className="hidden md:gap-12 md:flex p-5 justify-center h-[64px]  text-gray-500 bg-[#F9F9F9]">
                <li><Link href="/products" className="hover:text-gray-700">All products</Link></li>
                <li><a href="#" className="hover:text-gray-700">Plant pots</a></li>
                <li><a href="#" className="hover:text-gray-700">Ceramics</a></li>
                <li><a href="#" className="hover:text-gray-700">Tables</a></li>
                <li><a href="#" className="hover:text-gray-700">Chairs</a></li>
                <li><a href="#" className="hover:text-gray-700">Crockery</a></li>
                <li><a href="#" className="hover:text-gray-700">Tableware</a></li>
                <li><a href="#" className="hover:text-gray-700">Cutlery</a></li>
            </ul>

            
                </div>
                <div className='md:hidden'>
           <ul className='flex justify-center  p-5  gap-6 text-gray-500 h-[64px] text-[14px] bg-[#F9F9F9]'>
                 <li><Link href="/products" className="hover:text-gray-700">All products</Link></li>
                <li><a href="#" className="hover:text-gray-700">Plant pots</a></li>
                <li><a href="#" className="hover:text-gray-700">Ceramics</a></li>
                
           </ul>
                </div>
                </div>
            
        
    </div>
  )
}

export default Header
