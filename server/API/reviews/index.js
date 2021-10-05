import express from "express";
import { ReviewModel } from "../../database/allModels";

//validate
import { ValidateReview } from "../../validation/reviews";

const Router = express.Router();

/*
Route       /new
Des         add new review
Params      None
BODY        Review object
Access      Public
Method     POST
*/

Router.post("/new", async(req,res) => {
    try {
        await ValidateReview(req.body);
        
        const { reviewData } = req.body;

        await ReviewModel.create(reviewData);

        return res.json({review: "Successfull Created Review"})
    }  catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route       /delete
Des         delete a review
Params      _id
BODY        Review object
Access      Public
Method      DELETE
*/

Router.delete("/delete/:_id", async(req,res) => {
    try {
        const { reviewData } = req.body;

        await ReviewModel.findByIdAndDelete(reviewData);

        return res.json({review: "Successfull deleted Review"})
    }  catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;