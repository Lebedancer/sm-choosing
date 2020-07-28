import { observable, action, computed } from 'mobx';
import { getData } from '../services/dashboardService';
import { BoardData } from '../types/BoardTypes';

export enum DashStatus {
    UNKNOWN = 'DASHBOARD_LOAD_UNKNOWN',
    START = 'DASHBOARD_LOAD_START',
    FINISH = 'DASHBOARD_LOAD_FINISH',
    ERROR = 'DASHBOARD_LOAD_ERROR',
}

export const dataSuccess = (state: Dashboard) => (list: BoardData[]) => {
      state.list = list
      state.status = DashStatus.FINISH
}

export const dataError = (state: Dashboard) => (error: Error) => {
      state.loadError = error.message;
      state.status = DashStatus.ERROR
}

export class Dashboard {
    loadError: string = ''
    @computed get loading(): boolean {
       return this.status === DashStatus.START
    }
    @observable status: DashStatus = DashStatus.UNKNOWN
    @observable list: BoardData[] = [];

    constructor() {
        this.loadData()
    }

    @action loadData() {
      this.status = DashStatus.START
      getData()
          .then(action(dataSuccess(this)))
          .catch(action(dataError(this)))
    }
}

export default new Dashboard();
