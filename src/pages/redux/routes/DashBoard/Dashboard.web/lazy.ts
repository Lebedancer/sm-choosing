import { store } from '../../../store';
import {
    DASHBOARD_LOADING
} from './actions/types';

export { default as saga } from './sagas'
export { default as reducer } from './reducer'


store.dispatch({type: DASHBOARD_LOADING});

export const component = import('./index');