import { observable, action, computed, observe } from 'mobx';

export interface IStore {
  canShowMobile: boolean
  canShowWeb: boolean
  choosePlatform: () => void
}
export class Store implements IStore{
  @observable canShowMobile = false;
  @observable canShowWeb = false;

  constructor() {
    this.choosePlatform()
  }

  @action choosePlatform() {
    const isWeb = false;

    if (isWeb) {
      this.canShowWeb = true;
    } else {
      this.canShowMobile = true;
    }
  }
}

export default Store;
