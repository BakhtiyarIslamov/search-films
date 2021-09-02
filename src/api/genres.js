import axios from '@/api/axios.js';

const getGenres = () => {
  return axios
    .get(`/v2.1/films/filters`)
    .then(response => response.data.genres);
};

export default {
  getGenres,
};
