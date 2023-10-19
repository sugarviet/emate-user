import { PURCHASED_COURSE_API, user_api } from "@/constants/api";
import { useChatStore } from "@/stores/useChatStore";
import useSWR from "swr";
import useFetcher from "./useFetcher";
import { get_fetcher } from "@/utils/fetcher";
import { useEffect, useState } from "react";

function useUser() {
    const { currentUserInfo } = useChatStore();
    const { get_with_header_fetcher } = useFetcher()
    const [roles, setRoles] = useState([]);

    const { data: purchasedCourses } = useSWR(PURCHASED_COURSE_API, get_with_header_fetcher)
    const { data: user } = useSWR(user_api(currentUserInfo._id), get_fetcher)

    useEffect(() => {
        if (!user) return;

        const userRoles = user.role.map(role => role.name);
        setRoles(userRoles)
    }, [user])

    return { purchasedCourses, user, roles };
}

export default useUser;