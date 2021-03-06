import React, {useState} from 'react'

//components
import DeliveryCarousel from './DeliveryCarousel'
import Brand from './Brand'
import RestaurantCard from './restaurantCard'

const Delivery = () => {

    const [restaurantList, setRestaurantList] = useState([
        {
          _id: "123456",
          photos: [
            "https://b.zmtcdn.com/data/pictures/chains/8/18443088/d26f90bcacb3caeb175479a90e1eddb2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          ],
          name: "Samosa Party",
          cuisine: ["Street Food", "Beverages", "Tea"],
          averageCost: 100,
          isPro: true,
          isOff: 80,
          durationOfdelivery: 47,
          restaurantReviewValue: 4.1,
        },
        {
          _id: "123456-3",
          photos: [
            "https://b.zmtcdn.com/data/pictures/4/95314/9410759d611db9c62c3acc23c1f27e06.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          ],
          name: "KFC",
          cuisine: ["Burger", "Beverages", "Fast Food"],
          averageCost: 400,
          isPro: true,
          isOff: 80,
          durationOfdelivery: 43,
          restaurantReviewValue: 3.2,
        },
        {
          _id: "123456-2",
          photos: [
            "https://b.zmtcdn.com/data/pictures/chains/6/50036/db2271e47065db0a611237066279297b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          ],
          name: "Al-Bek",
          cuisine: ["Mughlai", "Arabian", "North Indian", "Chinese", "Seafood"],
          averageCost: 100,
          isPro: true,
          isOff: 80,
          durationOfdelivery: 47,
          restaurantReviewValue: 4.1,
        },
      ]);

    return (
        <>
            <DeliveryCarousel />
            {/*<Brand />*/}
            <div className="flex flex-wrap justify-between">
              {restaurantList.map((restaurant) => (
                  <RestaurantCard {...restaurant} key={restaurant.id} />
              ))}
            </div>
            
        </>
    )
}

export default Delivery
