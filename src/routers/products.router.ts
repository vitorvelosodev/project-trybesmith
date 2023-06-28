import { Router } from 'express';
import productController from '../controller';

const productsRouters = Router();

productsRouters.post('/', productController.createProduct);

export default productsRouters;