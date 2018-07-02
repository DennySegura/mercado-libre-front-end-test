import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducer'

const loggerMiddleware = createLogger({
    collapsed: true,
    level: 'info',
    duration: true
})
const middlewares = [thunk, loggerMiddleware, promiseMiddleware()]
export const store = createStore(
    reducers(),
    composeWithDevTools(applyMiddleware(...middlewares))
)
