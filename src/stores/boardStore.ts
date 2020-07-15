import { observable, action, computed } from 'mobx';
import { getData } from '../services/accessRulesService';
import { deleteBoard } from '../services/boardService';

export class BoardStore {
  @observable public boardName: string = 'board1'
  @observable public boardId: number = 0;

  @action onChangeTitle({title}: {title: string}) {
      this.boardName = title
  }

    @action removeBoard() {
        return deleteBoard(this.boardId)
    }
}

export default new BoardStore();