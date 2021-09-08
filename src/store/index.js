import {createStore} from 'vuex';
import genres from '@/store/modules/genres';
import films from '@/store/modules/films';
import film from '@/store/modules/film';
import similars from '@/store/modules/similars';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    genres,
    films,
    film,
    similars,
  },
});
