//引入Vue
import Vue from 'vue'
import axios from 'axios'
import router from '../router/index';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//引入App
import App from './App.vue'
// Vue.use(ElementUI);

//关闭Vue的生产提示
Vue.config.productionTip = false
axios.defaults.transformRequest = [function (data) {
	let src = ''
	for (let item in data) {
		src += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
	}
	return src
}]

// 配置一个 axios 实例
const http = axios.create({
	baseURL: '/api',
	timeout: 30000,
	headers: {
		//'Content-Type': 'application/json'
	}
});
Vue.prototype.$http = http;


//创建vm
// new Vue({
// 	el: '#app',
// 	render: h => h(App)
// })


//全局注册
Vue.use(ElementUI);
new Vue({
	el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')


