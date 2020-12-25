// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
import 'font-awesome/css/font-awesome.css'
import animate from 'animate.css/animate.css'
import axios from 'axios'
import NProgress from 'nprogress'


Vue.use(ElementUI) //使用elementUI
Vue.use(animate)

axios.defaults.baseURL = 'http://127.0.0.1:3000/'

// axios请求拦截添加token
axios.interceptors.request.use(config => {
  // 为请求头添加token
  NProgress.start()
  // config.headers.Authorization = window.sessionStorage.getItem('token')
  // console.log(config)
  return config
})
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})
Vue.prototype.$http = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
