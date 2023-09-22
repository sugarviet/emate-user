import urlcat from "urlcat";
import { BASE_URL_LOCAL_HOST } from "@/constants/url";

export const request =  async(endpoint , method , data) => {
    const res = await fetch(urlcat(BASE_URL_LOCAL_HOST,endpoint ), {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return res.json()
}