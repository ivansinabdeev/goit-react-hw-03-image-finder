import axios from "axios";

const API_BASIC_URL = "https://pixabay.com/api/";
const API_KEY = "22555284-ed5f3516253fb9f9c4ec5f32e";
const TYPE = "photo";
const ORIENTATION = "horizontal";
const PERPAGE = 12;

export const get = (words, page) => {
  return axios.get(
    `${API_BASIC_URL}?key=${API_KEY}&q=${words}&image_type=${TYPE}&page=${page}&orientation=${ORIENTATION}&per_page=${PERPAGE}`
  );
};
