/*
 * @Author: zhangjicheng
 * @Date: 2022-05-11 11:54:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-19 00:51:52
 * @FilePath: /js-moment/src/index.ts
 */

import { standardDate } from './utils.js';
import Moment from './class/Moment.js';

/**
 * 日期格式方法
 * @param date 
 * @returns 
 */
function moment(date?: string | Date): Moment {
  date = standardDate(date);
  return new Moment(date);
}

export default moment;

// 28 29
// moment('2022-12-12').fromTo('2022-12-10')
moment('2022-10-10 12:00:00').fromTo('2022-9-12 1:10:10');
