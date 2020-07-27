import { store } from '../../store';
import { loadBoardData } from '../../actions/boardInfoActionCreators'
import { loadAccessRules } from '../../actions/accessRulesActionCreators'

// load all required data
store.dispatch(loadBoardData());
store.dispatch(loadAccessRules());

export const component = import('./index');