<template>
  <div class="login" >
    <div class="login-panel">
       <p class="login-title">用户信息管理系统</p>
    <el-form :model="loginForm" ref="loginForm" status-icon :rules="rules">
      <el-form-item label="用户名：" prop="username">
        <el-input v-model="loginForm.username" placeholder="2-6个字符" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="6-12个字符" autocomplete="off"></el-input>
      </el-form-item>
      <el-button type="primary"  @click="submitLoginForm('loginForm')" style="width:320px" >登录</el-button>
    </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm : {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {min: 2, max: 6,  message: '长度在 2 到 6 个字符', trigger: 'blur'},
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          {min: 6, max: 12,  message: '长度在 6 到 12 个字符', trigger: 'blur'},
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    submitLoginForm (formName) {
      this.$refs[formName].validate( (valid) => {
        if (valid) {
          this.$router.push('/')
        } else {
          alert('登录失败')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.el-form{
  text-align: center;
  width: 320px;
  background: #fff;
  outline: none;
  margin: 5px;
  padding: 10px;
  border: #fff 1px solid;
  border-radius: 5px;
}
.login{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #e0ec70 url("../assets/images/loginbg01.jpg") no-repeat center;
  background-size: cover;
}
.login-panel{
  /* background: rgb(255, 230, 0); */
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
}
.login-title{
  font-size: 30px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  padding: 5px;
}
</style>
