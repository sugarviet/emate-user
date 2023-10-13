import { message } from "antd";
import axios from "axios";

const fetcher = async (url) => {
  const res = await axios.get(url);

  return res.data;
}

export default fetcher;
const get_fetcher = async (url) => await axios.get(url).then(res => res.data).then(res => res.metaData)
const post_fetcher = async (url, body, successCallback, errorCallback) => await axios.post(url, body).then(res => res.data).then(res => res.metaData).then(successCallback).catch(errorCallback)
const post_with_header_fetcher = async (url, body, currentId, accessToken, refreshToken, successCallback, errorCallback) => await axios.post(url, body, {
  headers: {
    "x-client-id": currentId,
    "x-client-refreshtoken": refreshToken,
    "x-client-accesstoken": accessToken,
  },
}).then(res => res.data).then(res => res.metaData).then(successCallback).catch(errorCallback)

const get_with_header_fetcher = async (url, currentId, accessToken, refreshToken) => await axios.get(url, {
  headers: {
    "x-client-id": currentId,
    "x-client-refreshtoken": refreshToken,
    "x-client-accesstoken": accessToken,
  }
}).then(response => response.data).then(response => response.metaData)

const put_fetcher = async (url, body, successCallback, errorCallback) => await axios.put(url, body).then(res => res.data).then(res => res.metaData).then(successCallback).catch(errorCallback)
const delete_fetcher = async (url, successCallback, errorCallback) => await axios.delete(url).then(res => res.data).then(res => res.metaData).then(successCallback).catch(errorCallback)
export { get_fetcher, post_fetcher, post_with_header_fetcher, get_with_header_fetcher, put_fetcher, delete_fetcher };
