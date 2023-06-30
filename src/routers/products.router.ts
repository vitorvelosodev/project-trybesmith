import { Router } from 'express';
import controllers from '../controller';

const productsRouters = Router();

productsRouters.post('/', controllers.productController.createProduct);
productsRouters.get('/', controllers.productController.getAll);

export default productsRouters;