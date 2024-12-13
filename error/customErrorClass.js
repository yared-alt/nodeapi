class Apierror extends Error{
    constructor(msg,statuscode){
        super(msg)
        this.statuscode=statuscode;
        this.message=msg
    }
}

export const ApierrorCreator=(msg,statuscode)=>{
    return new Apierror(msg,statuscode);
}
export default Apierror;