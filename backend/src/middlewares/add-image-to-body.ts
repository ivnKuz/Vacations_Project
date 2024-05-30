import { NextFunction, Request, Response } from "express";

//if there's an image file, add it to request body
export default function addImageToBody(req: Request, res: Response, next: NextFunction){
    if(req.files?.image){
        req.body.image = req.files?.image;
    }
    return next();

}