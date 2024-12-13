import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config()

const connection=mysql.createConnection({
    host:process.env.Host,
    user:process.env.User,
    password:process.env.Password,
    database:process.env.Database
});

export default connection;