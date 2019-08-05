<template>
  <div class="add-user">
    <el-tag type="info" effect="plain">添加新用户信息</el-tag>

    <el-form :model="ruleForm" ref="ruleForm" status-icon :rules="rules">
      <el-form-item label="姓名" prop="name" required>
        <el-input v-model="ruleForm.name" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item label="籍贯" prop="birthplace" required>
        <el-input v-model="ruleForm.birthplace" placeholder="birthplace"></el-input>
      </el-form-item>
      <el-form-item label="学历" prop="education" required>
        <el-input v-model="ruleForm.education" placeholder="education"></el-input>
      </el-form-item>
      <el-form-item label="职位" prop="position">
        <el-input v-model="ruleForm.position" placeholder="position"></el-input>
      </el-form-item>
      <el-form-item label="号码" prop="number" required>
        <el-input v-model.number="ruleForm.number" placeholder="number"></el-input>
      </el-form-item>
      <el-form-item label="注册日期" prop="date">
        <el-col :span="8">
          <el-form-item prop="date-day">
            <el-date-picker v-model="ruleForm.dateDay" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="4">—</el-col>
        <el-col :span="8">
          <el-form-item prop="dateTime">
            <el-time-picker v-model="ruleForm.dateTime" placeholder="选择时间"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AddUser",
  data() {
    return {
      ruleForm: {
        name: '',
        dateDay: '',
        dateTime: '',
        birthplace: '',
        position: '',
        education: '',
        number: '',
      },
      rules: {
        name: [
          { require: true, message: "输入您的姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        birthplace: [
          { type: 'string', require: true, message: "输入您的籍贯", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        education: [
          { require: true, message: "输入您的籍贯", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        position: [
          { require: true, message: "输入您的籍贯", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        number: [
          { type: 'number', require: true, message: '请输入11位数手机号码', trigger: 'blur' },
        ],
        dateDay: [
          { type: 'date', require: true, message: '选择日期', trigger: 'blur' },
        ],
        dateTime: [
          { type: 'date', require: true, message: '选择时间', trigger: 'blur' },
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit");
        } else {
          alert("error submit");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.add-user {
  text-align: center;
  margin: 0 auto;
}
.el-form {
  display: block;
  text-align: center;
  width: 900px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #dbebeb;
  box-shadow: 1px 1px #ebebeb;
  transition: 0.2s;
  margin-bottom: 20px;
}
.el-tag {
  margin-bottom: 20px;
}
.el-button {
  margin-right: 20px;
}
</style>
