import {observable, action, computed, observe} from 'mobx';
import {getData} from '../../../../../../services/accessRulesService';
import boardDataStore from '../../../../../../stores/boardDataStore';

export class TitleBarStore {
    @observable isLoading = false;
    @observable boardTitle = boardDataStore.boardName;
    @observable canShowShareButton = false;
    @observable isDialogVisible = false;

    constructor() {
        observe(boardDataStore, ({ newValue }) => {
            this.boardTitle = newValue;
        })

        getData()
            .then(({canShowShareButton}) => {
                this.canShowShareButton = canShowShareButton
            })
    }

    @action showModal() {
        this.isDialogVisible = true;
    }

    @action hideModal() {
        this.isDialogVisible = false;
    }

}

export default new TitleBarStore();
