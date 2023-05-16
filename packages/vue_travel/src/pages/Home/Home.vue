<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from "./components/Header.vue"
  import HomeSwiper from "./components/Swiper.vue"
  import HomeIcons from "./components/Icons.vue"
  import HomeRecommend from "./components/Recommed.vue"
  import HomeWeekend from "./components/Weekend.vue"
  import axios from "axios"
  export default {
       name:"Home",
       data(){
          return{
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
          }
       },
       components:{
          HomeHeader, HomeSwiper, HomeIcons,HomeRecommend,HomeWeekend
        },
        methods:{
          getHomeInfo(){
            axios.get("/api/index.json")
              .then(this.getHomeDataSucc)
          },
          getHomeDataSucc(res){
              var res = res.data;
              if(res.data){
                  const data = res.data;
                  this.swiperList = data.swiperList;
                  this.iconList = data.iconList;
                  this.recommendList = data.recommendList;
                  this.weekendList = data.weekendList;
              }
          }
        },
        mounted(){
           this.getHomeInfo();
        }

  }
</script>

<style lang="stylus" scoped>
</style>
