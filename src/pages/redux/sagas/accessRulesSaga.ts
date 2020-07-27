import {
    ACCESSRULES_LOAD_START,
    ACCESSRULES_LOAD_FINISH,
    ACCESSRULES_LOAD_FAILED,
} from '../actions/types/accessRulesTypes'
import {call, put, takeLatest} from 'redux-saga/effects'
import {getData} from '../../../services/accessRulesService'

function* loadAccessRules() {
    try {
        const data = yield call(() => getData());
        yield put({type: ACCESSRULES_LOAD_FINISH, data});
    } catch (e) {
        yield put({type: ACCESSRULES_LOAD_FAILED, message: e.message});
    }
}

function* accessRulesSaga() {
    yield takeLatest(ACCESSRULES_LOAD_START, loadAccessRules);
}

export default accessRulesSaga;