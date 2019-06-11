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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(/*! ./src/index */ \"./src/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _index2.default;\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\r\n * 日期处理方法\r\n *\r\n * @date 2018-11-06\r\n * @author zhangjicheng\r\n * @email zhangjichengcc@163.com\r\n */\n\nvar moment = function moment(date) {\n  var now = new Date();\n  var time = date ? new Date(date) : now;\n  var formatRule = function formatRule(d) {\n    var dtime = d || new Date();\n    return {\n      // 年\n      YYYY: dtime.getFullYear().toString(),\n      yyyy: dtime.getFullYear().toString(),\n      YY: dtime.getFullYear().toString().replace(/^[0-9]{2}([0-9]{2})$/, '$1'),\n      yy: dtime.getFullYear().toString().replace(/^[0-9]{2}([0-9]{2})$/, '$1'),\n      y: dtime.getFullYear().toString(),\n      Y: dtime.getFullYear().toString(),\n      // 月\n      MM: (dtime.getMonth() + 1).toString().replace(/^([0-9]{1})$/, '0$1'),\n      M: (dtime.getMonth() + 1).toString(),\n      // 日\n      DD: dtime.getDate().toString().replace(/^([0-9]{1})$/, '0$1'),\n      dd: dtime.getDate().toString().replace(/^([0-9]{1})$/, '0$1'),\n      D: dtime.getDate().toString(),\n      d: dtime.getDate().toString(),\n      // 时\n      HH: dtime.getHours().toString().replace(/^([0-9]{1})$/, '0$1'),\n      hh: dtime.getHours().toString().replace(/^([0-9]{1})$/, '0$1'),\n      H: dtime.getHours() > 12 ? (dtime.getHours() % 12).toString() : dtime.getHours().toString(),\n      h: dtime.getHours() > 12 ? (dtime.getHours() % 12).toString() : dtime.getHours().toString(),\n      // 分\n      mm: dtime.getMinutes().toString().replace(/^([0-9]{1})$/, '0$1'),\n      m: dtime.getMinutes().toString(),\n      // 秒\n      ss: dtime.getSeconds().toString().replace(/^([0-9]{1})$/, '0$1'),\n      s: dtime.getSeconds().toString()\n    };\n  };\n  var defFormat = 'YYYY-MM-DD hh:mm:ss';\n  var setDateObj = function setDateObj(newDate) {\n    var nd = newDate || new Date();\n    return {\n      year: nd.getFullYear(),\n      month: nd.getMonth(),\n      day: nd.getDate(),\n      hours: nd.getHours(),\n      minutes: nd.getMinutes(),\n      seconds: nd.getSeconds()\n    };\n  };\n\n  var Moment = function () {\n    function Moment(propDate) {\n      _classCallCheck(this, Moment);\n\n      this.date = propDate;\n      this.dateObject = setDateObj(propDate);\n    }\n\n    // 日期格式化\n\n\n    _createClass(Moment, [{\n      key: 'format',\n      value: function format() {\n        var _this = this;\n\n        var _format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defFormat;\n\n        var formatStr = _format;\n        var keys = Object.keys(formatRule(this.date));\n        keys.forEach(function (key) {\n          formatStr = formatStr.replace(key, formatRule(_this.date)[key]);\n        });\n        this.formatDate = formatStr;\n        return formatStr;\n      }\n\n      // 日期算法 时间加减 h/m/s\n\n    }, {\n      key: 'addTime',\n      value: function addTime() {\n        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'h';\n\n        if (!this.date) return false;\n        var _dateObject = this.dateObject,\n            year = _dateObject.year,\n            month = _dateObject.month,\n            day = _dateObject.day,\n            hours = _dateObject.hours,\n            minutes = _dateObject.minutes,\n            seconds = _dateObject.seconds;\n\n        var newDate = new Date(year, month, day, type === 'h' ? hours + val : hours, type === 'm' ? minutes + val : minutes, type === 's' ? seconds + val : seconds);\n        this.date = newDate;\n        this.dateObject = setDateObj(newDate);\n        return this;\n      }\n\n      // 日期算法 日期加减\n\n    }, {\n      key: 'addDay',\n      value: function addDay() {\n        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n        if (!this.date) return false;\n        var newDate = new Date(this.date.getTime() + val * 24 * 60 * 60 * 1e3);\n        this.date = newDate;\n        this.dateObject = setDateObj(newDate);\n        return this;\n      }\n\n      // 日期算法 星期加减\n\n    }, {\n      key: 'addWeek',\n      value: function addWeek() {\n        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n        if (!this.date) return false;\n        var newDate = new Date(this.date.getTime() + val * 24 * 60 * 60 * 1e3 * 7);\n        this.date = newDate;\n        this.dateObject = setDateObj(newDate);\n        return this;\n      }\n\n      // 日期算法 月份加减\n\n    }, {\n      key: 'addMonth',\n      value: function addMonth() {\n        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n        if (!this.date) return false;\n        var _dateObject2 = this.dateObject,\n            year = _dateObject2.year,\n            month = _dateObject2.month,\n            day = _dateObject2.day,\n            hours = _dateObject2.hours,\n            minutes = _dateObject2.minutes,\n            seconds = _dateObject2.seconds;\n\n        var newDate = new Date(year, month + val, day, hours, minutes, seconds);\n        this.date = newDate;\n        this.dateObject = setDateObj(newDate);\n        return this;\n      }\n\n      // 日期算法 年份加减\n\n    }, {\n      key: 'addYear',\n      value: function addYear() {\n        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n        if (!this.date) return false;\n        var _dateObject3 = this.dateObject,\n            year = _dateObject3.year,\n            month = _dateObject3.month,\n            day = _dateObject3.day,\n            hours = _dateObject3.hours,\n            minutes = _dateObject3.minutes,\n            seconds = _dateObject3.seconds;\n\n        var newDate = new Date(year + val, month, day, hours, minutes, seconds);\n        this.date = newDate;\n        this.dateObject = setDateObj(newDate);\n        return this;\n      }\n\n      // getTime\n\n    }, {\n      key: 'getTime',\n      value: function getTime() {\n        return this.date.getTime();;\n      }\n    }]);\n\n    return Moment;\n  }();\n\n  return new Moment(time);\n};\n\nexports.default = moment;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });