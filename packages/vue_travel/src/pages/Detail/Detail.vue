<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="categoryList" ></detail-list>
    <div style="height:50rem">

    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import DetailBanner from "./components/Banner.vue"
  import DetailHeader from "./components/Header.vue"
  import DetailList from "./components/List.vue"
  export default {
    name:"Detail",
    components:{
      DetailBanner,DetailHeader,DetailList
    },
    data(){
        return{
          sightName:"",
          bannerImg:"",
          gallaryImgs:[],
          categoryList:[],
          list:[
              {
                  title:"成人票",
                  children:[
                    {
                      title:"成人票一馆联票",
                      children:[
                        {
                          title:"成人票一馆联票--上海分部消瘦",
                        }
                      ]
                    }
                  ]
              },
              {
                title:"儿童票",
                children:[
                  {
                    title:"儿童票一馆联票",
                    children:[
                      {
                        title:"成儿童票一馆联票--上海分部消瘦",
                      }
                    ]
                  }
                ]
              },
              {
                title:"老年票",
                children:[
                  {
                    title:"老年票一馆联票",
                    children:[
                      {
                        title:"老年票一馆联票--上海分部消瘦",
                      }
                    ]
                  }
                ]
              }
            ]
        }
    },
    methods:{
      getDetailInfo(){
        axios.get("/api/detail.json?id=" ,{
            params:{
              id:this.$route.params.id
            }
        }).then(this.getDetailInfoSucc)
      },
      getDetailInfoSucc(res){
          res = res.data;
          if(res.data && res.ret){
            const data = res.data;
            this.sightName = data.sightName;
            this.bannerImg = data.bannerImg;
            this.gallaryImgs = data.gallaryImgs;
            this.categoryList = data.categoryList;
          }
      }
    },
    mounted(){
        this.getDetailInfo();
    }
  }
</script>

<style lang="stylus" scoped>

</style>
