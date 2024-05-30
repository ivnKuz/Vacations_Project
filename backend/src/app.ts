import express from "express";
import authRouter from './routers/auth';
import vacationRouter from './routers/vacations';
import  config  from "config";
import { notFound } from "./middlewares/not-found";
import { errorHandler } from "./middlewares/error-handler";
import cors from 'cors';
import { DraftHeadersVersion, rateLimit } from 'express-rate-limit'
import authentication from "./middlewares/authenitcation";
import expressFileUpload from 'express-fileupload'
import path from "path";
const server = express();
//setting a limiter
const limiter = rateLimit({
	windowMs: config.get<number>('rateLimit.windowMs'), 
	limit: config.get<number>('rateLimit.limit'),
	standardHeaders: config.get<boolean | DraftHeadersVersion>('rateLimit.standardHeaders'), 
	legacyHeaders: config.get<boolean>('rateLimit.legacyHeaders'), 
})
server.use(limiter);
server.use(authentication);
server.use(cors());
server.use(express.json());
server.use(expressFileUpload());
server.use('/api', authRouter)
server.use('/api', vacationRouter)
server.use('/images', express.static(path.resolve(config.get<string>('app.images.path'))));

// special middleware for not found error
server.use(notFound)

// error middlewares
server.use(errorHandler)

export default server;
