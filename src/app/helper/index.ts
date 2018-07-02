import axios from 'axios';

const buildURL = (path = '') => {
  return [
    'http://localhost:7000',
    'api',
    'items',
    path
  ].join('/');
};
const defaultOptions = {
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Language': (navigator as any).language || (navigator as any).userLanguage
  }
};
const request = async (url:string, options:any) => {
  if (!url) {
    throw new Error('Preflight request error: URL parameter required');
  }
  if (!options) {
    throw new Error('Preflight request error: options parameter required');
  }
  return axios({ ...options, url })
  .then((response: any) => {
    console.log('respuestita',response)
    if (response.status > 200) {
      throw new Error(`Server error: ${response.status} status`);
    }
    return response.data;
  });
}
export const helper = {
  moneyFormat(value: number){
    const _value = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.').split('.');
    _value.pop()
    return _value.join('.');
  }
};
export const network =() => {
  return {
    post: (path: string, body = {}) => {
      return request(buildURL(path), Object.assign(defaultOptions,{method: 'POST',body: JSON.stringify(body)}));
    },
    get: (path: string) => {
      return request(buildURL(path), Object.assign(defaultOptions,{ method: 'GET' }));
    }
  }
};
