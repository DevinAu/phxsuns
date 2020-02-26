<template>
<div class="photoGallery">
    <div class="photoGallery-contain">
      <div class="homepage">
        <div class="homepage-title">
          <h2>PHOTO GALLERY</h2>
        </div>
        <div class="newsitemphoto">
          <div>
            <a class="coverimg" href="https://www.nba.com/suns/gallery/january-22-2020-suns-vs-pacers"></a>
            <div>
              <a>
                <h2>January 22, 2020: Suns vs Pacers</h2>
              </a>
              <p>The Phoenix Suns host the Indiana Pacers on Wednesday, January 22, 2020.</p>
              <el-button class="photoGallerybtn">
                <i class="el-icon-camera-solid"></i>
                VIEW GALLERY
                </el-button>
            </div>
          </div>
          <div>
            <div>
              <a class="coverimg" href="https://www.nba.com/suns/gallery/january-22-2020-suns-vs-pacers">
              </a>
              <div>
                <a>
                  <h2>January 20, 2020: Suns vs Spurs</h2>
                </a>
                <p>The Phoenix Suns welcome the San Antonio Spurs to Talking Stick Resort Arena on Monday, January 20, 2020.</p>
                <el-button class="photoGallerybtn">
                  <i class="el-icon-camera-solid"></i>
                  VIEW GALLERY
                </el-button>
              </div>
            </div>
            <div>
              <a class="coverimg" href="https://www.nba.com/suns/gallery/january-20-2020-suns-vs-spurs">
              </a>
              <div>
                <a>
                  <h2>January 18, 2020: Suns at Celtics</h2>
                </a>
                <p>#SunsAtCeltics</p>
                <el-button class="photoGallerybtn">
                  <i class="el-icon-camera-solid"></i>
                  VIEW GALLERY
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-button class="moreNews">
      <i class="el-icon-camera-solid"></i>
      MORE PHOTOS
    </el-button>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
div.photoGallery
  background-color #f0f0f0
  text-align center
  div.photoGallery-contain
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
      div.newsitemphoto
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
            background url(https://www.nba.com/suns/sites/suns/files/01-suns-pacers-january-22-2020.jpg?cw=750&ch=480&w=750&h=750&x=0&y=83)
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
            p
              max-height 55px
              min-height 55px
              overflow hidden
              font-size 14px
              line-height: 16px
            .photoGallerybtn
              margin-top 15px
              box-sizing border-box
              height 36px
              padding-top 0
              padding-bottom 0
              color black
              border-color rgb(238, 238, 238)
              transition 0.1s
              color rgb(231, 98, 33)
            .photoGallerybtn:hover
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
            background url(https://www.nba.com/suns/sites/suns/files/01-suns-spurs-january-20-2020.jpg?cw=750&ch=480&w=750&h=750&x=0&y=0)
            background-size cover
          >div:last-child > a
            background url(https://www.nba.com/suns/sites/suns/files/1-suns-celtics-january-2020.jpg?cw=750&ch=480&w=750&h=500&x=0&y=10)
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
              .photoGallerybtn
                margin-top 15px
                box-sizing border-box
                height 36px
                padding-top 0
                padding-bottom 0
                color black
                border-color rgb(238, 238, 238)
                transition 0.1s
                color rgb(231, 98, 33)
              .photoGallerybtn:hover
                color #fff
                background-color #e76221
      > div
        a:hover ~ div h2
          color #e76221
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