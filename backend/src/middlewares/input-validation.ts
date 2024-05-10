import { NextFunction, Request, Response } from "express";
import createHttpError, { BadRequest, InternalServerError } from "http-errors";
import Joi from "joi";


const validate = (validator: Joi.ObjectSchema) => async (req: Request, res: Response, next: NextFunction) => { 
    try{
       req.body = await validator.validateAsync(req.body, {
        abortEarly: false
       });
       return next();
    }catch(err){
        if(err.isJoi){
            return next(createHttpError(BadRequest(err.message)))
        }
        return next(createHttpError(InternalServerError(err)))
    }
}

export default validate;