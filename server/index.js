import express from "express";
import cors from "cors";
import helmet from "helmet";

//database connection
import ConnectDB from "./database/connection";

//API
import Auth from "./API/Auth";

//env variable
require("dotenv").config();

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

//for application routes
//localhost:4000/auth/signup
zomato.use("/auth", Auth);

zomato.get("/", (req,res) => res.json({ message: "setup Sucess Yay!!" }));

zomato.listen(4000, () =>
ConnectDB().then(() => console.log("server is up & running"))
.catch(() => console.log("DB connection failed")));