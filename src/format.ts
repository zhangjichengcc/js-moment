/*
 * @Author: zhangjicheng
 * @Date: 2022-05-13 18:45:07
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-20 19:04:53
 * @FilePath: \moments\src\format.ts
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
    // ! replace th 已被替换过的字符串，需要屏蔽掉
    // str = 'abcd'
    // str.replace(/(?!<)a(?!>)/g, '<b>').replace(/(?!<)b(?!>)/g, '<c>').replace(/(?!<)c(?!>)/g, '<d>').replace(/(?!<)d(?!>)/g, '<e>').replace(/[<|>]/g, '')
    // @ts-ignore
    formatStr = formatStr.replace(reg, formatter[key]);
  })
  return formatStr;
}

export {
  format,
}
