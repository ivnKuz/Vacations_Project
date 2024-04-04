import { NextFunction, Request, Response } from "express";
import getModel from "../../models/vacations/factory";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import config from 'config';
import createHttpError, { Unauthorized } from "http-errors";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // throw new Error('custom error')
        const vacations = await getModel().getAll();
        // res.json(products.map(p => convertProductToImageUrl(p)));
        res.json(vacations); // same as ^
    } catch (err) {
        next(err);
    }
}