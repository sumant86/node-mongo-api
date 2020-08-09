import { productRepository } from '../repositoties';

function getProduct(id) {
    return productRepository.getProduct(id);
}

function getProducts() {
    return productRepository.getProducts();
}

export const productService = {
    getProduct,
    getProducts,
};
