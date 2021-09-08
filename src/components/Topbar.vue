<template>
  <nav class="topbar">
    <router-link
      :to="{name: 'home'}"
      class="topbar__nav-link"
      active-class="active"
      >HOME</router-link
    >
    <router-link
      :to="{name: 'top-films'}"
      class="topbar__nav-link"
      active-class="active"
      >TOP-250</router-link
    >
    <div class="genres-links">
      <router-link
        v-for="genre in genres"
        :key="genre"
        :to="{name: 'films-by-genre', params: {slug: genre.id}}"
        active-class="active"
      >
        {{ genre.genre.toUpperCase() }}
      </router-link>
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
    routeName() {
      return this.$route.name;
    },
  },
  mounted() {
    this.$store.dispatch(actionTypes.getGenres);
  },
};
</script>

<style lang="scss" scoped>
.topbar {
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  display: flex;

  &__nav-link {
    font-size: 20px;
    white-space: nowrap;
    padding: 40px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    transition: 0.5s;
    border-radius: 5px;

    &:hover {
      background-color: #0090a7;
    }
  }
}

.genres-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  a {
    padding: 10px;
  }
}

.active {
  background-color: #0090a7;
}
</style>
