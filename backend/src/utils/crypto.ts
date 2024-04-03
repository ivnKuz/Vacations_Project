  
import { createHash, createHmac } from 'crypto';
import userDTO from '../models/auth/user-dto'
import { sign } from 'jsonwebtoken';
  export function hashPassword(plainTextPassword:string, salt:string): string{
    return createHmac('md5', salt)// <= spreading salt in password 
    .update(`${plainTextPassword}`) 
    .digest('hex');
}

//returns json web token jwt
export function generateJWT(user: userDTO, secret: string, expiresIn: string): string {
  //deleting password from jwt token, so it wont appear in it
    delete user.password;
    return sign({ user }, secret,{ expiresIn});
}