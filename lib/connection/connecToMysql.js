import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config()

const connection=mysql.createConnection({
   Host:process.env.Host,
   User:process.env.User,
   Password:process.env.Password,
    Database:process.env.Database
});

export default connection;
