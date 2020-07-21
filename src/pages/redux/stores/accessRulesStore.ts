import { observable, action, computed } from 'mobx';
import { getData } from '../../../services/accessRulesService';

class BoardStore {
    @observable public loading: boolean = true;
    @observable public canShowShareButton: boolean = true;

    constructor() {
        getData()
            .then(({ canShowShareButton}) => {
                this.canShowShareButton = canShowShareButton
            })
    }
}

export default new BoardStore();