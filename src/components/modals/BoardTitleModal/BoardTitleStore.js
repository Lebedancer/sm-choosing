import { observable, action, computed, observe } from 'mobx';
import boardStore from '../../../pages/mobx/stores/boardStore';

export class BoardTitleStore {
  @observable title = boardStore.boardName;
  @observable isDeleteDialogShown = false;
  @observable isDuplicateDialogShown = false;

  constructor() {
    observe(boardStore, change => {
    })
  }

  @action onChangeTitle(value) {
    this.title = value;
  }

  @action onSave() {
    boardStore.onChangeTitle({
      title: this.title
    })
  }

  @action showDeleteDialog() {
    this.isDeleteDialogShown = true;
    this.isDuplicateDialogShown = false;
  }

  @action hideDeleteDialog() {
    this.isDeleteDialogShown = false
  }

  @action showDuplicateDialog() {
    this.isDuplicateDialogShown = true;
    this.isDeleteDialogShown = false;
  }

  @action hideDuplicateDialog() {
    this.isDuplicateDialogShown = false;
  }
}

export default BoardTitleStore;
