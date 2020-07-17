import {observable, action, computed, observe} from 'mobx';
import {getBoardRules} from '../../../../../services/accessRulesService';
import userStore from '../../../../../stores/userStore';
import { UserRole } from '../../../../../types/BoardTypes';
import {ListItem} from "../../../../../types/CommonTypes";
// import {BoardData} from "../../../types/BoardTypes";

// import accessRulesStore from "../../stores/accessRulesStore";

export interface IStore {
    boardName: string
    boardId: number
    actionsList: ListItem[] | undefined
    isListLoading: boolean
    loadList: () => void
}

interface IProps {
    boardName: string
    boardId: number
}

export class Store implements IStore {
    @observable boardName = '';
    @observable boardId = 0;
    @observable public actionsList: ListItem[] | undefined;
    @observable isListLoading = false;

    constructor({boardName, boardId}: IProps) {
        this.boardName = boardName;
        this.boardId = boardId;
    }

    @action
    async loadList() {
        const {boardId} = this;

        this.isListLoading = true;
        const userId = await userStore.getUserId();

        const {userRole} = await getBoardRules({boardId, userId});

        this.actionsList = this.getListForRole(userRole)
    }

    getListForRole(userRole: UserRole) {
        const list = [
            {name: 'Move to project'},
            {name: 'Open in new tab'},
        ]

        if (userRole === 'participant') {
            list.push({name: 'Share'});
            list.push({name: 'Rename'});
            list.push({name: 'Duplicate'});
        }

        if (userRole === 'admin') {
            list.push({name: 'Share'});
            list.push({name: 'Rename'});
            list.push({name: 'Duplicate'});
            list.push({name: 'Delete'});
            list.push({name: 'Change cover'});
        }

        return list;
    }
}

export default Store;
