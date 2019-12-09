<template>
  <el-container>
   
    <el-container>
      <el-aside width="200px">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#131525"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
         <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航二</span>
        </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        </el-menu>
        </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>

</script>

<style>
  .el-aside {
    background-color: #131525;
    color: #333;
    text-align: center;
    line-height: calc(100vh - 120px);
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: calc(100vh - 120px);
  }

</style>
