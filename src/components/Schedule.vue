<template>
  <div class="schedule">
    <div class="scheduleContain">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide courtslide">
            <a href="https://www.nba.com/suns/schedule">View Full Schedule</a>
          </div>
          <div class="swiper-slide" v-for="(item,index) in gameData" :key='index'>
            <span v-show="!gameData[index].isOver" class="gameTimePrompt">GAME TIME:</span><!-- 凡未开赛的比赛显示 -->
            
            <div class="game-time-title" v-show="gameData[index].isOver"><!-- 已完赛 -->
              <span v-show="gameData[index].isOver" class="datetime">{{gameData[index].date}}</span>
            </div>
            
            <div class="active-slide game-time-title pre-game" v-show="!gameData[index].isOver"><!-- active的结构 + 未开赛 -->
              <span class="datetime">{{gameData[index].date}}</span>
              <span style="font-weight:bold">·</span>
              <el-divider direction="vertical"></el-divider><!-- 垂直分割线 -->
              <span style="color:#e56020">{{gameData[index].time}}</span>
            </div>
            
            <div class="normal-slide game-time-title pre-game" v-show="!gameData[index].isOver"><!-- 普通slide的结构 + 未开赛 -->
              <span class="datetime">{{gameData[index].date}}·{{gameData[index].time}}</span>
            </div>

            <div class="detail normal-slide over-game" v-show="gameData[index].isOver"><!-- 普通slide + 已完赛 -->
              <div class="first">
                <span :style="{color:myTeam.teamColor}">{{myTeam.name}}</span>
                <span class="score">{{gameData[index].sunsScore}}</span>
                <span>{{gameData[index].isHome?'vs':'@'}}</span>
                <span :style="{color:gameData[index].teamColor}">{{gameData[index].team}}</span>
                <span class="score">{{gameData[index].teamScore}}</span>
              </div>
              <el-divider class="ver-divi" direction="vertical"></el-divider><!-- 垂直分割线 -->
              <div class="second">
                <span>FINAL</span>
                <span>·</span>
                <span :style="{color:gameData[index].result==='W'?'#28ac21':'#CC0000'}">{{gameData[index].result}}</span>
              </div>
              <el-divider class="hor-divi"></el-divider><!-- 水平分割线 -->
            </div>

            <div class="detail active-slide over-game" v-show="gameData[index].isOver"><!-- active slide + 已完赛 -->
              <div class="active-wrap">
                <div class="first">
                  <div><img :src="myTeam.teamLOGO"></div>
                  <div>
                    <span class="active-score">{{gameData[index].sunsScore}}</span>
                    <span class="separator">{{gameData[index].isHome?'vs':'@'}}</span>
                    <span class="active-score">{{gameData[index].teamScore}}</span>
                  </div>
                  <div><img :src="gameData[index].teamLOGO"></div>
                </div>
                <el-divider class="hor-divi"></el-divider><!-- 水平分割线 -->
                <div class="second">
                  <div><span class="city">{{myTeam.city}}</span></div>
                  <div>
                    <span>FINAL·</span>
                    <span :style="{color:gameData[index].result==='W'?'#28ac21':'#CC0000'}">{{gameData[index].result}}</span>
                  </div>
                  <div><span class="city">{{gameData[index].city}}</span></div>
                </div>
              </div>
            </div>

            <div class="detail normal-slide pre-game" v-show="!gameData[index].isOver"><!-- 普通slide + 未开赛 -->
              <div class="first">
                <span :style="{color:myTeam.teamColor}">{{myTeam.name}}</span>
                <span class="separator">{{gameData[index].isHome?'vs':'@'}}</span>
                <span :style="{color:gameData[index].teamColor}">{{gameData[index].team}}</span>
              </div>
              <el-divider class="ver-divi" direction="vertical"></el-divider><!-- 垂直分割线 -->
              <div class="second">
                <div><!-- broadcaster1 -->
                  <div class="broadcaster-way">{{gameData[index].broadcaster1Way}}</div>
                  <div class="broadcaster-name">{{gameData[index].broadcaster1Name}}</div>
                </div>
                <div><!-- broadcaster2 -->
                  <div class="broadcaster-way">{{gameData[index].broadcaster2Way}}</div>
                  <div class="broadcaster-name">{{gameData[index].broadcaster2Name}}</div>
                </div>
              </div>
              <el-divider class="hor-divi"></el-divider><!-- 水平分割线 -->
              <el-button v-show="!gameData[index].isOver && gameData[index].isHome"><i class="el-icon-s-ticket"></i>FIND</el-button>
            </div>
            
            <div class="detail active-slide pre-game" v-show="!gameData[index].isOver"><!-- active slide + 未开赛 -->
              <div class="first">
                <div><img :src="myTeam.teamLOGO"></div>
                <div>
                  <span class="record">{{myTeam.record}}</span>
                  <span class="separator">{{gameData[index].isHome?'vs':'@'}}</span>
                  <span class="record">{{gameData[index].record}}</span>
                </div>
                <div><img :src="gameData[index].teamLOGO"></div>
              </div>
              <el-divider direction="vertical"></el-divider><!-- 垂直分割线 -->
              <div class="second">
                <div><!-- broadcaster1 -->
                  <div class="broadcaster-way">{{gameData[index].broadcaster1Way}}</div>
                  <div class="broadcaster-name">{{gameData[index].broadcaster1Name}}</div>
                </div>
                <div><!-- broadcaster2 -->
                  <div class="broadcaster-way">{{gameData[index].broadcaster2Way}}</div>
                  <div class="broadcaster-name">{{gameData[index].broadcaster2Name}}</div>
                </div>
                <el-button v-show="!gameData[index].isOver && gameData[index].isHome"><i class="el-icon-s-ticket"></i>FIND</el-button>
              </div>
            </div>


          </div>
          <div class="swiper-slide courtslide">
            <a href="https://www.nba.com/suns/schedule">View Full Schedule</a>
          </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>

  </div>
</template>
<script>
import Swiper from 'swiper';
export default {
  /* 
    slidesPerView 显示多少个slide
    centeredSlides 活动块居中
    initialSlide 设置初始slider
    slideToClickedSlide 点击过渡
    lazyLoading 图片懒加载
    lazyLoadingInPrevNext 提前懒加载
    lazyLoadingOnTransitionStart 过渡时就开始懒加载
    breakpoints 屏幕宽度不同，改变可视slider数
   */
  data () {
    return {
      gameData:[
        {
          date:'SATURDAY, JAN 18',
          time:'7:00 PM',
          team:'BOS',
          teamColor:'#007A33',
          city:'BOSTON',
          teamLOGO:'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/bos.gif',
          record:'34-15',
          isOver:true,
          sunsScore:'123',
          teamScore:'119',
          result:'W',
          isHome:false,
          broadcaster1Way:'TV',
          broadcaster1Name:'Fox Sports Arizona',
          broadcaster2Way:'RA',
          broadcaster2Name:'AZ Sports 98.7 FM',
        },
        {
          date:'MONDAY, JAN 20',
          time:'9:00 PM',
          team:'SAS',
          teamColor:'#788287',
          city:'SAN ANTONIO',
          teamLOGO:'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/sas.gif',
          record:'22-27',
          isOver:true,
          sunsScore:'118',
          teamScore:'120',
          result:'L',
          isHome:true,
          broadcaster1Way:'TV',
          broadcaster1Name:'Fox Sports Arizona',
          broadcaster2Way:'RA',
          broadcaster2Name:'AZ Sports 98.7 FM',
        },
        {
          date:'WEDNESDAY, JAN 22',
          time:'8:30 PM',
          team:'Pacers',
          teamColor:'#00275d',
          city:'INDIANA',
          teamLOGO:'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/ind.gif',
          record:'31-19',
          isOver:true,
          sunsScore:'87',
          teamScore:'112',
          result:'L',
          isHome:true,
          broadcaster1Way:'TV',
          broadcaster1Name:'Fox Sports Arizona',
          broadcaster2Way:'RA',
          broadcaster2Name:'AZ Sports 98.7 FM',
        },
        {
          date:'FRIDAY, JAN 24',
          time:'8:30 PM',
          team:'SAS',
          teamColor:'#788287',
          city:'SAN ANTONIO',
          teamLOGO:'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/sas.gif',
          record:'22-27',
          isOver:true,
          sunsScore:'103',
          teamScore:'99',
          result:'W',
          isHome:false,
          broadcaster1Way:'TV',
          broadcaster1Name:'Fox Sports Arizona',
          broadcaster2Way:'RA',
          broadcaster2Name:'AZ Sports 98.7 FM',
        },
        {
          date:'SUNDAY, JAN 26',
          time:'6:00 PM',
          team:'MEM',
          teamColor:'#5D76A9',
          city:'MEMPHIS',
          teamLOGO:'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/mem.gif',
          record:'25-25',
          isOver:false,
          sunsScore:'0',
          teamScore:'0',
          result:null,
          isHome:false,
          broadcaster1Way:'TV',
          broadcaster1Name:'Fox Sports Arizona',
          broadcaster2Way:'RA',
          broadcaster2Name:'AZ Sports 98.7 FM',
        },
        {
          date:'TUESDAY, JAN 28',
          time:'8:30 PM',
          team:'DAL',
          teamColor:'#00538C',
          city:'DALLAS',
          teamLOGO:'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/dal.gif',
          record:'31-19',
          isOver:false,
          sunsScore:'0',
          teamScore:'0',
          result:null,
          isHome:false,
          broadcaster1Way:'TV',
          broadcaster1Name:'Fox Sports Arizona',
          broadcaster2Way:'RA',
          broadcaster2Name:'AZ Sports 98.7 FM',
        },
        {
          date:'FRIDAY, JAN 31',
          time:'9:00 PM',
          team:'OKC',
          teamColor:'#007AC1',
          city:'OKLAHOMA',
          teamLOGO:'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/okc.gif',
          record:'30-20',
          isOver:false,
          sunsScore:'0',
          teamScore:'0',
          result:null,
          isHome:true,
          broadcaster1Way:'TV',
          broadcaster1Name:'Fox Sports Arizona',
          broadcaster2Way:'RA',
          broadcaster2Name:'AZ Sports 98.7 FM',
        },
      ],
      myTeam:{
        name:'PHX',
        teamLOGO:'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/phx.gif',
        teamColor:'#e56020',
        city:'PHEONIX',
        record:'20-30',
      },
      mySwiper:{},
    }
  },
  mounted(){
      this.mySwiper = new Swiper ('.swiper-container', {
      slidesPerView: 3,
      slidesPerGroup:1,
      height:110,
      initialSlide:4,
      slideToClickedSlide:true,
      centeredSlides:true,
      freeModeMomentumBounceRatio:1.5,
      resistance:true,
      lazy:{
        loadPrevNext:true,
        loadOnTransitionStart:true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })    
  },
  watch:{
    'mySwiper.isBeginning': {
      handler(val){
        if(val){
          setTimeout(() => {
            this.mySwiper.slideTo(1)
          }, 500);
        }
      }
    },
    'mySwiper.isEnd': {
      handler(val){
        if(val){
          setTimeout(() => {
            this.mySwiper.slideTo(7)
          }, 500);
        }
      }
    },
  }
}
</script>
<style lang="stylus" scoped>


.el-button:hover
  background-color white
  color #e76221
.el-button
  box-sizing border-box
  width 100px
  height 26px
  padding 0
  padding-right 6px
  background-color #e76221
  color white
  font-weight bold
  border-radius 2px
  box-shadow 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)
  .el-icon-s-ticket
    margin-right 13px
          

.schedule
  position relative
  background-color rgb(233, 233, 233)
  box-shadow 0px 0px 4px 1px #000000
  .scheduleContain
    max-width 1152px
    width 84.5%
    margin 0 auto
    overflow hidden
    .swiper-container
      overflow visible
      position static
      max-width: 978px
      width 88.9%
      height: 110px
      margin: 0 auto
      .swiper-button-next,.swiper-button-prev
        background-color rgb(237, 237, 237)
        color rgb(223, 223, 223)
        height 100%
        top 22px
      .swiper-button-next
        right 0
      .swiper-button-prev
        left 0
      .swiper-wrapper
        margin-left -87px
        .swiper-slide
          text-align: center;
          font-size: 18px;
          background rgb(233, 233, 233)
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          cursor default
          align-items: center
          display block
          width 326px
          width 33.33%!important
          box-sizing border-box
          border-top 3px solid rgb(233, 233, 233)
          border-bottom 3px solid rgb(233, 233, 233)
          div.active-slide
            display none
          .gameTimePrompt
            color #e76221
            font-size 12px
            font-size 12px
            font-weight normal
            letter-spacing 2px
            line-height 12px
            position absolute
            width 100%
            text-align center
            left 0
          .game-time-title
            margin-top 12px
            font-size 12px
            margin-bottom 8px
            text-align center
            letter-spacing 2px
          .game-time-title.pre-game
            .el-divider
              background-color rgb(218, 218, 218)
              margin-left 10px
              margin-right 6px
          .detail
            .hor-divi
              margin 0
              background-color rgb(208, 208, 208)
              border-bottom 1px solid white
          .detail.pre-game
            .second
              font-size 12px
              > div
                > div
                  display inline-block
                > .broadcaster-way
                  font-weight normal
                  width 17.5px
                  text-align center
                  border 1px solid #acacac
                  background-color white
                  color #000
                  height 12px
                  line-height 12px
                  margin-right 4px
                  margin-bottom 2.5px
                  padding 0 4px
                  vertical-align middle
                  border-radius 2.5px
                > .broadcaster-name
                  color rgb(102, 102, 102)
                  font-size bold
                  line-height 19px
                  vertical-align bottom
          .detail.normal-slide.pre-game
            .first
              font-size 19px
              > span
                display inline-block
              > span.separator
                color rgb(102, 102, 102)
                font-size 14px
                line-height 14px
                height auto
                opacity 0.8
                padding 0 4px
                vertical-align middle
            .second
              > div
                width 115px
                overflow hidden
                white-space nowrap
            .el-button
              margin-top 5px
          .detail.normal-slide.over-game
            .first,.second
              font-size 16px
            .first
              span.score
                margin-left 2px
              span:nth-child(3)
                font-size 12px
                margin 0 5px
                color rgb(102, 102, 102)
          .detail.normal-slide
            height 38px
            > .ver-divi
              float left
              background-color rgb(208, 208, 208)
              border-right 1px solid white
              height 100%
            > .hor-divi
              clear left
            .first,.second
              float left
              font-weight 700
              height 100%
              span
                display inline-block
                vertical-align middle
                height 100%
                line-height 38px
            .first
              padding-left 5%
              padding-right 6%
            .second
              padding-left 10%
        .swiper-slide-active
          background-color rgb(240, 240, 240)
          max-width 500px!important
          width 51.77%!important
          border 3px solid rgb(240, 240, 240)
          border-bottom-color rgb(231, 98, 33)
          box-shadow 0 0 20px -5px rgba(0,0,0,0.5)
          z-index 1
          div.active-slide
            display block
          div.normal-slide
            display none
          .detail.active-slide.pre-game::after
            content ''
            display block
            clear both
          .detail.active-slide.pre-game
            > div
              float left
            > .first
              box-sizing border-box
              padding 0 5%
              width 66%
              display flex
              justify-content space-around
              align-items center
              > div
                span.separator
                  margin 0 7px
                span
                  font-size 21px
                  color #666
                  opacity 0.8
                img
                  max-height 50px
            > .second
              position relative
              width 33%
              padding-left 15px
              box-sizing border-box
              text-align left
              > div
                > div
                  text-align left
                > .broadcaster-name
                  font-weight bold
            > .el-divider
              height 60px
              margin 0
              background-color rgb(208, 208, 208)
              border-right 1px white solid
            .el-button
              margin-top 2px
              float none
              position absolute
          .detail.active-slide.over-game
            .active-wrap
              margin 0 auto
              width 66%
              .first::after,.second::after
                content ''
                clear both
                display block
              .first,.second
                > div
                  float left
                  width 33.3%
                  text-align center
              .first
                > div
                  font-weight 700
                  img
                    max-height 30px
                  > .score
                    font-size 20px
                  > .separator
                    margin-top 12px
                    font-size 12px
                    color rgb(102, 102, 102)
                    display inline-block
                    padding 0 7px 
              .second
                div
                  > span
                    margin-top 5px
                    text-transform uppercase
                    font-weight bold
                    font-size 16px
                    display inline-block
                  > .city
                    font-size 12px
                    display inline-block
                    color #444
                    font-weight normal
        .swiper-slide.courtslide
          a:hover
            color #ef6320
          a
            display inline-block
            height 100%
            width 100%
            cursor pointer
            color rgb(158, 158, 158)
            text-decoration none
            font-weight bold
            font-size 12px
            line-height 103px
            padding 0
        .swiper-slide-active.courtslide
          a
            font-size 18px

</style>