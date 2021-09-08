<template>
  <div class="container">
    <p class="category">Лучшие из жанра {{ this.genreName }}</p>
    <app-films :api-url="apiUrl" />
  </div>
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
    genreName() {
      return this.$store.state.genres.data.find(
        genre => genre.id == this.genreId
      ).genre;
    },
    apiUrl() {
      return `/v2.1/films/search-by-filters?genre=${this.genreId}`;
    },
  },
};
</script>
