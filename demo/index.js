/**
 * 日期处理方法Demo
 *
 * @date 2019-02-19
 * @author zhangjicheng
 * @eamil zhangjichengcc@163.com
 */
import moment from '../dist/index.js';
global.moment = moment;
$(document).ready(function () {
  // 初始化变量
  let format = $('#format').val();
  let res = moment().format();
  let resTime = moment(moment().format()).getTime();
  let code1 = `moment('${res}').format('${format});`;
  let code2 = `moment('${res}').getTime)();`;

  $('.now').html(`当前时间: ${moment().format()}`);
  $('.nowTime').html(`时间戳: ${moment(moment().format()).getTime()}`);
  setInterval(() => {
    $('.now').html(`当前时间: ${moment().format()}`);
    $('.nowTime').html(`时间戳: ${moment(moment().format()).getTime()}`);
  }, 1000);

  // 计算结果
  const setTime = () => {
    $('#code1').html(code1);
    $('#code2').html(code2);
    $('.test').html(res);
    $('.testTime').html(resTime);
  }
  setTime();

  $('#add_day').blur(() => {
    const count = $('#add_day').val() || 0;
    const res = count.replace(/[^-0-9]/g, '').replace(/^(.+)-/g, '$1').replace(/^0+(.+)/, '$1');
    $('#add_day').val(res);
  })

  $("#res_btn").click(() => {
    const count = $('#add_day').val() || 0;
    const test = $('.test').html();
    const addRes = moment(test).addDay(count);
    format = $('#format').val();
    res = moment(addRes).format(format);
    resTime = moment(res).getTime();
    code1 = `moment(${count && count !== "0" ? `moment('${test}').addDay(${count})` : `'${test}'`}).format('${format});`;
    code2 = `moment('${test}').getTime)();`;
    setTime();
  })
});
