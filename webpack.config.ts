/*
 * @Author: zhangjicheng
 * @Date: 2019-02-18 11:41:51
 * @LastEditTime: 2022-07-08 18:52:14
 * @LastEditors: zhangjicheng
 * @Description: 
 * @FilePath: \js-moment\webpack.config.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
import { Configuration as WebpackOriginConfig } from 'webpack';

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
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'main.js',
    library: {
      name: 'moment',
      type: 'var',
      // globalObject: this,
      // target: 'umd',
    },
    // library: 'moment',
    // // https://webpack.js.org/configuration/output/#outputglobalobject
    // globalObject: 'this',
    // // enabledLibraryTypes: ['module', 'commonjs2'],
    // libraryTarget: 'umd', // 将你的 library 暴露为所有的模块定义下都可运行的方式
  },
  optimization: {
    minimize: !!isMinify,
    // minimizer: [new TerserPlugin()],
  },
} as WebpackOriginConfig;