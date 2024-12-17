import connection from "../lib/connection/connecToMysql.js";

import wrraper from "../middlware/async-wrraper/wrraper.js";
import  ApierrorCreator  from "../error/customErrorClass.js";
import dotenv from "dotenv";
dotenv.config();


export const getAllusers = wrraper(async (req, res,next) => {
    await connection.execute(`select * from register`, (err, row) => {
        if (err) {
            console.log(err);
            return next(new ApierrorCreator(`Syntax error : ${err}`,400));
        } if (row.length > 0) {
            console.table(row);
            return res.status(200).json({ msg: row });
        }
        return next(new ApierrorCreator("user does not exist  : ", 404))
    })

})