<template>
  <div>
    <el-table :data="tableData" :stripe="true" :highlight-current-row="true" index  ref="multipleTable">
      <el-table-column type="selection" label="全选/全不选"></el-table-column>
      <el-table-column label="序号" type="index"></el-table-column>
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
        <el-button-group>
          <el-button type="primary" size="small" :circle="true" @click="userDetail">详情</el-button>
          <el-button type="danger" size="mini" :circle="true">删除</el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
    <el-pagination 
      background  
      layout="total, prev, pager, next, jumper" 
      :total="300" 
      :current-page="1" 
      :page-size="6" >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'AllUsers',
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    getAllUsers () {
      const url = 'https://www.easy-mock.com/mock/5d4a4e5f1fb9a2243333ea01/user-admin/all'
      this.$axios.get(url)
          .then((response) => {
            let date = response.data
            this.tableData = date.users
          })
          .catch(() => {
            alert('数据请求失败,请稍后再试')
          })
    },
    userDetail () {
      this.$router.push('/udetail')
    }
  },
  created () {
    this.getAllUsers()
  }
}
</script>

<style scoped>
.el-button {
  padding: 10px;
}
</style>
