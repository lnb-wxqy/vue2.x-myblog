module.exports = {
  // 公共路径(必须有的)
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // 静态资源存放的文件夹(相对于ouputDir)
  assetsDir: 'static',
  // eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
  lintOnSave: false,
  // 我用的only，打包后小些
  runtimeCompiler: false,
  productionSourceMap: false, // 不需要生产环境的设置false可以减小dist文件大小，加速构建

  devServer: {
    open: false,  // npm run serve后自动打开页面
    host: '0.0.0.0',  // 匹配本机IP地址(默认是0.0.0.0)
    port: 8084, // 开发服务器运行端口号
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://39.106.0.106:8082', //
        // target: "http://192.168.0.201:8089", //
        /* 允许跨域 */
        changeOrigin: true,
      }
    }
  },

}