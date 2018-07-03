# Mercado Libre Front-End Test

## Requirements

* Mac OS X, Windows, or Linux
* [Node.js](https://nodejs.org/) version 9.0+

## Directory Layout

Before you start, take a moment to see how the project structure looks like:

```
.
├── __tests__             # test file *.spec*
├── configs               # project config files, pm2, webpack, jest
├── src                   # project sources
│   ├── api               # Api middleware => communication between front-end and mercado-libre-api
│   │    ├── components     # schemas, models, controllers, services, endpoints of api-resource
│   │    ├── errors         # errors translations i18n
│   │    └── middlewares    # http status middlewares
│   ├── app               # React Application
│   │    ├── assets         # application resources
│   │    ├── components     # react-componentes
│   │    ├── config         # router, constants and translations
│   │    ├── containers     # react-pages
│   │    ├── flux           # persist layer
│   │    └── helper         # custom functions for react-application
│   ├── core              # nodejs application
│   │    ├── architecture   # nodejs server definition
│   │    ├── helpers        # custom functions for nodejs-application
│   │    ├── logger         # logger definition and configuration
│   │    └── translations   # i18n configuration and handler
│   ├── env               # configs files for all environments
│   └── middlewares       # nodejs server middlewares
└── package.json
```

## Quick start
1. Clone the repo and install all dependencies

````bash
git clone git@github.com:DennySegura/mercado-libre-front-end-test.git
cd mercado-libre-front-end-test
npm install
````

3. Run server

* Production mode

````bash
npm run build
npm run start
````

* Development mode

````bash
npm run build:watch
npm run start:watch
````

# API Reference

## Resource components
Major resource components supported by the API are:

- items

These can be used alone like this

| resource      | description                       |
|:--------------|:----------------------------------|
| `/items`      | return all items                  |

## Parameters

Parameters can be used to query, filter and control the results returned by the API.

| parameter                    | description                 |
|:-----------------------------|:----------------------------|
| `q`                          | query parameter                 |
| `id`                         | relation to filter results by specific id |


## Tests

````bash
npm run jest
npm run jest-watch
````



## Heath check

Endpoint to health check **http://{HOST}/api/health** this return uptime

## Sample Components
### SearchInput
![search-input](screenshots/search-input.png)
### AppBar
![app-bar](screenshots/app-bar.png)
### BreadCrumb
![bread-crumb](screenshots/breadcrumb.png)
### Button
![button](screenshots/button.png)
### ProductInfo
![product-info](screenshots/product-info.png)
### ProductDescription
![product-description](screenshots/product-description.png)

## Developers
* [Denny Segura](https://github.com/dennysegura)
