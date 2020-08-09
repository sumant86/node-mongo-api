import express from 'express';
import { apiRouter } from './api';

export const appRouter = express.Router();
appRouter.use('/api', apiRouter);
