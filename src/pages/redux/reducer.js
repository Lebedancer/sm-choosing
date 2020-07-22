import { combineReducers } from 'redux';
import dashboardReducer from './routes/Dashboard/Dashboard.web/reducer';
import platformReducer from './reducers/platfomrReducer';

export default combineReducers({
    dashboard: dashboardReducer,
    platform: platformReducer
  // router: routerReducer
});
