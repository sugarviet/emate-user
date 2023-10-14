import { PURCHASED_COURSE_API, user_api } from "@/constants/api";
import { useChatStore } from "@/stores/useChatStore";
import useSWR from "swr";
import useFetcher from "./useFetcher";

function useUser() {
    const { currentUserInfo } = useChatStore();
    const { get_with_header_fetcher } = useFetcher()

    const { data: purchasedCourses, isLoading: purchasedCoursesLoading, error: purchasedCoursesError } = useSWR(PURCHASED_COURSE_API, get_with_header_fetcher)

    if (purchasedCoursesLoading, purchasedCoursesError) purchasedCourses = []

    return { purchasedCourses };
}

export default useUser;