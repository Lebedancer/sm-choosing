import { observable, action, computed } from 'mobx';
import { getData } from '../services/accessRulesService';

export class BoardDataStore {
  @observable boardName = 'board1';

  @action onChangeTitle({title}) {
      this.boardName = title
  }
}

export default new BoardDataStore();
