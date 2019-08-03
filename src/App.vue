<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="header-logo">
          <i class="el-icon-menu" @click="isCollapse"></i>
        </div>
      </el-header>
      <el-aside width="180">
        <el-menu
          default-active=""
          class="el-menu-vertical-menu"
          mode="vertical"
          :collapse="collapse"
          router="true"
        >
          <el-submenu index="1" >
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </template>
            <el-menu-item-group title="Admin">
              <span slot="title" class>管理员</span>
              <el-menu-item index="1-1">查看信息</el-menu-item>
              <el-menu-item index="1-2">修改密码</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="add">
            <router-link to=/add class="el-icon-circle-plus-outline"></router-link>
            <router-link slot="title" class="menu-link" to="/add">添加用户</router-link>
          </el-menu-item>
          <el-menu-item index="delete">
            <router-link to="/delete" class="el-icon-remove-outline"></router-link>
            <router-link slot="title" class="menu-link" to="/delete">删除用户</router-link>
          </el-menu-item>
          <el-menu-item index="update">
            <router-link to="/update" class="el-icon-refresh"></router-link>
            <router-link slot="title" class="menu-link" to="/update">更新用户</router-link>
          </el-menu-item>
          <el-menu-item index="serach">
            <router-link to="/search" class="el-icon-search"></router-link>
            <router-link slot="title" class="menu-link" to="/search" >查找用户</router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data () {
    return {
      collapse: false
    }
  },
  components: {},
  methods: {
    isCollapse () {
      this.collapse = !this.collapse
    }
  }
}
</script>

<style>
.menu-link{
  color: #303133;
}
.router-link-active{
  color: #409EFF;
}
.el-header {
  background-color: cadetblue;
  padding: 0;
  position: relative;
}
.header-logo{
  margin-left: 16px;
  position: absolute;
  top:50%;
  transform: translate(0, -50%);
  color: #fff;
}
.header-logo i {
  font-size: 30px;
}
/* .el-menu>li,a {
  columns: #551a8b ;
} */
.el-main {
  float: right;
  background: green;
}
.el-menu-vertical-menu:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
</style>
