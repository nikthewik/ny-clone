import axios from "axios";

const BASE_API = import.meta.env.VITE_NYT_TOP_STORIES_BASE_API_URL;
// eslint-disable-next-line react-refresh/only-export-components
const JSON = import.meta.env.VITE_NYT_JSON;
const API_KEY = import.meta.env.VITE_NYT_API_KEY;

async function getSectionArticles(section) {
  const data = await axios.get(BASE_API + section + JSON + API_KEY);
  return data;
}

export default getSectionArticles;
