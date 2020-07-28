import { observable, action, computed } from 'mobx';
import { deleteBoard, loadBoard } from '../../../services/boardService';

class BoardStore {
  @observable public boardName: string = ''
  @observable public boardId: number = 0;
  @observable public loading: boolean = true;

  constructor() {
      this.loading = true;
      loadBoard()
          .then(({ boardName, boardId}) => {
              this.boardName = boardName
              this.boardId = boardId
              this.loading = false;
          })
  }

  @action onChangeTitle({title}: {title: string}) {
      this.boardName = title
  }

    @action removeBoard() {
        return deleteBoard(this.boardId)
    }
}

export default new BoardStore();