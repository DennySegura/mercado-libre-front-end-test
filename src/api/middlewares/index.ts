/// <reference path="../../index.d.ts"/>
import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import * as httpStatus from 'http-status-codes';
import { ErrorService } from '../errors';

export const middlewaresApi: scheme = {
    'http-status-not-found': {
        mountPoint: '',
        handler: (error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
            res.statusCode === httpStatus.NOT_FOUND && res.json({ message: httpStatus.NOT_FOUND });
            next(error)
        }
    },
    'http-status-error': {
        mountPoint: '',
        handler: (error: any, req: Request, res: Response) => {
            const errorResponse: any = error ? new ErrorService(error).Item : httpStatus.INTERNAL_SERVER_ERROR;
            res.status(error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR).json({ error: errorResponse });
        }
    },
};
