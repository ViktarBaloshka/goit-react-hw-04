import axios from "axios";

const API_KEY = "FHxvx8zol2InuS8C4YLb_Q3b-gycBq99ci0WrrEBYcU";
axios.defaults.baseURL = "https://api.unsplash.com/";

export default async function fetchImage(query, page) {
  const { data } = await axios.get("/search/photos", {
    params: { client_id: API_KEY, page, query },
  });
  return data;
}
