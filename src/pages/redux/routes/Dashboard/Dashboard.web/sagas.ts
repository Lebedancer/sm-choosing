import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getData } from '../../../../../services/dashboardService'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
const fetchUserPr = () => getData()

function* fetchUser() {
    try {
        const list = yield call(fetchUserPr);
        yield put({type: "DASHBOARD_LOADED", data: { list }});
    } catch (e) {
        yield put({type: "DASHBOARD_FAILED", message: e.message});
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//     yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
    yield takeLatest("DASHBOARD_LOADING", fetchUser);
}

export default mySaga;