import urlcat from "urlcat";
import { BASE_URL } from "@/constants/url";

export const request =  async(endpoint , method , data) => {
    const res = await fetch(urlcat(BASE_URL,endpoint ), {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return res.json()
}