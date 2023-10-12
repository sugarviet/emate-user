import { message } from "antd";
import axios from "axios";

const fetcher = async (url) => {
    const res = await axios.get(url);

    return res.data;
}

const fetcherWithHeader = async (url,currentId ,accessToken, refreshToken) => {
    
    const res = await axios.get(url, {
        headers: {
          "x-client-id": currentId,
          "x-client-refreshtoken" : refreshToken,
          "x-client-accesstoken" : accessToken,
        },
      },);

    return res.data;
}

export default fetcher;
const get_fetcher = (url) => axios.get(url).then(res => res.data).then(res => res.metaData)
const post_fetcher = async (url, body, successCallback, errorCallback) => await axios.post(url, body).then(res => res.data).then(res => res.metaData).then(successCallback).catch(errorCallback)

export { get_fetcher, post_fetcher };
