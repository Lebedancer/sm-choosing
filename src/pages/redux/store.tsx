import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'

import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import mySaga from './routes/Dashboard/Dashboard.web/sagas'

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware()
// const getMiddleware = () => {
//     if (process.env.NODE_ENV === 'production') {
//         return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
//     } else {
//         // Enable additional logging in non-production environments.
//         return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger())
//     }
// };

const initialStore = {
    platform: {
        mobile: false
    }
}

export const store = createStore(
    reducer, initialStore, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga)