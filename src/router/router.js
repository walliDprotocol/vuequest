import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';

import util from '../plugins/util';

Vue.use(VueRouter);

const { debug } = util.methods;

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  debug('toPath', to);

  return next();
});

export default router;
