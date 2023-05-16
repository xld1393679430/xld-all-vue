// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { isPC } from "./common/js/common"

import store from "./store"


/*vue-loadingd动效*/
import VueLoading from 'vue-loading-template'
Vue.use(VueLoading, /** options **/)


//移动端click延迟300ms的问题
import fastClick from "fastclick"

//引入vue-awesome-swiper轮播图
import VueAwesomeSwiper from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"


//引入iconfont.css图标库
import "styles/iconfont.css" /*-----------这里能用styles路径的原因是在webpack.base,conf.js设置了alias（30line）----------*/

//引入reset.css
import "styles/reset.css"

//1像素问题
import "styles/border.css"


Vue.config.productionTip = false;



//判断是否手机端访问
// if (!isPC()) {
//   console.log(111)
//   fastClick.attach(document.body);
// }
// fastClick.attach(document.body);


Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
