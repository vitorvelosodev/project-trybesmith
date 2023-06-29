import { Request, Response } from 'express';
import productService from '../service/product.service';

async function getAll(_req: Request, res: Response) : Promise<Response> {
  try {
    const allProducts = await productService.getAll();
    return res.status(200).json(allProducts);
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error' });
  }
}

async function createProduct(req: Request, res: Response) : Promise<Response> {
  const { name, price, orderId } = req.body;
  try {
    const createdProduct = await productService.createProduct({ name, price, orderId });
    return res.status(201).json(createdProduct);
  } catch (err) {
    return res.status(400).json({ message: 'Error' });
  }
}

export default {
  getAll,
  createProduct,
};