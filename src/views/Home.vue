<template>
  <div>
    <div class="header">
      <h1 class="header__head">Добро пожаловать!</h1>
      <p class="header__text">
        На этом сайте вы можете найти фильмы для просмотра. Воспользуйтесь
        списками лучших фильмов, либо найдите интересующий фильм в поиске.
      </p>
    </div>

    <div class="search-box">
      <form @submit.prevent="findFilms">
        <input
          type="text"
          placeholder="Поиск"
          v-model="keyword"
          class="search-box__txt"
        />
      </form>
    </div>

    <div v-if="apiUrl" class="container">
      <p class="category">Результаты поиска</p>
      <app-films :api-url="apiUrl" />
    </div>
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
      this.$router.push({name: 'home'});
      this.apiUrl = `/v2.1/films/search-by-keyword?keyword=${this.keyword}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  color: #000;
  opacity: 0.6;

  &__head {
    font-size: 50px;
  }

  &__text {
    font-size: 25px;
  }
}

.search-box {
  width: 50%;
  height: 40px;
  border-radius: 40px;
  margin: 50px auto;
  padding: 10px;
  background: #2f3640;

  &__txt {
    border: none;
    background: none;
    outline: none;
    padding: 0px;
    color: white;
    font-size: 24px;
    transition: 0.4s;
    line-height: 40px;
    width: 100%;
    text-align: center;
  }
}
</style>
