/*
 * @Author: zhangjicheng
 * @Date: 2022-05-11 11:54:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-13 18:55:11
 * @FilePath: \moments\src\index.ts
 */

import { standardDate } from './utils';
import { Moment } from './unit';

function moment(date?: string | Date) {
  date = standardDate(date);
  return new Moment(date);
}

export default moment;
