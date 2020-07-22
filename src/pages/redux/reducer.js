import { combineReducers } from 'redux';
import dashboardReducer from './routes/Dashboard/Dashboard.web/reducer';
import platformReducer from './reducers/platfomrReducer';

const staticReducers = {
    platform: platformReducer
}

export default function createReducer(asyncReducers) {
    return combineReducers({
        dashboard: dashboardReducer,
        // platform: platformReducer,
            ...asyncReducers
    });
}

// export default combineReducers({
//     dashboard: dashboardReducer,
//     platform: platformReducer
//   // router: routerReducer
// });
