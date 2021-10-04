import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

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
        await UserModel.findEmailAndPhone(req.body.credentials)
 
        // database
        const newUser = await UserModel.create({...req.body.credentials,});
         // .create is used to create feild inside 

        //JWT Auth token
        const token = newUser.generateJwtToken()

        return res.status(200).json({token});
    }
    catch (error) {
        return res.status(500).json({error: error.message});
    }
});


/*
Route       /signin
Descrip     Signin with email and password
params      None
access      public
method      POST
*/

Router.post("/signin", async(req,res) => {
    try {
        const user = await UserModel.findByEmailAndPassword(
            req.body.credentials
        );
 
        //JWT Auth token
        const token = user.generateJwtToken()

        return res.status(200).json({token, status: "success"});
    }
    catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route       /google
Descrip     google Signin 
params      None
access      public
method      GET
*/
/*
Router.get("/google", passport.authenticate("google",{
    scope: [
        "https://googleapis.com/auth/userinfo.profile",
        "https://googleapis.com/auth/userinfo.email"
    ],
}));

/*
Route       /google
Descrip     google Signin callback
params      None
access      public
method      GET
*/
/*
Router.get("/google/callback", passport.authenticate("google", {failureRedirect:"/"}),
(req,res) => {
    return res.json({token: req.session.passport.user.token});
}
);
*/

export default Router;

//hashing -> encrypting
//salting -> repeating hashing to increase security

//methods are used after creating an instance 
//statics are used without crfeating an instance

//example
//UserModel.ourStatic()
//CheckUserByEmail.ourMethods()