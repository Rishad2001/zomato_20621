import React, { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri"
import { IoFastFoodOutline } from "react-icons/io5"
import { BiDrink } from "react-icons/bi"

const MobileTabs = () => {

    const [allTypes, setAllTypes] = useState([
        {
            //for Delivery
            id: `delivery`,
            icon:  <RiShoppingBag3Line />,
            name: "Delivery",
            isActive: false
            },
            //for dining out
            {
                id: `dining`,
                icon:  <IoFastFoodOutline />,
                name: "Dining Out",
                isActive: false
            },
                //for night life
            {
                id: `night`,
                icon:  <BiDrink />,
                name: "Nightlife",
                isActive: false
            },
   ]);

   const { type } = useParams();

    return (
        <>
        <div className="lg:hidden fixed bottom-0 w-full z-10 bg-white shadow-lg p-3 flex justify-between md:justify-evenly text-gray-500 border">
            {allTypes.map((items) => (
            <Link to={`/${items.id}`}>
                <div className={
                type === items.id
                ? "flex flex-col relative items-center text-lg text-zomato-400 "
                : "flex flex-col items-center text-lg"
            }>
                <div 
                className={
                    type === items.id && "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                }
                />
                {items.icon}
                <h5>{items.name}</h5>
            </div>
            </Link>
           ))} 
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