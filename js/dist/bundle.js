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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/get-repos.js":
/*!*****************************!*\
  !*** ./js/src/get-repos.js ***!
  \*****************************/
/*! exports provided: Repos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Repos\", function() { return Repos; });\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"./js/src/h.js\");\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n\nvar Repos =\n/*#__PURE__*/\nfunction () {\n  function Repos() {\n    _classCallCheck(this, Repos);\n\n    this.template = null;\n    this.getRepos();\n  }\n\n  _createClass(Repos, [{\n    key: \"getRepos\",\n    value: function getRepos() {\n      var _this = this;\n\n      var request = new XMLHttpRequest();\n      this.request = request;\n      this.request.open('GET', 'https://api.github.com/users/neulandagentur/repos');\n      this.request.addEventListener('load', function () {\n        var data;\n\n        if (_this.request.status > 200 || _this.request.status <= 300) {\n          data = JSON.parse(_this.request.responseText);\n          data.forEach(function (repo) {\n            if (repo.private === 'false') {\n              return;\n            }\n\n            var license = null;\n\n            if (repo.license) {\n              license = repo.license.spdx_id;\n            }\n\n            _this.render({\n              title: repo.name,\n              description: repo.description,\n              forks: repo.forks_count,\n              stars: repo.stargazers_count,\n              license: license,\n              language: repo.language,\n              url: repo.html_url\n            });\n          });\n        } else console.log('error');\n      });\n      this.request.send();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var repository = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      var template = this.createTemplate(repository);\n      document.querySelector('.projects').appendChild(template);\n    }\n  }, {\n    key: \"createTemplate\",\n    value: function createTemplate() {\n      var repository = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      var language = 'no language';\n      var license = null;\n\n      if (repository.language) {\n        language = repository.language;\n      }\n\n      if (repository.license) {\n        license = Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n          class: 'license'\n        }, [repository.license.toString()]);\n      }\n\n      this.template = Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        class: 'project'\n      }, [Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        class: 'inner'\n      }, [Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        class: 'head'\n      }, [Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        class: 'stars'\n      }, [repository.stars.toString()]), Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        class: 'forks'\n      }, [repository.forks.toString()]), license]), Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        class: 'language'\n      }, [language]), Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', {\n        class: 'title'\n      }, [repository.title]), Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', {\n        class: 'description'\n      }, [repository.description]), Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('a', {\n        class: 'link',\n        href: repository.url\n      }, [repository.url.toString()])])]);\n      return this.template;\n    }\n  }]);\n\n  return Repos;\n}();\n\n//# sourceURL=webpack:///./js/src/get-repos.js?");

/***/ }),

/***/ "./js/src/h.js":
/*!*********************!*\
  !*** ./js/src/h.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar isEvent = function isEvent(event) {\n  return (event.startsWith('on') ? event.toLowerCase() : \"on\".concat(event)) in window;\n};\n\nvar h = function h() {\n  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';\n  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var childs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  var el = document.createElement(tag);\n\n  if (props !== null) {\n    var keys = Object.keys(props);\n    keys.forEach(function (key) {\n      if (isEvent(key)) {\n        el.addEventListener(key, function (e) {\n          props[key](e, el);\n        });\n      } else {\n        el.setAttribute(key, props[key]);\n      }\n    });\n  }\n\n  if (childs.length > 0) {\n    childs.forEach(function (child) {\n      if (typeof child === 'string') {\n        el.appendChild(document.createTextNode(child));\n      } else if (child) {\n        el.appendChild(child);\n      }\n    });\n  }\n\n  return el;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (h);\n\n//# sourceURL=webpack:///./js/src/h.js?");

/***/ }),

/***/ "./js/src/index.js":
/*!*************************!*\
  !*** ./js/src/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_repos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-repos */ \"./js/src/get-repos.js\");\n\nwindow.Repos = _get_repos__WEBPACK_IMPORTED_MODULE_0__[\"Repos\"];\n\n//# sourceURL=webpack:///./js/src/index.js?");

/***/ })

/******/ });