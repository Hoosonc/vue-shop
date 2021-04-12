const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: "./", // 公共路径(必须有的)
  outputDir: "dist", // 输出文件目录
  assetsDir: "static", //静态资源文件名称
  lintOnSave: false,
  productionSourceMap: false, //去除打包后js的map文件
  devServer: { //启动项目在8080端口自动打开
    open: true,
    port: 8080,
    proxy: null
  },
  chainWebpack: (config)=>{
    config.resolve.alias
        .set('@', resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
        .set('network',resolve('src/network'))
        .set('views',resolve('src/views'))
  },
  /*    configureWebpack: {
          resolve: {
              alias: {
                  '@': 'src',
                  'assets': '@/assets',
                  'common': '@/common',
                  'components': '@/components',
                  'network': '@/network',
                  'views': '@/views',
              }
          }
      },*/
  //去掉console
  configureWebpack: (config) => {
    // 判断为生产模式下，因为开发模式我们是想保存console的
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer.map((arg) => {
        const option = arg.options.terserOptions.compress;
        option.drop_console = true; // 打开开关
        return arg;
      });
    }
  },
};