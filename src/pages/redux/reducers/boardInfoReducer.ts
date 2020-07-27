import {
    BOARD_INFO_LOAD_START,
    BOARD_INFO_LOAD_FINISH,
    BOARD_INFO_DELETE_START,
    BOARD_INFO_DELETE_FINISH,
} from '../actions/types/boardInfoTypes'
import StatusEnum from '../../../enums/StatusEnum';

const defaultState = {
    boardTitle: '',
}

export default function boardInfo(state: any = defaultState, action: any) {
    switch (action.type) {
        case BOARD_INFO_LOAD_START:
            return state = {...state, status: StatusEnum.Loading};
        case BOARD_INFO_LOAD_FINISH:
            return state = {...state, data: action.data, status: StatusEnum.Loaded}
        case BOARD_INFO_DELETE_START:
            return state = {...state, deleteLoading: true};
        case BOARD_INFO_DELETE_FINISH:
            return state = {...state, deleteLoading: false};
        default:
            return state
    }
}
