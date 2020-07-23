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

  choosePlatform() {
    const isWeb = true;

    if (isWeb) {
      this.canShowWeb = true;
    } else {
      this.canShowMobile = true;
    }
  }
}

export default Store;
