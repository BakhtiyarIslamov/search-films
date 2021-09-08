import filmApi from '@/api/film.js';

const state = {
  data: null,
  isLoading: false,
};

export const mutationTypes = {
  getSimilarsStart: '[similars] getSimilarsStart',
  getSimilarsSuccess: '[similars] getSimilarsSuccess',
  getSimilarsFailure: '[similars] getSimilarsFailure',
};

export const actionTypes = {
  getSimilars: '[similars] getSimilars',
};

const mutations = {
  [mutationTypes.getSimilarsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getSimilarsSuccess](state, payload) {
    state.data = payload;
    state.isLoading = false;
  },
  [mutationTypes.getSimilarsFailure](state) {
    state.isLoading = false;
  },
};

const actions = {
  [actionTypes.getSimilars](contex, {filmId}) {
    return new Promise(resolve => {
      contex.commit(mutationTypes.getSimilarsStart);
      filmApi
        .getFilmSimilars(filmId)
        .then(response => {
          contex.commit(mutationTypes.getSimilarsSuccess, response);
          resolve(response);
        })
        .catch(() => {
          contex.commit(mutationTypes.getSimilarsFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
