<template>
  <div class="container">
    <p class="category">TOP-250 фильмов</p>
    <app-films :api-url="apiUrl" />
  </div>
</template>

<script>
import AppFilms from '@/components/Films';

export default {
  name: 'AppTopFilms',
  components: {
    AppFilms,
  },
  computed: {
    apiUrl() {
      return `/v2.2/films/top?type=TOP_250_BEST_FILMS`;
    },
  },
};
</script>
