import { observable, action, computed, observe } from 'mobx';
import dashboardStore from '../../../stores/dashboardStore';
import {BoardData} from "../../../types/BoardTypes";
// import accessRulesStore from "../../stores/accessRulesStore";

export interface IStore {
  list: BoardData[]
  loading: boolean
}
export class Store implements IStore{
  @observable list = dashboardStore.list;
  @observable loading = dashboardStore.loading;

  constructor() {
    this.initObservers()
  }

  initObservers() {
    observe(dashboardStore, (change) => {
      if (change.type === "update") {
        const {name, newValue} = change;

        if (name === 'list') {
          this.list = newValue
        }

        if (name === 'loading') {
          this.loading = newValue
        }
      }
    })
  }
}

export default Store;
