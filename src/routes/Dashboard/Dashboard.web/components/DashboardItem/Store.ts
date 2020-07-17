import { observable, action, computed, observe } from 'mobx';
// import dashboardStore from '../../../stores/dashboardStore';
// import {BoardData} from "../../../types/BoardTypes";

// import accessRulesStore from "../../stores/accessRulesStore";

export interface IStore {
  boardName: string
  boardId: number
}

interface IProps {
  boardName: string
  boardId: number
}
export class Store implements IStore{
  @observable boardName = '';
  @observable boardId = 0;

  constructor({ boardName, boardId }: IProps) {
    this.boardName = boardName;
    this.boardId = boardId;
  }
}

export default Store;
