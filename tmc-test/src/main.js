import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

//import VueRouter from 'vue-router'
//import Routes from './routes'

//Vue.use(VueRouter);
// const router = new VueRouter({
//   routes: Routes,
//   mode: 'history',
//   linkActiveClass: 'active'
// });

new Vue({
  el: '#app',
  //router: router,
  store: store,
  render: h => h(App),
});
