<template>
  <nav>
    <router-link :to="{name: 'home'}">Home</router-link>
    <div>
      <router-link :to="{name: 'top-films'}">Top films</router-link>
      <ul v-if="genres">
        <li v-for="genre in genres" :key="genre">
          <router-link :to="{name: 'films-by-genre', params: {slug: genre.id}}">
            {{ genre.genre }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/genres';

export default {
  name: 'AppTopbar',
  computed: {
    ...mapState({
      isLoading: state => state.genres.isLoading,
      genres: state => state.genres.data,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getGenres);
  },
};
</script>
