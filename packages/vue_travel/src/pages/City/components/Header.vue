<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
  export default{
    name:'CityHeader'
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
.header
  overflow hidden
  height:$headerHeght
  line-height $headerHeght
  text-align :center
  color :#fff
  font-size :0.32rem
  background :$bgColor
  position :relative
  .header-icon
    width :0.64rem
    text-align :center
    color:#fff
    font-size :0.4rem
    position: absolute
    left:0
    top:0
</style>
