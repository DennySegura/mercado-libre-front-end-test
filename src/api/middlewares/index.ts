import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import * as httpStatus from 'http-status-codes';
import { ErrorsService } from '../errors';

export const middlewaresApi = {
  httpStatusError: {
    mountPoint: '',
    handler: (error: any, req: Request, res: Response) => {
      const errorResponse: any = error ? new ErrorsService(error).item : httpStatus.INTERNAL_SERVER_ERROR;
      res.status(error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR).json({ error: errorResponse });
    }
  },
  httpStatusNotFound: {
    mountPoint: '',
    handler: (error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
      res.statusCode === httpStatus.NOT_FOUND && res.json({ message: httpStatus.NOT_FOUND });
    }
  }
};
