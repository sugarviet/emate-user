const BASE_API = "http://localhost:8080"
const COURSE_API = `${BASE_API}/course`
const REVIEW_API = `${BASE_API}/review`
const RATING_API = `${REVIEW_API}/rating`

const course_item_api = (id) => `${COURSE_API}/${id}`
const course_rating_api = (id) => `${RATING_API}/${id}`
const course_all_reviews_api = (id) => `${REVIEW_API}/${id}`

export { course_item_api, course_rating_api, course_all_reviews_api }