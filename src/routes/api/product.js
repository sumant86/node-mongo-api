import express from 'express';
import asyncHandler from 'express-async-handler';
import { productService } from '../../services';

export const productsRouter = express.Router();

// Get all products
productsRouter.get(
    '/',
    asyncHandler(async (req, res) => {
        const products = await productService.getProducts();
        res.send(products);
    })
);

// Get one product
productsRouter.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const product = await productService.getProduct(id);
        res.send(product);
    })
);
