import Vue from 'vue'
import Router from 'vue-router'
import Login from "../vues/Login";
import Index from "../components/Index";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/login',name: 'Login', component: Login },

  ]
})
