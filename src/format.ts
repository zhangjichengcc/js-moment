/*
 * @Author: zhangjicheng
 * @Date: 2022-05-13 18:45:07
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-19 23:43:42
 * @FilePath: /js-moment/src/format.ts
 */

import { localeProps } from './locale.js';
import Formatter from './class/Formatter.js';

// 默认格式
const defFormat: string = 'YYYY-MM-DD hh:mm:ss';

/**
 * 格式化日期方法
 * @param format: string
 * @returns: string
 */
function format(format = defFormat, locale: localeProps): string {
  let formatStr = format;
  const formatter = new Formatter(this, locale)
  const keys = Object.keys(formatter);
  keys.forEach((key: keyof typeof formatter) => {
    const reg = new RegExp(key, 'g');
    // @ts-ignore
    formatStr = formatStr.replace(reg, formatter[key]);
  })
  return formatStr;
}

export {
  format,
}
