<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点/游玩主题
    </div>

    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arraw-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name:"HomeHeader",
    computed:{
      ...mapState(['city'])
    }
  }
</script>

<style lang="stylus" scoped>
  /*font-size:50px*/

  @import "~styles/varibles.styl"

  .header
    line-height:$headerHeght
    display :flex
    background : $bgColor
    color:#fff
    .header-left
      width: 0.64rem
      float :left
      .back-icon
        text-align :center
        font-size .4rem
    .header-input
      flex:1
      background: #fff
      margin-top:0.12rem
      height: 0.64rem
      line-height: 0.64rem
      margin-left :.2rem
      border-radius :0.1rem
      color:#ccc
      padding-left .2rem
    .header-right
      float :right
      padding: 0 0.1rem;
      text-align: center
      color:#fff
      .arraw-icon
        font-size .2rem
        margin-left:-0.04rem

</style>
