<template>
  <app-topbar />

  <router-view />
</template>

<script>
import AppTopbar from '@/components/Topbar';

export default {
  name: 'App',
  components: {
    AppTopbar,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

body {
  font-family: 'Roboto Condensed';
}

a {
  text-decoration: none;
  color: #000;
}

html {
  background: linear-gradient(to right bottom, #65dfc9, #6cdbeb);
  min-width: 100%;
  min-height: 100%;
}

.container {
  margin: 25px;
  padding: 30px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
}

.category {
  font-size: 20px;
  font-weight: 700;
}
</style>
