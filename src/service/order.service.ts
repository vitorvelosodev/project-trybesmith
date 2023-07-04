import { Model } from 'sequelize';
import { Order } from '../types/Order';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

type FilteredObject = { id: number, userId: number, productIds: { id: number }[] };

async function getAll(): Promise<Model<Order, OrderSequelizeModel>[]> {
  try {
    const allOrders = await OrderModel.findAll({
      include: {
        model: ProductModel,
        as: 'productIds',
        attributes: ['id'],
        
      },
    });

    const filteredOrders = JSON.parse(JSON.stringify(allOrders));

    const formattedOrders = filteredOrders.map((order : FilteredObject) => ({
      ...order,
      productIds: order.productIds.map((id: { id : number }) => id.id),
    }));

    return formattedOrders;
  } catch (err) {
    throw new Error();
  }
}

export default {
  getAll,
};