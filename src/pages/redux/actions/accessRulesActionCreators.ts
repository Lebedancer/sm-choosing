import { ACCESSRULES_LOAD_START } from './types/accessRulesTypes'
import StatusEnum from '../../../enums/StatusEnum'
import { store } from '../store'

const state = store.getState();

export function loadAccessRules() {
    if (state?.accessRules?.status !== StatusEnum.Loaded) {
        return { type: ACCESSRULES_LOAD_START }
    }
}

export default {loadAccessRules};

