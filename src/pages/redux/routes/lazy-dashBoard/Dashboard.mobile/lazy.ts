import reducer1 from '../Dashboard.web/reducer'
import sagas from '../Dashboard.web/sagas'
import { store } from '../../../store';

export const reducer = reducer1;
export const saga = sagas;

store.dispatch({type: 'DASHBOARD_LOADING'});

export const component = import('./index');