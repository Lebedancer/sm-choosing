import { call, put, takeLatest, select } from 'redux-saga/effects'
import { loadBoard, deleteBoard, changeTitle } from '../../../services/boardService'
import {
    BOARD_INFO_LOAD,
    BOARD_INFO_LOAD_START,
    BOARD_INFO_LOAD_FINISH,
    BOARD_INFO_LOAD_FAIL,
    BOARD_INFO_CHANGE_TITLE,
    BOARD_INFO_CHANGE_TITLE_START,
    BOARD_INFO_CHANGE_TITLE_FINISH,
    BOARD_INFO_CHANGE_TITLE_FAIL,
} from '../actions/types/boardInfoTypes'

function* loadBoardInfoFunc() {
    yield put({type: BOARD_INFO_LOAD_START});
    try {
        const boardInfo = yield call(() => loadBoard());
        yield put({type: BOARD_INFO_LOAD_FINISH, data: boardInfo});
    } catch (e) {
        yield put({type: BOARD_INFO_LOAD_FAIL, message: e.message});
    }
}

function* changeTitleFunc(action: any) {
    const { boardInfo } = yield select()

    const oldTitle = boardInfo?.data?.boardName;
    const title = action.title;
    yield put({type: BOARD_INFO_CHANGE_TITLE_START, title});

    try {
        yield call(() => changeTitle(title));
        yield put({type: BOARD_INFO_CHANGE_TITLE_FINISH});
    } catch (e) {
        yield put({type: BOARD_INFO_CHANGE_TITLE_FAIL, message: e.message, title: oldTitle});
    }
}

function* boardInfoSaga() {
    yield takeLatest(BOARD_INFO_LOAD, loadBoardInfoFunc);
    yield takeLatest(BOARD_INFO_CHANGE_TITLE, changeTitleFunc);
}

export default boardInfoSaga;