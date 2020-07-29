import { observable, action, computed, observe } from 'mobx';
import {BoardData} from "../../../../../types/BoardTypes";
import storesList from "../../../helpers/storeManager";

export interface IStore {
  list: BoardData[]
  loading: boolean
}

export class Store implements IStore{
  private dashboardStore: any;

  constructor() {
    this.dashboardStore = storesList.dashboardStore;
  }

  @computed get loading() {
    return this.dashboardStore.loading;
  }

  @computed get list() {
    return this.dashboardStore.list;
  }
}

export default Store;
