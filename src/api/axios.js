import axios from 'axios';
const API_KEY = '19e34eb6-07bd-4d2f-b2a6-3f7ba93b89c8';

axios.defaults.baseURL = 'https://kinopoiskapiunofficial.tech/api/';
axios.defaults.headers = {
  'X-API-KEY': API_KEY,
};

export default axios;
