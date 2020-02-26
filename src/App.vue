<template>
  <div id="app">
    <suns-header class="header" :teamsOpen.sync="teamsOpen"></suns-header>
    <suns-nav v-on:pageMoveDir="pageMove"  class="nav" :navOpen.sync="navOpen"></suns-nav>
    <p></p>
    <el-main class="main">
      <schedule class="schedule"></schedule>
      <post></post>
      <news></news>
      <ticket-central></ticket-central>
      <el-divider class="pageDevider"></el-divider>
      <hot-stuff></hot-stuff>
      <photo-gallery></photo-gallery>
      <el-divider class="pageDevider"></el-divider>
      <video-gallery></video-gallery>
    </el-main>
  </div>
</template>

<script>
import SunsHeader from "./components/SunsHeader.vue";
import SunsNav from "./components/SunsNav.vue";
import Schedule from "./components/Schedule.vue";
import Post from "./components/Post.vue";
import News from "./components/News.vue";
import TicketCentral from "./components/TicketCentral.vue";
import HotStuff from "./components/HotStuff.vue";
import PhotoGallery from "./components/PhotoGallery.vue";
import VideoGallery from "./components/VideoGallery.vue";

export default {
  name: "app",
  components: {
    SunsHeader,
    SunsNav,
    Schedule,
    Post,
    News,
    TicketCentral,
    HotStuff,
    PhotoGallery,
    VideoGallery,
  },
  data(){
    return{
      teamsOpen:false,
      navOpen:false,
    }
  },
  methods:{
    closeEverything(){
      this.teamsOpen = false
      this.navOpen = false
    },
    pageMove(e){
      if(e){
        this.$el.querySelector('.main').style.transform = "translateX(-251px)"
        this.$el.querySelector('.header').style.transform = "translateX(-251px)"
      }else{
        this.$el.querySelector('.main').style.transform = "none"
        this.$el.querySelector('.header').style.transform = "none"
      }
    }
  },
  mounted(){
    document.addEventListener('click',()=>{
      if(this.teamsOpen || this.navOpen){
        this.closeEverything()
      }
    })
  }
};
</script>

<style lang="stylus">
*
  padding 0
  margin 0

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  .header
    transition 0.5s
  .nav
    position relative
    z-index 1
    >.contain
      background-color white
      z-index 100
  .main
    z-index 0
    transition 0.5s
    overflow visible
    padding 0
    background url(https://www.nba.com/suns/sites/suns/files/newsuns_bg.png)
    width 100%
    > div
      overflow hidden
    .schedule
      z-index 0
    .pageDevider
      height 40px
      background-color rgb(208, 208, 208)
      margin 0

  .el-carousel__indicators
    z-index 0
    .el-carousel__indicator
      z-index 0
      .el-carousel__button
        z-index 0
        margin-left 2.5px
        margin-right 2.5px
        border-radius 50%
        border 1px solid #1D1060
        transition all .5s ease-in-out
        opacity 1
  
  li.is-active > button
    background-color rgb(231,102,33)



div.el-submenu__title
  height 45px
  border-bottom 1px solid rgb(208,208,208)
  line-height 45px
div.el-submenu__title:hover
  color #e76221!important
  background-color rgb(245,245,245)!important
  transition 0s




@media only screen and (min-width:0)
  .el-carousel__indicators
    .el-carousel__indicator
      .el-carousel__button
        width 8px
        height 8px

@media only screen and (min-width:637px)
  .el-carousel__indicators
    .el-carousel__indicator
      .el-carousel__button
        width 15px
        height 15px

@media only screen and (min-width:739px)
  .el-carousel__indicators
    .el-carousel__indicator
      .el-carousel__button
        width 20px
        height 20px
</style>
