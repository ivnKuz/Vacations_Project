import { NextFunction, Request, Response } from "express";


export default function enforceGuest (req: Request, res: Response, next: NextFunction) {
        return next();
    
}