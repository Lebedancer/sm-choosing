import axios from "axios";
import { BoardData } from "../types/BoardTypes";

export const getData = (): Promise<BoardData[]> => {
    return axios.get('http://localhost:3001/dashboards')
        .then(resp => resp.data)
}