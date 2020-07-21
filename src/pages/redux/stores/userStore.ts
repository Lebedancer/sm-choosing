import {observable, action, computed} from 'mobx';
import {getData} from '../../../services/userService';

class BoardStore {
    @observable public loading: boolean = true;
    @observable public userId: number = -1;
    @observable public userName: string = '';

    constructor() {
        getData()
            .then(({userId, userName}) => {
                this.loading = false
                this.userName = userName
                this.userId = userId
            })
    }

    @action
    async getUserId() {
        let {userId} = this;

        if (userId < 0) {
            const result = await getData();
            userId = result.userId
        }

        return userId
    }
}

export default new BoardStore();