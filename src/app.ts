import express from 'express';
import routers from './routers';
import loginRouter from './routers/login.router';

const app = express();

app.use(express.json());
app.use('/products', routers.productsRouters);
app.use('/orders', routers.orderRouters);
app.use('/login', loginRouter);

export default app;