import Apierror from "./customErrorClass.js";

const handler=(err,req,res,next)=>{
    if(err instanceof Apierror){
        res.status(err.statuscode).json({err:err.message});
    }else{
        res.status(500).json({err: ` Internal server Error  : ${err}`});
    }   
}
export default handler;