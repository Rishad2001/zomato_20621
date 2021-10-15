import React from 'react'

//components
import NightlifeCarousal from './NightlifeCarousal';

const Nightlife = () => {
    return (
        <div className="w-full">
            <NightlifeCarousal />
            <h1 className="my-4 text-xl md:my-8 text-3xl md:font-semibold">
                Dine-Out Restaurants in Kochi
            </h1>
        </div>
    )
}

export default Nightlife;
