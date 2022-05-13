/*
 * @Author: zhangjicheng
 * @Date: 2022-05-11 15:08:55
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-13 19:02:57
 * @FilePath: \moments\moment.d.ts
 * @js-moment ts类型声明文件
 */

import { Moment } from './src/unit';

declare function moment(date?: string | Date) : Moment;

declare namespace moment {
  
}

export = moment;