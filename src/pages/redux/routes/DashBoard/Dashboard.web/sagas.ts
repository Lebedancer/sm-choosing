import { call, put, takeLatest } from 'redux-saga/effects'
import { getData } from '../../../../../services/dashboardService'
import { DASHBOARD_LOADING } from './actions/types';

const fetchUserPr = () => getData()

function* fetchUser() {
    try {
        debugger
        const list = yield call(fetchUserPr);
        yield put({type: "DASHBOARD_LOADED", data: { list }});
    } catch (e) {
        yield put({type: "DASHBOARD_FAILED", message: e.message});
    }
}

function* mySaga() {
    yield takeLatest(DASHBOARD_LOADING, fetchUser);
}

export default mySaga;