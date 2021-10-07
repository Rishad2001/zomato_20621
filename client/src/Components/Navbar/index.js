import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { GoLocation } from "react-icons/go"

//for mobile screen
const NavSm = () => {
    return (
    <>
    <div className= "items-center justify-between flex w-full md:hidden">
        {/*logo image */}
        <div className="w-28">
            <img 
            src = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt = "logo"
            className = "w-full h-full"
            />
       </div>
                  
        <diV className= "flex items-center gap-3">
            <button className="bg-zomato-400 py-2 px-3 text-white rounded-full"> Use app</button>
           <span className= "border p-2 border-blue-300 text-blue-400 rounded-full">
             <FaPizzaSlice />
            </span>
        </diV>
    </div>
    </>
    )
}

//for tablet screen
const NavLg = () => {
    return (
    <>
    <div className= "items-center justify-between lg:flex w-full sm:hidden md:hidden">
        {/*logo image */}
        <div className="w-28">
            <img 
            src = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt = "logo"
            className = "w-full h-full"
            />
       </div>

       {/**search bar */}
       <div className="flex items-center  bg-white  w-3/5 gap-1  shadow-md rounded-md">
           <GoLocation className= "w-10 h-6" />
           <input 
              className="bg-transparent w-2/5 focus:outline-none border-r-2 border-gray-300"
              type = "search"
              placeholder= "city"
           />
            <BiSearch  className= "w-12 h-6" />
           <input 
              className="bg-transparent w-3/5 focus:outline-none border-none"
              type = "search"
              placeholder= "city"
           />
       </div>
                  
        <diV className= "flex items-center gap-3">
            <button className="bg-zomato-400 py-2 px-3 text-white rounded-full"> Use app</button>
           <span className= "border p-2 border-blue-300 text-blue-400 rounded-full">
             <FaPizzaSlice />
            </span>
        </diV>
    </div>
    </>
    )
}

const Navbar = () => {
    return (
        <>
            <nav className="p-4 flex bg-white shadow-md items-center">
                <NavSm />
                <NavLg />
            </nav>
        </>
    );
}

export default Navbar;