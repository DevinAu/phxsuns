<template>
<div class="news">
    <div class="news-contain">
      <div class="homepage">
        <div class="homepage-title">
          <a>
            <img src="https://www.nba.com/suns/sites/suns/files/kia-logo-color_160x80-min.png">
          </a>
          <h2>TRENDING NOW</h2>
        </div>
        <div class="hpstories">
          <div>
            <a class="coverimg" href="https://www.nba.com/suns/features/arizona-icon-larry-fitzgerald-joins-phoenix-suns-ownership-group"></a>
            <div>
              <a>
                <h2>Arizona Icon Larry Fitzgerald Joins Phoenix Suns Ownership Group</h2>
              </a>
              <p>Arizona Cardinals wide receiver, philanthropist and businessman Larry Fitzgerald has purchased a minority stake in the Phoenix Suns, as announced today by Suns managing partner Robert Sarver.</p>
              <el-button class="newsbtn">
                <i class="el-icon-reading"></i>
                READ ARTICLE
                </el-button>
            </div>
          </div>
          <div>
            <a class="coverimg" href="https://www.nba.com/suns/video/teams/suns/2020/01/24/3031517/1579886840622-paypal-16x9-1-24-3031517">
              <i class="el-icon-video-play"></i>
            </a>
            <div>
              <a>
                <h2>Suns PayPal Highlights | 1.24.19</h2>
              </a>
              <p>PayPal Highlights | Week 14 of the 2019-20 Suns season</p>
              <el-button class="newsbtn">
                <i class="el-icon-video-camera-solid"></i>
                WATCH VIDEO
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-button class="moreNews">
      <i class="el-icon-reading"></i>
      MORE NEWS
    </el-button>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
div.news
  background-color #f0f0f0
  text-align center
  div.news-contain
    text-align left
    padding-top 40px
    padding-bottom 20px
    display flex
    justify-content center
    div.homepage
      margin 0 
      padding 0 10px
      max-width 1150px
      div.homepage-title
        padding-top 8px
        padding-bottom 18px
        display flex
        justify-content flex-start
        align-items center
        a
          padding-right 10px
          height 25px
          img
            width 50px
            height 25px
    div.hpstories
      display flex
      justify-content space-around
      > div:first-child > a
        background url(https://www.nba.com/suns/sites/suns/files/larry-booker.jpg?w=756&h=430)
        background-size cover
      > div:last-child > a:hover > .el-icon-video-play
        color rgb(232, 102, 38)
        opacity 1
      > div:last-child > a
        background url(https://www.nba.com/images/vod01/teams/suns/2020/01/24/3031632/1579891670682-paypal-img.jpg-3031632.1920x1080.jpg)
        background-size cover
        position relative
        .el-icon-video-play
          color #fff
          opacity 0.6
          position absolute
          font-size 50px
          height 50px
          width 50px
          left 50%
          top 50%
          margin-top -25px
          margin-left -25px
          transition all .30s ease-in-out
          text-align center
      > div
        background-color white
        box-shadow:10px 0px 12px -15px black, -10px 0px 12px -15px black, 0px 10px 12px -15px black
        height 408px
        width 49%
        padding-bottom 15px
        > a:hover ~ div h2
          color #e76221
        > a
          display block
          height 220px
        div
          padding 10px
          padding-top 15px
          h2:hover
            cursor pointer
            color #e76221
          h2
            margin-bottom 5px
            max-height 56px
            overflow hidden
          p
            max-height 55px
            min-height 55px
            overflow hidden
            font-size 14px
            line-height: 16px
          .newsbtn
            margin-top 15px
            box-sizing border-box
            height 36px
            padding-top 0
            padding-bottom 0
            color black
            border-color rgb(238, 238, 238)
            transition 0.1s
            color rgb(231, 98, 33)
          .newsbtn:hover
            color #fff
            background-color #e76221
  .moreNews:hover
    color #fff
    background-color #e76221
    border-color #e76221
  .moreNews
    display inline-block
    color black
    transition 0.1s
    border-color rgb(238, 238, 238)
    height 36px
    padding-top 0
    padding-bottom 0
    margin-bottom 40px
    box-shadow:10px 0px 12px -15px black, -10px 0px 12px -15px black, 0px 10px 12px -15px black
</style>