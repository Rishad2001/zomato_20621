import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs"
import { IoBeerOutline } from "react-icons/io5";
import { GiMorgueFeet } from "react-icons/gi";

const MobileTab = () => {

    const [allTypes, setAllTypes] = useState([
        {
            id: `delivery`,
            icon: <BsHandbag />,
            name: `Delivery`,
            isActive: false
        },
        {
            id: `night`,
            icon: <IoBeerOutline />,
            name: `Nightlife`,
            isActive: false
        },
        {
            id: `dining`,
            icon: <GiMorgueFeet />,
            name: `Dining Out`,
            isActive: false
        },
    ]);

    const {type} = useParams();

    return (
        <>
          <div className="lg:hidden bg-white shadow-inner border p-3 fixed bottom-0 z-10 w-full flex items-center justify-between">
          {allTypes.map((items) => (
            <Link to={`/${items.id}`}>
              <div
                className={
                  type === items.id
                    ? "flex flex-col relative items-center text-xl text-zomato-400 "
                    : "flex flex-col items-center text-xl "
                }
              >
                <div
                  className={
                    type === items.id &&
                    "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                  }
                />
                {items.icon}
                <h5 className="text-sm">{items.name}</h5>
              </div>
            </Link>
          ))}
          </div>
        </>
    );
};

//for laptop
const Laptop = () => {

    const [allTypes, setAllTypes] = useState([
        {
            id: `delivery`,
            icon: <BsHandbag />,
            name: `Delivery`,
            isActive: false
        },
        {
            id: `night`,
            icon: <IoBeerOutline />,
            name: `Nightlife`,
            isActive: false
        },
        {
            id: `dining`,
            icon: <GiMorgueFeet />,
            name: `Dining Out`,
            isActive: false
        },
    ]);

    const {type} = useParams();

    return (
        <>
          <div className="hidden bg-white  p-3  bottom-0 z-10 w-full flex lg:flex items-center justify-evenly">
          {allTypes.map((items) => (
            <Link to={`/${items.id}`}>
              <div
                className={
                  type === items.id
                    ? "flex  relative items-center pb-5 gap-3 text-xl text-zomato-400 border-b-4 border-zomato-400 "
                    : "flex  items-center text-xl gap-4"
                }
              >
                <div
                  className={
                    type === items.id &&
                    "absolute -top-3 w-full h-2  border-zomato-400"
                  }
                />
                {items.icon}
                <h5 className="text-md">{items.name}</h5>
              </div>
            </Link>
          ))}
          </div>
        </>
    );
};


const FoodTab = () => {
    return (
        <>
        <div>
            <MobileTab />
            <Laptop />
        </div>
        </>
    );
} ;

export default FoodTab

//master_url: type

//delivery , dinning out , night life 