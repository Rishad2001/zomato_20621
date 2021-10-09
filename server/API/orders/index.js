import express from "express";
import { OrderModel } from "../../database/allModels";
import passport from "passport"; //is for authentication


//validate
import { ValidateRestaurantId } from "../../validation/food";
import {ValidateFoodOrder} from "../../validation/order";

const Router = express.Router();

/*
Route       /
Des         get all orders based on id
Params      _id
Access      Public
Method     GET
*/

Router.get("/:_id",passport.authenticate("jwt", {session: false}), async(req,res) => {
    try {
        //await ValidateRestaurantId(req.params);
        const { _id } = req.params;
        const getOrders = await OrderModel.findOne({user: _id});

        if(!getOrders) {
            return res.status(404).json({error: "User not found"})
        }
    }  catch (error) {
        return res.status(500).json({error: error.message})
    }
});

/*
Route       /new
Des         add new orders 
Params      _id
Access      Public
Method     POST
*/

Router.post("/new/:_id", async(req,res) => {
    try {
        await ValidateFoodOrder(req.body);
        
        const { _id } = req.params;
        const { orderDetails } = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
            user: _id
        },
        {
            $push: {orderDetails: orderDetails}
        },
        {
            new: true
        }
        );

        return res.json({order: addNewOrder});
    }  catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;