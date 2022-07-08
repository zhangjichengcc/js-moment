/*
 * @Author: zhangjicheng
 * @Date: 2019-02-18 11:41:51
 * @LastEditTime: 2022-07-08 17:57:46
 * @LastEditors: zhangjicheng
 * @Description: 
 * @FilePath: \js-moment\config\commonjs.config.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { Configuration as WebpackOriginConfig } from 'webpack';
const path = require('path');

type WebpackConfig = WebpackOriginConfig & {
  
}

export default {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'main.js',
    library: 'moment',
    // https://webpack.js.org/configuration/output/#outputglobalobject
    globalObject: 'this',
    libraryTarget: 'commonjs', // 将你的 library 暴露为所有的模块定义下都可运行的方式
  },
} as WebpackConfig;