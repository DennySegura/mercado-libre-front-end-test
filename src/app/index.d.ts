interface requestOptions {
  mode: string,
  headers: requestHeaders
}

interface requestHeaders {
  Accept: string,
  'Content-Type': string,
  'X-Language': string
}

interface requestBuilderParameters {
  url: string,
  options: requestBuilderOptions
}

interface requestBuilderOptions {
  requestOptions,
  method: string,
  body: any
}

declare function buildURL(string): string

declare function request(url: string, options: requestBuilderOptions): any

declare function network(): any

interface helper {
  moneyFormat(v: number): string
}

interface reducerBuilderDescriptor {
  [ index: string ]: (state: any, action: any) => any
}

declare function createReducer(reduxState: any, descriptor: reducerBuilderDescriptor): any
