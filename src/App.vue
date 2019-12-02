<template>
    <div id="app">
      <el-header>
        <router-link to="/">Home</router-link> |
        <router-link to="/PageB">PageB</router-link>
      </el-header>
      <router-view/>
    </div>
</template>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
