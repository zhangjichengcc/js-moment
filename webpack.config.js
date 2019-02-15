const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  //插件依赖
  plugins: [
    // new htmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'src/index.html',
    //   inject: 'body'
    // }),
    //清除前一次打包指定的文件夹
    // new cleanWebpackPlugin(['dist'])
  ],
  //处理模块资源
  module: {
    rules: [
      // { //处理js文件
      //   test: /\.js$/,
      //   use: [{
      //     loader: "babel-loader",
      //     // options: {
      //     //   //使用env预设来处理es6语法的js文件
      //     //   presets: ['env']
      //     // }
      //   }],
      //   exclude: [
      //     path.resolve(__dirname, './node_modules')
      //   ]
      // },
    ]
  }
};