<template>
  <div>
    <form @submit.prevent="findFilms">
      <fieldset>
        <input type="text" placeholder="Поиск" v-model="keyword" />
      </fieldset>
      <button>
        Найти
      </button>
    </form>
    <template v-if="apiUrl">
      <app-films :api-url="apiUrl" />
    </template>
  </div>
</template>

<script>
import AppFilms from '@/components/Films';

export default {
  name: 'AppHome',
  components: {
    AppFilms,
  },
  computed: {},
  data() {
    return {
      keyword: '',
      apiUrl: null,
    };
  },
  methods: {
    findFilms() {
      this.apiUrl = `/v2.1/films/search-by-keyword?keyword=${this.keyword}`;
    },
  },
};
</script>
