<template>
  <div>
    <app-loading v-if="isLoading" />
    <template v-if="data">
      <div class="feed">
        <div v-for="film in data.films" :key="film" class="feed__item item">
          <router-link :to="{name: 'film', params: {slug: film.filmId}}">
            <div class="item__poster">
              <img :src="film.posterUrlPreview" :alt="film.nameRu" />
              <div class="item__rating">{{ film.rating }}</div>
            </div>
            <p class="item__name">{{ film.nameRu }}</p>
            <p class="item__year">{{ film.year }}</p>
          </router-link>
        </div>
      </div>
      <app-pagination
        :pages-count="data.pagesCount"
        :current-page="currentPage"
        :url="baseUrl"
      />
    </template>
  </div>
</template>

<script>
import {actionTypes} from '@/store/modules/films';
import {mapState} from 'vuex';
import AppPagination from '@/components/Pagination';
import {stringify, parseUrl} from 'query-string';
import AppLoading from '@/components/Loading';

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
    AppLoading,
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

<style lang="scss">
.feed {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &__item {
    flex: 0 1 0;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.1)
    );
    border-radius: 2rem;
    transition: 0.5s;
    position: relative;
    top: 0px;

    &:hover {
      top: 2px;
      background-color: #0090a7;
    }
  }
}

.item {
  &__poster {
    position: relative;
    margin: auto;
    width: 250px;
    height: 375px;
    border-radius: 1.5rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__rating {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 10px;
    left: 10px;
    height: 50px;
    width: 50px;
    opacity: 90%;
    background: #fff;
    border: 2px solid #000;
    border-radius: 50%;
  }

  &__name {
    font-size: 18px;
    font-weight: 700;
    margin: 5px 0px;
  }

  &__year {
    margin: 5px 0px;
  }
}
</style>
