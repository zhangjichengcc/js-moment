/*
 * @Author: zhangjicheng
 * @Date: 2022-07-08 17:46:53
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-08 17:59:47
 * @FilePath: \js-moment\config\esmodule.config.ts
 */
import defaultConfig from './default.config';
import { Configuration as WebpackOriginConfig } from 'webpack';
const path = require('path');

type WebpackConfig = WebpackOriginConfig & {
  
}

export default {
  ...defaultConfig,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'es6/lib'),
    filename: 'main.js',
    library: 'moment',
    // https://webpack.js.org/configuration/output/#outputglobalobject
    globalObject: 'this',
    libraryTarget: 'module',
  },
} as WebpackConfig;