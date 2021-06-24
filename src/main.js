import "./mock";// 模拟数据
import Vue from 'vue'
import App from './App.vue'
import "./style/global.less"
import VueRouter from "vue-router"
import router from "./router";
import showMessage from "./utils/showMessage";


Vue.prototype.$showMessage = showMessage; // 向全局添加弹出框方法

import vLoading from "@/directives/loading";
Vue.directive("loading", vLoading);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
