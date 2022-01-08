import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/ant-design-vue.js'
import './plugins/element.js'

Vue.config.productionTip = false

const http = axios.create({
  baseURL: '/api',
  timeout: 30000,
  headers: {
  }
})

Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
