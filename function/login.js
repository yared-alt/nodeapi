import connection from "../lib/connection/connecToMysql.js";
import jwt from "jsonwebtoken";
import { cheker } from "../middlware/byrpt/bycrip.js";
import wrraper from "../middlware/async-wrraper/wrraper.js";
import  ApierrorCreator  from "../error/customErrorClass.js";
import dotenv from "dotenv";
dotenv.config();


export const login = wrraper(async (req, res, next) => {
    // console.log(req.body);
    const { password, email } = req.body;
    connection.execute(`select Password from register where Email="${email}"`, async (err, row) => {
        if (err) {
            console.log("invalid db execute : " + err);
            return next(new ApierrorCreator(`syntax errorrrr : ${err}`, 400));
        }
        const hashedPass = row[0].Password;
        const comparePass = await cheker(password, hashedPass);

        if (!comparePass) {
            return next(new ApierrorCreator(`invalid password!! `, 403))
        }
        const token = jwt.sign({ email }, process.env.Jwt_screte, { expiresIn: "1m" });
        return res.json({ sucsess: true, token: token });
    })
})