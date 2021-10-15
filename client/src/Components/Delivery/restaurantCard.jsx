import React from 'react'
import { AiTwotoneStar } from "react-icons/ai";

const restaurantCard = (props) => {
    return (
        <>
            <div className="bg-white p-3 rounded-2xl hover:shadow-lg mb-3 transition duration-700 ease-in-out w-full md:w-1/2 lg:w-1/3 pb-2">
                <div className="w-full h-56 lg:h-65 relative">
                    <div className="absolute flex w-full items-end justify-between bottom-3">
                       <div className="flex flex-col gap-2 items-start">
                         {props.isPro && (
                             <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">Pro extra 10% off</span>
                         )}
                         {props.isOff && (
                             <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">₹{`${props.isOff}`} 0ff </span>
                         )}
                       </div>
                       <span className="bg-white bg-opacity-75 p-1 rounded mr-3">{props.durationOfDelivery} min</span>
                    </div>
                    <img 
                    src={props.photos.length && props.photos[0]}
                    alt="food"
                    className="w-full h-full rounded-lg"
                    />
                </div>
                <div className="my-2 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl font-medium">{props.name}</h4>
                        <span className="bg-green-800 text-white text-sm flex items-center p-1 rounded mr-3">
                            {props.restaurantReviewValue} <AiTwotoneStar />
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-gray-500">
                        <p>{props.cuisine.join(", ")}</p>
                        <p>₹{props.averageCost}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default restaurantCard;
