<template>
  <app-loading v-if="isLoading" />
  <div v-if="data && data.length != 0">
    <h2>Похожие фильмы:</h2>
    <div class="feed">
      <div v-for="film in data" :key="film" class="feed__item item">
        <router-link :to="{name: 'film', params: {slug: film.filmId}}">
          <div class="item__poster">
            <img :src="film.posterUrlPreview" alt="" />
          </div>
          <div class="item__name">{{ film.nameRu }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/similars';
import AppLoading from '@/components/Loading';

export default {
  name: 'AppSimilarFilms',
  components: {
    AppLoading,
  },
  props: {
    filmId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      data: state => state.similars.data,
      isLoading: state => state.similars.isLoading,
    }),
  },
  watch: {
    filmId() {
      this.$store.dispatch(actionTypes.getSimilars, {
        filmId: this.filmId,
      });
    },
  },
  mounted() {
    this.$store.dispatch(actionTypes.getSimilars, {
      filmId: this.filmId,
    });
  },
};
</script>

<style lang="scss" scoped>
.item {
  &__poster {
    width: 187px;
    height: 280px;
  }
}
</style>
