/*
 * @Author: zhangjicheng
 * @Date: 2022-05-11 11:54:31
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-23 18:53:15
 * @FilePath: \moments\src\index.ts
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

moment('2022-10-01 12:00:00').fromTo('2022-11-01 11:00:00').format()
// 28 29
// moment('2022-12-12').fromTo('2022-12-10')
moment('2022-10-01 12:00:00').fromTo('2022-9-29 1:10:10');
// moment().format();
const t = '2019-10-31 12:00:01'
moment(t).fromTo('2019-10-31 13:01:25')
// moment().format('DD', 'en')
// moment('2022-2-10 12:00:00').fromTo('2022-1-20 13:00:00').format()
