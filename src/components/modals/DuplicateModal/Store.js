import { observable, action, observe } from 'mobx';
import boardStore from '../../../stores/boardStore';

export class Store {
  @observable title = '';

  constructor() {
    this.setTitle(boardStore.boardName)
  }

  @action onChangeTitle(value) {
    this.title = value;
  }

  @action setTitle(value) {
    this.title = value;
  }

  @action onSave() {
    boardStore.onChangeTitle({
      title: this.title
    })
  }
}

export default Store;
