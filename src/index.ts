/*
 * @Author: zhangjicheng
 * @Date: 2022-05-11 11:54:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-18 19:01:15
 * @FilePath: \moments\src\index.ts
 */

import { standardDate } from './utils';
import Moment from '@class/Moment';

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
// moment('2022-10-10 12:00:00').fromTo('2022-9-12 1:10:10');
