/*
 * @Author: zhangjicheng
 * @Date: 2022-05-19 17:12:25
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-26 18:02:24
 * @FilePath: \js-moment\src\locale.ts
 */

type localeProps = 'zh' | 'en'; 

const locale = {
  /**
   * 中文
   */
  zh: {
    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    days : '_一日_二日_三日_四日_五日_六日_七日_八日_九日_十日_十一日_十二日_十三日_十四日_十五日_十六日_十七日_十八日_十九日_二十日_二十一日_二十二日_二十三日_二十四日_二十五日_二十六日_二十七日_二十八日_二十九日_三十日_三十一日'.split('_'),
    daysShort : new Array(32).fill('').map((_item, idx) => `${idx}日`), 
    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
    quarter: '春_夏_秋_冬'.split('_'),
  },
  /**
   * English
   */
  en: {
    months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    days : '_1st_2nd_3rd_4th_5th_6th_7th_8th_9th_10th_11th_12th_13th_14th_15th_16th_17th_18th_19th_20th_21st_22nd_23nd_24th_25th_26th_27th_28th_29th_30th_31st'.split('_'),
    daysShort : new Array(32).fill('').map((_item, idx) => idx.toString()), 
    weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    quarter: 'spring_summer_autumn_winter'.split('_'),
  }
}

export default locale;

export {
  localeProps,
}