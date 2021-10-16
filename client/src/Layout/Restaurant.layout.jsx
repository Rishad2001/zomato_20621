import React from 'react'

//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';

const RestaurantLayout = () => {
    return (
        <>
              <RestaurantNavbar />
              <ImageGrid 
              image={[
                "https://b.zmtcdn.com/data/pictures/9/19908739/8633b9c8d636d746344a6c67bdfe4a8f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/9/19908739/8633b9c8d636d746344a6c67bdfe4a8f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/9/19908739/8633b9c8d636d746344a6c67bdfe4a8f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                "https://b.zmtcdn.com/data/pictures/9/19908739/8633b9c8d636d746344a6c67bdfe4a8f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
              ]}
              />
            
        </>
    )
}

export default RestaurantLayout;
