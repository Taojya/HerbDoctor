//引入资源
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import 'lib-flexible'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vuex from 'vuex'
import { Indicator } from 'mint-ui'

//注册全局过滤器
//处理title太长的问题
Vue.filter('convertTitle',(value,limit)=>{
  //预防网络太慢，在按照默认值渲染以后产生的问题
  if(!value)return;
  //判断
  if(value.length > limit){
     return value.substr(0,limit) + '...'
  }
  //返回原数据
  return value;
})


Vue.use(MintUi)
Vue.use(VueAxios,Axios)
Vue.prototype.$axios = Axios
//设置默认URL请求基础路径
Axios.defaults.baseURL = 'http://www.itdks.com/'

//拦截器中实现loadding图标
Axios.interceptors.request.use(config=>{
  Indicator.open({
      text:'玩命加载中...',
      spinnerType:'triple-bounce'
  })
  return config;
})
Axios.interceptors.response.use( response =>{
  Indicator.close()
  return response;
})

Vue.config.productionTip = false

Vue.use(Vuex)
var store = new Vuex.Store({
  state:{
    community: {},
    categoryId : 0
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:c=>c(App),
  template: '<App/>',
  components: { App },
  store
})
