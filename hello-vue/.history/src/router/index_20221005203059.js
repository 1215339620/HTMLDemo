import Vue from 'vue'
import Router from 'vue-router'
import Mai from '../views/mai'
import Login from '../views/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mai',
      components: Mai
    }, {
      path: '/login',
      components: Login
    }
      ]
})
