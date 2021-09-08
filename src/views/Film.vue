<template>
  <div class="container">
    <app-loading v-if="isLoading" />
    <div v-if="data" class="film">
      <div class="film__poster">
        <img :src="data.posterUrlPreview" alt="" />
        <div class="film__rating">{{ data.ratingKinopoisk }}</div>
      </div>
      <div class="film__description description">
        <div>
          <h1>{{ data.nameRu }} ({{ data.year }})</h1>
          <h2>{{ data.nameOriginal }}</h2>
          <p>{{ data.shortDescription }}</p>
        </div>
        <div>
          <h3>О фильме</h3>
          <div class="description__item">
            <span class="description__term">Год производства: </span
            ><span>{{ data.year }}</span>
          </div>
          <div class="description__item">
            <span class="description__term">Страна: </span>
            <span v-for="country in data.countries" :key="country"
              >{{ country.country }} &nbsp;</span
            >
          </div>
          <div class="description__item">
            <span class="description__term">Жанр: </span>
            <span v-for="genre in data.genres" :key="genre"
              >{{ genre.genre }} &nbsp;</span
            >
          </div>
          <div class="description__item">
            <span class="description__term">Слоган: </span
            ><span>{{ data.slogan }}</span>
          </div>
          <div class="description__item">
            <span class="description__term">Длительность фильма: </span
            ><span>{{ data.filmLength }} мин.</span>
          </div>
          <span class="description__term">Описание: </span
          ><span>{{ data.description }}</span>
        </div>
      </div>
    </div>
    <app-similar-films :film-id="slug" />
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/film';
import AppSimilarFilms from '@/components/SimilarFilms';
import AppLoading from '@/components/Loading';

export default {
  name: 'AppFilm',
  components: {
    AppSimilarFilms,
    AppLoading,
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

<style lang="scss" scoped>
.film {
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

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
}

.description {
  flex: 1 1 0;
  padding: 0 0 0 30px;

  &__item {
    padding: 0 0 15px 0;
  }

  &__term {
    font-weight: 700;
  }
}
</style>
