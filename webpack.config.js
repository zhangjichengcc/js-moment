const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // 定义多入口，key即为文件名，可如此声明来分别存储生成文件路径
    'dist/index': './main.js',
    // 'demo/dist/index': './demo/index.js'
  },
  output: {
    filename: '[name].[hash:5].js',
    // path: path.resolve(__dirname, 'dist')
    path: __dirname
  },
  target: 'node',
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    filename: true,
    dirname: true,
    setImmediate: true
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
    new cleanWebpackPlugin(['dist'])

  ],
  //处理模块资源
  module:{
    rules:[
      {
        test:/\.js$/,
        use:[
          {
            loader:'babel-loader',
            options:{
              presets:[
                '@babel/preset-env' //使用这个预设，会根据浏览器来选择插件转化ES5
              ] 
            }
          }
        ]
      },
    ]
  },
  devServer: {
    // contentBase: './dist',
    hot: true,
    inline:true
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './index.html',
  //     filename: 'index.html',
  //     inject: 'body'
  //   }),
  //   new CleanWebpackPlugin(['dist']),
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  // optimization: {
  //   minimize: true
  // },
  // devServer: {
  //   // contentBase: path.join(__dirname, "dist"),
  //   compress: true, // gzip
  //   port: 9000,
  // },
};