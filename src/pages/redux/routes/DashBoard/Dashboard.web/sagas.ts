import { call, put, takeLatest } from 'redux-saga/effects'
import { getData } from '../../../../../services/dashboardService'

const fetchUserPr = () => getData()

function* fetchUser() {
    try {
        const list = yield call(fetchUserPr);
        yield put({type: "DASHBOARD_LOADED", data: { list }});
    } catch (e) {
        yield put({type: "DASHBOARD_FAILED", message: e.message});
    }
}

function* mySaga() {
    yield takeLatest("DASHBOARD_LOADING", fetchUser);
}

export default mySaga;