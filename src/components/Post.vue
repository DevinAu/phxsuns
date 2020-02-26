<template>
  <div>    
    <div class="hpheroWraper">
      <div class="hpheroInfo">
        <a href="https://www.nba.com/gametracker/#/20200124/PHXSAS/suns/analysis">
          <h1>Final: Suns 103 Spurs 99</h1>
        </a>
        <p>Devin Booker drops 35 PTS and 10 ASTS as the Suns defeat the Spurs on Friday night.</p>
        <el-button class="hpheroBtn">
          <i class="el-icon-camera-solid"></i>
          PHX X SAS
        </el-button>
      </div>
    </div>
    <div class="project201">
      <a href="https://www.nba.com/suns/project201">
        <img src="https://publish.nba.com/suns/sites/suns/files/sun_digital_159359_project_201_-_suns.com_banner_1365x390.jpg">
      </a>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
  div.hpheroWraper
    background url(https://www.nba.com/suns/sites/suns/files/rubio-heroimng-spurs.jpg)
    height 360px
    padding 20px
    background-size cover
    div.hpheroInfo
      width 30%
      min-width 200px
      background rgba(0, 0, 0, 0.8)
      padding 2%
      color white
    a
      text-decoration-line none
      h1:hover
        color #f69e32
      h1
        font-size 40px
        line-height 34px
        max-width 85%
        color #fff
    p,a h1
      margin-bottom 10px
    p
      color #ccc
    .hpheroBtn
      margin-top 10px
      margin-bottom 20px
      color black
      border-width 0
      transition 0.1s
      background-color rgba(255,255,255,0.9)
    .hpheroBtn:hover
      color #fff
      background-color #e76221
  div.project201
    padding 20px
    background-color black
    display flex
    justify-content center
    a
      img
        width 100%
        max-width 1130px
        vertical-align middle
</style>