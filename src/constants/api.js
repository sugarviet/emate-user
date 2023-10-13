const BASE_API = "https://back-end-ematee.vercel.app"
const TEST_API = "http://localhost:8080"
const COURSE_API = `${BASE_API}/course`
const REVIEW_API = `${BASE_API}/review`
const RATING_API = `${REVIEW_API}/rating`
const SUBJECT_API = `${BASE_API}/subject`
const COURSES_BY_SUBJECT_API = `${COURSE_API}/subject`
const MENTOR_API = `${BASE_API}/mentor`

const course_item_api = (id) => `${COURSE_API}/${id}`
const course_rating_api = (id) => `${RATING_API}/${id}`
const course_all_reviews_api = (id) => `${REVIEW_API}/${id}`
const subject_api = () => `${SUBJECT_API}`
const course_reviews_api = (id, page) => `${REVIEW_API}/${id}?page=${page}&limit=4`
const courses_by_subject_api = (id) => `${COURSES_BY_SUBJECT_API}/${id}?page=1&limit=12`
const mentor_api = () => `${MENTOR_API}?page=1&limit=12`
const mentor_course_api = (id) => `${COURSE_API}/mentor/${id}`
const user_api = (id) => `${BASE_API}/getDetail/${id}`

export { course_item_api, course_rating_api, course_all_reviews_api, subject_api, course_reviews_api, COURSE_API, courses_by_subject_api, mentor_api, user_api, mentor_course_api }

