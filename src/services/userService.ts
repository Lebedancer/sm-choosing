import axios from "axios";
import { UserData } from "../types/UserTypes";

export const getData = (): Promise<UserData> => {
    return axios.get('http://localhost:3001/userData')
        .then(resp => resp.data)
}
