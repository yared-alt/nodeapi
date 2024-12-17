// import {getAllusers, login, securedApi, signUp} from "../controller/controller.js";

import express from "express"
import { signUp } from "../function/signUp.js";
import { login } from "../function/login.js";
import { securedApi} from "../function/securedApi.js";
import { getAllusers } from "../function/getAllusers.js";
import notFound from "../middlware/pageNotFound.js";
import auth from "../middlware/auth.js";

const route=express.Router();

route.route("/userx").get(getAllusers);
route.route("/").get(getAllusers);
route.route("/signUp").post(signUp);
route.route("/login").post(login);
route.route("/secured/api").get(auth,securedApi);
route.route("/*").get(notFound);

export default route;
