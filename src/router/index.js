import Vue from 'vue';
import Router from 'vue-router';

import Home from 'views/Home/async';
import Read from 'views/Read/async';
import Write from 'views/Write/async';
import Review from 'views/Review/async';

Vue.use(Router);

const routes = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/read',
          component: Read
        },
        {
          path: '/write',
          component: Write
        },
        {
          path: '/review',
          component: Review
        }
      ]
    }
  ]
});

export default routes;
