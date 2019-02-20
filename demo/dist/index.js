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
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar _index = __webpack_require__(/*! ../dist/index.js */ \"./dist/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nglobal.moment = _index2.default; /**\r\n                                  * 日期处理方法Demo\r\n                                  *\r\n                                  * @date 2019-02-19\r\n                                  * @author zhangjicheng\r\n                                  * @eamil zhangjichengcc@163.com\r\n                                  */\n\n$(document).ready(function () {\n  // 初始化变量\n  var format = $('#format').val();\n  var res = (0, _index2.default)().format();\n  var resTime = (0, _index2.default)((0, _index2.default)().format()).getTime();\n  var code1 = 'moment(\\'' + res + '\\').format(\\'' + format + ');';\n  var code2 = 'moment(\\'' + res + '\\').getTime)();';\n\n  $('.now').html('\\u5F53\\u524D\\u65F6\\u95F4: ' + (0, _index2.default)().format());\n  $('.nowTime').html('\\u65F6\\u95F4\\u6233: ' + (0, _index2.default)((0, _index2.default)().format()).getTime());\n  setInterval(function () {\n    $('.now').html('\\u5F53\\u524D\\u65F6\\u95F4: ' + (0, _index2.default)().format());\n    $('.nowTime').html('\\u65F6\\u95F4\\u6233: ' + (0, _index2.default)((0, _index2.default)().format()).getTime());\n  }, 1000);\n\n  // 计算结果\n  var setTime = function setTime() {\n    $('#code1').html(code1);\n    $('#code2').html(code2);\n    $('.test').html(res);\n    $('.testTime').html(resTime);\n  };\n  setTime();\n\n  $('#add_day').blur(function () {\n    var count = $('#add_day').val() || 0;\n    var res = count.replace(/[^-0-9]/g, '').replace(/^(.+)-/g, '$1').replace(/^0+(.+)/, '$1');\n    $('#add_day').val(res);\n  });\n\n  $(\"#res_btn\").click(function () {\n    var count = $('#add_day').val() || 0;\n    var test = $('.test').html();\n    var addRes = (0, _index2.default)(test).addDay(count);\n    format = $('#format').val();\n    res = (0, _index2.default)(addRes).format(format);\n    resTime = (0, _index2.default)(res).getTime();\n    code1 = 'moment(' + (count && count !== \"0\" ? 'moment(\\'' + test + '\\').addDay(' + count + ')' : '\\'' + test + '\\'') + ').format(\\'' + format + ');';\n    code2 = 'moment(\\'' + test + '\\').getTime)();';\n    setTime();\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.29.5@webpack/buildin/global.js */ \"./node_modules/_webpack@4.29.5@webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./demo/index.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/******/(function (modules) {\n  // webpackBootstrap\n  /******/ // The module cache\n  /******/var installedModules = {};\n  /******/\n  /******/ // The require function\n  /******/function __webpack_require__(moduleId) {\n    /******/\n    /******/ // Check if module is in cache\n    /******/if (installedModules[moduleId]) {\n      /******/return installedModules[moduleId].exports;\n      /******/\n    }\n    /******/ // Create a new module (and put it into the cache)\n    /******/var module = installedModules[moduleId] = {\n      /******/i: moduleId,\n      /******/l: false,\n      /******/exports: {}\n      /******/ };\n    /******/\n    /******/ // Execute the module function\n    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n    /******/\n    /******/ // Flag the module as loaded\n    /******/module.l = true;\n    /******/\n    /******/ // Return the exports of the module\n    /******/return module.exports;\n    /******/\n  }\n  /******/\n  /******/\n  /******/ // expose the modules object (__webpack_modules__)\n  /******/__webpack_require__.m = modules;\n  /******/\n  /******/ // expose the module cache\n  /******/__webpack_require__.c = installedModules;\n  /******/\n  /******/ // define getter function for harmony exports\n  /******/__webpack_require__.d = function (exports, name, getter) {\n    /******/if (!__webpack_require__.o(exports, name)) {\n      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });\n      /******/\n    }\n    /******/\n  };\n  /******/\n  /******/ // define __esModule on exports\n  /******/__webpack_require__.r = function (exports) {\n    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n      /******/\n    }\n    /******/Object.defineProperty(exports, '__esModule', { value: true });\n    /******/\n  };\n  /******/\n  /******/ // create a fake namespace object\n  /******/ // mode & 1: value is a module id, require it\n  /******/ // mode & 2: merge all properties of value into the ns\n  /******/ // mode & 4: return value when already ns object\n  /******/ // mode & 8|1: behave like require\n  /******/__webpack_require__.t = function (value, mode) {\n    /******/if (mode & 1) value = __webpack_require__(value);\n    /******/if (mode & 8) return value;\n    /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;\n    /******/var ns = Object.create(null);\n    /******/__webpack_require__.r(ns);\n    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });\n    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {\n      __webpack_require__.d(ns, key, function (key) {\n        return value[key];\n      }.bind(null, key));\n    } /******/return ns;\n    /******/\n  };\n  /******/\n  /******/ // getDefaultExport function for compatibility with non-harmony modules\n  /******/__webpack_require__.n = function (module) {\n    /******/var getter = module && module.__esModule ?\n    /******/function getDefault() {\n      return module['default'];\n    } :\n    /******/function getModuleExports() {\n      return module;\n    };\n    /******/__webpack_require__.d(getter, 'a', getter);\n    /******/return getter;\n    /******/\n  };\n  /******/\n  /******/ // Object.prototype.hasOwnProperty.call\n  /******/__webpack_require__.o = function (object, property) {\n    return Object.prototype.hasOwnProperty.call(object, property);\n  };\n  /******/\n  /******/ // __webpack_public_path__\n  /******/__webpack_require__.p = \"\";\n  /******/\n  /******/\n  /******/ // Load entry module and return exports\n  /******/return __webpack_require__(__webpack_require__.s = \"./index.js\");\n  /******/\n})(\n/************************************************************************/\n/******/{\n\n  /***/\"./index.js\":\n  /*!******************!*\\\n    !*** ./index.js ***!\n    \\******************/\n  /*! no static exports found */\n  /***/function indexJs(module, exports, __webpack_require__) {\n\n    \"use strict\";\n\n    eval(\"\\n\\nObject.defineProperty(exports, \\\"__esModule\\\", {\\n  value: true\\n});\\n\\nvar _index = __webpack_require__(/*! ./src/index */ \\\"./src/index.js\\\");\\n\\nvar _index2 = _interopRequireDefault(_index);\\n\\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\\n\\nexports.default = _index2.default;\\n\\n//# sourceURL=webpack:///./index.js?\");\n\n    /***/\n  },\n\n  /***/\"./src/index.js\":\n  /*!**********************!*\\\n    !*** ./src/index.js ***!\n    \\**********************/\n  /*! no static exports found */\n  /***/function srcIndexJs(module, exports, __webpack_require__) {\n\n    \"use strict\";\n\n    eval(\"\\n\\nObject.defineProperty(exports, \\\"__esModule\\\", {\\n  value: true\\n});\\n\\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\\\"value\\\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\\n\\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\\\"Cannot call a class as a function\\\"); } }\\n\\n/**\\r\\n * 日期处理方法\\r\\n *\\r\\n * @date 2018-11-06\\r\\n * @author zhangjicheng\\r\\n * @email zhangjichengcc@163.com\\r\\n */\\n\\nvar moment = function moment(date) {\\n  var now = new Date();\\n  var time = date ? new Date(date) : now;\\n  var formatRule = {\\n    // 年\\n    YYYY: time.getFullYear().toString(),\\n    yyyy: time.getFullYear().toString(),\\n    YY: time.getFullYear().toString().replace(/^[0-9]{2}([0-9]{2})$/, '$1'),\\n    yy: time.getFullYear().toString().replace(/^[0-9]{2}([0-9]{2})$/, '$1'),\\n    y: time.getFullYear().toString(),\\n    Y: time.getFullYear().toString(),\\n    // 月\\n    MM: (time.getMonth() + 1).toString().replace(/^([0-9]{1})$/, '0$1'),\\n    M: (time.getMonth() + 1).toString(),\\n    // 日\\n    DD: time.getDate().toString().replace(/^([0-9]{1})$/, '0$1'),\\n    dd: time.getDate().toString().replace(/^([0-9]{1})$/, '0$1'),\\n    D: time.getDate().toString(),\\n    d: time.getDate().toString(),\\n    // 时\\n    HH: time.getHours().toString().replace(/^([0-9]{1})$/, '0$1'),\\n    hh: time.getHours().toString().replace(/^([0-9]{1})$/, '0$1'),\\n    H: time.getHours() > 12 ? (time.getHours() % 12).toString() : time.getHours().toString(),\\n    h: time.getHours() > 12 ? (time.getHours() % 12).toString() : time.getHours().toString(),\\n    // 分\\n    mm: time.getMinutes().toString().replace(/^([0-9]{1})$/, '0$1'),\\n    m: time.getMinutes().toString(),\\n    // 秒\\n    ss: time.getSeconds().toString().replace(/^([0-9]{1})$/, '0$1'),\\n    s: time.getSeconds().toString()\\n  };\\n  var defFormat = 'YYYY-MM-DD hh:mm:ss';\\n\\n  var Moment = function () {\\n    function Moment() {\\n      _classCallCheck(this, Moment);\\n    }\\n\\n    _createClass(Moment, [{\\n      key: 'format',\\n\\n      // 日期格式化\\n      value: function format() {\\n        var _format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defFormat;\\n\\n        var formatStr = _format;\\n        var keys = Object.keys(formatRule);\\n        keys.forEach(function (key) {\\n          formatStr = formatStr.replace(key, formatRule[key]);\\n        });\\n        this.formatDate = formatStr;\\n        return formatStr;\\n      }\\n\\n      // 日期算法\\n\\n    }, {\\n      key: 'addDay',\\n      value: function addDay(day) {\\n        if (!time) return false;\\n        var newDate = new Date(time.getTime() + day * 24 * 60 * 60 * 1e3);\\n        this.dataRes = newDate;\\n        return newDate;\\n      }\\n\\n      // getTime\\n\\n    }, {\\n      key: 'getTime',\\n      value: function getTime() {\\n        var tiems = time.getTime();\\n        this.tiems = tiems;\\n        return tiems;\\n      }\\n    }]);\\n\\n    return Moment;\\n  }();\\n\\n  return new Moment(time);\\n};\\n\\nexports.default = moment;\\n\\n//# sourceURL=webpack:///./src/index.js?\");\n\n    /***/\n  }\n\n  /******/ });\n\n//# sourceURL=webpack:///./dist/index.js?");

/***/ }),

/***/ "./node_modules/_webpack@4.29.5@webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar g;\n\n// This works in non-strict mode\ng = function () {\n\treturn this;\n}();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ })

/******/ });