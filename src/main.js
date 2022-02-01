/*
 * @Description:
 * @Author: xxqq
 * @Date: 2022-01-31 12:39:59
 * @LastEditTime: 2022-01-31 17:53:34
 * @LastEditors: xxqq
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;
Vue.use(Antd);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
