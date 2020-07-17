import axios from "axios";
import { BoardAccessRules } from "../types/BoardTypes";

type GetBoardRulesInput = {
    boardId: number
    userId: number
}

export const getData = (): Promise<{ canShowShareButton: boolean }> => {
    return axios.get('http://localhost:3001/accessRules')
        .then(resp => resp.data)
}

export const getBoardRules = ({ boardId, userId }: GetBoardRulesInput): Promise<BoardAccessRules> => {
    return axios.get('http://localhost:3001/accessRulesForBoard', {
        params: {
            boardId,
            userId
        }
    })
        .then(resp => resp.data)
}