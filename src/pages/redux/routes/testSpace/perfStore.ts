import { observable, action, computed, observe } from 'mobx';
import dashboardStore from '../../stores/dashboardStore';
import {BoardData} from "../../../../types/BoardTypes";

// import accessRulesStore from "../../stores/accessRulesStore";

let autoApdater: any;

export interface IStore {
  autoIncrementTestName: number
}
export class Store implements IStore{
  @observable autoIncrementTestName = 1;
  @observable autoIncrementCount = 100;

  // constructor() {
  //   this.initAutoUpdater()
  // }

  initAutoUpdater() {
    autoApdater = setInterval(() => {
      this.autoIncrementTestName += 1;
    }, 300)
  }

  removeAutoUpdater() {
    clearInterval(autoApdater);
    autoApdater = null;
  }

  @action toggleIncrement() {
    if (autoApdater) {
        this.removeAutoUpdater();
    } else {
        this.initAutoUpdater();
    }
  }
}

export default new Store();
