import express from "express";
import authRouter from './routers/auth';
import  config  from "config";
import { notFound } from "./middlewares/not-found";
import { errorHandler } from "./middlewares/error-handler";
import cors from 'cors';
import { DraftHeadersVersion, rateLimit } from 'express-rate-limit'
const server = express();

const limiter = rateLimit({
	windowMs: config.get<number>('rateLimit.windowMs'), 
	limit: config.get<number>('rateLimit.limit'),
	standardHeaders: config.get<boolean | DraftHeadersVersion>('rateLimit.standardHeaders'), 
	legacyHeaders: config.get<boolean>('rateLimit.legacyHeaders'), 
})

server.use(limiter);
server.use(cors());
server.use(express.json());

server.use('/api', authRouter)

// special middleware for not found error
server.use(notFound)

// error middlewares
server.use(errorHandler)

export default server;
