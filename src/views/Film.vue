<template>
  <div v-if="data">
    {{ data.nameRu }}
    <app-similar-films :film-id="slug" />
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/film';
import AppSimilarFilms from '@/components/SimilarFilms';

export default {
  name: 'AppFilm',
  components: {
    AppSimilarFilms,
  },
  computed: {
    ...mapState({
      isLoading: state => state.film.isLoading,
      data: state => state.film.data,
    }),
    slug() {
      return this.$route.params.slug;
    },
  },
  watch: {
    slug() {
      if (this.$route.name === 'film') {
        this.fetchFilm();
      }
    },
  },
  mounted() {
    this.fetchFilm();
  },
  methods: {
    fetchFilm() {
      this.$store.dispatch(actionTypes.getFilm, {filmId: this.slug});
    },
  },
};
</script>
