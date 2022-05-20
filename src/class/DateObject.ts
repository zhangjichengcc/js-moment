/*
 * @Author: zhangjicheng
 * @Date: 2022-05-18 18:20:53
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-20 10:14:25
 * @FilePath: \moments\src\class\DateObject.ts
 */

/**
 * 时间对象类
 */
 class DateObject {
  /**
   * 年
   */
  year: number;
  /**
   * 月 0-11
   */
  month: number;
  /**
   * 日 1-31
   */
  day: number;
  /**
   * 时 0-24
   */
  hours: number;
  /**
   * 分 0-60
   */
  minutes: number;
  /**
   * 秒 0-60
   */
  seconds: number;
  /**
   * 时间戳
   */
  time: number;
  /**
   * 星期 0-6
   */
  week: number;
  /**
   * 季度 0-3
   */
  quarter: number;

  constructor(date: Date) {
    this.year    = date.getFullYear(),
    this.month   = date.getMonth(),
    this.day     = date.getDate(),
    this.hours   = date.getHours(),
    this.minutes = date.getMinutes(),
    this.seconds = date.getSeconds(),
    this.time    = date.getTime(),
    this.week    = date.getDay(),
    this.quarter = Math.floor(this.month / 3)
  }
}

export default DateObject;