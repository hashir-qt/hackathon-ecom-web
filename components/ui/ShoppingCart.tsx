import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import pro1 from "../public/Product Image.jpg"
import pro2 from "../public/Product Image (1).jpg"

export default function ShoppingCart() {
  return (
    <div>
<div></div>
    
    <div className="md:ml-44">
    <div className="container max-w-[1200px] py-12 px-4">
      <h1 className="text-4xl font-normal mb-5 md:mb-12">Your shopping cart</h1>
      
      <div className="md:w-full">
        <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 pb-4  border-b text-sm text-gray-500">
          <div className="hidden md:block">Product</div>
          <div className="md:text-center md:block hidden">Quantity</div>
          <div className="md:text-right md:block hidden">Total</div>
        </div>

        <div className="divide-y">
          <div className="grid md:grid-cols-[2fr,1fr,1fr] gap-4 py-8 items-center">
            <div className="flex gap-6">
            <div className="w-[136px] h-[166px] bg-gray-100">
                <Image
                  src={pro1}
                  alt="Basic white vase"
                  width={136}
                  height={166}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 md:block">
                <h3 className="font-normal mb-1">Graystone vase</h3>
                <p className="text-sm text-gray-500 mb-2">A timeless ceramic vase with a tri color grey glaze.</p>
                <p className="text-base">£85</p>
                <Input 
                type="text"
                value="1"
                readOnly
              
                className="w-16 md:hidden ml- text-center" 
              />
              </div>
            </div>
            <div className="md:flex hidden justify-center ">
              <Input 
                type="text"
                value="1"
                readOnly
              
                className="w-16 text-center" 
              />
            </div>
            <div className="md:text-right hidden md:block">£85</div>
          </div>

          <div className="grid md:grid-cols-[2fr,1fr,1fr] gap-4 py-8 items-center">
            <div className="flex gap-6">
              <div className="w-[136px] h-[166px] bg-gray-100">
                <Image
                  src={pro2}
                  alt="Basic white vase"
                  width={136}
                  height={166}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 md:block">
                <h3 className="font-normal mb-1">Basic white vase</h3>
                <p className="text-sm text-gray-500 mb-2">Beautiful and simple this is one for the classics</p>
                <p className="text-base ">£85</p>
                <Input 
                type="text"
                value="1"
                readOnly
              
                className="w-16 md:hidden text-center" 
              />
              </div>
            </div>
            <div className="md:flex hidden justify-center">
              <Input 
                type="text"
                value="1"
                readOnly
              
                className="w-16 text-center" 
              />
            </div>
            <div className="md:text-right hidden md:block">£125</div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center  md:items-end gap-4">
          <div className="flex justify-between w-full max-w-xs">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-medium">£210</span>
          </div>
          <p className="text-sm text-gray-500">Taxes and shipping are calculated at checkout</p>
          <Button 
            className="w-full max-w-xs bg-[#2A254B] text-white hover:bg-[#2A254B]/90"
          >
            Go to checkout
          </Button>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}