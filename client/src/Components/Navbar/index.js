import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { GoLocation } from "react-icons/go"

//for mobile screen
const NavSm = () => {
    return (
    <>
    <section className="w-full">
    <div className= "items-center flex justify-between sm:flex w-full lg:hidden md:hidden">
        {/*logo image */}
        <div className="w-28">
            <img 
            src = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt = "logo"
            className = "w-full h-full"
            />
       </div>
                  
        <div className= "flex items-center gap-3">
            <button className="bg-zomato-400 py-2 px-3 text-white rounded-full"> Use app</button>
           <span className= "border p-2 border-blue-300 text-blue-400 rounded-full">
             <FaPizzaSlice />
            </span>
        </div>
    </div>

    {/** Delivery, Dining Out Nightlife*/}
    <section className="fixed bottom-0 w-full">
    <div className = "pt-9 flex items-center justify-start gap-4 bottom-0 ">
        {/**Delivery */}
        <div className="mb-5 hover:text-red-400 flex  ">
        <div className ="w-9 h-9 bg-blue-200  rounded-full hover:bg-red-300">
            <img 
            src = "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
            className = "w-full h-full "
            alt = "delivery image"
            />
            </div>
            <p className="pl-4 font-black text-xl">Delivery</p>
        </div>
        
        {/**Dinning Out */}
        <div className="mb-5 hover:text-red-400 flex">
        <div className ="w-9 h-9 bg-blue-200  rounded-full hover:bg-red-300  ">
            <img 
            src = "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
            className = "w-full h-full position:relative"
            alt = "delivery image"
            />
            </div>
            <p className="pl-4 font-black text-xl">Dinning Out</p>
        </div>
        </div>
    </section>
    </section>
    </>
    )
}

//for tablet screen
const NavMd = () => {
    return (
    <>
    <section className="w-full">
    <div className= "items-center flex justify-between hidden w-full lg:hidden md:flex">
        {/*logo image */}
        <div className="w-28">
            <img 
            src = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt = "logo"
            className = "w-full h-full"
            />
       </div>
                  
        <div className= "flex items-center gap-3">
            <button className="bg-zomato-400 py-2 px-3 text-white rounded-full"> Use app</button>
           <span className= "border p-2 border-blue-300 text-blue-400 rounded-full">
             <FaPizzaSlice />
            </span>
        </div>
    </div>

    {/** Delivery, Dining Out Nightlife*/}
    <section className="fixed bottom-0 w-full">
    <div className = "pt-9 flex items-center justify-evenly position:absolute bottom-0 ">
        {/**Delivery */}
        <div className="mb-5 hover:text-red-400 flex  ">
        <div className ="w-9 h-9 bg-blue-200  rounded-full hover:bg-red-300">
            <img 
            src = "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
            className = "w-full h-full "
            alt = "delivery image"
            />
            </div>
            <p className="pl-4 font-black text-xl">Delivery</p>
        </div>
        
        {/**Dinning Out */}
        <div className="mb-5 hover:text-red-400 flex">
        <div className ="w-9 h-9 bg-blue-200  rounded-full hover:bg-red-300  ">
            <img 
            src = "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
            className = "w-full h-full position:relative"
            alt = "delivery image"
            />
            </div>
            <p className="pl-4 font-black text-xl">Dinning Out</p>
        </div>
        </div>
    </section>
    </section>
    </>
    )
}

const NavLg = () => {
    return (
    <>
     <section className="display:block w-full">
     <div className= "items-center justify-between sm:hidden lg:flex w-full md:hidden ">
        {/*logo image */}
        <div className="w-28">
            <img 
            src = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt = "logo"
            className = "w-full h-full"
            />
       </div>

       {/**search bar */}
       <div className="flex items-center  bg-white  w-3/5 gap-1  shadow-md rounded-md p-2">
           <GoLocation className= "w-10 h-6 pb-2 text-red-600"/>
           <input 
              className="bg-transparent w-2/5 focus:outline-none border-r-2 border-gray-300"
              type = "search"
              placeholder= "city"
           />
            <BiSearch  className= "text-red-400 w-12 h-6 pb-3/5" />
           <input 
              className="bg-transparent w-3/5 focus:outline-none border-none"
              type = "search"
              placeholder= "city"
           />
       </div>
            {/**use app and logo */}
        <div className= "flex items-center gap-3">
            <button className="bg-zomato-400 py-2 px-3 text-white rounded-full"> Use app</button>
           <span className= "border p-2 border-blue-300 text-blue-400 rounded-full">
             <FaPizzaSlice />
            </span>
        </div>
    </div>
    
    {/** Delivery, Dining Out Nightlife*/}
    <div className = "pt-9 flex items-center justify-evenly  ">
        {/**Delivery */}
        <div className="mb-5 hover:text-red-400 flex  ">
        <div className ="w-9 h-9 bg-blue-200  rounded-full hover:bg-red-300">
            <img 
            src = "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
            className = "w-full h-full "
            alt = "delivery image"
            />
            </div>
            <p className="pl-4 font-black text-xl">Delivery</p>
        </div>
        
        {/**Dinning Out */}
        <div className="mb-5 hover:text-red-400 flex">
        <div className ="w-9 h-9 bg-blue-200  rounded-full hover:bg-red-300  ">
            <img 
            src = "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
            className = "w-full h-full position:relative"
            alt = "delivery image"
            />
            </div>
            <p className="pl-4 font-black text-xl">Dinning Out</p>
        </div>

        {/**Nightlife */}
        <div className="mb-5 hover:text-red-400 flex">
        <div className ="w-9 h-9 bg-blue-200  rounded-full hover:bg-red-300 ">
            <img 
            src = "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
            className = "w-full h-full position:relative"
            alt = "delivery image"
            />
            </div>
            <p className="pl-4 font-black text-xl">Nightlife</p>
        </div>
    </div>
     </section>
    </>
    )
}

const Navbar = () => {
    return (
        <>
            <nav className="p-4 flex bg-white shadow-md lg:shadow-none items-center">
               <div className="md:hidden w-full">
          {/* Mobile screen */}
          <NavSm />
        </div>
          <div className="w-full hidden md:flex lg:hidden">
            {/* Medium/Tab screen */}
          <NavMd />  
         </div>
        <div className="hidden w-full lg:flex">
          {/* Large screen */}
          <NavLg />
        </div>
            </nav>
        </>
    );
}

export default Navbar;