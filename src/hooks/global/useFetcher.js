import { useChatStore } from "@/stores/useChatStore";
import axios from "axios";

function useFetcher() {
    const { currentUserInfo } = useChatStore()

    const get_with_header_fetcher = async (url) => await axios.get(url, {
        headers: {
            "x-client-id": currentUserInfo?._id,
            "x-client-refreshtoken": currentUserInfo?.refreshToken,
            "x-client-accesstoken": currentUserInfo?.token,
        }
    }).then(response => response.data).then(response => response.metaData)

    return {
        get_with_header_fetcher,
    };
}

export default useFetcher;