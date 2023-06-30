import { Router } from 'express';
import controllers from '../controller';

const orderRouters = Router();

orderRouters.get('/', controllers.orderController.getAll);

export default orderRouters;