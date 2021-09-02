import genresApi from '@/api/genres';

const state = {
  data: null,
  isLoading: false,
};

export const mutationTypes = {
  getGenresStart: '[genres] getGenresStart',
  getGenresSuccess: '[genres] getGenresSuccess',
  getGenresFailure: '[genres] getGenresFailure',
};

export const actionTypes = {
  getGenres: '[genres] getGenres',
};

const mutations = {
  [mutationTypes.getGenresStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getGenresSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getGenresFailure](state) {
    state.isLoading = false;
  },
};

const actions = {
  [actionTypes.getGenres](contex) {
    return new Promise(resolve => {
      contex.commit(mutationTypes.getGenresStart);
      genresApi
        .getGenres()
        .then(genres => {
          contex.commit(mutationTypes.getGenresSuccess, genres);
          resolve(genres);
        })
        .catch(() => {
          contex.commit(mutationTypes.getGenresFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
