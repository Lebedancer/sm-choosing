import { store } from '../../../store';
import {
    DASHBOARD_LOADING
} from './actions/types';

export { default as saga } from './sagas'
export { default as reducer } from './reducer'

export const component = import('./index');