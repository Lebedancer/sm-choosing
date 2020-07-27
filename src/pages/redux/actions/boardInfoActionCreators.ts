import { BOARD_INFO_LOAD_START } from './types/boardInfoTypes'


import StatusEnum from '../../../enums/StatusEnum'
import { store } from '../store'

const state = store.getState();

// load board data with check
export function loadBoardData() {
    if (!state.board || (state?.board?.status !== StatusEnum.Loaded)) {
        return { type: BOARD_INFO_LOAD_START }
    }

    return { type: ''}
}

export default {loadBoardData};

