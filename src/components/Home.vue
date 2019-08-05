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
          <el-button type="primary" size="small" :circle="true">详情</el-button>
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
        },
        {
          date: new Date().toLocaleDateString(),
          name: "张良",
          birthplace: "四川成都",
          number: "13415645886",
          education: "讲师",
          position: "AI人脸识别"
        },{
          date: new Date().toLocaleDateString(),
          name: "李四",
          birthplace: "广东茂名",
          number: "13498555668",
          education: "研究生",
          position: "Java工程师"
        },{
          date: new Date().toLocaleDateString(),
          name: "黄菁菁",
          birthplace: "广东清远",
          number: "13498555668",
          education: "本科",
          position: "UI工程师"
        },{
          date: new Date().toLocaleDateString(),
          name: "华名建",
          birthplace: "云南丽江",
          number: "13498555668",
          education: "研究生",
          position: "Java工程师"
        },{
          date: new Date().toLocaleDateString(),
          name: "林莹静",
          birthplace: "湖北武汉",
          number: "78945621235",
          education: "研究生",
          position: "Java工程师"
        },{
          date: new Date().toLocaleDateString(),
          name: "程斌",
          birthplace: "北京朝阳",
          number: "13498555668",
          education: "研究生",
          position: "PHP工程师"
        },{
          date: new Date().toLocaleDateString(),
          name: "刘玲",
          birthplace: "湖南长沙",
          number: "13498555668",
          education: "高中生",
          position: "设计工程师"
        },
      ]
    };
  }
};
</script>

<style scoped>
.el-button {
  padding: 10px;
}
</style>
