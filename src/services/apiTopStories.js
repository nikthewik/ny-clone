import axios from "axios";

const BASE_URL = import.meta.env.VITE_NYT_TOP_STORIES_HOME_API_URL;
const API_KEY = import.meta.env.VITE_NYT_API_KEY;

async function getTopStories() {
  const data = await axios.get(BASE_URL + API_KEY);
  return data;
}

export default getTopStories;
