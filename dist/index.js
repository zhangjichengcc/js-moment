!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.jsmoment=e():t.jsmoment=e()}(self,(function(){return(()=>{"use strict";var t={d:(e,s)=>{for(var r in s)t.o(s,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{default:()=>o});const s=class{constructor(t){this.year=t.getFullYear(),this.month=t.getMonth(),this.day=t.getDate(),this.hours=t.getHours(),this.minutes=t.getMinutes(),this.seconds=t.getSeconds(),this.time=t.getTime(),this.week=t.getDay(),this.quarter=Math.floor(this.month/3)}},r={zh:{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),days:"_一日_二日_三日_四日_五日_六日_七日_八日_九日_十日_十一日_十二日_十三日_十四日_十五日_十六日_十七日_十八日_十九日_二十日_二十一日_二十二日_二十三日_二十四日_二十五日_二十六日_二十七日_二十八日_二十九日_三十日_三十一日".split("_"),daysShort:new Array(32).fill("").map(((t,e)=>`${e}日`)),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_")},en:{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),days:"_1st_2nd_3rd_4th_5th_6th_7th_8th_9th_10th_11th_12th_13th_14th_15th_16th_17th_18th_19th_20th_21st_22nd_23nd_24th_25th_26th_27th_28th_29th_30th_31st".split("_"),daysShort:new Array(32).fill("").map(((t,e)=>e.toString())),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_")}};const a=class extends Object{constructor(t,e){super();const{year:s,month:a,day:n,hours:_,minutes:i,seconds:o,week:h,quarter:d}=t.dateObject,c=r[e],y=String(s),u=String(a+1),m=String(n),l=String(_),p=String(i),g=String(o),b=String(h),S=String(d+1);this.YYYY=y,this.yyyy=y,this.YY=y.replace(/^[0-9]{2}([0-9]{2})$/,"$1"),this.yy=y.replace(/^[0-9]{2}([0-9]{2})$/,"$1"),this.y=y,this.Y=y,this.MMMM=c.months[a],this.MMM=c.monthsShort[a],this.MM=u.padStart(2,"0"),this.M=u,this.DD=c.days[n],this.dd=m.padStart(2,"0"),this.D=c.daysShort[n],this.d=m,this.HH=l.padStart(2,"0"),this.H=l,this.hh=l.padStart(2,"0"),this.h=l,this.mm=p.toString().padStart(2,"0"),this.m=p.toString(),this.ss=g.toString().padStart(2,"0"),this.s=g.toString(),this.WWW=c.weekdays[h],this.WW=c.weekdaysShort[h],this.W=c.weekdaysMin[h],this.w=b,this.AA=Number(l)<12?"上午":"下午",this.A=Number(l)<12?"AM":"PM",this.a=Number(l)<12?"am":"pm",this.Q=["一","二","三","四"][d],this.q=S}};function n(t="yyyy-MM-dd hh:mm:ss",e){let s=t;const r=new a(this,e);return Object.keys(r).forEach((t=>{const e=new RegExp(`(?!<%*[^%>])${t}(?![^<%]*%>)`,"g");s=s.replace(e,`<%${r[t]}%>`)})),s=s.replace(/[<%|%>]/g,""),s}class _{constructor(t){this.date=t,this.dateObject=new s(t)}clone(){return new _(this.date)}format(t,e){return e=e||"zh",n.call(this,t,e)}add(t,e){t=t||0,e=e||"day";const{year:r,month:a,day:n,hours:_,minutes:i,seconds:o}=this.dateObject,h=new Date("year"===e?r+t:r,"month"===e?a+t:a,"day"===e?n+t:n,"hour"===e?_+t:_,"minute"===e?i+t:i,"second"===e?o+t:o);return this.date=h,this.dateObject=new s(h),this}addDate(t=0,e){e=e||"d";return this.add(t,{y:"year",m:"month",d:"day"}[e])}addTime(t=0,e){e=e||"h";return this.add(t,{h:"hour",m:"minute",s:"second"}[e])}addDay(t=0){return this.add(t,"day")}addWeek(t=0){const e=7*t;return this.add(e,"day")}addMonth(t=0){return this.add(t,"month")}addYear(t=0){return this.add(t,"year")}getTime(){return this.date.getTime()}getDays(){const{year:t,month:e}=this.dateObject;return new Date(t,e,0).getDate()}fromTo(t){return function(t,e){const s=Math.abs(e.dateObject.time-t.dateObject.time),r=e.dateObject.time-t.dateObject.time>0?"+":"-",[a,n]="+"===r?[e,t]:[t,e],_=function(t,e){const s=12*(e.dateObject.year-t.dateObject.year)+(e.dateObject.month-t.dateObject.month);return t.clone().addMonth(s).getTime()>e.getTime()?s-1:s}(n,a),i={years:_/12,months:_,quarters:_/3,seconds:s/1e3,minutes:s/6e4,hours:s/36e5,days:s/864e5,weeks:s/6048e5},o=Object.fromEntries(Object.entries(i).map((([t,e])=>[t,Math.floor(e)]))),h=o.years,d=o.months-12*o.years,c=o.quarters,y=o.seconds-60*o.minutes,u=o.minutes-60*o.hours,m=o.hours-24*o.days,l=function(t,e){let s=e.dateObject.day-t.dateObject.day;const r=(new Date(e.dateObject.year,e.dateObject.month,e.dateObject.day).getTime()-new Date(t.dateObject.year,t.dateObject.month,t.dateObject.day).getTime())/864e5,a=t.clone().addDay(r),n=t.getDays();return s+=a.getTime()>e.getTime()?-1:0,s+=s<0?n:0,s}(n,a),p=o.week;return{total:o,wholeTotal:i,tag:r,years:h,months:d,quarters:c,weeks:p,days:l,hours:m,minutes:u,seconds:y,format:function(t){let e="";if(t){e=t;const s={y:h,M:d,d:l,h:m,m:u,s:y};Object.keys(s).forEach((t=>{e=e.replace(t,String(s[t]))}))}else e=(h?`${h}年`:"")+(d?`${d}个月`:"")+(!h&&l?`${l}天`:"")+(h||d||!m?"":`${m}小时`)+(h||d||l||!u?"":`${u}分钟`)+(h||d||l||m||!y?"":`${y}秒`)+("+"===r?"后":"前");return e}}}(this,o(t))}}const i=_;const o=function(t){return t=function(t){let e=t||new Date;if(e="string"==typeof e?new Date(e.replace(/-/g,"/")):new Date(e),"Invalid Date"===e.toString())throw new Error("Incoming parameters Invalid Date");return e}(t),new i(t)};return e})()}));