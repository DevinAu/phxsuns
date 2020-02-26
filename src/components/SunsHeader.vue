<template>
  <div class="contain">
      <a href="http://www.nba.com"></a>
      <div>
        <a class="hidden" href="http://www.nba.com/global/">GLOBAL</a>
        <a href="javascript:;" @click.stop="$emit('update:teamsOpen',!teamsOpen)">
          TEAMS
          <i class="el-icon-arrow-down"></i>
        </a>
        <!-- 添加全局点击使teamOpen=false事件 -->
        <ul v-show="teamsOpen" @click.stop>
          <li><a href="http://www.nba.com/teams/">TEAMS</a></li>
          <li>TEAM SITES</li>
          <li><a href="https://www.nba.com/hawks/">ATLANTA</a></li>
          <li><a href="https://www.nba.com/heat/">MIAMI</a></li>
          <li><a href="https://www.nba.com/celtics/">BOSTON</a></li>
          <li><a href="https://www.nba.com/bucks/">MILWAUKEE</a></li>
          <li><a href="https://www.nba.com/nets/">BROOKLYN</a></li>
          <li><a href="https://www.nba.com/timberwolves/">MINNESOTA</a></li>
          <li><a href="https://www.nba.com/hornets/">CHARLOTTE</a></li>
          <li><a href="https://www.nba.com/pelicans/">NEW ORLEANS</a></li>
          <li><a href="https://www.nba.com/bulls/">CHICAGO</a></li>
          <li><a href="https://www.nba.com/knicks/">NEW YORK</a></li>
          <li><a href="https://www.nba.com/cavaliers/">CLEVELAND</a></li>
          <li><a href="https://www.nba.com/thunder/">OKLAHOMA CITY</a></li>
          <li><a href="https://www.nba.com/mavericks/">DALLAS</a></li>
          <li><a href="https://www.nba.com/magic/">ORLANDO</a></li>
          <li><a href="https://www.nba.com/nuggets/">DENVER</a></li>
          <li><a href="https://www.nba.com/sixers/">PHILADELPHIA</a></li>
          <li><a href="https://www.nba.com/pistons/">DETROIT</a></li>
          <li><a href="https://www.nba.com/suns/">PHOENIX</a></li>
          <li><a href="https://www.nba.com/warriors/">GOLDEN STATE</a></li>
          <li><a href="https://www.nba.com/blazers/">PORTLAND</a></li>
          <li><a href="https://www.nba.com/rockets/">HOUSTON</a></li>
          <li><a href="https://www.nba.com/kings/">SACRAMENTO</a></li>
          <li><a href="https://www.nba.com/pacers/">INDIANA</a></li>
          <li><a href="https://www.nba.com/spurs/">SAN ANTONIO</a></li>
          <li><a href="https://www.nba.com/clippers/">LA CLIPPERS</a></li>
          <li><a href="https://www.nba.com/raptors/">TORONTO</a></li>
          <li><a href="https://www.nba.com/lakers/">LA LAKERS</a></li>
          <li><a href="https://www.nba.com/jazz/">UTAH</a></li>
          <li><a href="https://www.nba.com/grizzlies/">MEMPHIS</a></li>
          <li><a href="https://www.nba.com/wizards/">WASHINGTON</a></li>
        </ul>
        <a class="hidden" href="http://gleague.nba.com/?_ga=2.56423913.337221589.1579249345-917762202.1576831627">G LEAGUE</a>
        <a class="hidden" href="http://www.wnba.com/?_ga=2.56423913.337221589.1579249345-917762202.1576831627">WNBA</a>
        <a href="http://www.nba.com/global/storelinkhandler.html">NBA STORE</a>
        <a href="https://www.nba.com/suns/leaguepass/pricing">NBA LEAGUE PASS</a>
        <a href="https://www.nba.com/suns/esp">EN ESPANOL</a>
      </div>
  </div>
</template>
<script>
export default {
    data(){
      return{
      }
    },
    props:{
      teamsOpen:{
        type:Boolean
      }
    },
    methods:{
      
    },
}
</script>

<style lang="stylus" scoped>

.contain
  height 35px
  padding-bottom 60px
  display flex
  flex-wrap nowrap
  justify-content center
  > *
    margin-top 8px
  > a
    background-image url(../assets/image/nbalogo.jpg)
    background-size: contain
    background-repeat no-repeat
    background-color white
    display block
    min-width 80px
    width 80px
    height 22px
    margin-right 10px
  div
    display flex
    flex-wrap nowrap
    margin-right 0
    >a:hover
      color #007ed9
      text-decoration-line underline
    >a:active
      color rgb(251, 167, 51)
    > a
      margin-right 30px
      text-decoration-line none
      min-width max-content
    a
      display inline-block
      height 27px
      color rgb(0, 104, 179)
      cursor pointer
      font-family Georgia, 'Times New Roman', Times, serif
      font-size 12px
      line-height 21px
      text-transform uppercase
      i.el-icon-arrow-down
        color rgb(0, 104, 179)
        font-weight 1000
    > a:nth-of-type(2):hover>i.el-icon-arrow-down
      color #007ed9
    > a:nth-of-type(2):active>i.el-icon-arrow-down
      color rgb(251, 167, 51)
    ul
      list-style none
      background-color white
      position absolute
      display flex
      flex-wrap wrap
      align-content space-between
      width 206px
      height 459px
      padding 0 10px 10px 10px
      top 35px
      margin-left 67px
      font-size 0
      z-index 10
      li:first-child,li:nth-child(2)
        width 206px
        border-bottom solid 1px rgb(220,220,220)
      li:nth-child(2)
        color rgb(51, 51, 51)
        font-size 12px
        line-height 27px
      li
        width 103px
        height 27px
        font-family Georgia, 'Times New Roman', Times, serif
        text-align left
        a:hover
          color rgb(251, 167, 51)
          text-decoration-line underline
        a
          line-height 27px
          text-decoration-line none

@media only screen and (min-width:0)
  .contain
    width 100%
    justify-content flex-start
    > a
      margin-left 2%
    div
      > a
        margin-right 7px
      > a.hidden
        display none

@media only screen and (min-width:620px)
  .contain
    justify-content flex-start
    div
      > a.hidden
        display inline-block



@media only screen and (min-width:768px)
  .contain
    justify-content center
    padding-bottom 80px
    background url(https://www.nba.com/suns/sites/suns/files/sunburst-upper-header-site-bg-min.jpg) top right #ffffff no-repeat
    background-position top right
    background-size 1300px
    div
      > a
        margin-right 30px
    
@media only screen and (min-width:992px)
  .contain
    padding-bottom 140px
    background url(https://www.nba.com/suns/sites/suns/files/sunburst-upper-header-site-bg-min.jpg) top right #ffffff no-repeat
    background-position top right
    background-size 1300px

@media only screen and (min-width:1197px)
  .contain div
    margin-right 400px
</style>