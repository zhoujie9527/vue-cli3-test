<template>
    <div id="app">
        <el-menu
          :default-active="activeIndex"
          @select="handleSelect"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#131525"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item index="Home">
          <!-- <router-link to="/">Home</router-link> -->
          Home
        </el-menu-item>
        <el-menu-item index="System">
          <!-- <router-link to="/System">System</router-link> -->
          System
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
        activeIndex: 'Home',
      };
    },
    methods: {
      handleSelect(key) {
        this.$router.push(`./${key}`);
      }
    }
  }
</script>
