<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="header-logo">
          <i class="el-icon-menu" @click="isCollapse"></i>
        </div>
        <div class="header-title">
          <p>用户信息管理系统</p>
        </div>
        <div class="header-userinfo">
          <div class="user-avatar">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          </div>
          <div class="user-message">
            <el-dropdown split-button size="medium">
              欢迎您，admin
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-message">个人信息</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-close">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-row>
        <el-col :span="asieSpan">
          <el-aside>
            <el-menu
              default-active="/"
              class="el-menu-vertical-menu"
              mode="vertical"
              :collapse="collapse"
              :router="true"
            >
              <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
              </el-menu-item>

              <el-menu-item index="/add">
                <i class="el-icon-circle-plus-outline"></i>
                <span slot="title">添加用户</span>
              </el-menu-item>

              <el-menu-item index="/delete">
                <i class="el-icon-remove-outline"></i>
                <span slot="title">删除用户</span>
              </el-menu-item>

              <el-menu-item index="/update">
                <i class="el-icon-refresh"></i>
                <span slot="title">更新用户</span>
              </el-menu-item>

              <el-menu-item index="/search">
                <i class="el-icon-search"></i>
                <span slot="title">查找用户</span>
              </el-menu-item>

              <el-submenu index="/admin">
                <template slot="title">
                  <i class="el-icon-user"></i>
                  <span slot="title">管理员</span>
                </template>
                <el-menu-item-group title="Admin">
                  <span slot="title" class>管理员</span>
                  <el-menu-item index="/admin/msg">查看信息</el-menu-item>
                  <el-menu-item index="/admin/update">修改密码</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-aside>
        </el-col>
        <el-col :span="mainSpan" class="main">
          <el-main>
            <el-breadcrumb separator-class="el-icon-arrow-right" style="margin:15px 20px 10px 15px;">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/add' }">添加用户</el-breadcrumb-item>
            </el-breadcrumb>
            <router-view></router-view>
          </el-main>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      collapse: false,
      asieSpan: 3,
      mainSpan: 21
    };
  },
  components: {},
  methods: {
    isCollapse() {
      this.collapse = !this.collapse;
      if (this.collapse === true) {
        this.asieSpan = 1;
        this.mainSpan = 23;
      } else {
        this.asieSpan = 3;
        this.mainSpan = 21;
      }
    }
  }
};
</script>

<style>
.user-avatar {
  float: left;
}
.user-message {
  float: right;
  margin: 5px;
}
.header-title {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
}
.header-title p {
  font-size: 25px;
}
.header-userinfo {
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translate(0, -50%);
}
.el-header {
  background-color: cadetblue;
  padding: 0;
  position: relative;
}
.header-logo {
  margin-left: 16px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  color: #fff;
}
.header-logo i {
  font-size: 30px;
}
.el-main {
  background: #cccccc26;
}
.el-menu-vertical-menu:not(.el-menu--collapse) {
  width: 189px;
  min-height: 400px;
}
</style>
