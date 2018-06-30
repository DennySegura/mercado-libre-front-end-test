import { ErrorRequestHandler, Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import * as expressHealthcheck from 'express-healthcheck';
import * as config from 'config';
import * as compress from 'compression';
import * as morgan from 'morgan';
import * as cors from 'cors';
import { logger } from './../core/logger';
import { Api } from './../api';
import { ErrorsService } from './../api/errors';

const CONFIG_SERVER = 'server';
const ConfigServer = config.get(CONFIG_SERVER);
const baseUrl = `${(ConfigServer as any).baseUrl}`;

export const middlewaresServer: { [index: string]: any; } = {
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
    mountPoint: ``,
    handler: (error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
      const reqLocals = { ...req, ...new ErrorsService(error).item };
      logger.error({ req: reqLocals });
      next();
    }
  }
};
export const routesServer: { [index: string]: any; } = {
  index: {
    verb: ['get'],
    mountPoint: `${baseUrl}/pruebas`,
    handler: (req: Request, res: Response) => {
      res.render('index', { title: 'mercado-libre-front-end-test', basePath: `${baseUrl}/` });
    }
  }
};
