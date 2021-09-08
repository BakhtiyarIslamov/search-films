import filmApi from '@/api/film.js';

const state = {
  data: null,
  isLoading: false,
};

export const mutationTypes = {
  getFilmStart: '[film] getFilmStart',
  getFilmSuccess: '[film] getFilmSuccess',
  getFilmFailure: '[film] getFilmFailure',
};

export const actionTypes = {
  getFilm: '[film] getFilm',
};

const mutations = {
  [mutationTypes.getFilmStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getFilmSuccess](state, payload) {
    state.data = payload;
    state.isLoading = false;
  },
  [mutationTypes.getFilmFailure](state) {
    state.isLoading = false;
  },
};

const actions = {
  [actionTypes.getFilm](contex, {filmId}) {
    return new Promise(resolve => {
      contex.commit(mutationTypes.getFilmStart);
      filmApi
        .getFilm(filmId)
        .then(response => {
          contex.commit(mutationTypes.getFilmSuccess, response);
          resolve(response);
        })
        .catch(() => {
          contex.commit(mutationTypes.getFilmFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
