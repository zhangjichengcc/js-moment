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
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/index.js":
/*!***********************!*\
  !*** ./demo/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _index = __webpack_require__(/*! ../index.js */ \"./index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n$(document).ready(function () {\n  // 初始化变量\n  var format = $('#format').val();\n  var res = (0, _index2.default)().format();\n  var resTime = (0, _index2.default)((0, _index2.default)().format()).getTime();\n  var code1 = 'moment(\\'' + res + '\\').format(\\'' + format + ');';\n  var code2 = 'moment(\\'' + res + '\\').getTime)();';\n\n  $('.now').html('\\u5F53\\u524D\\u65F6\\u95F4: ' + (0, _index2.default)().format());\n  $('.nowTime').html('\\u65F6\\u95F4\\u6233: ' + (0, _index2.default)((0, _index2.default)().format()).getTime());\n  setInterval(function () {\n    $('.now').html('\\u5F53\\u524D\\u65F6\\u95F4: ' + (0, _index2.default)().format());\n    $('.nowTime').html('\\u65F6\\u95F4\\u6233: ' + (0, _index2.default)((0, _index2.default)().format()).getTime());\n  }, 1000);\n\n  // 计算结果\n  var setTime = function setTime() {\n    $('#code1').html(code1);\n    $('#code2').html(code2);\n    $('.test').html(res);\n    $('.testTime').html(resTime);\n  };\n  setTime();\n\n  $('#add_day').blur(function () {\n    var count = $('#add_day').val() || 0;\n    var res = count.replace(/[^-0-9]/g, '').replace(/^(.+)-/g, '$1').replace(/^0+(.+)/, '$1');\n    $('#add_day').val(res);\n  });\n\n  $(\"#res_btn\").click(function () {\n    var count = $('#add_day').val() || 0;\n    var test = $('.test').html();\n    var addRes = (0, _index2.default)(test).addDay(count);\n    format = $('#format').val();\n    res = (0, _index2.default)(addRes).format(format);\n    resTime = (0, _index2.default)(res).getTime();\n    code1 = 'moment(' + (count && count !== \"0\" ? 'moment(\\'' + test + '\\').addDay(' + count + ')' : '\\'' + test + '\\'') + ').format(\\'' + format + ');';\n    code2 = 'moment(\\'' + test + '\\').getTime)();';\n    setTime();\n  });\n}); /**\r\n     * 日期处理方法Demo\r\n     *\r\n     * @date 2019-02-19\r\n     * @author zhangjicheng\r\n     * @eamil zhangjichengcc@163.com\r\n     */\n\n//# sourceURL=webpack:///./demo/index.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// import moment from './src/index';\nvar moment = '66666';\nconsole.log(moment);\nexports.default = moment;\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });