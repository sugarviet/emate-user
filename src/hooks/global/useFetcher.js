import { useChatStore } from "@/stores/useChatStore";
import axios from "axios";

function useFetcher() {
    const { currentUserInfo } = useChatStore()

    const { _id, refreshToken, token } = currentUserInfo

    const get_with_header_fetcher = async (url) => await axios.get(url, {
        headers: {
            "x-client-id": _id,
            "x-client-refreshtoken": refreshToken,
            "x-client-accesstoken": token,
        }
    }).then(response => response.data).then(response => response.metaData)

    const post_with_header_fetcher = async (url, body, successCallback, errorCallback) => await axios.post(url, body, {
        headers: {
            "x-client-id": _id,
            "x-client-refreshtoken": refreshToken,
            "x-client-accesstoken": token,
        },
    }).then(res => res.data).then(res => res.metaData).then(successCallback).catch(errorCallback)

    return {
        get_with_header_fetcher,
        post_with_header_fetcher,
    };
}

export default useFetcher;