import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '@/views/Home';
import FilmsByGenre from '@/views/FilmsByGenre';
import TopFilms from '@/views/TopFilms';
import Film from '@/views/Film';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/genres/:slug',
    name: 'films-by-genre',
    component: FilmsByGenre,
  },
  {
    path: '/top/',
    name: 'top-films',
    component: TopFilms,
  },
  {
    path: '/films/:slug',
    name: 'film',
    component: Film,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
