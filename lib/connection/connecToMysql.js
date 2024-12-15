import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config()

const connection=mysql.createConnection({
    MYSQL_ADDON_HOST:process.env.Host,
   MYSQL_ADDON_USER:process.env.User,
   MYSQL_ADDON_PASSWORD:process.env.Password,
   MYSQL_ADDON_DB:process.env.Database
});

export default connection;
