/// <reference path="../index.d.ts" />
import { ErrorRequestHandler, Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import * as expressHealthcheck from 'express-healthcheck';
import * as config from 'config';
import * as compress from 'compression';
import * as morgan from 'morgan';
import * as cors from 'cors';
import { logger } from './../core/logger';
import { Api } from './../api';
import { ErrorService } from './../api/errors';

const CONFIG_SERVER = 'server';
const ConfigServer = config.get(CONFIG_SERVER);
const baseUrl = `${(ConfigServer as any).baseUrl}`;

export const middlewaresServer: scheme = {
    'health-check': {
        mountPoint: `${baseUrl}/health`,
        handler: expressHealthcheck()
    },
    'cross-domain': {
        mountPoint: '',
        handler: cors()
    },
    'url-encoded-parser': {
        mountPoint: '',
        handler: bodyParser.urlencoded({ extended: true })
    },
    'json-parser': {
        mountPoint: '',
        handler: bodyParser.json()
    },
    'compression': {
        mountPoint: '',
        handler: compress()
    },
    'http-request-logger': {
        mountPoint: '',
        handler: (req: Request, res: Response, next: NextFunction) => {
            (ConfigServer as any).env === 'development' && morgan('dev');
            next();
        }
    },
    'api': {
        mountPoint: `${baseUrl}`,
        handler: Api.bootstrap()
    },
    'error': {
        mountPoint: '',
        handler: (error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
            const err_response:any = new ErrorService(error).Item
            res.status(err_response.status).json({ data: err_response.response });
            logger.error(err_response);
            if(!err_response.isTrustedError)
                process.exit(1)
            next();
        }
    }
};
export const routesServer: scheme = {
    index: {
        verb: ['get'],
        mountPoint: `${baseUrl}`,
        handler: (req: Request, res: Response) => {
            res.render('index', { title: 'mercado-libre-front-end-test', basePath: `${baseUrl}/` });
        }
    }
};
