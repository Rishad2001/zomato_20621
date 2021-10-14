import React from "react";

//components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

const HomeLayout = (props) => {
    return (
        <>
        <div className="container mx-auto pz-4 lg:px-20"> 
            <Navbar />
            {props.children}
            <FoodTab />
        </div>
        </>
    )
}

export default HomeLayout;