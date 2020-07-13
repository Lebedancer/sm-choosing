import { observable, action, computed } from 'mobx';

export class TitleBarStore {
  @observable isLoading = false;

  @computed get canShowShareButton() {
    return false
  };
}

export default new TitleBarStore();
