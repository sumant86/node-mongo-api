import { NotFoundError } from '../utils';

const products = [
    {
        id: '1',
        name: 'Product 1',
    },
    {
        id: '2',
        name: 'Product 2',
    },
    {
        id: '3',
        name: 'Product 3',
    },
];

function getProduct(id) {
    const product = products.find((product) => product.id === id);
    return product
        ? Promise.resolve(product)
        : Promise.reject(new NotFoundError());
}

function getProducts() {
    return Promise.resolve(products);
}

export const productRepository = {
    getProduct,
    getProducts,
};
