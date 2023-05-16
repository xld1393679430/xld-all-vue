<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{currentCity}}</div>
            </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="hot in hotCities"
               :key="hot.id"
               @click="selectHotCity(hot.name)"
          >
            <div class="button">{{hot.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(city,key) in cities"
           :key="key"
           :ref="key"

      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list"
             v-for="item in city"
             :key="item.id"
             @click="selectHotCity(item.name)"
        >
          <div class="item border-bottom">{{item.name}}</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from "better-scroll"
  import { mapState, mapMutations } from "vuex"
  export default{
    name:'CityList',
    props:{
      cities:Object,
      hotCities:Array,
      letter:String
    },
    computed:{
      ...mapState({
        currentCity:"city"
      })
    },
    mounted(){
        /*Better-scroll功能*/
        this.scroll = new Bscroll(this.$refs.wrapper,{click: true});
    },
    watch:{
      letter(){
          if(this.letter){
              const  element = this.$refs[this.letter][0];
              this.scroll.scrollToElement(element, {click: true})
          }
      }
    },
    methods:{
      selectHotCity(city){
//        this.$store.dispatch("changeCity",city)
//        this.$store.commit("changeCity",city);

        this.changeCity(city);
        this.$router.push({
          path:"/"
        })
      },
      ...mapMutations(["changeCity"])
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
   .list
     overflow :hidden
     position :absolute
     top:1.58rem
     left:0
     right:0
     bottom:0
    .title
      line-height :0.54rem
      background :#eeeeee
      padding-left :0.2rem
      font-size :0.26rem
      color:#666
     .button-list
      padding :0.1rem 0.6rem 0.1rem 0.1rem
      overflow: hidden;
      .button-wrapper
        float:left
        width:33.33%
        .button
          text-align :center
          margin :0.1rem
          padding :0.1rem 0
          border:0.02rem solid #ccc
          border-radius :0.06rem
     .item-list
      .item
        line-height :0.76rem
        color: #666666
        padding-left :0.2rem
</style>
