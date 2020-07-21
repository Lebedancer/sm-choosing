import {observable, action, observe} from 'mobx';
import boardStore from '../../../../stores/boardStore';
import accessRulesStore from '../../../../stores/accessRulesStore';

type LoadingObj = {
    isBoardDataLoading: boolean
    isAccessRulesLoading: boolean
}

class TitleBarStore {
    @observable public isLoading = boardStore.loading;
    @observable public boardTitle = boardStore.boardName;
    @observable public canShowShareButton = accessRulesStore.canShowShareButton;
    @observable public isTitleDialogVisible = false;
    @observable public isShareDialogVisible = false;

    // private loadingObj: LoadingObj = {
    //     isBoardDataLoading: true,
    //     isAccessRulesLoading: true,
    // };

    constructor() {
        this.initObservers()
    }

    @action showModal() {
        this.isTitleDialogVisible = true;
        this.isShareDialogVisible = false;
    }

    @action showShareModal() {
        this.isShareDialogVisible = true;
        this.isTitleDialogVisible = false;
    }

    @action hideModal() {
        this.isTitleDialogVisible = false;
    }

    @action hideShareModal() {
        this.isShareDialogVisible = false;
    }

    initObservers() {
        observe(boardStore, (change) => {
            if (change.type === "update") {

                const {name, newValue} = change;

                if (name === 'boardName') {
                    this.boardTitle = newValue
                }

                if (name === 'loading') {
                    this.isLoading = newValue
                }
            }
        })

        observe(accessRulesStore, (change) => {
            if (change.type === "update") {

                const {name, newValue} = change;

                if (name === 'canShowShareButton') {
                    this.canShowShareButton = newValue
                }
            }
        })
    }
}

export default TitleBarStore;