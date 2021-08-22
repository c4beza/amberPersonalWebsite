import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import App from "./App.vue";
import Cloudbase from "@cloudbase/vue-provider";
import router from "./router.js";
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)





// 注意更新此处的TCB_ENV_ID为你自己的环境ID
window._tcbEnv = window._tcbEnv || {TCB_ENV_ID:"hello-cloudbase-3gpkn8sve1de1250"};

export const envId = window._tcbEnv.TCB_ENV_ID;
export const region = window._tcbEnv.TCB_REGION;

Vue.config.productionTip = false;



Vue.use(Cloudbase, {
  env: envId,
  region: region
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


