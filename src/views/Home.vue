<template>
  <el-container>
   
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>

</script>

<style>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /* line-height: 200px; */
    display: inline-block;
    line-height: calc(100vh - 80px);
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 200px; */
    display: inline-block;
    width: calc(100% - 200px);
    line-height: calc(100vh - 80px);
  }

</style>>
