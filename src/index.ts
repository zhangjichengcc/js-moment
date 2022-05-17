/*
 * @Author: zhangjicheng
 * @Date: 2022-05-11 11:54:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-17 19:05:00
 * @FilePath: \moments\src\index.ts
 */
// @ts-nocheck
import { standardDate } from './utils.ts';
import { Moment } from './unit.ts';

function moment(date?: string | Date) {
  date = standardDate(date);
  return new Moment(date);
}

export default moment;

moment('2022-10-10 12:00:00').fromTo('2022-9-12 1:10:10');
