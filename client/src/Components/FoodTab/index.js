import React, { useEffect, useState } from "react";
import { useParams, } from "react-router-dom";
import { BsHandbag } from "react-icons/bs"
import { IoBeerOutline } from "react-icons/io5";
import { GiMorgueFeet } from "react-icons/gi";

const MobileTab = () => {

    const [allTypes, setAllTypes] = useState([
        {
            id: `delivery`,
            icon: <BsHandbag />,
            name: `Delivery`,
            isActive: false
        },
        {
            id: `night`,
            icon: <IoBeerOutline />,
            name: `Nightlife`,
            isActive: false
        },
        {
            id: `dining`,
            icon: <GiMorgueFeet />,
            name: `Dining Out`,
            isActive: false
        },
    ]);

    const {type} = useParams();
    useEffect(() => {
        if(type) {
            const updateTypes = allTypes.map((item) => {
                if(item.id===type) {
                    return {...item, isActive: true};
                }

                return item;
            });
            setAllTypes(updateTypes);
        }
    },[type]);

    return (
        <>
          <div className="lg:hidden bg-white shadow-inner border p-3 fixed bottom-0 z-10 w-full flex items-center justify-between">
              
              <div className="flex flex-col items-center tezt-xl">
              <BsHandbag />
              <h5>Delivery</h5>
              </div>

              <div className="flex flex-col items-center tezt-xl">
              <GiMorgueFeet />
              <h5>Dinning Out</h5>
              </div>

              <div className="flex flex-col items-center tezt-xl">
              <IoBeerOutline />
              <h5>Nightlife</h5>
              </div>

          </div>
        </>
    );
};

const FoodTab = () => {
    return (
        <>
        <div>
            <MobileTab />
        </div>
        </>
    );
} ;

export default FoodTab

//master_url: type

//delivery , dinning out , night life 