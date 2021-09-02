import axios from '@/api/axios.js';

const getFilms = apiUrl => {
  return axios.get(apiUrl);
};

export default {
  getFilms,
};
