<template>
  <div>
    <el-table :data="tableData" :stripe="true" :highlight-current-row="true" >
      <el-table-column prop="date" label="日期">
        <template>
          <i class="el-icon-time"></i>
          <span></span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="birthplace" label="籍贯"></el-table-column>
      <el-table-column prop="number" label="号码"></el-table-column>
      <el-table-column prop="education" label="学历"></el-table-column>
      <el-table-column prop="position" label="职位"></el-table-column>
      <el-table-column label="操作">
        <el-button-group>
          <el-button type="primary" size="small" :circle="true">详情</el-button>
          <el-button type="danger" size="mini" :circle="true">删除</el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tableData: [
        {
          date: new Date().toLocaleDateString(),
          name: "张三",
          birthplace: "广东广州",
          number: "18998555668",
          education: "本科",
          position: "前端工程师"
        },
        {
          date: new Date().toLocaleDateString(),
          name: "张四",
          birthplace: "广东深圳",
          number: "189985556789",
          education: "专科",
          position: "后端工程师"
        },
        {
          date: new Date().toLocaleDateString(),
          name: "李四",
          birthplace: "广东茂名",
          number: "13498555668",
          education: "研究生",
          position: "Java工程师"
        },
        {
          date: new Date().toLocaleDateString(),
          name: "王五",
          birthplace: "广东珠海",
          number: "18999555668",
          education: "本博士科",
          position: "H5工程师"
        },
        {
          date: new Date().toLocaleDateString(),
          name: "苟六",
          birthplace: "广东东莞",
          number: "13415645796",
          education: "博士后",
          position: "人工智能"
        },{
          date: new Date().toLocaleDateString(),
          name: "张良",
          birthplace: "四川成都",
          number: "13415645886",
          education: "讲师",
          position: "AI人脸识别"
        },
      ]
    };
  }
};
</script>

<style scoped>
.el-button{
  padding: 10px;
}
</style>
