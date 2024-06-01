import { NextFunction, Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
//404 PAGE NOT FOUND YAY
export const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
}