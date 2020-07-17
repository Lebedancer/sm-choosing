import axios from 'axios';
import { BoardData } from '../types/BoardTypes';

export const loadBoard = (): Promise<BoardData> => {
    return axios.get('http://localhost:3001/boardInfo')
        .then(resp => resp.data)
}

export const deleteBoard = function (id: number) {
    return axios.post('http://localhost:3001/board/delete', {id})
}
