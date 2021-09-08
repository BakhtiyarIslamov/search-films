import axios from '@/api/axios.js';

const getFilm = filmId => {
  return axios.get(`/v2.2/films/${filmId}`).then(response => response.data);
};

const getFilmSimilars = filmId => {
  return axios
    .get(`/v2.2/films/${filmId}/similars`)
    .then(response => response.data.items);
};

export default {
  getFilm,
  getFilmSimilars,
};
