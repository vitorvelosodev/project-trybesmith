import { Model } from 'sequelize';
import { Product } from '../types/Product';
import ProductModel, { ProductInputtableFields } from '../model/product.model';

async function getAll(): Promise<Model<Product, ProductInputtableFields>[]> {
  try {
    const allProducts = await ProductModel.findAll();
    return allProducts;
  } catch (err) {
    throw new Error();
  }
}

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
  getAll,
  createProduct,
};