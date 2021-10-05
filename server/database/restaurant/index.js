import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, requierd: true },
    city: { type: String, requierd: true },
    address: { type: String, requierd: true },
    mapLocation: { type: String, requierd: true },
    cuisine: [String],
    restaurantTimings: String,
    contactNumber: Number,
    website: String,
    popularDishes: [String],
    averageCost: Number,
    amenities: [String],  //amenities-> featuers
    menuImages: {
        type: mongoose.Types.ObjectId, ref: "Images"
    },
    menu: {
        type: mongoose.Types.ObjectId, ref: "Menus"
    },
    reviews: [{
        type: mongoose.Types.ObjectId, ref: "Reviews"
    }],
    photos: {
        type: mongoose.Types.ObjectId, ref: "Images"
    },
},
{
    timesamps: true
});

export const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);