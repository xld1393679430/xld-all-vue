<template>
  <div>
    <div class="item"
         v-for="(item,index) in list"
         :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
          <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailList",
    props:{
      list:Array
    }

  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
.item-title
  line-height: 0.8rem
  font-size :0.32rem
  padding :0 0.2rem
.item-title-icon
  display: inline-block
  position: relative
  left: 0.06rem
  top:0.06rem
  width: .36rem
  height: .36rem
  background: url("http://s.qunarzz.com/piao/image/touch/sight/detail.png") 0 -.45rem no-repeat
  margin-right: .1rem
  background-size: .4rem 3rem
.item-children
  line-height: 0.8rem
  font-size :0.32rem
  padding :0 0.2rem

</style>
