import { observable, action, computed, observe } from 'mobx';
import boardDataStore from '../../stores/boardDataStore';

export class BoardTitleStore {
  @observable title = boardDataStore.boardName;
  @observable isDeleteDialogShown = false;

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

  @action showDeleteDialog() {
    this.isDeleteDialogShown = true;
  }

  @action hideDeleteDialog() {
    this.isDeleteDialogShown = false
  }
}

export default new BoardTitleStore();
