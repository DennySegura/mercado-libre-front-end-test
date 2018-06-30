import { Request, Response, NextFunction } from 'express';
import { productRoutes } from './product';

const apiRoutes = {
  '/': {
    verb: ['get'],
    handler: (req: Request, res: Response, next: NextFunction) => {
      res.json({});
    }
  }
};
export const routesApi: { [index: string]: any } = {
  ...apiRoutes,
  ...productRoutes
};
