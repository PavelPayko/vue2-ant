import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'ant-design-vue/dist/antd.less'
import './assets/theme.less'

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
