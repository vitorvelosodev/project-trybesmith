import express from 'express';
import routers from './routers';

const app = express();

app.use(express.json());
app.use('/products', routers.productsRouters);
app.use('/orders', routers.orderRouters);

export default app;