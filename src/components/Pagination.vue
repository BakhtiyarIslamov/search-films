<template>
  <ul>
    <li v-for="page in pages" :key="page">
      <router-link :to="{path: url, query: {page: page}}">
        {{ page }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import {range} from '@/helpers/utils.js';

export default {
  name: 'AppPagination',
  props: {
    pagesCount: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    pages() {
      return range(1, this.pagesCount);
    },
  },
};
</script>
