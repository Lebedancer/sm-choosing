import { observable, action, computed, observe } from 'mobx';
import boardStore from '../../stores/boardStore';

export class Store {
  @observable title: string = boardStore.boardName;
  @observable deleting: boolean = false;

  constructor() {
    observe(boardStore, change => {
    })
  }

  @action onDelete() {
    this.deleting = true;
    return boardStore.removeBoard()
        .then(() => {
          this.deleting = false;
        })
        .catch(() => {

        })
  }
}

export default Store;
