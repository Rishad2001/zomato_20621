import React from "react";
import {FaUserAlt} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri"

const MoblieNav = () => {
    return (
        <div className ="flex items-center justify-between">
            <div className="w-28">
                    <img 
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                    alt="lll"
                    className="w-full h-full"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
                    <span className="border p-2 border-gray-300 text-zomato-400 rounded-full">
                        <FaUserAlt />
                    </span>
                </div>
        </div>
    )
}

const MediumNav = () => {
    return (
        <>
        <div className="hidden w-full md:flex items-center justify-between gap-2 ">
            {/**for logo image */}
        <div className="w-28">
                    <img 
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                    alt="lll"
                    className="w-full h-full"
                    />
                </div>
                {/**for search bars */}
                <div className="w-full bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded-md">
                    {/**for search 1 */}
                    <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                        <span className="text-zomato-400">
                            <HiLocationMarker />
                        </span>
                        <input type="text" placeholder="Kochi" />
                        <IoMdArrowDropdown />
                    </div>
                    {/**for search 2 */}
                    <div className= "flex gap-2 items-center">
                        <RiSearch2Line />
                        <input type="search" placeholder= 'Search for restaurant, cuisine or a dish' /> 
                    </div>
                </div>

                {/**login button */}
                <div className="flex gap-2">
                    <button className="text-gray-500 text-xl hover:text-gray-800">Login</button>
                    <button className="text-gray-500 text-xl hover:text-gray-800">Signup</button>
                </div>
    </div>
        </>
    )
}

const LargeNav = () => {
    return (
        <>
        <div className="hidden w-full lg:flex items-center justify-between gap-2 ">
            {/**for logo image */}
        <div className="w-28">
                    <img 
                    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
                    alt="lll"
                    className="w-full h-full"
                    />
                </div>
                {/**for search bars */}
                <div className="w-full lg:w-2/3 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded-md">
                    {/**for search 1 */}
                    <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                        <span className="text-zomato-400">
                            <HiLocationMarker />
                        </span>
                        <input type="text" placeholder="Kochi" className="w-full focus:outline-none" />
                        <IoMdArrowDropdown />
                    </div>
                    {/**for search 2 */}
                    <div className= "flex gap-2 w-full items-center">
                        <RiSearch2Line />
                        <input 
                        type="search" 
                        placeholder= 'Search for restaurant, cuisine or a dish' 
                        className="w-full focus:outline-none"
                        /> 
                    </div>
                </div>

                {/**login button */}
                <div className="flex gap-2">
                    <button className="text-gray-500 text-xl hover:text-gray-800">Login</button>
                    <button className="text-gray-500 text-xl hover:text-gray-800">Signup</button>
                </div>
    </div>
        </>
    )
}


const Navbar = () => {
    return (
        <>
            <nav className="p-4 px-2 flex items-center bg-white shadow-md lg:shadow-none">
                <div className="md:hidden w-full">
                    <MoblieNav />
                </div>
                <div className="hidden md:block lg:hidden w-full">
                    <MediumNav />
                </div>
                <div className="w-full hidden lg:flex">
                    <LargeNav />
                </div>
            </nav>
        </>
    )
}

export default Navbar;