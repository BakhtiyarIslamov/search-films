<template>
  <ul class="pagination">
    <router-link
      v-for="page in pages"
      :key="page"
      :to="{path: url, query: {page: page}}"
    >
      <li class="pagination__page" :class="{active: currentPage === page}">
        {{ page }}
      </li>
    </router-link>
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

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 20px 0px;

  &__page {
    list-style: none;
    height: 50px;
    width: 50px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.1)
    );
    border-radius: 10px;
    margin: 5px;
    position: relative;
    transition: 0.5s;
    top: 0px;

    &:hover {
      top: 2px;
      background-color: #0090a7;
    }
  }
}

.active {
  background-color: #0090a7;
  font-weight: 700;
}
</style>
