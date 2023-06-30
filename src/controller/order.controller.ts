import { Request, Response } from 'express';
import services from '../service';

async function getAll(_req: Request, res: Response) : Promise<Response> {
  try {
    const allOrders = await services.orderService.getAll();
    return res.status(200).json(allOrders);
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error' });
  }
}

export default {
  getAll,
};