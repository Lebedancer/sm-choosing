import { combineReducers } from 'redux';
import platformReducer from './reducers/platfomrReducer';

const staticReducers = {
    platform: platformReducer
}

export default function createReducer(asyncReducers) {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers
    });
}

// export default combineReducers({
//     dashboard: dashboardReducer,
//     platform: platformReducer
//   // router: routerReducer
// });
