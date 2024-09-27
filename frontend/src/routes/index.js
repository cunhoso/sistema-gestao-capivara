import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import CapivaraList from '../components/CapivaraList.vue';
import CapivaraDetail from '../components/CapivaraDetail.vue';
import CapivaraForm from '../components/CapivaraForm.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/capivaras',
    name: 'CapivaraList',
    component: CapivaraList
  },
  {
    path: '/capivaras/new',
    name: 'CapivaraForm',
    component: CapivaraForm
  },
  {
    path: '/capivaras/:id',
    name: 'CapivaraDetail',
    component: CapivaraDetail
  },
  {
    path: '/capivaras/:id/edit',
    name: 'CapivaraEdit',
    component: CapivaraForm
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;