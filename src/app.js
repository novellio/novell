import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'styles/reset.styl';

import Home from 'views/Home';

Vue.use(ElementUI);

export default new Vue({
  name: 'app',
  router,
  render: h => <router-view/>
});
