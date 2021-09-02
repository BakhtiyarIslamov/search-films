import filmsApi from '@/api/films.js';

const state = {
  data: null,
  isLoading: false,
};

export const mutationTypes = {
  getFilmsStart: '[films] getFilmsStart',
  getFilmsSuccess: '[films] getFilmsSuccess',
  getFilmsFailure: '[films] getFilmsFailure',
};

export const actionTypes = {
  getFilms: '[films] getFilms',
};

const mutations = {
  [mutationTypes.getFilmsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getFilmsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getFilmsFailure](state) {
    state.isLoading = false;
  },
};

const actions = {
  [actionTypes.getFilms](contex, {apiUrl}) {
    return new Promise(resolve => {
      contex.commit(mutationTypes.getFilmsStart);
      filmsApi
        .getFilms(apiUrl)
        .then(response => {
          contex.commit(mutationTypes.getFilmsSuccess, response.data);
          resolve(response.data);
        })
        .catch(() => {
          contex.commit(mutationTypes.getFilmsFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
