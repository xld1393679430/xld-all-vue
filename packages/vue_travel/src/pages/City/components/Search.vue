<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword" />
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li class="search-item border-bottom"
            v-for="item in list"
            @click="selectHotCity(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="isShowHasNoData">
          没有找到数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from "better-scroll"
  import { mapMutations } from "vuex"
  export default{
    name:'CitySearch',
    props:{
        cities:Object
    },
    data(){
        return{
            keyword:"",
            list:[],
            timer:null
        }
    },
    computed:{
      isShowHasNoData(){
            return !this.list.length
        }
    },
    watch:{
      keyword(){
          if(this.timer){
              clearTimeout(this.timer)
          }
         if(!this.keyword){
           this.list = [];
           return;
          }
          this.timer = setTimeout( ()=>{
              const result = [];
              for(let i in this.cities){
                  this.cities[i].forEach( (value) =>{
                     if(value.spell.indexOf(this.keyword) > -1 ||  value.name.indexOf(this.keyword) > -1){
                         result.push(value);
                      }
                  })
              }
              this.list = result;
          } )

      }
    },
    methods:{
      selectHotCity(city){
//          this.$store.dispatch("changeCity",city)
//        this.$store.commit("changeCity",city);
        this.changeCity(city)
        this.$router.push({
          path:"/"
        })
      },
      ...mapMutations(["changeCity"])
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.search, {click: true})
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
.search
  height: 0.72rem
  padding :0 0.1rem
  background :$bgColor
  .search-input
    width:100%
    hiehgt:0.62rem
    color:#666
    line-height :0.62rem
    border-radius :0.06rem
    box-sizing :border-box
    padding :0 0.1rem
    /*text-align :center*/
.search-content
  z-index:1
  overflow :hidden
  position :absolute
  top: 1.58rem
  left:0
  right:0
  bottom:0
  background :#eee
  .search-item
    line-height :0.62rem
    padding-left :0.2rem
    color: #666666
    background #fff
</style>
