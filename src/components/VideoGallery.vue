<template>
<div class="videoGallery">
    <div class="videoGallery-contain">
      <div class="homepage">
        <div class="homepage-title">
          <h2>VIDEO GALLERY</h2>
        </div>
        <div class="newsitemvideo">
          <div>
            <a class="coverimg" href="https://www.nba.com/suns/video/teams/suns/2020/01/24/3031642/1579892148410-outlet-ej-and-kray-16x9-3031642">
              <i class="el-icon-video-play"></i>
            </a>
            <div>
              <a>
                <h2>The Outlet: Suns Eddie Johnson and Kevin Ray</h2>
              </a>
              <p>Lindsey Smith sits down with Suns Broadcasters, Eddie Johnson and Kevin Ray on this week's episode of The Outlet.</p>
              <el-button class="videoGallerybtn">
                <i class="el-icon-video-play"></i>
                  WATCH VIDEO
                </el-button>
            </div>
          </div>
          <div>
            <div>
              <a class="coverimg" href="https://www.nba.com/suns/video/teams/suns/2020/01/25/3032904/1579926008119-replay-9-3032904">
                <i class="el-icon-video-play"></i>
              </a>
              <div>
                <a>
                  <h2>Conn's Make it Happen Play: Booker Brings it Home</h2>
                </a>
                <p>The Suns get the steal on one of the floor and Booker gets the easy slam.</p>
                <el-button class="videoGallerybtn">
                  <i class="el-icon-video-play"></i>
                    WATCH VIDEO
                </el-button>
              </div>
            </div>
            <div>
              <a class="coverimg" href="https://www.nba.com/suns/video/teams/suns/2020/01/24/3031645/1579892227056-video-output-6a7070fe-8bbf-455b-9e52-44ae8f2e8603">
                <i class="el-icon-video-play"></i>
              </a>
              <div>
                <a>
                  <h2>Annexus Listen Up: Gearing up for the Road Trip</h2>
                </a>
                <p>Devin Booker talks about the Suns upcoming road trip.</p>
                <el-button class="videoGallerybtn">
                  <i class="el-icon-video-play"></i>
                    WATCH VIDEO
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-button class="moreNews">
      <i class="el-icon-video-play"></i>
        MORE VIDEOS
    </el-button>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
div.videoGallery
  background-color #f0f0f0
  text-align center
  div.videoGallery-contain
    text-align left
    padding-top 40px
    padding-bottom 20px
    display flex
    justify-content center
    div.homepage
      margin 0 
      padding 0 10px
      max-width 1170px
      width 100%
      box-sizing border-box
      div.homepage-title
        padding-top 8px
        padding-bottom 18px
    div.newsitemvideo
      display flex
      justify-content space-around
      > div:first-child
        background-color white
        box-shadow:10px 0px 12px -15px black, -10px 0px 12px -15px black, 0px 10px 12px -15px black
        max-width 552px
        width 552px
        margin-right 23px
        padding-bottom 20px
        > a
          background url(https://www.nba.com/images/vod01/teams/suns/2020/01/24/3031642/1579892148410-The-Outlet----EJ-and-KRay-16x9-3031642-6.1920x1080.jpg)
          background-size cover
          background-position-x 50%
          background-position-y 50%
          display block
          height 220px
        > div
          padding 10px
          padding-top 15px
          h2
            margin-bottom 5px
            line-height 26px
            font-size 23px
          p
            max-height 55px
            min-height 55px
            overflow hidden
            font-size 14px
            line-height: 16px
          .videoGallerybtn
            margin-top 15px
            box-sizing border-box
            height 36px
            padding-top 0
            padding-bottom 0
            color black
            border-color rgb(238, 238, 238)
            transition 0.1s
            color rgb(231, 98, 33)
          .videoGallerybtn:hover
            color #fff
            background-color #e76221
      > div:last-child
        display flex
        flex-flow column nowrap
        justify-content space-between
        max-width 575px
        width 575px
        padding 0
        >div:first-child > a
          background url(https://www.nba.com/images/vod01/teams/suns/2020/01/25/3032904/1579926008119-Replay--9--3032904-3.1920x1080.jpg)
          background-size cover
        >div:last-child > a
          background url(https://www.nba.com/images/vod01/teams/suns/2020/01/24/3031645/1579892227056-video-output-6A7070FE-8BBF-455B-9E52-44AE8F2E8603-3031645-8.1920x1080.jpg)
          background-size cover
        > div:first-child
          margin-bottom 15px
        > div
          background-color white
          display flex
          flex-wrap nowrap
          justify-content flex-start
          box-shadow:10px 0px 12px -15px black, -10px 0px 12px -15px black, 0px 10px 12px -15px black
          a.coverimg
            display block
            height 188px
            width 188px
            background-position-x 50%
            background-position-y 50%
          > div
            padding 15px 10px 10px 10px
            max-width 355px
            h2
              margin-bottom 5px
              line-height 26px
            p
              max-height 55px
              min-height 55px
              overflow hidden
              font-size 14px
              line-height: 16px
            .videoGallerybtn
              margin-top 15px
              box-sizing border-box
              height 36px
              padding-top 0
              padding-bottom 0
              color black
              border-color rgb(238, 238, 238)
              transition 0.1s
              color rgb(231, 98, 33)
            .videoGallerybtn:hover
              color #fff
              background-color #e76221
      > div
        a:hover ~ div h2
          color #e76221
        a:hover > .el-icon-video-play
          color rgb(232, 102, 38)
          opacity 1
        a
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
        > div h2:hover
          cursor pointer
          color #e76221
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