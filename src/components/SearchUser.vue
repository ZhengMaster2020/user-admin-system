<template>
  <div class="search-user">
    <el-row>
      <el-col :span="16">
        <el-autocomplete v-model="state" placeholder="输入关键字" :fetch-suggestions="querySearch" style="width: 1000px" >
          <el-button type="primary" icon="el-icon-search" slot="append"></el-button>
          <template slot-scope="{user}">
            <div class="name">{{ user }}</div>
            <span class="otherOption">{{ user }}</span>
          </template>
        </el-autocomplete>
      </el-col>
    </el-row>

    <el-table
      :data="tableData"
      :stripe="true"
      :highlight-current-row="true"
      :default-sort="defaultSort"
      index
      ref="multipleTable"
    >
      <el-table-column type="selection" label="全选/全不选"></el-table-column>
      <el-table-column label="序号" type="index"></el-table-column>
      <el-table-column label="日期" sortable="true">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left:5px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" sortable="true"></el-table-column>
      <el-table-column prop="birthplace" label="籍贯" sortable="true"></el-table-column>
      <el-table-column prop="number" label="号码"></el-table-column>
      <el-table-column prop="education" label="学历" sortable="true"></el-table-column>
      <el-table-column
        prop="position"
        label="职位"
        :filters="filterValue"
        :filter-method="filterPosition"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "SearchUser",
  data() {
    return {
      filterValue: [
        { text: "前端工程师", value: "前端工程师" },
        { text: "后端工程师", value: "后端工程师" },
        { text: "Java工程师", value: "Java工程师" },
        { text: "H5工程师", value: "H5工程师" },
        { text: "UI工程师", value: "UI工程师" },
        { text: "PHP工程师", value: "PHP工程师" },
        { text: "人工智能", value: "人工智能" }
      ],
      defaultSort: {
        prop: "education",
        order: "descending"
      },
      state: "",
      timeout: null,
      tableData: []
    };
  },
  methods: {
    filterPosition(value, row) {
      return row.position === value;
    },
    querySearch(queryString, callBack) {
      let remoteData = this.tableData;
      let resultData = queryString
        ? remoteData.filter(this.createStateFliter(queryString))
        : remoteData;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        callBack(resultData);
      }, 3000 * Math.random());
    },
    createStateFliter(qs) {
      return state => {
        return true;
      };
    },
    loadRemoteData() {
      return [
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
          name: "黄菁菁",
          birthplace: "广东清远",
          number: "13498555668",
          education: "本科",
          position: "UI工程师"
        },
        {
          date: new Date().toLocaleDateString(),
          name: "华名建",
          birthplace: "云南丽江",
          number: "13498555668",
          education: "研究生",
          position: "Java工程师"
        },
        {
          date: new Date().toLocaleDateString(),
          name: "林莹静",
          birthplace: "湖北武汉",
          number: "78945621235",
          education: "研究生",
          position: "Java工程师"
        },
        {
          date: new Date().toLocaleDateString(),
          name: "程斌",
          birthplace: "北京朝阳",
          number: "13498555668",
          education: "研究生",
          position: "PHP工程师"
        },
        {
          date: new Date().toLocaleDateString(),
          name: "刘玲",
          birthplace: "湖南长沙",
          number: "13498555668",
          education: "高中生",
          position: "设计工程师"
        }
      ];
    }
  },
  mounted() {
    this.tableData = this.loadRemoteData();
  }
};
</script >

<style scoped>
.otherOption {
  font-size: 12px;
  color: #b4b4b4;
}
.name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.search-user {
  margin-top: 20px;
  margin-left: 20px;
}
.el-table {
  margin-top: 20px;
}
</style>
