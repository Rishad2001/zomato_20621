import React, { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri"
import { IoFastFoodOutline } from "react-icons/io5"
import { BiDrink } from "react-icons/bi"
import classnames from "classnames"

const MobileTabs = () => {

    const [allTypes, setAllTypes] = useState([
        {
            //for Delivery
            id: `delivery`,
            icon:  <RiShoppingBag3Line />,
            name: "Delivery",
        },
            //for dining out
            {
                id: `dining`,
                icon:  <IoFastFoodOutline />,
                name: "Dining Out",
            },
                //for night life
            {
                id: `night`,
                icon:  <BiDrink />,
                name: "Nightlife",
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

    const [allTypes, setAllTypes] = useState([
        {
            //for Delivery
            id: `delivery`,
            imageDefault: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            imageActive: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
            name: "Delivery",
            activeColor: "yellow"
        },
            //for dining out
            {
                id: `dining`,
                imageDefault: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
                imageActive: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
                name: "Dining Out",
                activeColor: "blue"
            },
                //for night life
            {
                id: `night`,
                imageDefault: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
                imageActive: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
                name: "Nightlife",
                activeColor: "purple"
            },
   ]);

   const { type } = useParams();

    return (
        <>
           <div className="hidden flex lg:flex gap-16 my-7">
               {allTypes.map((items) => (
               <Link to={`/${items.id}`}>
                   <div className={classnames(
                       "flex items-center gap-3 pb-2 transition duration-700 ease-in-out", {
                       "border-b-2 border-zomato-400": type === items.id,
                   })}>
                   <div className={`w-14 h-14 bg-${type === items.id ? items.activeColor : "gray" }-200  p-2 rounded-full`}>
                       <img 
                       src={type === items.id ? items.imageActive : items.imageDefault}
                       className="w-full h-full"
                       alt="Delivery"
                       />
                   </div>
                   <h3 className={
                       type === items.id
                       ? "text-xl text-zomato-400 font-semibolb"
                       : "text-xl text-gry-700 font-semibolb"
                   }>{items.name}</h3>
               </div>
               </Link>
             ))}
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