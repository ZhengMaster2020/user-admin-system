<template>
  <div class="userDetail">
    <el-card shadow="always">
      <!-- 折叠面板 -->
      <el-collapse :accordion="false">
        <el-row>
          <el-col :span="10">
            <el-collapse-item>
              <template slot="title">
                <i class=" icons el-icon-s-custom"></i>
                用户名
              </template>
              <div>{{this.user.name}}</div>
            </el-collapse-item>
          </el-col>
          <el-col :span="10" :offset="4">
            <el-collapse-item>
              <template slot="title">
                <i class=" icons el-icon-location"></i>
                籍贯
              </template>
              <div>{{this.user.birthplace}}</div>
            </el-collapse-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-collapse-item>
              <template slot="title">
                <i class=" icons el-icon-info"></i>
                职位
              </template>
              <div>{{this.user.position}}</div>
            </el-collapse-item>
          </el-col>
          <el-col :span="10" :offset="4">
            <el-collapse-item>
              <template slot="title">
                <i class=" icons el-icon-s-order"></i>
                学历
              </template>
              <div>{{this.user.education}}</div>
            </el-collapse-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-collapse-item>
              <template slot="title">
                <i class=" icons el-icon-mobile-phone"></i>
                手机号码
              </template>
              <div>{{this.user.number}}</div>
            </el-collapse-item>
          </el-col>
          <el-col :span="10" :offset="4">
            <el-collapse-item>
              <template slot="title">
                <i class=" icons el-icon-time"></i>
                注册时间
              </template>
              <div>{{this.user.date}}</div>
            </el-collapse-item>
          </el-col>
        </el-row>
      </el-collapse>
      <!-- 操作按钮组 -->
      <el-row>
        <el-button class="edit-btn" type="primary" circle  icon="el-icon-edit" @click="updateUserMsg"></el-button>
        <el-button class="delete-btn" type="danger" circle  icon="el-icon-delete"></el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "UserDetail",
  data() {
    return {
      user: [
        {
          date: '',
          name: '',
          birthplace: '',
          number: '',
          education: '',
          position: ''
        }
      ]
    };
  },
  methods: {
    getQueryParams () {
      console.log(this.$route)
      let rowParams = this.$route.query.row
      this.user.date = rowParams.date
      this.user.name = rowParams.name
      this.user.birthplace = rowParams.birthplace
      this.user.education = rowParams.education
      this.user.position = rowParams.position
      this.user.number = rowParams.number
    },
    updateUserMsg () {
      this.$router.push({
        name: 'update',
        params: {
          uid: this.$route.params.uid
        },
        query: {
          usermsg: this.$route.query.row
        }
      })
    }
  },
  created () {
    this.getQueryParams()
  }
};
</script>

<style scoped>
.el-row {
  margin: 10px;
}
.el-button {
  position: relative;
  margin: 10px;
}
.edit-btn:hover::before{
  position: absolute;
  bottom: -40%;
  left: 0;
  color: rgb(119, 114, 114);
  font-size: 10px;
  content: '修改信息';
}
.delete-btn:hover::before{
  position: absolute;
  bottom: -40%;
  left: 0;
  color: rgb(119, 114, 114);
  font-size: 10px;
  content: '删除用户';
}
.el-collapse-item div {
  padding-left: 20px;
}
.userDetail {
  margin-top: 20px;
  color: #fff;
  background: green;
}
.el-tag {
  margin: 10px;
}
.icons {
  margin-right: 10px;
}
</style>
