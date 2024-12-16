import express from "express"
import {getAllusers, login, securedApi, signUp} from "../controller/controller.js";
import notFound from "../middlware/pageNotFound.js";
import auth from "../middlware/auth.js";

const route=express.Router();

route.route("/userx").get(getAllusers);
route.route("/signUp").post(signUp);
route.route("/login").post(login);
route.route("/secured/api").get(auth,securedApi);
route.route("/*").get(notFound);

export default route;
