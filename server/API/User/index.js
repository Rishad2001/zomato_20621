import express from "express";
import {UserModel } from "../../database/allModels";

//vallidate 
import { ValidateUsertId } from "../../validation/user";

const Router = express.Router();

/*
Route       /
Des         get an users data
Params      _id
Access      Public
Method     GET
*/

Router.get("/:_id", async(req,res) => {
    try {
        await ValidateUsertId(req.params);

        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);
        return res.json({user: getUser});
    }  catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route       /update
Des         update an users data
Params      _userid
Access      Public
Method      PUT
*/

Router.put("/update/:_userid", async(req,res) => {
    try {
        await ValidateUsertId(req.params);
        
        const { userId } = req.params;
        const { userData } = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(
            userId,
            {
                $set: userData
            },
            {
                new: true
            },
        )
        return res.json({user: updateUserData});
    }  catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;