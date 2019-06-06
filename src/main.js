// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

Vue.prototype.$http = Axios
Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  const token = sessionStorage.getItem('token-by-vue')
  if (to.path === '/'){
    next()
  }else {
    console.log('set authorization')
    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer '+token
    next()
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
