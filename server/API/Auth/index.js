import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//models
import { UserModel } from "../../database/user";
const Router = express.Router();

/*
Route       /signup
Descrip     Signup with email and password
params      None
access      public
method      POST
*/

Router.post("/signup", async(req,res) => {
    try {
        const { email, password, fullname, phoneNumber } = req.body.credentials;

        //check whether email or phonenumber exists
        const checkByEmail = await UserModel.findOne({ email });
        const checkByPhone = await UserModel.findOne({ phoneNumber });

        if(checkByEmail || checkByPhone ) {
            return res.json({error: "User already exists"})
        }

        //hashing and salting
        const bcrptSalt = await bcrypt.genSalt(8);

        const hashedPassword = await bcrypt.hash(password, bcrptSalt);

        // database
        await UserModel.create({
            ...req.body.credentials,
            password: hashedPassword
        }); // .create is used to create feild inside 

        //JWT Auth token
        const token = jwt.sign({user: {fullname, email}}, "ZomatoApp")

        return res.status(200).json({token});
    }
    catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;

//hashing -> encrypting
//salting -> repeating hashing to increase security