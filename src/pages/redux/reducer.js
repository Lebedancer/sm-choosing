import { combineReducers } from 'redux';
import platformReducer from './reducers/platfomrReducer';
import accessRulesReducer from './reducers/accessRulesReducer';
import boardInfoReducer from './reducers/boardInfoReducer';

const staticReducers = {
    platform: platformReducer,
    boardInfo: boardInfoReducer,
    accessRules: accessRulesReducer,
}

export default function createReducer(asyncReducers) {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers
    });
}
