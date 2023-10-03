import axios from "axios";

const get_fetcher = (url) => axios.get(url).then(res => res.data).then(res => res.metaData)

export { get_fetcher };