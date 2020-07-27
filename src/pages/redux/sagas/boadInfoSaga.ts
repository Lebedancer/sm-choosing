import { call, put, takeLatest } from 'redux-saga/effects'
import { loadBoard, deleteBoard } from '../../../services/boardService'

function* loadBoardInfoFunc() {
    try {
        const boardInfo = yield call(() => loadBoard());
        yield put({type: "BOARD_INFO_LOAD_FINISHED", data: boardInfo});
    } catch (e) {
        yield put({type: "BOARD_INFO_LOAD_FAILED", message: e.message});
    }
}

function* boardInfoSaga() {
    yield takeLatest("BOARD_INFO_LOAD_START", loadBoardInfoFunc);
}

export default boardInfoSaga;