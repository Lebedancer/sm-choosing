import {observable, action, observe} from 'mobx';
import boardStore from '../../../../../../stores/boardStore';
import accessRulesStore from '../../../../../../stores/accessRulesStore';

type LoadingObj = {
    isBoardDataLoading: boolean
    isAccessRulesLoading: boolean
}

class TitleBarStore {
    @observable public isLoading = true;
    @observable public boardTitle = boardStore.boardName;
    @observable public canShowShareButton = accessRulesStore.canShowShareButton;
    @observable public isDialogVisible = false;

    // private loadingObj: LoadingObj = {
    //     isBoardDataLoading: true,
    //     isAccessRulesLoading: true,
    // };

    constructor() {
        this.initObservers()
    }

    @action showModal() {
        this.isDialogVisible = true;
    }

    @action hideModal() {
        this.isDialogVisible = false;
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

    // isLoadingProcess() {
    //     return Object.values(this.loadingObj).find(key => key);
    // }
}

export default TitleBarStore;