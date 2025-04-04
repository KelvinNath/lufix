import jwt from "jsonwebtoken";

const SECRET=process.env.JWT_SECRET!;

export const generateToken=(id:string)=>{
    return jwt.sign({id}, SECRET ,{expiresIn:"1h"});
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, SECRET);
  };