import connection from "../lib/connection/connecToMysql.js";
import jwt from "jsonwebtoken";
import { hashh, cheker } from "../middlware/byrpt/bycrip.js";
import wrraper from "../middlware/async-wrraper/wrraper.js";
import  ApierrorCreator  from "../error/customErrorClass.js";
import dotenv from "dotenv";
dotenv.config();

    
export const securedApi = wrraper(async (req, res, next) => {
    await connection.execute("select * from register", (err, result) => {
        if (err) {
            return next(new ApierrorCreator(`syntax errorrrr : ${err}`, 400))
        }
        console.log(result);
        
        return res.status(200).json({ sucsess: true, msg: result });
    })
})

export const login = wrraper(async (req, res, next) => {
    // console.log(req.body);
    const { password, email } = req.body;
    connection.execute(`select Password from register where Email="${email}"`, async (err, result) => {
        if (err) {
            console.log("invalid db execute : " + err);
            return next(new ApierrorCreator(`syntax errorrrr : ${err}`, 400));
        }
        const hashedPass = result[0].Password;
        const comparePass = await cheker(password, hashedPass);

        if (!comparePass) {
            return next(new ApierrorCreator(`invalid password!! `, 403))
        }
        const token = jwt.sign({ email }, process.env.Jwt_screte, { expiresIn: "1m" });
        return res.json({ sucsess: true, token: token });
    })
})

export const getAllusers = wrraper(async (req, res,next) => {
        await connection.execute(`select * from register`, (err, result) => {
            if (err) {
                console.log(err);
                return next(new ApierrorCreator(`Syntax error : ${err}`,400));
            } if (result.length > 0) {
                console.table(result);
                return res.status(200).json({ msg: result });
            }
            return next(new ApierrorCreator("user does not exist  : ", 404))
        })

})

export const signUp = wrraper(async (req, res, next) => {
    const { fullname, username, email, password } = req.body;
        if ((fullname === "") || (username === "") || (email === "") || (password === "")) {
            return next(new ApierrorCreator("empty field detected! fill all fields",400))
        }
        const hashedPasswordData = await hashh(password);
        const sql1 = `select * from register where email="${email}" or username="${username}"`;
        await connection.execute(sql1, (err, result) => {
            if (err) {
                // if there is syntax error 
                return next(new ApierrorCreator(`syntax error on sign up  : ${err}`,404))
            } else {
                if (result.length > 0) {
                    // if there is data with the same email or error
                return next(new ApierrorCreator(`user alredy exist !`,400))
                } else {
                    //if there is no data that duplication then register the user
                    const values = [fullname, username, email, hashedPasswordData];
                    const sql = `insert into register (fullName,username,email,password) values(?,?,?,?)`;
                    connection.execute(sql, values, (err, result) => {
                        if (!err) {
                            console.table(result);
                            return res.status(200).json({ msg: { sucsess: true, msg: "user registerd succsesfully" } });
                        } else
                            return next(new ApierrorCreator(`syntax error on registering user  :  ${err}`,404))
                    })
                }
            }
        })
})

