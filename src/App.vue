<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="header-logo">
          <i class="el-icon-menu" @click="isCollapse"></i>
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
