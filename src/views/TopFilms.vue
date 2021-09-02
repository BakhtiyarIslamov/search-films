<template>
  <div>Top</div>
  <app-films :api-url="apiUrl" />
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
