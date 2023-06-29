import { Router } from 'express';
import productController from '../controller';

const productsRouters = Router();

productsRouters.post('/', productController.createProduct);
productsRouters.get('/', productController.getAll);

export default productsRouters;