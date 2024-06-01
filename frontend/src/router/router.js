import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});