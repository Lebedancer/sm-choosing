import { observable, action, computed } from 'mobx';
import { getData } from '../../../services/dashboardService';
import { BoardData } from '../../../types/BoardTypes';

class Dashboard {
   @observable loading: boolean = true;
   @observable list: BoardData[] = [];

  constructor() {
      getData()
          .then(list => {
              this.list = list
              this.loading = false;
          })
  }

}

export default new Dashboard();