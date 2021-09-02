import axios from '@/api/axios.js';

const getFilm = filmId => {
  return axios.get(`/v2.1/films/${filmId}`).then(response => response.data);
};

export default {
  getFilm,
};
