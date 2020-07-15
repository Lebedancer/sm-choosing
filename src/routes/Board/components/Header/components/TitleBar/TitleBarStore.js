import {observable, action, observe} from 'mobx';
import {getData} from '../../../../../../services/accessRulesService';
import boardStore from '../../../../../../stores/boardStore';

class TitleBarStore {
    @observable isLoading = false;
    @observable boardTitle = boardStore.boardName;
    @observable canShowShareButton = false;
    @observable isDialogVisible = false;

    constructor() {
        observe(boardStore, ({ newValue }) => {
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

export default TitleBarStore;