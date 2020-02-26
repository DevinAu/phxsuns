<template>
<div>
  <div id="nav" class="contain" :class="{isFix:isTop}"><!--  :class="{'isFix':aaa}" -->
    <div>
      <a href="https://www.nba.com/suns/">
        <el-image class="sunsLogo" fit:fill 
        src="https://www.nba.com/suns/sites/suns/files/suns_logo_navigation.png?"
        ></el-image>
      </a>
      <div class="navMainWrap">
        <div class="top">
          <div class="hamber" @click.stop="toggleNav()"><i class="el-icon-menu"></i></div>
          <ul class="navlist">
            <li>
              <a>TEAM</a>
              <ul>
                <li>Roster</li>
                <li>Player Stats</li>
                <li>Team Stats</li>
                <li>Leaders</li>
                <li>Standings</li>
                <li>Social</li>
                <div class="block-img">
                  <a>
                    <img src="https://www.nba.com/suns/sites/suns/files/suns_mobile_app.jpeg?">
                  </a>
                </div>
              </ul>
            </li>
            <li>
              <a>TICKETS</a>
              <ul>
                <li>Ticket Central</li>
                <li>Paypal Season Ticket Menbership</li>
                <li>Singel Game</li>
                <li>Sunscription Pass</li>
                <li>Mobile Ticketing</li>
                <li>Partial Plans</li>
                <li>Group Tickets</li>
                <li>Premium Exprience</li>
                <li>Account Manager</li>
                <div class="block-img">
                  <a>
                    <img src="https://www.nba.com/suns/sites/suns/files/3dseating-nav-block.jpg?">
                  </a>
                </div>
              </ul>
            </li> 
            <li>
              <a>VIDEOS</a>
              <ul>
                <li>Since '68</li>
                <li>Team Originals</li>
                <li>Gatorade Post-Game Roport</li>
                <li>Annexus Listen Up</li>
                <li>The Outlet</li>
                <li>15SOF Fan Monents</li>
                <li>All Videos</li>
                <div class="block-img">
                  <a>
                    <img src="https://www.nba.com/suns/sites/suns/files/since68_navigationbtn.png?">
                  </a>
                </div>
              </ul>
            </li>
            <li>
              <a>NEWS</a>
              <ul>
                <li>Latest Headlines</li>
                <li>Photo Galleries</li>
                <li>SunsDay Post</li>
                <li>Media Resoures</li>
                <div class="block-img">
                  <a>
                    <img src="https://www.nba.com/suns/sites/suns/files/rise_navigation.png?">
                  </a>
                </div>
              </ul>
            </li>
            <li>
              <a>SCHEDULE</a>
              <ul>
                <li>Schedule & Results</li>
                <li>Printable Schedule</li>
                <li>Text Alerts</li>
                <li>Channel Listings</li>
                <li>TSRA Calendar of Events</li>
                <li>Streaming Suns Games</li>
                <div class="block-img">
                  <a>
                    <img src="https://www.nba.com/suns/sites/suns/files/scheduleresults-navblock-img.jpg?">
                  </a>
                </div>
              </ul>
            </li>
            <li>
              <a>ENTERTAINMENT</a>
              <ul>
                <li>Dancers</li>
                <li>Suns Entertainment</li>
                <div class="block-img">
                  <a>
                    <img src="https://www.nba.com/suns/sites/suns/files/gorilla.jpg?">
                  </a>
                </div>
              </ul>
            </li>
            <li class="hideInMore">
              <a>PROMOS</a>
              <ul>
                <li>Promotional Calendar</li>
                <li>Offers</li>
                <li>Suns Marketing Partners</li>
                <li>CopperPoint Safe Employer</li>
                <li>Kids Club</li>
                <div class="block-img">
                  <a>
                    <img src="https://www.nba.com/suns/sites/suns/files/promo-cal-block.png?">
                  </a>
                </div>
              </ul>
            </li>
            <li class="hideInMore">
              <a>COMMUNITY</a>
              <ul>
                <li>Donation Requests</li>
                <li>Jr. Suns</li>
                <li>Los Suns Small Business MVP</li>
                <div class="block-img">
                  <a>
                    <img src="https://www.nba.com/suns/sites/suns/files/charities.jpg?">
                  </a>
                </div>
              </ul>
            </li>
            <li class="hideInMore">
              <a>SHOP</a>
              <ul>
                <li>Clearance</li>
                <li>Gifts</li>
                <li>Hats</li>
                <li>New Items</li>
                <li>Youth</li>
                <li>Arena Shop</li>
                <div class="block-img">
                  <a>
                    <img src="https://www.nba.com/suns/sites/suns/files/shop_suns_com.png?">
                  </a>
                </div>
              </ul>
            </li>
            <li class="hideInMore arena">
              <a>ARENA</a>
              <ul>
                <li>Partners</li>
                <li>Talking Stick Resort Arena</li>
                <li>Contact Us</li>
                <li>Staff Directory</li>
                <li>Concerts & Events</li>
                <li>Phoenix Mercury</li>
                <li>PAL Program</li>
                <li>EFFEN Lounge</li>
                <div class="block-img">
                  <a>
                    <img src="https://www.nba.com/suns/sites/suns/files/project201_nav.png?">
                  </a>
                </div>
              </ul>
            </li>
            <li @mouseout="clearMore()" @mouseover="remainExpand()" class="more">
              <a>MORE</a>
              <div :class="{expanding:isItemExpand}">
                <ul>
                  <li class="more-item">
                    <a @click="toggleMoreItem('item1')"><i class="el-icon-arrow-down"></i>PROMOS</a>
                    <ul class="item1 item">
                      <li @click="toggleMoreItem('item1')"><i class="el-icon-arrow-left"></i></li>
                      <li>Promotional Calendar</li>
                      <li>Offers</li>
                      <li>Suns Marketing Partners</li>
                      <li>CopperPoint Safe Employer</li>
                      <li>Kids Club</li>
                      <div>
                        <a>
                          <img src="https://www.nba.com/suns/sites/suns/files/promo-cal-block.png?">
                        </a>
                      </div>
                    </ul>
                  </li>
                  <li class="more-item">
                    <a @click="toggleMoreItem('item2')"><i class="el-icon-arrow-down"></i>COMMUNITY</a>
                    <ul class="item2 item">
                      <li @click="toggleMoreItem('item2')"><i class="el-icon-arrow-left"></i></li>
                      <li>Donation Requests</li>
                      <li>Jr. Suns</li>
                      <li>Los Suns Small Business MVP</li>
                      <div class="block-img">
                        <a>
                          <img src="https://www.nba.com/suns/sites/suns/files/charities.jpg?">
                        </a>
                      </div>
                    </ul>
                  </li>
                  <li class="more-item">
                    <a @click="toggleMoreItem('item3')"><i class="el-icon-arrow-down"></i>SHOP</a>
                    <ul class="item3 item">
                      <li @click="toggleMoreItem('item3')"><i class="el-icon-arrow-left"></i></li>
                      <li>Clearance</li>
                      <li>Gifts</li>
                      <li>Hats</li>
                      <li>New Items</li>
                      <li>Youth</li>
                      <li>Arena Shop</li>
                      <div class="block-img">
                        <a>
                          <img src="https://www.nba.com/suns/sites/suns/files/shop_suns_com.png?">
                        </a>
                      </div>
                    </ul>
                  </li>
                  <li class="more-item">
                    <a @click="toggleMoreItem('item4')"><i class="el-icon-arrow-down"></i>ARENA</a>
                    <ul class="item4 item">
                      <li @click="toggleMoreItem('item4')"><i class="el-icon-arrow-left"></i></li>
                      <li>Partners</li>
                      <li>Talking Stick Resort Arena</li>
                      <li>Contact Us</li>
                      <li>Staff Directory</li>
                      <li>Concerts & Events</li>
                      <li>Phoenix Mercury</li>
                      <li>PAL Program</li>
                      <li>EFFEN Lounge</li>
                      <div class="block-img">
                        <a>
                          <img src="https://www.nba.com/suns/sites/suns/files/project201_nav.png?">
                        </a>
                      </div>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div>
            <el-button class="btn">SixthMan Login</el-button>
          </div>
        </div>
        <el-divider v-if="!isTop" class="divider"></el-divider>
        <div v-show="!isTop" class="bottom">
          <div class="sponser">
            <span>PRESENTED BY</span>
            <a>
              <img src="https://www.nba.com/suns/sites/suns/files/caz_tsr_horizontal-logo_blk_395x25.png?w=348&h=22">
            </a>
          </div>
          <div class="media">
            <div><a href="#" class="fa fa-facebook"></a></div>
            <div class="twitter"><a href="#" class="fa fa-twitter"></a></div>
            <div><a href="#" class="fa fa-instagram"></a></div>
            <div class="envelope"><a href="#" class="fa fa-envelope"></a></div>
          </div>
          <div class="search">
            <input class="searchInput" placeholder="Search" v-model="keyword">
            <i class="el-icon-search"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="stay" :class="{isStay:isTop}"></div>
  <div @click.stop="">
    <el-menu
      :unique-opened="true"
      class="el-menu-vertical-demo"
      background-color="#f5f5f5"
      text-color="#000"
      active-text-color="#e76221"
      >

      <el-submenu index="1">
        <template slot="title">
          <span>TEAM</span>
        </template>
        <el-menu-item index="1-1">Roster</el-menu-item>
        <el-menu-item index="1-2">Player Stats</el-menu-item>
        <el-menu-item index="1-3">Team Stats</el-menu-item>
        <el-menu-item index="1-4">Leaders</el-menu-item>
        <el-menu-item index="1-5">Standings</el-menu-item>
        <el-menu-item index="1-6">Social</el-menu-item>
        <el-menu-item index="1-7">
          <a>
            <img src="https://www.nba.com/suns/sites/suns/files/suns_mobile_app.jpeg?">
          </a>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>TICKETS</span>
        </template>
        <el-menu-item index="2-1">Ticket Central</el-menu-item>
        <el-menu-item index="2-2">Paypal Season Ticket Menbership</el-menu-item>
        <el-menu-item index="2-3">Singel Game</el-menu-item>
        <el-menu-item index="2-4">Sunscription Pass</el-menu-item>
        <el-menu-item index="2-5">Mobile Ticketing</el-menu-item>
        <el-menu-item index="2-6">Partial Plans</el-menu-item>
        <el-menu-item index="2-7">Group Tickets</el-menu-item>
        <el-menu-item index="2-8">Premium Exprience</el-menu-item>
        <el-menu-item index="2-9">Account Manager</el-menu-item>
        <el-menu-item index="2-10">
          <a>
            <img src="https://www.nba.com/suns/sites/suns/files/3dseating-nav-block.jpg?">
          </a>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>VIDEOS</span>
        </template>
        <el-menu-item index="3-1">Since '68</el-menu-item>
        <el-menu-item index="3-2">Team Originals</el-menu-item>
        <el-menu-item index="3-3">Gatorade Post-Game Roport</el-menu-item>
        <el-menu-item index="3-4">Annexus Listen Up</el-menu-item>
        <el-menu-item index="3-5">The Outlet</el-menu-item>
        <el-menu-item index="3-6">15SOF Fan Monents</el-menu-item>
        <el-menu-item index="3-7">All Videos</el-menu-item>
        <el-menu-item index="3-8">
          <a>
            <img src="https://www.nba.com/suns/sites/suns/files/since68_navigationbtn.png?">
          </a>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span>NEWS</span>
        </template>
        <el-menu-item index="4-1">Latest Headlines</el-menu-item>
        <el-menu-item index="4-2">Photo Galleries</el-menu-item>
        <el-menu-item index="4-3">SunsDay Post</el-menu-item>
        <el-menu-item index="4-4">Media Resoures</el-menu-item>
        <el-menu-item index="4-5">
          <a>
            <img src="https://www.nba.com/suns/sites/suns/files/rise_navigation.png?">
          </a>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <span>SCHEDULE</span>
        </template>
        <el-menu-item index="5-1">Schedule & Results</el-menu-item>
        <el-menu-item index="5-2">Printable Schedule</el-menu-item>
        <el-menu-item index="5-3">Text Alerts</el-menu-item>
        <el-menu-item index="5-4">Channel Listings</el-menu-item>
        <el-menu-item index="5-5">TSRA Calendar of Events</el-menu-item>
        <el-menu-item index="5-6">Streaming Suns Games</el-menu-item>
        <el-menu-item index="5-7">
          <a>
            <img src="https://www.nba.com/suns/sites/suns/files/scheduleresults-navblock-img.jpg?">
          </a>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <span>ENTERTAINMENT</span>
        </template>
        <el-menu-item index="6-1">Dancers</el-menu-item>
        <el-menu-item index="6-2">Suns Entertainment</el-menu-item>
        <el-menu-item index="6-3">
          <a>
            <img src="https://www.nba.com/suns/sites/suns/files/gorilla.jpg?">
          </a>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <span>PROMOS</span>
        </template>
        <el-menu-item index="7-1">Promotional Calendar</el-menu-item>
        <el-menu-item index="7-2">Offers</el-menu-item>
        <el-menu-item index="7-3">Suns Marketing Partners</el-menu-item>
        <el-menu-item index="7-4">CopperPoint Safe Employer</el-menu-item>
        <el-menu-item index="7-5">Kids Club</el-menu-item>
        <el-menu-item index="7-6">
          <a>
            <img src="https://www.nba.com/suns/sites/suns/files/promo-cal-block.png?">
          </a>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <span>COMMUNITY</span>
        </template>
        <el-menu-item index="8-1">Donation Requests</el-menu-item>
        <el-menu-item index="8-2">Jr. Suns</el-menu-item>
        <el-menu-item index="8-3">Los Suns Small Business MVP</el-menu-item>
        <el-menu-item index="8-4">
          <a>
            <img src="https://www.nba.com/suns/sites/suns/files/charities.jpg?">
          </a>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">
          <span>SHOP</span>
        </template>
        <el-menu-item index="8-1">Clearance</el-menu-item>
        <el-menu-item index="8-2">Gifts</el-menu-item>
        <el-menu-item index="8-3">Hats</el-menu-item>
        <el-menu-item index="8-4">New Items</el-menu-item>
        <el-menu-item index="8-5">Youth</el-menu-item>
        <el-menu-item index="8-6">Arena Shop</el-menu-item>
        <el-menu-item index="8-7">
          <a>
            <img src="https://www.nba.com/suns/sites/suns/files/shop_suns_com.png?">
          </a>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="10">
        <template slot="title">
          <span>ARENA</span>
        </template>
        <el-menu-item index="9-1">Partners</el-menu-item>
        <el-menu-item index="9-2">Talking Stick Resort Arena</el-menu-item>
        <el-menu-item index="9-3">Contact Us</el-menu-item>
        <el-menu-item index="9-4">Staff Directory</el-menu-item>
        <el-menu-item index="9-5">Concerts & Events</el-menu-item>
        <el-menu-item index="9-6">Phoenix Mercury</el-menu-item>
        <el-menu-item index="9-7">PAL Program</el-menu-item>
        <el-menu-item index="9-8">EFFEN Lounge</el-menu-item>
        <el-menu-item index="9-9">
          <a>
            <img src="https://www.nba.com/suns/sites/suns/files/project201_nav.png?">
          </a>
        </el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</div>
</template>
<script>
export default {
    data(){
      return{
        keyword:'',
        isTop:false,
        //isNavOpen:false,
        isItemExpand:false,
        targitIndex:'',
        clearExpand:null,
      }
    },
    props:{
      navOpen:{
        type:Boolean
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
      handleScroll () {
        let stayTop = document.querySelector('#stay').getBoundingClientRect().top
        if(stayTop <= 88){
          this.isTop = true
        }else{
          this.isTop = false
        }
      },
      toggleNav(){
        const navOpen = !this.navOpen
        if(navOpen){//打开
          this.$el.querySelector('.contain').style.transform = "translate(-251px,0)"
          this.$el.querySelector('.el-menu').style.visibility = "visible"
          this.$el.querySelector('.el-menu').style.transform = "translate(0)"
        }else{//关闭
          this.$el.querySelector('.contain').style.transform = "translate(0)"
          this.$el.querySelector('.el-menu').style.visibility = "hidden"
          this.$el.querySelector('.el-menu').style.transform = "translate(251px,0)"
        }
        this.$emit('update:navOpen',navOpen)
        this.$emit("pageMoveDir",navOpen)
        //this.navOpen = !this.navOpen
      },
      toggleMoreItem(index){
        const {isItemExpand} = this
        if(!isItemExpand){//未展开
          //令对应item的ul display为block+transform左移
          this.$el.querySelector(`.${index}`).style.visibility = "visible"
          this.$el.querySelector(`.${index}`).style.transform = "translate(-110%,0)"
          //对应item打上标记
          this.targitIndex = index
        }else{//已展开
          //令对应item的ul display为none+transform右移
          this.$el.querySelector(`.${index}`).style.transform = "translate(0)"
          this.$el.querySelector(`.${index}`).style.visibility = "hidden"
          //移除对应item的标记
          this.targitIndex = ''
        }
        //为li.more>div添加或移除classname“expanding”
        this.isItemExpand = !isItemExpand
      },
      clearMore(){
        this.clearExpand = setTimeout(() => {
          const {targitIndex} = this
          //li.more>div移除classname“expanding”
          this.isItemExpand = false
          //如果有targitIndex，令对应item的ul display为none+transform右移素
          if(targitIndex){
            this.$el.querySelector(`.${targitIndex}`).style.transform = "translate(0)"
            this.$el.querySelector(`.${targitIndex}`).style.visibility = "hidden"
          }
          //移除对应item的标记
          this.targitIndex = ''
        }, 50);
      },
      remainExpand(){
        clearTimeout(this.clearExpand)
      }
    },
    destroyed () {//离开该页面需要移除这个监听的事件
      window.removeEventListener('scroll', this.handleScroll)
    },
    computed:{

    },
    watch:{
      navOpen(val){
        if(!val){//监视一旦外部父组件点击全局就使menu关闭
          this.$el.querySelector('.contain').style.transform = "translate(0)"
          this.$el.querySelector('.el-menu').style.visibility = "hidden"
          this.$el.querySelector('.el-menu').style.transform = "translate(251px,0)"
          this.$emit("pageMoveDir",false)
        }
      }
    }
}

</script>
<style lang="stylus" scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

  .isStay
    margin-bottom 75px
  .el-menu
    overflow-y auto
    transition 0.5s
    z-index 1000
    position fixed
    visibility hidden
    transform translate(251px,0)
    right 0
    top 0
    width 250px
    bottom 0
    .el-submenu
      .el-menu-item
        background-color #fff!important
        color rgb(51,51,51)!important
        transition 0s
        line-height 45px
        height 45px
        border-bottom 1px solid rgb(208,208,208)
      .el-menu-item:last-child
        padding 10px 18px!important
        height auto
        a
          width auto
          img
            width 100%
      .el-menu-item:hover
        color #e76221!important
  .contain
    transition 0.5s
    margin 0 auto
    position static
    font-family Arial, sans-serif
    width 100%
    padding 6px 0
    border-top 1px rgb(220, 220, 220) solid
    border-bottom 1px rgb(220, 220, 220) solid
    display flex
    justify-content center
    div
      display flex
      > a
        display inline-block
        width 83px
        height 83px
        .sunsLogo
          height 100%
      > div
        display block
      div.navMainWrap
        height 82.5px
        > div.top
          position relative
          display flex
          align-items center
          > .hamber:hover
            cursor pointer
            color #f69e32
          > .hamber
            position absolute
            padding 0
            font-size 30px
            border-width 0
            color #717171
          ul.navlist
            padding 0 20px
            width auto
            list-style none
            height 52px
            > li:hover > ul
              display block
            > li.more:hover > div
              display block
            li
              width max-content
              position relative
              margin-right 8px
              line-height 52px
              > a:hover
                cursor pointer
                color #e76221
              > ul
                z-index 9999
                border 1px solid rgb(236,236,236)
                border-top 3px solid rgb(251, 173, 90)
                display none
                width 260px
                position absolute
                list-style none
                background-color white
                box-shadow:10px 0px 12px -15px black, -10px 0px 12px -15px black, 0px 10px 12px -15px black
                > li:hover
                  color #e76221
                > li
                  box-sizing border-box
                  cursor pointer
                  margin 0
                  width 100%
                  padding 12px 16px
                  line-height 18px
                  border-bottom 1px rgb(236,236,236) solid
                div.block-img
                  cursor pointer
                  padding 10px
                  a
                    padding 0
                    line-height 0
            li.arena > ul
              right 0
            li.more
              > div
                z-index 1000
                border 1px solid rgb(236,236,236)
                border-top 3px solid rgb(251, 173, 90)
                display none
                width 260px
                position absolute
                right 0
                background-color white
                box-shadow:10px 0px 12px -15px black, -10px 0px 12px -15px black, 0px 10px 12px -15px black
                overflow visible
                > ul
                  list-style none
                  position relative
                  overflow-x hidden
                  padding-bottom: 10000px
                  margin-bottom: -10000px
                  > li
                    position static
                    box-sizing border-box
                    margin 0
                    width 100%
                    line-height 18px
                    border-bottom 1px rgb(236,236,236) solid
                    > a
                      display inline-block
                      width 100%
                      height 18px
                      padding 12px 16px
                    > a:hover
                      color #e76221
                      cursor pointer
                    > ul
                      display block
                      visibility hidden
                      overflow visible
                      left 110%
                      top -3px
                      width 100%
                      position absolute
                      transition 0.2s
                      shadow none
              > div.expanding
                >ul >li >a
                  color #fff
          .btn:hover
            background-color #1d1060
            color #fff
          .btn
            width max-content
            padding 8.5px 4px
            border-color rgba(29, 16, 96, 0.4)
            font-family Arial, sans-serif
            color #1d1060
        > div.bottom
          overflow hidden
          height 30px
          line-height 30px
          > div
            float right
          > div:first-child
            float left
            font-family Arial, Helvetica, sans-serif
            line-height 35px
            span
              font-size 12px
              margin 0 5px
            a img
              height 14px
          div.search:hover > i.el-icon-search
            color #f69e32
          div.search:hover > input
            opacity 1
            transform: translate(0px)
          div.search,div.media
            position relative
          div.media
            z-index 500
            line-height 36px
            top 3px
            height 30px
            width 124px
            display flex
            justify-content space-between
            align-items center
            div
              padding: 3.5px 4.5px
              height 16px
              border 1px solid rgb(210, 210, 210)
              border-radius 5px
              display flex
              .fa
                width 14px
                height 16px
                background-size cover
                text-align center
                background-repeat no-repeat
                background-color white
                color rgb(210, 210, 210)
                text-decoration none
              .fa-facebook
                background rgb(210, 210, 210)
                color white
            .envelope
              padding: 3.5px
              .fa-envelope
                width 16px
          div.search
            margin-right 8px
            i.el-icon-search
              position absolute
              right 0
              line-height 36px
            .searchInput:focus
              opacity 1
              transform: translate(0px)
            .searchInput:focus ~ i.el-icon-search
              color #f69e32
            .searchInput
              height 36px
              border-width 0
              outline:medium
              opacity 0
              transition 0.4s
              transform: translate(500px,0px)
              background none
        > .divider
          margin 0
  .contain.isFix
    top 0
    position fixed
    border 1px white solid
    padding 6px 0
    box-shadow 0px 0px 5px 0px #1f1f1f
    z-index 9999
    > div
      display flex
      align-items center
      > a
        width 48px
        height 48px
        .sunsLogo
          height 100%
      div.navMainWrap
        height auto
        > div.top
          > ul.navlist
            height 48px
            > li
              line-height 48px
          .btn
            padding 6.5px 4px

@media only screen and (min-width:0px)
  .contain
    >div
      width 90%
      justify-content space-between
      >div.navMainWrap
        width 80%
        >.top
          height 52px
          .hamber
            visibility visivle
            right 2%
          .btn
            display block
          ul.navlist
            display none
        >.bottom
          .sponser
            display none
  .contain.isFix
    padding-left 10px
    > div
      width 100%
      justify-content flex-start
      > div.navMainWrap
        width 100%
        > div.top
          height auto
          width 100%
          margin-left 0
          > .hamber
            right 3%
          > .btn
            margin-left 2%

@media only screen and (min-width:768px)
  .contain
    >div
      width 90%
      justify-content space-around
      >div.navMainWrap
        width 85%
        >.top
          .hamber
            visibility hidden
          .btn
            display none
          ul.navlist
            display flex
            li
              a
                padding 6px 2px
            li.hideInMore
              display none
            li.more
              display block
        >.bottom
          .sponser
            display block
  .contain.isFix
    padding-left 0
    > div
      width auto
      justify-content space-around
      > div.navMainWrap
        width 100%
        > div.top
          width 100%

@media only screen and (min-width:900px)
  .contain
    >div
      width 90%
      justify-content space-around
      >div.navMainWrap
        width 85%
        >.top
          .btn
            display none

@media only screen and (min-width:1071px)
  .contain
    >div
      >div.navMainWrap
        width 90%
        >.top
          ul.navlist
            li.hideInMore
              display block
            li.more
              display none

@media only screen and (min-width:1197px)
  .contain
    >div
      width 90%
      justify-content space-around
      >div.navMainWrap
        width 90%
        >.top
          .btn
            display none
          .hamber
            visibility hidden
          ul.navlist
            display flex
            li
              a
                padding 6px 10px
        >.bottom
          .sponser
            display block
  .contain.isFix
    padding-left 0
    > div
      width auto
      justify-content space-around
      > div.navMainWrap
        width 100%
        > div.top
          width 100%
          
@media only screen and (min-width:1333px)
  .contain
    >div
      >div.navMainWrap
        >.top
          .btn
            display block
</style>