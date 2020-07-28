import { BOARD_INFO_LOAD, BOARD_INFO_CHANGE_TITLE } from './types/boardInfoTypes'


import StatusEnum from '../../../enums/StatusEnum'
import { store } from '../store'

const state = store.getState();

// load board data with check
export function loadBoardData() {
    if (!state.board || (state?.board?.status !== StatusEnum.Loaded)) {
        return { type: BOARD_INFO_LOAD }
    }

    return { type: ''}
}

export function changeTitle(title: string) {
    return { type: BOARD_INFO_CHANGE_TITLE, title }
}

export default {loadBoardData};

