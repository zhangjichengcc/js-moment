/*
 * @Author: zhangjicheng
 * @Date: 2022-05-19 17:12:25
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-19 18:25:06
 * @FilePath: \moments\src\locale.ts
 */

type localeProps = 'zh' | 'en'; 

const locale = {
  /**
   * 中文
   */
  zh: {
    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
  },
  /**
   * English
   */
  en: {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
  }
}

export default locale;

export {
  localeProps,
}