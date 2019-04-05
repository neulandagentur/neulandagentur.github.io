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

/***/ "./js/src/Repository.js":
/*!******************************!*\
  !*** ./js/src/Repository.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Repository; });\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"./js/src/h.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Repository =\n/*#__PURE__*/\nfunction () {\n  function Repository(title, description, forks, stars, license, language, url) {\n    _classCallCheck(this, Repository);\n\n    this.title = title;\n    this.description = description;\n    this.forks = forks;\n    this.stars = stars;\n    this.license = license || null;\n    this.language = language;\n    this.url = url;\n  }\n\n  _createClass(Repository, [{\n    key: \"createTemplate\",\n    value: function createTemplate() {\n      var language = this.language || 'no language';\n      var license = this.license ? Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        class: 'license'\n      }, [this.license]) : null;\n      return Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        class: 'project',\n        'data-language': language.toLowerCase()\n      }, [Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        class: 'inner'\n      }, [Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        class: 'head'\n      }, [Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        class: 'stars'\n      }, [this.stars.toString()]), Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        class: 'forks'\n      }, [this.forks.toString()]), license]), Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        class: 'language',\n        'data-language': language.toLowerCase()\n      }, [language]), Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h3', {\n        class: 'title'\n      }, [this.title]), Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', {\n        class: 'description'\n      }, [this.description]), Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('a', {\n        class: 'link',\n        target: \"_blank\",\n        href: this.url\n      }, [this.url])])]);\n    }\n  }]);\n\n  return Repository;\n}();\n\n\n\n//# sourceURL=webpack:///./js/src/Repository.js?");

/***/ }),

/***/ "./js/src/get-repos.js":
/*!*****************************!*\
  !*** ./js/src/get-repos.js ***!
  \*****************************/
/*! exports provided: Repos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Repos\", function() { return Repos; });\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"./js/src/h.js\");\n/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Repository */ \"./js/src/Repository.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n/**\r\n * current state\r\n * @type {Object}\r\n */\n\nvar state = {\n  activeItem: null,\n  activeLanguage: null,\n  items: []\n};\nvar Repos =\n/*#__PURE__*/\nfunction () {\n  function Repos() {\n    var _this = this;\n\n    _classCallCheck(this, Repos);\n\n    this.template = null;\n    this.languages = [];\n    this.request = null;\n    this.data = null;\n    this.fetchData(function () {\n      _this.renderListItems();\n\n      _this.renderFilter();\n    });\n  }\n\n  _createClass(Repos, [{\n    key: \"fetchData\",\n    value: function fetchData(callback) {\n      var _this2 = this;\n\n      this.request = new XMLHttpRequest();\n      this.request.open('GET', 'https://api.github.com/users/neulandagentur/repos');\n      this.request.addEventListener('load', function () {\n        if (_this2.request.status > 200 || _this2.request.status <= 300) {\n          _this2.data = JSON.parse(_this2.request.responseText);\n\n          if (callback) {\n            callback();\n          }\n        } else {\n          console.error(_this2.request.responseText);\n        }\n      });\n      this.request.send();\n    }\n  }, {\n    key: \"renderListItems\",\n    value: function renderListItems() {\n      this.data.forEach(function (repo) {\n        var license = repo.license ? repo.license.spdx_id : null;\n        var repoInstance = new _Repository__WEBPACK_IMPORTED_MODULE_1__[\"default\"](repo.name, repo.description, repo.forks_count, repo.stargazers_count, license, repo.language, repo.html_url);\n        var template = repoInstance.createTemplate();\n        state.items.push({\n          language: repo.language,\n          item: template\n        });\n        document.querySelector('.projects').appendChild(template);\n      });\n    }\n  }, {\n    key: \"filterUniqueLanguage\",\n    value: function filterUniqueLanguage() {\n      var uniqueLanguage = [];\n      this.data.forEach(function (repo) {\n        var language = repo.language;\n\n        if (uniqueLanguage.indexOf(language) < 0) {\n          uniqueLanguage.push(language);\n        }\n      });\n      return uniqueLanguage;\n    }\n  }, {\n    key: \"renderFilter\",\n    value: function renderFilter() {\n      var _this3 = this;\n\n      var filterItems = this.filterUniqueLanguage().map(function (language) {\n        return Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', {\n          class: 'filter-item',\n          click: function click(e, el) {\n            _this3.filterAction(language, el);\n          }\n        }, [language]);\n      });\n      var filter = Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', {\n        class: 'filter-list'\n      }, filterItems);\n      document.querySelector('.language-filter').appendChild(filter);\n    }\n  }, {\n    key: \"filterAction\",\n    value: function filterAction(language, filterItem) {\n      if (state.activeLanguage === null) {\n        state.items.forEach(function (item) {\n          if (item.language !== language) {\n            item.item.style.display = 'none';\n          }\n        });\n        state.activeLanguage = language;\n        filterItem.classList.add('is--active');\n        state.activeItem = filterItem;\n      } else if (state.activeLanguage === language) {\n        state.items.forEach(function (item) {\n          item.item.style.display = 'block';\n        });\n        state.activeLanguage = null;\n        state.activeItem.classList.remove('is--active');\n        state.activeItem = null;\n      } else {\n        state.items.forEach(function (item) {\n          if (item.language === language) {\n            item.item.style.display = 'block';\n          } else {\n            item.item.style.display = 'none';\n          }\n        });\n        filterItem.classList.add('is--active');\n        state.activeItem.classList.remove('is--active');\n        state.activeItem = filterItem;\n        state.activeLanguage = language;\n      }\n    }\n  }]);\n\n  return Repos;\n}();\n\n//# sourceURL=webpack:///./js/src/get-repos.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_repos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-repos */ \"./js/src/get-repos.js\");\n\nnew _get_repos__WEBPACK_IMPORTED_MODULE_0__[\"Repos\"]();\n\n//# sourceURL=webpack:///./js/src/index.js?");

/***/ })

/******/ });