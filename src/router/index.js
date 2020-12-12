import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/Login/Login";
import Home from "../components/HomeTop";
import Phone from "../pages/Phone/Phone";
import More from "../pages/More/More";
import EMUI from "../pages/EMUI 11/EMUI";
import Serve from "../pages/Serve/Serve";
import Shop from "../pages/SHOP/Shop";
import index from "../pages/index";
import Register from "../pages/Register/Register";
import List from "../pages/Phone/List";
import Success from "../pages/Phone/Success";
import Cart from "../pages/Phone/Cart";
import CheckOut from "../pages/Phone/CheckOut";
import Confirm from "../pages/Phone/Confirm";
import Person from "../pages/Person/Person";
import OrderList from "../pages/Person/children/OrderList";
import User from "../pages/Person/children/User";
import Info from "../pages/Person/children/Info";
import Address from "../pages/Person/children/Address";


Vue.use(Router)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    { path: '/', redirect: index },
    { path: '/home', name: 'Home', component: Home, redirect:'/index',},

    { path: '/phone',name: 'Phone', component: Phone },
    { path: '/index',name: 'index', component: index },
    { path: '/more',name: 'More', component: More },
    { path: '/emui',name: 'EMUI', component: EMUI },
    { path: '/serve',name: 'Serve', component: Serve },
    { path: '/shop',name: 'Shop', component: Shop },
    { path: '/list',name: 'List', component: List },


    { path: '/login',name: 'Login', component: Login },
    { path: '/register',name: 'Register', component: Register },
    { path: '/success',name: 'Success', component: Success },
    { path: '/cart',name: 'Cart', component: Cart },
    { path: '/checkout',name: 'CheckOut', component: CheckOut },
    { path: '/confirm',name: 'Confirm', component: Confirm },
    { path: '/person',name: 'Person',component: Person,redirect: '/person/orderlist',
      children:[
        { path: 'orderlist',name:'OrderList',component:OrderList },
        { path: 'user',name:'User',component:User },
        { path: 'info',name:'Info',component:Info },
        { path: 'address',name:'Address',component:Address },
      ]
    },



  ]
})
