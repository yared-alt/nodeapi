const wrraper=(clbk)=>{
    return async (req,res,next)=>{
        try {
            await clbk(req,res,next);
        } catch (error) {
            next(error)
        }
    }
}

export default wrraper;