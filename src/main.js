<<<<<<< HEAD
import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import lodash from 'lodash';    
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App)
}).$mount("#app");
=======
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
const EventBus = new Vue()

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})
new Vue({
  render: h => h(App)
}).$mount('#app')
>>>>>>> 73bfcdc2f6d907a0d0572cd2ce6fa906efec0a1c
