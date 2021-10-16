import React from 'react'
import {TiStarFullOutline} from "react-icons/ti"

const RestaurantInfo = (props) => {
    return (
        <>
            <div className="my-4">
              <div className="flex flex-col flex-col-reverse gap-3 md:flex-row  md:items-center justify-between">
                <h1 className="text-xl md:text-3xl md:font-bold">{props.name}</h1>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-white font-medium bg-green-600 rounded px-2 py-1">
                      {props.restaurantRating} <TiStarFullOutline />
                    </span>
                    <span>
                      <strong></strong>
                      <p className="border-b border-gray-400 border-dashed">Dining reviews</p>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-white font-medium bg-green-600 px-2 py-1 rounded">
                      {props.deliveryRating} <TiStarFullOutline />
                    </span>
                    <span>
                      <strong></strong>
                      <p className="border-b border-gray-400 border-dashed">Delivery reviews</p>
                    </span>
                    </div>
                </div>
              </div>

              <div className="text-base md:text-lg text-gray-700">
                <h3>{props.cuisine}</h3>
                <h3 className="text-gray-400">{props.address}</h3>
                <h3>
                  <span className="text-yellow-700">Open now</span> 8:00am - 10pm
                </h3>
              </div>
            </div>
        </>
    )
}

export default RestaurantInfo
