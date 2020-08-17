import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import { promiseMiddleware, localStorageMiddleware } from './middleware';
import { canvasActionsMiddleware } from './middleware';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import boardInfoSaga from './sagas/boadInfoSaga'
import accessRulesSaga from './sagas/accessRulesSaga'
// import { combineReducers } from 'redux';

// import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

const defaultSagas = {
    boardInfoSaga,
    accessRulesSaga
}

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
// const myRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware()
// const getMiddleware = () => {
//     if (process.env.NODE_ENV === 'production') {
//         return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
//     } else {
//         // Enable additional logging in non-production environments.
//         return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger())
//     }
// };

function createSagaInjector(runSaga: any, rootSaga: any) {
    // Create a dictionary to keep track of injected sagas
    const injectedSagas = new Map();

    const isInjected = (key: any) => injectedSagas.has(key);

    const injectSaga = (key: any, saga: any) => {
        // We won't run saga if it is already injected
        if (isInjected(key)) return;

        // Sagas return task when they executed, which can be used
        // to cancel them
        const task = runSaga(saga);

        // Save the task if we want to cancel it in the future
        injectedSagas.set(key, task);
    };

    // Inject the root saga as it a staticlly loaded file,
    if (typeof rootSaga === 'function') {
        injectSaga('root', rootSaga);
    } else if(typeof rootSaga === 'object' && rootSaga !== null) {
        const keys = Object.keys(rootSaga);

        keys.forEach(key => {
            injectSaga(key, rootSaga[key]);
        })

    }

    return injectSaga;
}

const initialStore = {
    platform: {
        isMobile: false
    }
}

function configureStore(initialState: any) {
    // Add sagas middleware

    const store: any = createStore(reducer(), initialState, applyMiddleware(sagaMiddleware, canvasActionsMiddleware));
    // Add injectSaga method to our store

    store.asyncReducers = {}

    store.injectSaga = createSagaInjector(sagaMiddleware.run, defaultSagas);

    store.injectReducer = (key: string, asyncReducer: any) => {
        store.asyncReducers[key] = asyncReducer;
        store.replaceReducer(reducer(store.asyncReducers));
    };

    // sugar
    store.injectReduxStuff = (key: string, module: any,) => {
        store.injectReducer(key, module.reducer);
        store.injectSaga(key, module.saga);
    };

    return store;
}

export const store = configureStore(initialStore);