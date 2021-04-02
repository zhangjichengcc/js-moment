!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.jsmoment=e():t.jsmoment=e()}(self,(function(){return(()=>{var __webpack_exports__={},moment=function(date){var now=new Date,type=Object.prototype.toString.call(date),displayProps={"[object Date]":date,"[object String]":"string"==typeof date?new Date(date.replace(/-/g,"/")):"","[object Undefined]":now},time=displayProps[type],formatRule=function(t){var e=t.getFullYear(),o=t.getMonth()+1,s=t.getDate(),n=t.getHours(),r=t.getMinutes(),a=t.getSeconds(),i=t.getDay(),d=parseInt(((Number(o)-1)/3).toString(),10)+1;return{YYYY:e.toString(),yyyy:e.toString(),YY:e.toString().replace(/^[0-9]{2}([0-9]{2})$/,"$1"),yy:e.toString().replace(/^[0-9]{2}([0-9]{2})$/,"$1"),y:e.toString(),Y:e.toString(),MM:o.toString().padStart(2,"0"),M:o.toString(),DD:s.toString().padStart(2,"0"),dd:s.toString().padStart(2,"0"),D:s.toString(),d:s.toString(),HH:n.toString().padStart(2,"0"),H:n.toString(),hh:12===n?"12":(n%12).toString().padStart(2,"0"),h:12===n?"12":(n%12).toString(),mm:r.toString().padStart(2,"0"),m:r.toString(),ss:a.toString().padStart(2,"0"),s:a.toString(),W:["日","一","二","三","四","五","六"][i],w:i,AA:n<12?"上午":"下午",A:n<12?"AM":"PM",a:n<12?"am":"pm",Q:["一","二","三","四"][d],q:d}},defFormat="YYYY-MM-DD hh:mm:ss",setDateObj=function(t){var e=t||new Date;return{year:e.getFullYear(),month:e.getMonth(),day:e.getDate(),hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),week:e.getDay()}},Moment=function(){function Moment(t){this.date=t,this.dateObject=setDateObj(t)}return Moment.prototype.format=function(t){void 0===t&&(t=defFormat);var e=t,o=formatRule(this.date);return Object.keys(o).forEach((function(t){var s=new RegExp(t,"g");e=e.replace(s,o[t])})),this.formatDate=e},Moment.prototype.addTime=function(t,e){if(void 0===t&&(t=0),void 0===e&&(e="h"),!this.date)return!1;var o=this.dateObject,s=o.year,n=o.month,r=o.day,a=o.hours,i=o.minutes,d=o.seconds,m=new Date(s,n,r,"h"===e?a+t:a,"m"===e?i+t:i,"s"===e?d+t:d);return this.date=m,this.dateObject=setDateObj(m),this},Moment.prototype.addDay=function(t){if(void 0===t&&(t=0),!this.date)return!1;var e=new Date(this.date.getTime()+24*t*60*60*1e3);return this.date=e,this.dateObject=setDateObj(e),this},Moment.prototype.addWeek=function(t){if(void 0===t&&(t=0),!this.date)return!1;var e=new Date(this.date.getTime()+24*t*60*60*1e3*7);return this.date=e,this.dateObject=setDateObj(e),this},Moment.prototype.addMonth=function(t){if(void 0===t&&(t=0),!this.date)return!1;var e=this.dateObject,o=e.year,s=e.month,n=e.day,r=e.hours,a=e.minutes,i=e.seconds,d=new Date(o,s+t,n,r,a,i);return this.date=d,this.dateObject=setDateObj(d),this},Moment.prototype.addYear=function(t){if(void 0===t&&(t=0),!this.date)return!1;var e=this.dateObject,o=e.year,s=e.month,n=e.day,r=e.hours,a=e.minutes,i=e.seconds,d=new Date(o+t,s,n,r,a,i);return this.date=d,this.dateObject=setDateObj(d),this},Moment.prototype.getTime=function(){return this.date.getTime()},Moment.prototype.fromTo=function(t){var oldDate=this.date,newDate=moment(t).date,getTimes=newDate.getTime()-oldDate.getTime(),tag=getTimes>=0?"+":"-",ms=Math.abs(getTimes),Y=Math.floor(ms/31104e6),M=Math.floor(ms/2592e6),D=Math.floor(ms/864e5),h=Math.floor(ms/36e5),m=Math.floor(ms/6e4),s=Math.floor(ms/1e3),years=Y,months=M-12*Y,days=D-30*M,hours=h-24*D,minutes=m-60*h,seconds=s-60*m,times={years:Y,months:M,days:D,hours:h,minutes:m,seconds:s},total={years,months,days,hours,minutes,seconds},format=function(rule){var str="";if(rule){str=rule;for(var objs_1={Y:years,M:months,D:days,h:hours,m:minutes,s:seconds},keys=["Y","M","D","h","m","s"],i=0;i<keys.length;i+=1){var key=keys[i];if(rule.includes(key)){objs_1[key]=eval(key);break}objs_1[key]=null}Object.keys(objs_1).forEach((function(t){str=str.replace(t,objs_1[t])}))}else str=years?years+"年"+(months?months+"个月":"")+("+"===tag?"后":"前"):months?months+"个月"+(days?days+"天":"")+("+"===tag?"后":"前"):days?days+"天"+(hours?hours+"小时":"")+("+"===tag?"后":"前"):hours?hours+"小时"+(minutes?minutes+"分钟":"")+("+"===tag?"后":"前"):minutes?minutes+"分钟"+(seconds?seconds+"秒":"")+("+"===tag?"后":"前"):seconds+"秒"+("+"===tag?"后":"前");return str};return{times,total,tag,years,months,days,hours,minutes,seconds,format}},Moment}();return new Moment(time)};return moment().addDay(),__webpack_exports__})()}));