import { API } from "./api_path";
import axios from "axios";

export const getAllUsers = async() => {
    const res = await axios.get(API.GET_ALL_USERS);

    return res;
}