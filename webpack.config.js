const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // 定义多入口，key即为文件名，可如此声明来分别存储生成文件路径
    // 'dist/index': './index.js',
    'demo/dist/index': './demo/index.js'
  },
  output: {
    filename: '[name].js',
    // path: path.resolve(__dirname, 'dist')
    path: __dirname
  },
  //插件依赖
  plugins: [
    // new htmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'src/index.html',
    //   inject: 'body'
    // }),
    //清除前一次打包指定的文件夹
    // new cleanWebpackPlugin(['dist', 'demo/dist'])

  ],
  //处理模块资源
  module:{
    rules:[
      {
        test: /\.js$/,
        loader: 'babel-loader?presets=es2015',
        exclude: /node_modules/
      },
      {
        test: /\.js/,
        use: [{
            loader: 'babel-loader', 
            options: {//如果有这个设置则不用再添加.babelrc文件进行配置
                "babelrc": false,// 不采用.babelrc的配置
                "plugins": [
                  "dynamic-import-webpack"
                ]
            }
        }]
      }
    ]
  }
};