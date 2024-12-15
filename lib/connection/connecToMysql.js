import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config()

const connection=mysql.createConnection({
   Host:process.env.Host,
   User:process.env.User,
   Password:process.env.Password,
    Database:process.env.Database
});

connection.connect((err)=>{
   if(err){
      
   res.status(333).json{"myqglerrmsg":err.stack}
   }else{
      // res.status(200).json{"connection is sucsessed"}
console.log("connection is sucssesd");
   }
export default connection;
