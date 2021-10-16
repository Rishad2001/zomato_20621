import React from 'react'
import { useParams } from 'react-router-dom'

//components
import Delivery from '../Components/Delivery';
import Dining from '../Components/Dining';
import Nightlife from '../Components/Nightlife';

const Home = () => {

    const { type } = useParams();

    return (
        <>
          <div className="m-5">
            { type === "delivery" && <Delivery />}
            { type === "dining" && <Dining />}
            { type === "night" && <Nightlife />}
          </div>
        </>
    )
}

export default Home
