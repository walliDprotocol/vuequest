import Vue from 'vue';
import VueLogger from 'vuejs-logger';
import store from './store';
import router from './router';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
import util from './plugins/util';

import './css/style.scss';
import './css/modal.scss';

import App from './App.vue';

Vue.config.productionTip = false;
const isProduction = process.env.NODE_ENV === 'production';

Vue.prototype.$isProduction = process.env.VUE_APP_AMBIENT !== 'DEMO';

// initialize logger
const options = {
  isEnabled: !isProduction,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: false,
  separator: '|',
  showConsoleColors: true,
};

Vue.use(VueLogger, options);

Vue.mixin(util);

new Vue({
  store,
  i18n,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
