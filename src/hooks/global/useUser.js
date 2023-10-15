import { PURCHASED_COURSE_API, user_api } from "@/constants/api";
import { useChatStore } from "@/stores/useChatStore";
import useSWR from "swr";
import useFetcher from "./useFetcher";
import { get_fetcher } from "@/utils/fetcher";
import { useEffect, useState } from "react";

function useUser() {
    const { currentUserInfo } = useChatStore();
    const { get_with_header_fetcher } = useFetcher()
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
    const [currentRole, setCurrentRole] = useState({})

    const { data: purchasedCourses } = useSWR(PURCHASED_COURSE_API, get_with_header_fetcher)
    const { data: user } = useSWR(user_api(currentUserInfo._id), get_fetcher)

    const switchRole = () => { setCurrentRoleIndex(currentRoleIndex ? 0 : 1) }

    useEffect(() => {
        if (!user) return;
        setCurrentRole(user.role[currentRoleIndex])
    }, [user, currentRoleIndex])

    return { purchasedCourses, user, currentRole, switchRole };
}

export default useUser;