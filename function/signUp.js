import connection from "../lib/connection/connecToMysql.js";
import jwt from "jsonwebtoken";
import { hashh, cheker } from "../middlware/byrpt/bycrip.js";
import wrraper from "../middlware/async-wrraper/wrraper.js";
import  ApierrorCreator  from "../error/customErrorClass.js";
import dotenv from "dotenv";
dotenv.config();



export const signUp = wrraper(async (req, res, next) => {
    const { fullname, username, email, password } = req.body;
        if ((fullname === "") || (username === "") || (email === "") || (password === "")) {
            return next(new ApierrorCreator("empty field detected! fill all fields",400))
        }
        const hashedPasswordData = await hashh(password);
        const sql1 = `select * from register where email="${email}" or username="${username}"`;
        await connection.execute(sql1, (err, row) => {
            if (err) {
                // if there is syntax error 
                return next(new ApierrorCreator(`syntax error on sign up  : ${err}`,404))
            } else {
                if (row.length > 0) {
                    // if there is data with the same email or error
                return next(new ApierrorCreator(`user alredy exist !`,400))
                } else {
                    //if there is no data that duplication then register the user
                    const values = [fullname, username, email, hashedPasswordData];
                    const sql = `insert into register (fullName,username,email,password) values(?,?,?,?)`;
                    connection.execute(sql, values, (err, row) => {
                        if (!err) {
                            console.table(row);
                            return res.status(200).json({ msg: { sucsess: true, msg: "user registerd succsesfully" } });
                        } else
                            return next(new ApierrorCreator(`syntax error on registering user  :  ${err}`,404))
                    })
                }
            }
        })
})