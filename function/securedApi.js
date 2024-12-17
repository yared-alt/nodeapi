import connection from "../lib/connection/connecToMysql.js";
import wrraper from "../middlware/async-wrraper/wrraper.js";
import  ApierrorCreator  from "../error/customErrorClass.js";
import dotenv from "dotenv";
dotenv.config();


export const securedApi = wrraper(async (req, res, next) => {
    await connection.execute("select * from register", (err, row) => {
        if (err) {
            return next(new ApierrorCreator(`syntax errorrrr : ${err}`, 400))
        }
        console.log(row);
        
        return res.status(200).json({ sucsess: true, msg: row });
    })
})