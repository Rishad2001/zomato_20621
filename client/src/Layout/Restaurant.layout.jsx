import React from 'react'
import {TiStarOutline} from "react-icons/ti"
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';
import InfoButtons from '../Components/restaurant/InfoButtons';

const RestaurantLayout = () => {
    return (
        <>
              <div className="lg:px-20">
                <RestaurantNavbar />
              </div>
            <div className="container mx-auto px-4 lg:px-20">
              <ImageGrid 
              image={[
                "https://b.zmtcdn.com/data/pictures/9/19908739/8633b9c8d636d746344a6c67bdfe4a8f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/9/19908739/8633b9c8d636d746344a6c67bdfe4a8f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/9/19908739/8633b9c8d636d746344a6c67bdfe4a8f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/9/19908739/8633b9c8d636d746344a6c67bdfe4a8f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
              ]}
              />
              <RestaurantInfo 
              name="Sree Lakshmi Restaurant" 
              restaurantRating="3.5" 
              deliveryRating="4.0" 
              cuisine="South Indian, Street food" 
              address="Marad, Kochi" />

              <div className="my-4 flex flex-wrap gap-3">
                <InfoButtons isActive>
                  <TiStarOutline /> Add Review
                </InfoButtons>
                <InfoButtons>
                  <RiDirectionLine /> Direction
                </InfoButtons>
                <InfoButtons>
                  <BiBookmarkPlus /> Bookmark
                </InfoButtons>
                <InfoButtons>
                  <RiShareForwardLine /> Share
                </InfoButtons>
              </div>
          </div>
        </>
    )
}

export default RestaurantLayout;
