import express from 'express';
import { usersRouter } from './user';
import { productsRouter } from './product';

export const apiRouter = express.Router();
apiRouter.use('/users', usersRouter);
apiRouter.use('/products', productsRouter);
