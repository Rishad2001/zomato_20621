import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri"
import { IoFastFoodOutline } from "react-icons/io5"
import { BiDrink } from "react-icons/bi"

const MobileTabs = () => {
    return (
        <>
            <div className="lg:hidden fixed bottom-0 w-full z-10 bg-white shadow-lg p-3 flex justify-between md:justify-evenly text-gray-500 border">
            <div className="flex flex-col items-center text-lg">
                <RiShoppingBag3Line />
                <h5>Delivery</h5>
            </div>

            <div className="flex flex-col items-center text-lg">
                <IoFastFoodOutline />
                <h5>Dining Out</h5>
            </div>

            <div className="flex flex-col items-center text-lg">
                <BiDrink />
                <h5>Nightlife</h5>
            </div>
            </div>
        </>
    )
}

const LargeTabs = () => {
    return (
        <>
           <div className="hidden flex lg:flex gap-16">
               <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-gray-100 p-1 rounded-full">
                       <img 
                       src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                       className="w-full h-full"
                       alt="Delivery"
                       />
                   </div>
                   <h3 className="text-xl text-gray-700 font-semibolb">Delivery</h3>
               </div>

               <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-gray-100 p-1 rounded-full">
                       <img 
                       src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                       className="w-full h-full"
                       alt="Dining Out"
                       />
                   </div>
                   <h3 className="text-xl text-gray-700 font-semibolb">Dining Out</h3>
               </div>

               <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-gray-100 p-1 rounded-full">
                       <img 
                       src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                       className="w-full h-full"
                       alt="Nightlife"
                       />
                   </div>
                   <h3 className="text-xl text-gray-700 font-semibolb">Nightlife</h3>
               </div>
           </div>
        </>
    )
}

const FoodTab =() => {
    return (
        <>
        <div>
            <MobileTabs />
            <LargeTabs />
        </div>
        </>
    )
}

export default FoodTab;