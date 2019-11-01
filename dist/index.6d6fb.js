/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ \"./src/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * 日期处理方法\r\n *\r\n * @date 2018-11-06\r\n * @author zhangjicheng\r\n * @email zhangjichengcc@163.com\r\n */\nvar moment = function moment(date) {\n  var now = new Date();\n  var time = date ? new Date(date.replace(/-/g, '/')) : now;\n\n  var formatRule = function formatRule(d) {\n    var dtime = d || new Date();\n    return {\n      // 年\n      YYYY: dtime.getFullYear().toString(),\n      yyyy: dtime.getFullYear().toString(),\n      YY: dtime.getFullYear().toString().replace(/^[0-9]{2}([0-9]{2})$/, '$1'),\n      yy: dtime.getFullYear().toString().replace(/^[0-9]{2}([0-9]{2})$/, '$1'),\n      y: dtime.getFullYear().toString(),\n      Y: dtime.getFullYear().toString(),\n      // 月\n      MM: (dtime.getMonth() + 1).toString().replace(/^([0-9]{1})$/, '0$1'),\n      M: (dtime.getMonth() + 1).toString(),\n      // 日\n      DD: dtime.getDate().toString().replace(/^([0-9]{1})$/, '0$1'),\n      dd: dtime.getDate().toString().replace(/^([0-9]{1})$/, '0$1'),\n      D: dtime.getDate().toString(),\n      d: dtime.getDate().toString(),\n      // 时\n      HH: dtime.getHours().toString().replace(/^([0-9]{1})$/, '0$1'),\n      hh: dtime.getHours().toString().replace(/^([0-9]{1})$/, '0$1'),\n      H: dtime.getHours() > 12 ? (dtime.getHours() % 12).toString() : dtime.getHours().toString(),\n      h: dtime.getHours() > 12 ? (dtime.getHours() % 12).toString() : dtime.getHours().toString(),\n      // 分\n      mm: dtime.getMinutes().toString().replace(/^([0-9]{1})$/, '0$1'),\n      m: dtime.getMinutes().toString(),\n      // 秒\n      ss: dtime.getSeconds().toString().replace(/^([0-9]{1})$/, '0$1'),\n      s: dtime.getSeconds().toString()\n    };\n  };\n\n  var defFormat = 'YYYY-MM-DD hh:mm:ss';\n\n  var setDateObj = function setDateObj(newDate) {\n    var nd = newDate || new Date();\n    return {\n      year: nd.getFullYear(),\n      month: nd.getMonth(),\n      day: nd.getDate(),\n      hours: nd.getHours(),\n      minutes: nd.getMinutes(),\n      seconds: nd.getSeconds()\n    };\n  };\n\n  var Moment =\n  /*#__PURE__*/\n  function () {\n    function Moment(propDate) {\n      _classCallCheck(this, Moment);\n\n      this.date = propDate;\n      this.dateObject = setDateObj(propDate);\n    } // 日期格式化\n\n\n    _createClass(Moment, [{\n      key: \"format\",\n      value: function format() {\n        var _this = this;\n\n        var _format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defFormat;\n\n        var formatStr = _format;\n        var keys = Object.keys(formatRule(this.date));\n        keys.forEach(function (key) {\n          formatStr = formatStr.replace(key, formatRule(_this.date)[key]);\n        });\n        this.formatDate = formatStr;\n        return formatStr;\n      } // 日期算法 时间加减 h/m/s\n\n    }, {\n      key: \"addTime\",\n      value: function addTime() {\n        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'h';\n        if (!this.date) return false;\n        var _this$dateObject = this.dateObject,\n            year = _this$dateObject.year,\n            month = _this$dateObject.month,\n            day = _this$dateObject.day,\n            hours = _this$dateObject.hours,\n            minutes = _this$dateObject.minutes,\n            seconds = _this$dateObject.seconds;\n        var newDate = new Date(year, month, day, type === 'h' ? hours + val : hours, type === 'm' ? minutes + val : minutes, type === 's' ? seconds + val : seconds);\n        this.date = newDate;\n        this.dateObject = setDateObj(newDate);\n        return this;\n      } // 日期算法 日期加减\n\n    }, {\n      key: \"addDay\",\n      value: function addDay() {\n        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n        if (!this.date) return false;\n        var newDate = new Date(this.date.getTime() + val * 24 * 60 * 60 * 1e3);\n        this.date = newDate;\n        this.dateObject = setDateObj(newDate);\n        return this;\n      } // 日期算法 星期加减\n\n    }, {\n      key: \"addWeek\",\n      value: function addWeek() {\n        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n        if (!this.date) return false;\n        var newDate = new Date(this.date.getTime() + val * 24 * 60 * 60 * 1e3 * 7);\n        this.date = newDate;\n        this.dateObject = setDateObj(newDate);\n        return this;\n      } // 日期算法 月份加减\n\n    }, {\n      key: \"addMonth\",\n      value: function addMonth() {\n        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n        if (!this.date) return false;\n        var _this$dateObject2 = this.dateObject,\n            year = _this$dateObject2.year,\n            month = _this$dateObject2.month,\n            day = _this$dateObject2.day,\n            hours = _this$dateObject2.hours,\n            minutes = _this$dateObject2.minutes,\n            seconds = _this$dateObject2.seconds;\n        var newDate = new Date(year, month + val, day, hours, minutes, seconds);\n        this.date = newDate;\n        this.dateObject = setDateObj(newDate);\n        return this;\n      } // 日期算法 年份加减\n\n    }, {\n      key: \"addYear\",\n      value: function addYear() {\n        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n        if (!this.date) return false;\n        var _this$dateObject3 = this.dateObject,\n            year = _this$dateObject3.year,\n            month = _this$dateObject3.month,\n            day = _this$dateObject3.day,\n            hours = _this$dateObject3.hours,\n            minutes = _this$dateObject3.minutes,\n            seconds = _this$dateObject3.seconds;\n        var newDate = new Date(year + val, month, day, hours, minutes, seconds);\n        this.date = newDate;\n        this.dateObject = setDateObj(newDate);\n        return this;\n      } // 获得时间戳\n\n    }, {\n      key: \"getTime\",\n      value: function getTime() {\n        return this.date.getTime();\n      } // 日期算法 相对时间\n      // 注：每个月按30天处理\n\n    }, {\n      key: \"fromTo\",\n      value: function fromTo(t) {\n        var oldDate = this.date;\n\n        var _moment = moment(t),\n            newDate = _moment.date;\n\n        var getTimes = newDate.getTime() - oldDate.getTime();\n        var tag = getTimes >= 0 ? '+' : '-';\n        var ms = Math.abs(getTimes); // 总计数\n\n        var Y = Math.floor(ms / (1000 * 60 * 60 * 24 * 30 * 12));\n        var M = Math.floor(ms / (1000 * 60 * 60 * 24 * 30));\n        var D = Math.floor(ms / (1000 * 60 * 60 * 24));\n        var h = Math.floor(ms / (1000 * 60 * 60));\n        var m = Math.floor(ms / (1000 * 60));\n        var s = Math.floor(ms / 1000); // 分别包括数\n\n        var years = Y;\n        var months = M - Y * 12;\n        var days = D - M * 30;\n        var hours = h - D * 24;\n        var minutes = m - h * 60;\n        var seconds = s - m * 60;\n        var times = {\n          years: Y,\n          months: M,\n          days: D,\n          hours: h,\n          minutes: m,\n          seconds: s\n        };\n        var total = {\n          years: years,\n          months: months,\n          days: days,\n          hours: hours,\n          minutes: minutes,\n          seconds: seconds\n        }; // 格式化相对日期\n\n        var format = function format(rule) {\n          var str = '';\n\n          if (rule) {\n            str = rule;\n            var objs = {\n              Y: years,\n              M: months,\n              D: days,\n              h: hours,\n              m: minutes,\n              s: seconds\n            };\n            var keys = ['Y', 'M', 'D', 'h', 'm', 's'];\n\n            for (var i = 0; i < keys.length; i += 1) {\n              var key = keys[i];\n\n              if (rule.includes(key)) {\n                // eslint-disable-next-line no-eval\n                objs[key] = eval(key);\n                break;\n              } else {\n                objs[key] = null;\n              }\n            }\n\n            Object.keys(objs).forEach(function (key) {\n              str = str.replace(key, objs[key]);\n            });\n          } else if (years) {\n            str = \"\".concat(years, \"\\u5E74\").concat(months ? \"\".concat(months, \"\\u4E2A\\u6708\") : '').concat(tag === '+' ? '后' : '前');\n          } else if (months) {\n            str = \"\".concat(months, \"\\u4E2A\\u6708\").concat(days ? \"\".concat(days, \"\\u5929\") : '').concat(tag === '+' ? '后' : '前');\n          } else if (days) {\n            str = \"\".concat(days, \"\\u5929\").concat(hours ? \"\".concat(hours, \"\\u5C0F\\u65F6\") : '').concat(tag === '+' ? '后' : '前');\n          } else if (hours) {\n            str = \"\".concat(hours, \"\\u5C0F\\u65F6\").concat(minutes ? \"\".concat(minutes, \"\\u5206\\u949F\") : '').concat(tag === '+' ? '后' : '前');\n          } else if (minutes) {\n            str = \"\".concat(minutes, \"\\u5206\\u949F\").concat(seconds ? \"\".concat(seconds, \"\\u79D2\") : '').concat(tag === '+' ? '后' : '前');\n          } else {\n            str = \"\".concat(seconds, \"\\u79D2\").concat(tag === '+' ? '后' : '前');\n          }\n\n          return str;\n        };\n\n        return {\n          times: times,\n          total: total,\n          tag: tag,\n          years: years,\n          months: months,\n          days: days,\n          hours: hours,\n          minutes: minutes,\n          seconds: seconds,\n          format: format\n        };\n      }\n    }]);\n\n    return Moment;\n  }();\n\n  return new Moment(time);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (moment);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });