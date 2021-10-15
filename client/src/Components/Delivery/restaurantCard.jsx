import React from 'react'
import { AiTwotoneStar } from "react-icons/ai";

const restaurantCard = () => {
    return (
        <>
            <div className="bg-white p-2 rounded-2xl hover:shadow-lg transition duration-700 ease-in-out w-full md:w-1/2 lg:w-1/3 pb-20">
                <div className="w-full h-56 lg:h-65 relative">
                    <div className="absolute flex w-full items-end justify-between bottom-3">
                       <div className="flex flex-col gap-2 items-start">
                         <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">Pro extra 10% off</span>
                         <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">₹30 0ff </span>
                       </div>
                       <span className="bg-white bg-opacity-75 p-1 rounded mr-3">42 min</span>
                    </div>
                    <img 
                    src="https://b.zmtcdn.com/data/pictures/chains/1/95001/ba50a5176f9b3abf84a4b734543474a2_o2_featured_v2.jpg?output-format=webp"
                    alt=""
                    className="w-full h-full rounded-lg"
                    />
                </div>
                <div className="my-2 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl font-medium">Pizza Hut</h4>
                        <span className="bg-green-800 text-white text-sm flex items-center p-1 rounded mr-3">4.1 <AiTwotoneStar /></span>
                    </div>
                    <div className="flex items-center justify-between text-gray-500">
                        <p>Pizza, Fastfood, Desserts</p>
                        <p>₹200</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default restaurantCard;
