import React from "react";

//Navbar
import Navbar from "../Components/Navbar";

const HomeLayout = (props) => {
    return (
        <>
        <div className="container mx-auto  lg:px-20">
            <Navbar />
           {props.children}
        </div>
        </>
    );
}

export default HomeLayout;