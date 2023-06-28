// import TransactionModel from '../database/models/transaction.model';

import { Product } from '../types/Product';
import ProductModel, { ProductInputtableFields } from '../model/product.model';

async function createProduct(product : ProductInputtableFields): Promise<Product> {
  const newTransaction = await ProductModel.create(product);

  return newTransaction.dataValues;
}

export default {
  createProduct,
};