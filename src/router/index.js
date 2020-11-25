import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import Home from "../pages/Home/Home";
import Phone from "../pages/Phone/Phone";
import More from "../pages/More/More";
import EMUI from "../pages/EMUI 11/EMUI";
import Serve from "../pages/Serve/Serve";
import Shop from "../pages/SHOP/Shop";
import index from "../pages/index";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: index },
    { path: '/home', name: 'Home', component: Home,
      redirect:'/index',
      children:[
        { path: '/phone',name: 'Phone', component: Phone },
        { path: '/index',name: 'index', component: index },
        { path: '/more',name: 'More', component: More },
        { path: '/emui',name: 'EMUI', component: EMUI },
        { path: '/serve',name: 'Serve', component: Serve },
        { path: '/shop',name: 'Shop', component: Shop },
      ]
    },
    { path: '/login',name: 'Login', component: Login },



  ]
})
