import axios from "axios";

export const getData = (): Promise<{ canShowShareButton: boolean }> => {
    return axios.get('http://localhost:3001/accessRules')
        .then(resp => resp.data)
}