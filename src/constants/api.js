const BASE_API = "https://back-end-ematee.vercel.app"
const TEST_API = "http://localhost:8080"
const COURSE_API = `${BASE_API}/course`
const REVIEW_API = `${BASE_API}/review`
const RATING_API = `${REVIEW_API}/rating`
const SUBJECT_API = `${BASE_API}/subject`

const course_item_api = (id) => `${COURSE_API}/${id}`
const course_rating_api = (id) => `${RATING_API}/${id}`
const course_all_reviews_api = (id) => `${REVIEW_API}/${id}`
const subject_api = () => `${SUBJECT_API}`
const course_reviews_api = (id, page) => `${REVIEW_API}/${id}?page=${page}&limit=4`

export { course_item_api, course_rating_api, course_all_reviews_api, subject_api, course_reviews_api, COURSE_API }

