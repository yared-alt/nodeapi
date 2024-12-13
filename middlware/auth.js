import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();
const auth = async (req, res, next) => {
    const token = req.headers.authorization;
    // const token=req.body;

    if (!token) {
        console.log("token is not present");
        res.status(400).json({ msg: "request with no token!!" });
    } else {
        const arr = [];
        try {
            const token1 = token.split(" ")[1];
            jwt.verify(token1, process.env.Jwt_screte, (err, result) => {
             
                if (err) {
                    // invalid token so maybe the token is expaierd so the user should be redirected to login page to login again
                    if (err.message === "jwt expired") {
                         
                        arr.push(token1);
                        const decoded = jwt.decode(token1, { complete: true }).payload.email;
                        const newToken = jwt.sign({ decoded }, process.env.Jwt_screte, { expiresIn: "10d" });

                        return res.status(220).json({
                            "possible": "yes",
                            "situation": "expired",
                            "text":"new token is genereted",
                            "Token": newToken
                        });
                    }
                    return res.status(400).json({ err: err.message });
                }
                req.user = result;
                // the user is authenticated so the data shoud be accesible
                //    return res.status(200).json({msg:"user authenticated !!"});                        
                next()
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export default auth;