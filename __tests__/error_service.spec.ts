process.env.NODE_CONFIG_DIR = `${__dirname}/../../env/`;
import 'jest';
import { ErrorService } from '../src/api/errors';

const serverError = {
    id: 'invalid input',
    isTrustedError: true
};
const errorCreated =   {
    isTrustedError: true,
    message: 'invalid input',
    status: 500,
    response: {
      "title": "Ups, tuvimos un error",
      "message": "Volvé a intentar en unos minutos"
    }
};
describe('Test suites for ErrorsService', () => {
    it('It should expecting create an errorService object from server error code', () => {
        const error = new ErrorService(serverError).Item;
        expect(error.response).toMatchObject(errorCreated.response);
    });
    it('It should expecting create an errorService with trustedError value from server', () => {
        const error = new ErrorService(serverError).Item;
        expect(error.isTrustedError).toBe(errorCreated.isTrustedError);
    });
    it('It should expecting create an errorService with http status code', () => {
        const error = new ErrorService(serverError).Item;
        expect(error.status).toBeTruthy();
    });
});
