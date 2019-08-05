<template>
  <div class="search-user">
    <el-row>
      <el-col :span="16">
        <el-input v-model="SearchValue" placeholder="输入关键字"></el-input>
      </el-col>
      <el-button type="primary" >
        <i class="el-icon-search"></i>
      </el-button>
    </el-row> 
  </div>
</template>

<script>
export default {
  name: 'SearchUser',
  data () {
    return {
      SearchValue: '',
    }
  }
}
</script >

<style scoped>
.search-user{
  margin-top: 20px;
  margin-left: 20px;

}
.el-button{
  margin-left: 10px;
}

</style>
