import { Request, Response } from 'express';
import productService from '../service/product.service';

async function createProduct(req: Request, res: Response) : Promise<Response> {
  const { name, price, orderId } = req.body;
  try {
    if (!name || !price || !orderId) throw new Error();
    const createdProduct = await productService.createProduct({ name, price, orderId });
    return res.status(201).json(createdProduct);
  } catch (err) {
    return res.status(400).json({ message: 'Error' });
  }
}

export default {
  createProduct,
};