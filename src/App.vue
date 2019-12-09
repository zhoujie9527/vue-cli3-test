<template>
    <div id="app">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#131525"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item index="1">
          <router-link to="/">Home</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/System">System</router-link>
        </el-menu-item>
        </el-menu>
      <router-view/>
    </div>
</template>

<style>
  .el-header, .el-footer {
    line-height: 60px;
  }
  .el-menu-item {
    float: right;
  }
</style>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      // handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
      // }
    }
  }
</script>
