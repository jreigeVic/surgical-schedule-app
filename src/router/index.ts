import Vue from 'vue';
import Router from 'vue-router';
import ScheduleList from '@/views/ScheduleList.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'ScheduleList',
    component: ScheduleList,
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
