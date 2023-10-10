const BASE_API = "https://back-end-ematee.vercel.app"
const COURSE_API = `${BASE_API}/course`
const REVIEW_API = `${BASE_API}/review`
const RATING_API = `${REVIEW_API}/rating`
const SUBJECT_API = `${BASE_API}/subject`

const course_item_api = (id) => `${COURSE_API}/${id}`
const course_rating_api = (id) => `${RATING_API}/${id}`
const course_all_reviews_api = (id) => `${REVIEW_API}/${id}`
const subject_api = () => `${SUBJECT_API}`

export { course_item_api, course_rating_api, course_all_reviews_api, subject_api }