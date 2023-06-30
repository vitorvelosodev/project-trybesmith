import { DataTypes, ModelDefined, Optional } from 'sequelize';
import { Order } from '../types/Order';
import db from '../database/models';
import ProductModel from './product.model';

export type OrderInputtableFields = Optional<Order, 'id'>;

type OrderSequelizeModelCreator = ModelDefined<Order, OrderInputtableFields>;

const OrderModel: OrderSequelizeModelCreator = db.define('Order', {
  userId: DataTypes.NUMBER,
}, {
  timestamps: false,
  underscored: true,
});

OrderModel.hasMany(ProductModel, {
  sourceKey: 'id',
  foreignKey: 'orderId',
  as: 'productIds',
});

export default OrderModel;