import axios from 'axios';

export const deleteBoard = function (id: number) {
    return axios.post('http://localhost:3001/board/delete', {id})
}
