<template>
  <div class="ticketCentral">
    <div class="ticketCentralWrap">
      <div class="title">
        <h2>TICKET CENTRAL</h2>
        <span>BROUGHT TO YOU BY</span>
        <a href="https://www.ticketmaster.com/Phoenix-Suns-tickets/artist/806004?brand=suns&extcmp=gw500577&utm_source=NBA.com&utm_medium=client&utm_campaign=NBA_TEAM_PHX&wt.mc_id=TIX_CENTR_LOGO&camefrom=CFC_SUNS_HP_TIXCENTRAL&_ga=2.126601613.10868569.1580231645-917762202.1576831627">
          <img src="https://publish.nba.com/suns/sites/suns/files/ticketmaster_image_hp.png">
        </a>
        <div class="contactBtn">
          <el-button><i class="el-icon-message"></i>CONTACT US</el-button>
          <el-button><i class="el-icon-phone"></i>602.379.7867</el-button>
          <el-button><i class="el-icon-chat-dot-round"></i>LIVE CHAT</el-button>
        </div>
      </div>
      <div class="ticketCentralContent">
        <div class="box">
          <img src="https://publish.nba.com/suns/sites/suns/files/sun_mkt_62091_update_old_branding_on_website_ticket_central_2.jpg">
          <div class="mask">
            <h2>MORE FUN WITH FRIENDS!</h2>
            <img src="https://publish.nba.com/suns/sites/suns/files/tixcentral_partial-plans-hover.png">
          </div>
        </div>
        <div class="box">
          <img src="https://publish.nba.com/suns/sites/suns/files/paypalsixthman.png">
          <div class="mask">
            <h2>BE MORE THAN A FAN!</h2>
            <img src="https://publish.nba.com/suns/sites/suns/files/tixcentral_booker.png">
          </div>
        </div>
        <div class="box">
          <img src="https://publish.nba.com/suns/sites/suns/files/tixcentral_single-games.png">
          <div class="mask">
            <h2>TICKETS ON SALE NOW!</h2>
            <img src="https://publish.nba.com/suns/sites/suns/files/tixcentral_single-games-hover.png">
          </div>
        </div>
        <div class="box">
          <img src="https://publish.nba.com/suns/sites/suns/files/sun_mkt_62091_update_old_branding_on_website_ticket_central_3.png">
          <div class="mask">
            <h2>UPGRADED EXPERIENCE</h2>
            <img src="https://publish.nba.com/suns/sites/suns/files/oubre_two.png">
          </div>
        </div>
      </div>
      <div align="center">
        <el-button><i class="el-icon-s-ticket"></i>TICKET CENTRAL</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
.ticketCentral
  background-color white
  padding 40px
  .ticketCentralWrap
    padding 0 10px
    max-width 1150px
    width 100%
    margin 0 auto
    .title::after
      clear both
      content '.'
      height 0
      display table
    .title
      margin-bottom 20px
      > *
        float left
        line-height 45px
      .contactBtn
        float right
        display flex
        > .el-button:hover
          background-color #e76221
          color #fff
        > .el-button
          height 36px
          margin 4.5px 2.5px
          padding 0 12px
          color #000
          border none
          border-radius 2px
          box-shadow rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px
      > span
        color #565656
        display inline-block
        font-size 11px
        letter-spacing 2px
        padding 0 10px
        text-transform uppercase
        vertical-align middle
      > a
        > img
          display inline-block
          height 25px
          vertical-align middle
    .ticketCentralContent
      display flex
      flex-wrap wrap
      justify-content space-around
      .box:hover
        > img
          transform matrix(1.1, 0, 0, 1.1, 0, 0)
        .mask
          background-color rgba(255, 141, 0, 0.86)
          opacity 1
          img,h2
            transform translateY(0px)
      .box
        overflow hidden
        position relative
        width 49%
        background-color red
        height auto
        margin-bottom 12px
        img
          width 100%
          display block
          transition 0.2s
        .mask
          position absolute
          top 0
          opacity 0
          transition opacity 0.3s,background-color 0.2s
          h2
            transform translateY(-150px)
            box-sizing border-box
            transition all 0.2s ease-in-out
            position absolute
            width 100%
            bottom 0
            z-index 1
            text-align center
            line-height 18.7px
            font-size 17px
            padding  10px
            background-color rgba(0, 0, 0, 0.8)
            color white
          img
            transform translateY(150px)
            transition all 0.2s ease-in-out
    .el-button:hover
      color #fff
      background-color #e76221
      border-color #e76221
    .el-button
      display inline-block
      color black
      transition 0.1s
      border-color rgb(238, 238, 238)
      height 36px
      padding-top 0
      padding-bottom 0
      margin-bottom 0
      box-shadow 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)

i
  display inline-block
  margin-right 5px



@media only screen and (min-width:0)
  .ticketCentral > .ticketCentralWrap
    .title > span
      display none
@media only screen and (min-width:768px)
  .ticketCentral > .ticketCentralWrap
    .title > span
      display inline-block
</style>
