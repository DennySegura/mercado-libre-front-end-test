import * as release from './release.json';
import * as development from './development.json';
import * as test from './tests.json';

export const RELEASE = (release as any).server.env;
export const DEVELOPMENT = (development as any).server.env;
export const TEST = (test as any).server.env;
export const AUTHOR = {
    name: 'Denny',
    lastname: 'Segura'
};
