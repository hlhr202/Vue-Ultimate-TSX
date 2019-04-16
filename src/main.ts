import Vue from "vue";
import App from "./App";
import router from "./router";
import "./registerServiceWorker";
import VueObserveVisibility from "vue-observe-visibility";
const VueAnime = require("vue-animejs");

Vue.use(VueAnime);

Vue.use(VueObserveVisibility);

Vue.config.productionTip = false;

new Vue({ router, render: h => h(App) }).$mount("#app");
