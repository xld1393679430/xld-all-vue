<template>
  <div class="list">
    <div class="item"
         v-for="item in letters"
         :key="item"
         :ref="item"
         @click="handleClickItem"
         @touchstart="handleTOuchStart"
         @touchmove="handleTOuchMove"
         @touchend="handleTOuchEnd"
    >{{item}}</div>
  </div>
</template>

<script>
  export default{
    name:'CityAlphabet',
    props:{
      cities:Object
    },
    data(){
        return{
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    updated(){
        this.startY = this.$refs["A"][0].offsetTop;
    },
    computed:{
        letters(){
            const letters = [];
            for(let i in this.cities){
                letters.push(i)
            }
            return letters;
        }
    },
    methods:{
      handleClickItem(e){
          this.$emit("change",e.target.innerText)
      },
      handleTOuchStart(){
          this.touchStatus=true
      },
      handleTOuchMove(e){
          if(this.touchStatus){

              if(this.timer){
                  clearTimeout(this.timer);
              }
              this.timer = setTimeout( ()=>{
                const startY = this.startY;
                const touchY = e.touches[0].clientY - 79;
                const index = Math.floor(( touchY - startY ) / 20);
                if(index >= 0 && index < this.letters.length){
                  this.$emit("change",this.letters[index])
                }
              },16)
          }
      },
      handleTOuchEnd(){
        this.touchStatus=false
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
.list
    display :flex
    flex-direction :column
    justify-content :center
    position :absolute
    top:1.58rem
    right:0
    bottom:0
    width: 0.4rem
    .item
      line-height :0.4rem
      text-align :center
      color: $bgColor
</style>
