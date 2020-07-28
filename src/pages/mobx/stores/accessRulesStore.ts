import { observable, action, computed } from 'mobx';
import { getData } from '../../../services/accessRulesService';

class AccessRulesStore {
    @observable public loading: boolean = true;
    @observable public canShowShareButton: boolean = true;

    constructor() {
        getData()
            .then(({ canShowShareButton}) => {
                this.setRules({ canShowShareButton })
            })
    }

    @action setRules({ canShowShareButton }: {canShowShareButton: boolean}) {
        this.canShowShareButton = canShowShareButton
    }
}

export default new AccessRulesStore();