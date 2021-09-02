<template>
  <div>Films by genre</div>
  <app-films :api-url="apiUrl" />
</template>

<script>
import AppFilms from '@/components/Films';

export default {
  name: 'AppFilmsByGenre',
  components: {
    AppFilms,
  },
  computed: {
    genreId() {
      return this.$route.params.slug;
    },
    apiUrl() {
      return `/v2.1/films/search-by-filters?genre=${this.genreId}`;
    },
  },
};
</script>
