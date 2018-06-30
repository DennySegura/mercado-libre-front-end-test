import { Controller } from './controller';
export const productRoutes: { [index: string]: any } = {
    '/items/:id': {
        verb: ['get'],
        handler: Controller.getItem
    },
    '/items': {
        verb: ['get'],
        handler: Controller.getItems
    }
};
