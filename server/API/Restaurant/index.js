import { RestaurantModel } from "../../database/allModels";
import express from "express";

const Router = express.Router();

/*
Route       /
Des         Get all Restaurant details
Params      none
Access      Public
Method      GET
*/

Router.get("/", async(req,res) => {
    try{
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({city});
        return res.json({restaurants});
    }   catch(error)  {
        return res.status(500).json({error: error.message});
    }
});

/*
Route       /
Des         Get Perticular Restaurant details on id
Params      _id
Access      Public
Method      GET
*/

Router.get("/:_id", async(req,res) => {
    try{
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findOne(_id);

        if(!restaurant) {
            return res.status(404).json({error: "Restaurant not found"});
        }

        return res.json({restaurant});
    }   catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route       /search
Des         Get  Restaurant details on search
Params      none
Body        searchString
Access      Public
Method      GET
*/

Router.get("/search", async(req,res) => {
    try {
        const {searchString} = req.bod;
        const restaurnats = await RestaurantModel.find({
            //$regex is used to find substring and $options: "i" is used to avoid case sensitivness
            name: {$regex: searchString, $options: "i"},
        });
        return res.json({restaurnats});
    }  catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;