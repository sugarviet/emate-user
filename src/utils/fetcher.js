import axios from "axios";

<<<<<<< HEAD
const fetcher = async(url) => {
    const res = await axios.get(url);

    return res.data;
}

export default fetcher;
=======
const get_fetcher = (url) => axios.get(url).then(res => res.data).then(res => res.metaData)

export { get_fetcher };
>>>>>>> dbd374292d146d56ea83d7bdb2132b2eed231ced
