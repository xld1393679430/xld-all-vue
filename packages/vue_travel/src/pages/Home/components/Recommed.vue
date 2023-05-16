<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
       <router-link class="item border-bottom"
                    tag="li"
                    :to="'/detail/' + item.id"
                    v-for="item in recommendList"
                    :key="item.id">
         <img class="item-img" :src="item.imgUrl" alt="">
         <div class="item-info">
           <p class="item-title">{{item.title}}</p>
           <p class="item-desc">{{item.desc}}</p>
           <button class="item-button">查看详情</button>
         </div>
     </router-link>
    </ul>
  </div>
</template>

<script>
  export default{
      name:"HomeRecommend",
      props:{
        recommendList:Array
      },
      data(){
          return{

          }
      }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
.title
  line-height:0.8rem;
  text-indent :0.2rem
  background :#eeeeee
  margin-top:0.2rem
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding:0.1rem
  .item-info
    flex:1
    min-width :0
    padding:0.1rem
    .item-title
      line-height: 0.54rem
      font-size :0.32rem
      ellipsis()
    .item-desc
      line-height:0.4rem;
      color:gray
      ellipsis()
    .item-button
      line-height:0.44rem;
      margin-top:0.16rem
      background :#ff9300
      padding 0 0.2rem
      border-radius :0.3rem
      font-size:0.2rem
      color:#eee
</style>
