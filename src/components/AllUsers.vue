<template>
  <div>
    <el-table
      :data="allUsers"
      :stripe="true"
      :highlight-current-row="true"
      index
      ref="multipleTable"
    >
      <el-table-column type="selection" label="全选/全不选"></el-table-column>
      <el-table-column label="序号" type="index" :index="uidOrder"></el-table-column>
      <el-table-column label="日期">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left:5px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="birthplace" label="籍贯"></el-table-column>
      <el-table-column prop="number" label="号码"></el-table-column>
      <el-table-column prop="education" label="学历"></el-table-column>
      <el-table-column prop="position" label="职位"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary" size="small" :circle="true" @click="userDetail(scope)">详情</el-button>
            <el-button type="danger" size="mini" :circle="true">删除</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="margin: 20px 0;">
      <el-col :span="6" :offset="10">
        <el-button type="primary" :loading="true" v-if="loadingFlag">数据加载中</el-button>
      </el-col>
    </el-row>
    
    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      :total="300"
      :current-page="1"
      :page-size="6"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "AllUsers",
  data() {
    return {
      allUsers: [],
      loadingFlag: true,
    };
  },
  methods: {
    // 获取远程数据
    getAllUsers() {
      const url = "https://www.easy-mock.com/mock/5d4a4e5f1fb9a2243333ea01/user-admin/all";
      this.$axios
        .get(url)
        .then(response => {
          let date = response.data;
          this.allUsers = date.users;
          this.loadingFlag = false
        })
        .catch(() => {
          alert("数据请求失败,请稍后再试");
        });
    },
    // 跳转至指定用户信息的详情页面
    userDetail(scope) {
      this.$router.push({
        name: 'user',
        params: {
          uid: scope.$index,
        },
        query: {
          row: scope.row
        }
      });
    },
    // 自定义索引
    uidOrder(index) {
      if (index < 10) {
        return `00${index}`
      } else if ( index < 100 && index >= 10 ) {
        return `0${index}`
      }
      return index;
    }
  },
  created() {
    this.getAllUsers();
  }
};
</script>

<style scoped>
.el-button {
  padding: 10px;
}
</style>
