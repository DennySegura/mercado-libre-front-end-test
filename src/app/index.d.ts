declare module '*.json' {
    const value: any;
    export default value;
}

declare module 'react-lottie';

interface RequestOptions {
  mode: string;
  headers: IRequestHeaders;
}

interface IRequestHeaders {
  Accept: string;
  ['Content-Type']: string;
  ['X-Language']?: string;
}

interface RequestBuilderParameters {
  url: string;
  options: RequestBuilderOptions;
}

interface RequestBuilderOptions {
  requestOptions;
  method: string;
  body: any;
}

declare function buildURL(string): string;

declare function request(url: string, options: RequestBuilderOptions): any;

declare function network(): any;

interface AppHelper {
  [ index: string ]: any;
}

interface ReducerBuilderDescriptor {
  [ index: string ]: (state: any, action: any) => any;
}

declare function createReducer(reduxState: any, descriptor: ReducerBuilderDescriptor): any;

interface SearchFilterProps {
  value: string | null | undefined;
  onChange: Function | undefined;
  onPress: Function | undefined;
}

interface BreadCrumbProps {
  categories: string[];
}

interface ButtonProps {
  text: string;
}

interface ProductDescriptionProps {
  description: string;
}

interface ProductInfoProps {
  condition: string;
  price: ItemPrice;
  title: string;
  sold_quantity: number;
  t?: any;
}

interface ProductAvailabilityProps {
  id: string;
  price: ItemPrice;
  title: string;
  picture: string;
  free_shipping: boolean;
  location: string | null | undefined;
}

interface ItemPrice {
  decimals: number;
  amount: number;
  currency: string;
}

interface SearchBoxProps {
  location: any;
  history: any;
  data?: any;
  error?: any;
  keyword: string;
  inputValue: string;
  searchProducts: Function;
  clearWindow: Function;
  changeInput: Function;
  onChange: Function;
  onPress: Function;
}
interface SearchBoxState {
  searched: string;
}

interface ItemDetailProps {
  match: any;
  data?: any;
  error?: any;
  keyword: string;
  inputValue: string;
  searchProduct: Function;
  clearWindow: Function;
  changeInput: Function;
  onChange: Function;
  onPress: Function;
}

interface LayoutContainerProps {
  match: any;
  location: any;
  history: any;
  data?: any;
  error?: any;
  keyword: string;
  inputValue: string;
  searchProducts: Function;
  clearWindow: Function;
  changeInput: Function;
  onChange: Function;
  onPress: Function;
}
interface LayoutContainerState {
  inputValue: string;
}

interface NotFoundContainerProps {
  value: string | null | undefined;
  onChange: Function;
  onPress: Function;
}

interface SearchBoxContainerProps {
  value: string | null | undefined;
  onChange: Function;
  onPress: Function;
}
