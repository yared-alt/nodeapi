import mysql from "mysql2";
import dotenv from "dotenv";
// import ApierrorCreator  from "../../error/customErrorClass.js";
dotenv.config()

const connection=mysql.createConnection({
    host:process.env.Host,
    user:process.env.User,
    password:process.env.Password,
    database:process.env.Database
});

// connection.connect((err) => { 
//     if (err) { 
//         // console.error('Error connecting to MySQL: ' + err.stack); 
//         // return res.status(444).json({errrr:err});
//          return new ApierrorCreator({"erraaa":err.message},444); 
//     } 
//     else{
//         console.log('Connected to MySQL successfully!'); 
//     }
// });

// you can export the module after connection is sucsesed aditionally!!

// connection.connect((err)=>{
//    if(err){
//       res.status(444).json({errrr:err});
//    // res.status(333).json{"myqglerrmsg":err.stack}
//    }else{
//       // res.status(200).json{"connection is sucsessed"}
// console.log("connection is sucssesd");
//    }
export default connection;
