import express from "express";
import cors from "cors";
import helmet from "helmet";
//import passport from "passport";

//config
//import googleAuthConfig from "./config/google.config"

//database connection
import ConnectDB from "./database/connection";

//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food"
import Menu from "./API/Menu";

//env variable
require("dotenv").config();

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
//zomato.use(passport.initialize());
//zomato.use(passport.session());

//passport configration
//googleAuthConfig(passport);

//for application routes  **micro services
//localhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food)
zomato.use("/menu", Menu)

zomato.get("/", (req,res) => res.json({ message: "setup Sucess Yay!!" }));

zomato.listen(4000, () =>
ConnectDB().then(() => console.log("server is up & running"))
.catch(() => console.log("DB connection failed")));