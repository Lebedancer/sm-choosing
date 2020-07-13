import { observable, action, computed, observe } from 'mobx';
import boardDataStore from '../../stores/boardDataStore';

export class BoardTitleStore {
  @observable title = boardDataStore.boardName;

  constructor() {
    observe(boardDataStore, change => {
    })
  }

  @action onChangeTitle(value) {
    this.title = value;
  }

  @action onSave() {
    boardDataStore.onChangeTitle({
      title: this.title
    })
  }
}

export default new BoardTitleStore();
