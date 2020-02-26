<template>
  <div class="hotStuff">
    <div class="homepage-title">
      <h2>HOT STUFF</h2>
    </div>
    <el-carousel class="hotStuffWrap" trigger="click" arrow='never' height='580px' :autoplay="true" :number="2000">
      <el-carousel-item class="itemContain" v-for="(item,index) in hotStuffData" :key="index">
        <div class="itemWrap">
          <img :src="item.picurl">
          <div>
            <h2>{{item.title}}</h2>
            <el-button>{{item.button}}</el-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    data(){
      return{
        hotStuffData:[
          {hrefurl:'https://www.nba.com/suns/promotions/nau-educator-of-the-month',picurl:'https://publish.nba.com/suns/sites/suns/files/sun_mp_132780_nau_counselor_of_the_month_promotion_19-20_season_1170x400_hot_stuff.jpg',title:'Nominate Your Educator!',button:'NOMINATE YOUR EDUCATOR'},
          {hrefurl:'https://www.nba.com/suns/slamdunkvacation',picurl:'https://publish.nba.com/suns/sites/suns/files/sun_mp_154047_diamond_-_slam_dunk_vacation_hot_stuff_1170x400.jpg',title:'Slam Dunk Vacation',button:'ENTER NOW'},
          {hrefurl:'https://www.nba.com/suns/promotions',picurl:'https://publish.nba.com/suns/sites/suns/files/sun_mkt_156850_image_craft_promotional_support_hot_stuff.jpg',title:'Art & Basketball',button:'ENTER NOW'},
          {hrefurl:'https://www.nba.com/suns/promotions#SoNY-Feb5',picurl:'https://publish.nba.com/suns/sites/suns/files/sun_mp_146251_streets_of_ny_viewing_party_creative_2019-20_knicks_hot_stuff.jpg',title:'Viewing Party',button:'LEARN MORE'},
          {hrefurl:'https://www.nba.com/suns/mailbag',picurl:'https://publish.nba.com/suns/sites/suns/files/sun_mp_154755_nau_player_mailbag_19-20_season_ty_hot_stuff_1170x400.jpg',title:'Ask Ty',button:'LEARN MORE'},
          {hrefurl:'https://www.nba.com/suns/promotions',picurl:'https://publish.nba.com/suns/sites/suns/files/sun_mp_156659_firstbank_-_autopay_play_-_hot_suff_1170x400.jpg',title:'Enter To Win',button:'ENTER TO WIN'},
          {hrefurl:'https://www.nba.com/suns/bcbsaz',picurl:'https://publish.nba.com/suns/sites/suns/files/hotstuff_1170x400_1.jpg',title:'Learn More',button:'LEARN MORE'},
          {hrefurl:'https://www.nba.com/suns/promotions',picurl:'https://publish.nba.com/suns/sites/suns/files/mvp_sweepstakes.jpg',title:'MVP For The Day',button:'LEARN MORE'},
          {hrefurl:'https://www.streetsofnewyork.com/',picurl:'https://publish.nba.com/suns/sites/suns/files/streets_ny_hotstuff.png',title:'Slam Dunk Special',button:'LEARN MORE'},
          {hrefurl:'https://www.nba.com/suns/dreamshot',picurl:'https://publish.nba.com/suns/sites/suns/files/bea_2560095_hr_dreamshot_1170x400_hr.jpg',title:'Hornitos Dream Shot',button:'LEARN MORE'},
        ]
      }
    }
}
</script>
<style lang="stylus" scoped>
.hotStuff
  background-color white
  padding 40px
  div.homepage-title
    padding 8px 10px 18px 10px
    text-align left
    h2
      width 1150px
      margin 0 auto
  .hotStuffWrap
    padding 0 10px
    max-width 1150px
    width 100%
    margin 0 auto
    .el-carousel__container
      .itemContain.is-active
        z-index 0
      .itemContain
        height auto
        background-color rgb(238,238,238)
        .itemWrap
          opacity 1
          width auto
          display flex
          flex-flow column nowrap
          img
            max-height 395px
          > div
            opacity 1
            display flex
            flex-direction column
            align-items center
            justify-content space-around
            h2
              line-height 21px
              font-size 35px
              color rgb(29, 16, 96)
              height auto
              letter-spacing 0.75px
              text-shadow none
              text-size-adjust 100%
              width auto
              -webkit-tap-highlight-color rgba(0, 0, 0, 0)
              margin-top 20px
            button:hover
              background #fff
              color #E76621
            button
              border-radius 0
              margin-top 15px
              margin-bottom 30px
              background #E76621
              border 1px solid #E76621
              color #fff
              padding 10px 20px
              font-size 20px
              margin-top 15px
              text-transform uppercase
              font-weight 700
              transition all .5s ease-in-out
              text-shadow:rgba(0, 0, 0, 0.6) 0px 1px 2px

</style>