<template>
  <div v-if="data">
    <ul>
      <li v-for="film in data.films" :key="film">
        <router-link :to="{name: 'film', params: {slug: film.filmId}}">
          {{ film.nameRu }} &nbsp; {{ film.rating }}
        </router-link>
      </li>
    </ul>
    <app-pagination
      :pages-count="data.pagesCount"
      :current-page="currentPage"
      :url="baseUrl"
    />
  </div>
</template>

<script>
import {actionTypes} from '@/store/modules/films';
import {mapState} from 'vuex';
import AppPagination from '@/components/Pagination';
import {stringify, parseUrl} from 'query-string';

export default {
  name: 'AppFilms',
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
  components: {
    AppPagination,
  },
  computed: {
    ...mapState({
      data: state => state.films.data,
      isLoading: state => state.films.isLoading,
    }),
    currentPage() {
      return Number(this.$route.query.page || '1');
    },
    baseUrl() {
      return this.$route.path;
    },
  },
  watch: {
    apiUrl() {
      this.fetchFilms();
    },
    currentPage() {
      this.fetchFilms();
    },
  },
  mounted() {
    this.fetchFilms();
  },
  methods: {
    fetchFilms() {
      const parsedUrl = parseUrl(this.apiUrl);
      const stringifiedParams = stringify({
        page: this.currentPage,
        ...parsedUrl.query,
      });
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
      this.$store.dispatch(actionTypes.getFilms, {apiUrl: apiUrlWithParams});
    },
  },
};
</script>
