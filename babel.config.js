module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", { "modules": false }],
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui", // 按需引入组件
        "styleLibraryName": "theme-chalk" // 按需引入样式
      }
    ]
  ]
}

