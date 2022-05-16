/*
 * @Author: zhangjicheng
 * @Date: 2022-05-11 15:08:55
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-16 15:49:11
 * @FilePath: \moments\moment.d.ts
 * @js-moment ts类型声明文件
 */

import { Moment } from './src/unit';

/**
 * js-moment 日期格式化组件
 */
declare function moment(date?: string | Date) : Moment;

export = moment;