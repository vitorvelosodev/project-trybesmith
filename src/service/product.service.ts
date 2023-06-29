import { Product } from '../types/Product';
import ProductModel, { ProductInputtableFields } from '../model/product.model';

async function createProduct(product : ProductInputtableFields): Promise<Product> {
  const { name, price, orderId } = product;
  try {
    if (!name || !price || !orderId) throw new Error();
    const newTransaction = await ProductModel.create(product);
    return newTransaction.dataValues;
  } catch (err) {
    throw new Error();
  }
}

export default {
  createProduct,
};