<template>
  <div v-if="data">
    <ul>
      <li v-for="film in data.items" :key="film">
        <router-link :to="{name: 'film', params: {slug: film.filmId}}">
          {{ film.nameRu }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/films';

export default {
  name: 'AppSimilarFilms',
  props: {
    filmId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      data: state => state.films.data,
      isLoading: state => state.films.isLoading,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getFilms, {
      apiUrl: `/v2.2/films/${this.filmId}/similars`,
    });
  },
};
</script>
