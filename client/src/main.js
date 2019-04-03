import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import Vuex from "vuex";
import store from "./store/store.js";
import VueAwesomeSwiper from "vue-awesome-swiper";
import VueLazyload from "vue-lazyload";
import FastClick from "fastclick";
FastClick.attach(document.body);
Vue.use(Vuex);
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "../static/images/load.png",
  loading: "../static/images/load1.png",
  attempt: 1
});
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
