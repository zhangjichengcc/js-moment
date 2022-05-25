/*
 * @Author: zhangjicheng
 * @Date: 2019-02-18 11:41:51
 * @LastEditTime: 2022-05-25 14:39:52
 * @LastEditors: zhangjicheng
 * @Description: 
 * @FilePath: \js-moment\webpack.config.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

const isMinify = process.env.MINIFY; // 获取是否压缩

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@class": path.resolve(__dirname, "src/class"),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    globalObject: 'this',
    library: {
      name: 'moment',
      type: 'umd', // 将你的 library 暴露为所有的模块定义下都可运行的方式
    },
  },
  optimization: {
    minimize: !!isMinify,
    minimizer: [new TerserPlugin()],
  },
};