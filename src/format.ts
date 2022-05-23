/*
 * @Author: zhangjicheng
 * @Date: 2022-05-13 18:45:07
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-23 16:45:28
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
    // ? <%|%> 标记已匹配字符串，防止重复格式化
    const reg = new RegExp(`(?!<%*[^%>])${key}(?![^<%]*%>)`, 'g');
    formatStr = formatStr.replace(reg, `<%${formatter[key]}%>`);
  })
  // 移除字符串边界标记
  formatStr = formatStr.replace(/[<%|%>]/g, '')
  return formatStr;
}

export {
  format,
}
