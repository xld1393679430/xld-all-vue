<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
  export default{
      name:"HomerSwiper",
      props:{
        swiperList:Array
      },
      data(){
          return{
            swiperOption:{
              pagination:".swiper-pagination",
              loop:true
            }
          }
      },
    computed:{
          showSwiper(){
              return this.swiperList.length
          }
    }
  }
</script>

<style lang="stylus" scoped="scoped">
  /*----样式穿透--*/
  .wrapper  >>>  .swiper-pagination-bullet-active
    background :#fff
  .wrapper
    width:100%
    height:0
    overflow :hidden
    padding-bottom 31.25%
    /*background :#eee*/
    .swiper-img
      width:100%
</style>
