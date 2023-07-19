import { config } from "dotenv";
import express from "express";
import session from "express-session";
import passport from "passport";

import PassportGoogleConfig from "./config/PassportGoogleConfig.js";
import googleRoutes from "./routes/googleRoutes.js";
import baseRoute from "./routes/router.js";

//env config;
config();

const app = express();

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", googleRoutes);
app.use("/", baseRoute);

app.use(passport.initialize());
app.use(passport.session());

//Passport JS
PassportGoogleConfig(passport);

app.get("/success", (req, res) => res.render("profile"));
app.get("/error", (req, res) => res.render("error"));

app.listen(process.env.PORT, () => console.log("Server is running!"));
