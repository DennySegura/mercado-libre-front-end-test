import * as config from 'config';
import * as _ from 'lodash';
const SERVER_LOGGER = 'server';
const { apiBasePath } = config.get(SERVER_LOGGER);

export const endPoints = {
    'categories': _.template(`${apiBasePath}/categories/<%= category %>`),
    'search-box': _.template(`${apiBasePath}/sites/MLA/search?q=<%= query %>`),
    'item': _.template(`${apiBasePath}/items/<%= id %>`),
    'item-description': _.template(`${apiBasePath}/items/<%= id %>/description`)
};
