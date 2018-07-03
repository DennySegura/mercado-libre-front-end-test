/// <reference path="../../index.d.ts"/>
import { Request, Response, NextFunction } from 'express';
import { productRoutes } from './product';

const apiRoutes: Scheme = {
  '/': {
    verb: ['get'],
    handler: (req: Request, res: Response, next: NextFunction) => {
      res.json({});
    }
  }
};
export const routesApi: Scheme = {
  ...apiRoutes,
  ...productRoutes
};
