<template>
  <div>
    <router-link class="header-abs"
                 tag="div"
                 to="/"
                 v-show="showAbs"
    >
      <div class="iconfont heade-back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-finxed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailHeader",
    data(){
        return{
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
      handleScroll(){
          const scrollTop = document.documentElement.scrollTop;
          if(scrollTop > 60){
              let opacity = ( scrollTop / 140);
              opacity = opacity > 1 ? 1 : opacity;
              this.opacityStyle = { opacity };
              this.showAbs = false;
          }else{
            this.showAbs = true;
          }
      }
    },
    activated(){
        window.addEventListener("scroll",this.handleScroll)
    },
    deactivated(){
        window.removeEventListener("scroll",this.handleScroll);
    }

  }
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header-abs
  position :absolute
  left: 0.2rem
  top: 0.2rem
  width: 0.7rem
  height:0.7rem
  border-radius :0.35rem
  text-align :center
  line-height :0.7rem
  background :rgba(0,0,0,0.8)
  .heade-back-icon
    color: #ffffff
    font-size :0.3rem
.header-fixed
    z-index:2
    height:$headerHeght
    line-height $headerHeght
    text-align :center
    color :#fff
    font-size :0.32rem
    background :$bgColor
    position :fixed
    top:0
    left:0
    right :0
    .header-finxed-back
      width :0.64rem
      text-align :center
      color:#fff
      font-size :0.4rem
      position: absolute
      left:0
      top:0
</style>
