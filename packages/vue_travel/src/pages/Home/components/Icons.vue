<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination-icon"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default{
    name:"HomeIcons",
    props:{
      iconList:Array
    },
    data(){
       return{
         swiperOption:{
           pagination:".swiper-swiper-pagination-icon",
           loop:false
         },
       }
  },
  computed:{
      pages(){
          const pages = [];
          this.iconList.forEach( (item,index) => {
              const page = Math.floor( index / 8 );
              if(!pages[page]) {
                pages[page] = []
              }
              pages[page].push(item)
          } )
        return pages
      },
      showSwiper(){
        return this.iconList.length
      }
  },
  methods:{

  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
.icons  >>>  .swiper-container
  height:0
  padding-bottom: 50%
.icons
    margin-top:0.1rem
  .icon
    width:25%
    height:0
    padding-bottom :25%
    overflow:hidden
    position: relative
    float: left
    .icon-img
      position :absolute
      left:0
      right:0
      top:0
      bottom:0.44rem
      box-sizing border-box
      padding :0.1rem 0.1rem 0 0.1rem
      .icon-img-content
        display :block
        margin  0 auto
        height:100%
    .icon-desc
      position: absolute
      left:0
      right:0
      bottom:0
      height: 0.44rem
      line-height:0.44rem
      color: $darkTextColor
      text-align :center
      ellipsis()

</style>
