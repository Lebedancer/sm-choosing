import {
    ACCESSRULES_LOAD_START,
    ACCESSRULES_LOAD_FINISH,
} from "../actions/types/accessRulesTypes";
import StatusEnum from "../../../enums/StatusEnum";


export default function accessRules(state = {}, action: any) {
    switch (action.type) {
        case ACCESSRULES_LOAD_START:
            return state = {...state, status: StatusEnum.Loading};
        case ACCESSRULES_LOAD_FINISH:
            return state = {...state,  data: action.data, status: StatusEnum.Loaded}
        default:
            return state
    }
}