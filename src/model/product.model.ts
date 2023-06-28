import { DataTypes, ModelDefined, Optional } from 'sequelize';
import { Product } from '../types/Product';
import db from '../database/models';

export type ProductInputtableFields = Optional<Product, 'id'>;

type ProductSequelizeModelCreator = ModelDefined<Product, ProductInputtableFields>;

const ProductModel: ProductSequelizeModelCreator = db.define('Product', {
  name: DataTypes.STRING,
  price: DataTypes.STRING,
  orderId: DataTypes.NUMBER,
}, {
  timestamps: false,
  underscored: true,
});

export default ProductModel;