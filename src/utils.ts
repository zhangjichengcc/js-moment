/*
 * @Author: zhangjicheng
 * @Date: 2022-05-13 18:31:15
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-11-04 19:08:02
 * @FilePath: \js-moment\src\utils.ts
 */

/**
 * 格式化日期，返回标准日期对象
 * @param string 
 * @returns Date
 */
 function standardDate(str?: string | Date): Date {
  let date = str || new Date;
  if (typeof date === 'string') {
    date = date.replace(/-/g, '/');
    // ? 处理UTC日期格式 yyyy-MM-dd'T'HH:mm:ss.SSSZ
    if (/^\d{4}\/\d{2}\/\d{2}T\d{2}:\d{2}:\d{2}/.test(date)) {
      date = new Date(
      date
      .replace(/T/g, ' ')
      .replace(/\.\d{3}Z/g, '')
      // .replace(/(?<=(\d{4}\/\d{2}\/\d{2}\s))(\d{2})(?=(:\d{2}:\d{2}))/, (h) => String(Number(h) + 8)) // ! (?<=) 反向预查询兼容问题
      .replace(/(\d{4}\/\d{2}\/\d{2}\s)(\d{2})(?=(:\d{2}:\d{2}))/, (_, $1, $2) => `${$1}${String(Number($2) + 8)}`)
      )
    }
    date = new Date(date);
  }
  // 进行入参校验，若格式不正确则抛出错误
  if (date.toString() === 'Invalid Date') throw new Error('Incoming parameters Invalid Date');
  return date;
}

export {
  standardDate,
}