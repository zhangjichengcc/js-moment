/*
 * @Author: zhangjicheng
 * @Date: 2022-05-11 11:54:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-26 20:43:20
 * @FilePath: \js-moment\src\index.ts
 */

import { standardDate } from './utils';
import Moment from './class/Moment';

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

moment().format('h')