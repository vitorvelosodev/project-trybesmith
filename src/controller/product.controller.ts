import { Request, Response } from 'express';
import productService from '../service/product.service';

async function createProduct(req: Request, res: Response) : Promise<void> {
  const { name, price, orderId } = req.body;
  const createdProduct = await productService.createProduct({ name, price, orderId });
  res.status(201).json(createdProduct);
}

export default {
  createProduct,
};