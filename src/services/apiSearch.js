import axios from "axios";

const BASE_URL = import.meta.env.VITE_NYT_SEARCH_API_BASE_URL;
const API_KEY = import.meta.env.VITE_NYT_API_KEY;

async function getSearchArticles(query, sort = "relevance") {
  const data = await axios.get(
    BASE_URL + query + "&sort=" + sort + "&api-key=" + API_KEY
  );
  return data;
}

export default getSearchArticles;
