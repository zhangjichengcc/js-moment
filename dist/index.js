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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\r\n * 日期处理方法\r\n *\r\n * @date 2018-11-06\r\n * @author zhangjicheng\r\n * @email zhangjichengcc@163.com\r\n */\n\nvar moment = function moment(date) {\n  var now = new Date();\n  var time = date ? new Date(date) : now;\n  var formatRule = {\n    // 年\n    YYYY: time.getFullYear().toString(),\n    yyyy: time.getFullYear().toString(),\n    YY: time.getFullYear().toString().replace(/^[0-9]{2}([0-9]{2})$/, '$1'),\n    yy: time.getFullYear().toString().replace(/^[0-9]{2}([0-9]{2})$/, '$1'),\n    y: time.getFullYear().toString(),\n    Y: time.getFullYear().toString(),\n    // 月\n    MM: (time.getMonth() + 1).toString().replace(/^([0-9]{1})$/, '0$1'),\n    M: (time.getMonth() + 1).toString(),\n    // 日\n    DD: time.getDate().toString().replace(/^([0-9]{1})$/, '0$1'),\n    dd: time.getDate().toString().replace(/^([0-9]{1})$/, '0$1'),\n    D: time.getDate().toString(),\n    d: time.getDate().toString(),\n    // 时\n    HH: time.getHours().toString().replace(/^([0-9]{1})$/, '0$1'),\n    hh: time.getHours().toString().replace(/^([0-9]{1})$/, '0$1'),\n    H: time.getHours() > 12 ? (time.getHours() % 12).toString() : time.getHours().toString(),\n    h: time.getHours() > 12 ? (time.getHours() % 12).toString() : time.getHours().toString(),\n    // 分\n    mm: time.getMinutes().toString().replace(/^([0-9]{1})$/, '0$1'),\n    m: time.getMinutes().toString(),\n    // 秒\n    ss: time.getSeconds().toString().replace(/^([0-9]{1})$/, '0$1'),\n    s: time.getSeconds().toString()\n  };\n  var defFormat = 'YYYY-MM-DD hh:mm:ss';\n\n  var Moment = function () {\n    function Moment() {\n      _classCallCheck(this, Moment);\n    }\n\n    _createClass(Moment, [{\n      key: 'format',\n\n      // 日期格式化\n      value: function format() {\n        var _format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defFormat;\n\n        var formatStr = _format;\n        var keys = Object.keys(formatRule);\n        keys.forEach(function (key) {\n          formatStr = formatStr.replace(key, formatRule[key]);\n        });\n        this.formatDate = formatStr;\n        return formatStr;\n      }\n\n      // 日期算法\n\n    }, {\n      key: 'addDay',\n      value: function addDay(day) {\n        if (!time) return false;\n        var newDate = new Date(time.getTime() + day * 24 * 60 * 60 * 1e3);\n        this.dataRes = newDate;\n        return newDate;\n      }\n\n      // getTime\n\n    }, {\n      key: 'getTime',\n      value: function getTime() {\n        var tiems = time.getTime();\n        this.tiems = tiems;\n        return tiems;\n      }\n    }]);\n\n    return Moment;\n  }();\n\n  return new Moment(time);\n};\n\nexports.default = moment;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });