module.exports = {
  // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  lintOnSave: true,

  // 是否为生产环境构建生成sourceMap?
  transpileDependencies: [
    /* string or regex */
  ],

  // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  productionSourceMap: false,

  chainWebpack: () => {},

  // CSS 相关选项
  configureWebpack: () => {},

  // use thread-loader for babel & TS in production build // enabled by default if the machine has more than 1 cores
  css: {
    loaderOptions: {},
    // modules: false,
    requireModuleExtension: false,
  },

  // configure webpack-dev-server behavior
  pwa: {},

  // 第三方插件配置
  devServer: {
    open: process.platform === "darwin",
    disableHostCheck: false,
    host: "0.0.0.0",
    port: 8088,
    https: false,
    hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null // string | Object
    // before: app => {}
  },

  pluginOptions: {
    // ...
  }
};