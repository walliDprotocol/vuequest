import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
Vue.use(VueRouter);

import util from "../plugins/util";

const debug = util.methods.debug;

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  debug("toPath", to);

  if (to.path == "/Dashboard/ViewCredential") {
    return next();
  }
  return next("/Dashboard/ViewCredential");
});

export default router;
