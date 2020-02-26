<template>

<div id="myhead">
<div class="line"></div>
<el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">
     在线心理咨询平台
  </el-menu-item>
    <el-menu-item index="2" >首页</el-menu-item>
  <el-menu-item index="3" >测试</el-menu-item>
  <el-menu-item index="4" >咨询</el-menu-item>
  <el-submenu index="5">
    <template slot="title">用户名</template>
    <el-menu-item index="5-1">个人中心</el-menu-item>
    <el-menu-item index="5-2">退出</el-menu-item>
    <el-menu-item index="5-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="6" >注册/登录</el-menu-item>
</el-menu>
 </div>
</template>
<script>
export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    }
}
</script>
<style lang="stylus" scoped>

</style>