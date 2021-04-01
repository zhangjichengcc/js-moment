/*
 * @Author: zhangjicheng
 * @Date: 2019-02-18 11:41:51
 * @LastEditTime: 2021-04-01 17:49:08
 * @LastEditors: zhangjicheng
 * @Description: 
 * @FilePath: \moments\webpack.config.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'jsmoment',
      type: 'umd', // 将你的 library 暴露为所有的模块定义下都可运行的方式
    },
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};