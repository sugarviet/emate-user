import axios from "axios";

const fetcher = async(url) => {
    const res = await axios.get(url);

    return res.data;
}

export default fetcher;
const get_fetcher = (url) => axios.get(url).then(res => res.data).then(res => res.metaData)

export { get_fetcher };
