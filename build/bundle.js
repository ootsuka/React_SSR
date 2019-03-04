/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + "." + {"0":"b926b37add21f904f76e"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/Header/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/Header/style.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".style_container_31n_O {\\n  height: 40px;\\n  padding-top: 9px;\\n  box-sizing: border-box;\\n}\\n.style_item_1gapL {\\n  display: inline-block;\\n  line-height: 22px;\\n  color: #333;\\n  text-decoration: none;\\n  margin-left: 20px;\\n  font-size: 16px;\\n  cursor: pointer;\\n}\\n.style_item_1gapL:hover {\\n  color: #999;\\n}\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"container\": \"style_container_31n_O\",\n\t\"item\": \"style_item_1gapL\"\n};\n\n//# sourceURL=webpack:///./src/components/Header/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/containers/Footer/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/containers/Footer/style.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".style_container_hXKql {\\n  height: 40px;\\n  padding-top: 9px;\\n  margin-top: 20px;\\n  box-sizing: border-box;\\n  line-height: 30px;\\n}\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"container\": \"style_container_hXKql\"\n};\n\n//# sourceURL=webpack:///./src/containers/Footer/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/containers/Home/style.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/containers/Home/style.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".style_container_1n3kz {\\n  margin-top: 20px;\\n  margin-left: 20px;\\n}\\n.style_item_1Fqg- {\\n  line-height: 34px;\\n  font-size: 16px;\\n  color: #666;\\n}\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"container\": \"style_container_1n3kz\",\n\t\"item\": \"style_item_1Fqg-\"\n};\n\n//# sourceURL=webpack:///./src/containers/Home/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/containers/Translation/style.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/containers/Translation/style.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".style_container_1scoG {\\n  margin-top: 20px;\\n  margin-left: 20px;\\n}\\n.style_item_3L-Ur {\\n  line-height: 34px;\\n  font-size: 16px;\\n  color: #666;\\n}\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"container\": \"style_container_1scoG\",\n\t\"item\": \"style_item_3L-Ur\"\n};\n\n//# sourceURL=webpack:///./src/containers/Translation/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./public/react-loadable.json":
/*!************************************!*\
  !*** ./public/react-loadable.json ***!
  \************************************/
/*! exports provided: ./AsyncComponent.js, @babel/runtime/helpers/esm/assertThisInitialized, @babel/runtime/helpers/esm/extends, @babel/runtime/helpers/esm/inheritsLoose, @babel/runtime/helpers/esm/objectWithoutPropertiesLoose, axios, ./adapters/xhr, ./lib/axios, ./cancel/Cancel, ./cancel/CancelToken, ./cancel/isCancel, ./core/Axios, ./InterceptorManager, ../core/createError, ./dispatchRequest, ./enhanceError, ./../core/settle, ./transformData, ./defaults, ./helpers/bind, ./../helpers/btoa, ./../helpers/buildURL, ./../helpers/combineURLs, ./../helpers/cookies, ./../helpers/isAbsoluteURL, ./../helpers/isURLSameOrigin, ./helpers/normalizeHeaderName, ./../helpers/parseHeaders, ./helpers/spread, ./utils, !!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css, ../../../node_modules/css-loader/dist/runtime/api.js, deep-equal, ./lib/is_arguments.js, ./lib/keys.js, exenv, ./DOMUtils, ./LocationUtils, ./PathUtils, ./createBrowserHistory, ./createHashHistory, ./createMemoryHistory, ./createTransitionManager, history, warning, hoist-non-react-statics, invariant, is-buffer, object-assign, ./../../process/browser.js, prop-types/checkPropTypes, ./factoryWithTypeCheckers, prop-types, ./lib/ReactPropTypesSecret, ./cjs/react-dom.development.js, react-dom, react-helmet, ./HelmetConstants.js, ./HelmetUtils.js, ./cjs/react-is.development.js, react-is, react-loadable, ./components/Context, ./components/Provider, ./components/connectAdvanced, ./connect/connect, ./mapDispatchToProps, ./mapStateToProps, ./mergeProps, ./selectorFactory, ./verifySubselectors, ./wrapMapToProps, react-redux, ./isPlainObject, ../utils/shallowEqual, ../utils/verifyPlainObject, ./warning, react-router-config, ./BrowserRouter, ./HashRouter, ./Link, ./MemoryRouter, ./NavLink, ./Prompt, ./Redirect, ./Route, ./Router, ./StaticRouter, ./Switch, ./generatePath, react-router-dom, ./matchPath, ./withRouter, react-router/es/MemoryRouter, react-router/es/Prompt, react-router/es/Redirect, react-router/es/Route, react-router/es/Router, react-router/es/StaticRouter, react-router/es/Switch, react-router/es/generatePath, react-router, react-router/es/matchPath, react-router/es/withRouter, isarray, path-to-regexp, react-side-effect, ./cjs/react.development.js, react, redux-thunk, redux, resolve-pathname, ./cjs/scheduler-tracing.development.js, ./cjs/scheduler.development.js, scheduler, scheduler/tracing, shallowequal, !../../../node_modules/style-loader/lib/addStyles.js, ./urls, symbol-observable, ./ponyfill.js, value-equal, ./../../webpack/buildin/global.js, ./../../webpack/buildin/harmony-module.js, ./App, ../Routes, ./src/client/index.js, ../client/request, ./components/Header/, ./components/Header/store/actions, ./constants, ../components/Header/store/index, ./reducer, ./style.css, ../config, ../Footer/index, ./containers/Home, ./store/actions, ../containers/Home/store/reducer, ./containers/NotFound, ./containers/Translation, ../containers/Translation/store/reducer, ../server/request, ../store, ../../withStyle, default */
/***/ (function(module) {

eval("module.exports = {\"./AsyncComponent.js\":[{\"id\":\"./src/containers/Footer/AsyncComponent.js\",\"name\":\"./src/containers/Footer/AsyncComponent.js\",\"file\":\"0.03841c6d945ff2ebbb90.js\",\"publicPath\":\"/public/0.03841c6d945ff2ebbb90.js\"}],\"@babel/runtime/helpers/esm/assertThisInitialized\":[{\"id\":\"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"@babel/runtime/helpers/esm/extends\":[{\"id\":\"./node_modules/@babel/runtime/helpers/esm/extends.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/extends.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"@babel/runtime/helpers/esm/inheritsLoose\":[{\"id\":\"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose\":[{\"id\":\"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\",\"name\":\"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"axios\":[{\"id\":\"./node_modules/axios/index.js\",\"name\":\"./node_modules/axios/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./adapters/xhr\":[{\"id\":\"./node_modules/axios/lib/adapters/xhr.js\",\"name\":\"./node_modules/axios/lib/adapters/xhr.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./lib/axios\":[{\"id\":\"./node_modules/axios/lib/axios.js\",\"name\":\"./node_modules/axios/lib/axios.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./cancel/Cancel\":[{\"id\":\"./node_modules/axios/lib/cancel/Cancel.js\",\"name\":\"./node_modules/axios/lib/cancel/Cancel.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./cancel/CancelToken\":[{\"id\":\"./node_modules/axios/lib/cancel/CancelToken.js\",\"name\":\"./node_modules/axios/lib/cancel/CancelToken.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./cancel/isCancel\":[{\"id\":\"./node_modules/axios/lib/cancel/isCancel.js\",\"name\":\"./node_modules/axios/lib/cancel/isCancel.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./core/Axios\":[{\"id\":\"./node_modules/axios/lib/core/Axios.js\",\"name\":\"./node_modules/axios/lib/core/Axios.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./InterceptorManager\":[{\"id\":\"./node_modules/axios/lib/core/InterceptorManager.js\",\"name\":\"./node_modules/axios/lib/core/InterceptorManager.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"../core/createError\":[{\"id\":\"./node_modules/axios/lib/core/createError.js\",\"name\":\"./node_modules/axios/lib/core/createError.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./dispatchRequest\":[{\"id\":\"./node_modules/axios/lib/core/dispatchRequest.js\",\"name\":\"./node_modules/axios/lib/core/dispatchRequest.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./enhanceError\":[{\"id\":\"./node_modules/axios/lib/core/enhanceError.js\",\"name\":\"./node_modules/axios/lib/core/enhanceError.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./../core/settle\":[{\"id\":\"./node_modules/axios/lib/core/settle.js\",\"name\":\"./node_modules/axios/lib/core/settle.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./transformData\":[{\"id\":\"./node_modules/axios/lib/core/transformData.js\",\"name\":\"./node_modules/axios/lib/core/transformData.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./defaults\":[{\"id\":\"./node_modules/axios/lib/defaults.js\",\"name\":\"./node_modules/axios/lib/defaults.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./helpers/bind\":[{\"id\":\"./node_modules/axios/lib/helpers/bind.js\",\"name\":\"./node_modules/axios/lib/helpers/bind.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./../helpers/btoa\":[{\"id\":\"./node_modules/axios/lib/helpers/btoa.js\",\"name\":\"./node_modules/axios/lib/helpers/btoa.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./../helpers/buildURL\":[{\"id\":\"./node_modules/axios/lib/helpers/buildURL.js\",\"name\":\"./node_modules/axios/lib/helpers/buildURL.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./../helpers/combineURLs\":[{\"id\":\"./node_modules/axios/lib/helpers/combineURLs.js\",\"name\":\"./node_modules/axios/lib/helpers/combineURLs.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./../helpers/cookies\":[{\"id\":\"./node_modules/axios/lib/helpers/cookies.js\",\"name\":\"./node_modules/axios/lib/helpers/cookies.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./../helpers/isAbsoluteURL\":[{\"id\":\"./node_modules/axios/lib/helpers/isAbsoluteURL.js\",\"name\":\"./node_modules/axios/lib/helpers/isAbsoluteURL.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./../helpers/isURLSameOrigin\":[{\"id\":\"./node_modules/axios/lib/helpers/isURLSameOrigin.js\",\"name\":\"./node_modules/axios/lib/helpers/isURLSameOrigin.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./helpers/normalizeHeaderName\":[{\"id\":\"./node_modules/axios/lib/helpers/normalizeHeaderName.js\",\"name\":\"./node_modules/axios/lib/helpers/normalizeHeaderName.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./../helpers/parseHeaders\":[{\"id\":\"./node_modules/axios/lib/helpers/parseHeaders.js\",\"name\":\"./node_modules/axios/lib/helpers/parseHeaders.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./helpers/spread\":[{\"id\":\"./node_modules/axios/lib/helpers/spread.js\",\"name\":\"./node_modules/axios/lib/helpers/spread.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./utils\":[{\"id\":\"./node_modules/axios/lib/utils.js\",\"name\":\"./node_modules/axios/lib/utils.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"!!../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css\":[{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./src/components/Header/style.css\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./src/components/Header/style.css\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./src/containers/Footer/style.css\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./src/containers/Footer/style.css\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./src/containers/Home/style.css\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./src/containers/Home/style.css\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"},{\"id\":\"./node_modules/css-loader/dist/cjs.js?!./src/containers/Translation/style.css\",\"name\":\"./node_modules/css-loader/dist/cjs.js?!./src/containers/Translation/style.css\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"../../../node_modules/css-loader/dist/runtime/api.js\":[{\"id\":\"./node_modules/css-loader/dist/runtime/api.js\",\"name\":\"./node_modules/css-loader/dist/runtime/api.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"deep-equal\":[{\"id\":\"./node_modules/deep-equal/index.js\",\"name\":\"./node_modules/deep-equal/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./lib/is_arguments.js\":[{\"id\":\"./node_modules/deep-equal/lib/is_arguments.js\",\"name\":\"./node_modules/deep-equal/lib/is_arguments.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./lib/keys.js\":[{\"id\":\"./node_modules/deep-equal/lib/keys.js\",\"name\":\"./node_modules/deep-equal/lib/keys.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"exenv\":[{\"id\":\"./node_modules/exenv/index.js\",\"name\":\"./node_modules/exenv/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./DOMUtils\":[{\"id\":\"./node_modules/history/es/DOMUtils.js\",\"name\":\"./node_modules/history/es/DOMUtils.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./LocationUtils\":[{\"id\":\"./node_modules/history/es/LocationUtils.js\",\"name\":\"./node_modules/history/es/LocationUtils.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./PathUtils\":[{\"id\":\"./node_modules/history/es/PathUtils.js\",\"name\":\"./node_modules/history/es/PathUtils.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./createBrowserHistory\":[{\"id\":\"./node_modules/history/es/createBrowserHistory.js\",\"name\":\"./node_modules/history/es/createBrowserHistory.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./createHashHistory\":[{\"id\":\"./node_modules/history/es/createHashHistory.js\",\"name\":\"./node_modules/history/es/createHashHistory.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./createMemoryHistory\":[{\"id\":\"./node_modules/history/es/createMemoryHistory.js\",\"name\":\"./node_modules/history/es/createMemoryHistory.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./createTransitionManager\":[{\"id\":\"./node_modules/history/es/createTransitionManager.js\",\"name\":\"./node_modules/history/es/createTransitionManager.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"history\":[{\"id\":\"./node_modules/history/es/index.js\",\"name\":\"./node_modules/history/es/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"warning\":[{\"id\":\"./node_modules/history/node_modules/warning/browser.js\",\"name\":\"./node_modules/history/node_modules/warning/browser.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"},{\"id\":\"./node_modules/warning/warning.js\",\"name\":\"./node_modules/warning/warning.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"hoist-non-react-statics\":[{\"id\":\"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\",\"name\":\"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"},{\"id\":\"./node_modules/react-redux/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\",\"name\":\"./node_modules/react-redux/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"invariant\":[{\"id\":\"./node_modules/invariant/browser.js\",\"name\":\"./node_modules/invariant/browser.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"is-buffer\":[{\"id\":\"./node_modules/is-buffer/index.js\",\"name\":\"./node_modules/is-buffer/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"object-assign\":[{\"id\":\"./node_modules/object-assign/index.js\",\"name\":\"./node_modules/object-assign/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./../../process/browser.js\":[{\"id\":\"./node_modules/process/browser.js\",\"name\":\"./node_modules/process/browser.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"prop-types/checkPropTypes\":[{\"id\":\"./node_modules/prop-types/checkPropTypes.js\",\"name\":\"./node_modules/prop-types/checkPropTypes.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./factoryWithTypeCheckers\":[{\"id\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"name\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"prop-types\":[{\"id\":\"./node_modules/prop-types/index.js\",\"name\":\"./node_modules/prop-types/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./lib/ReactPropTypesSecret\":[{\"id\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"name\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./cjs/react-dom.development.js\":[{\"id\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"name\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-dom\":[{\"id\":\"./node_modules/react-dom/index.js\",\"name\":\"./node_modules/react-dom/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-helmet\":[{\"id\":\"./node_modules/react-helmet/lib/Helmet.js\",\"name\":\"./node_modules/react-helmet/lib/Helmet.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./HelmetConstants.js\":[{\"id\":\"./node_modules/react-helmet/lib/HelmetConstants.js\",\"name\":\"./node_modules/react-helmet/lib/HelmetConstants.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./HelmetUtils.js\":[{\"id\":\"./node_modules/react-helmet/lib/HelmetUtils.js\",\"name\":\"./node_modules/react-helmet/lib/HelmetUtils.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./cjs/react-is.development.js\":[{\"id\":\"./node_modules/react-is/cjs/react-is.development.js\",\"name\":\"./node_modules/react-is/cjs/react-is.development.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-is\":[{\"id\":\"./node_modules/react-is/index.js\",\"name\":\"./node_modules/react-is/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-loadable\":[{\"id\":\"./node_modules/react-loadable/lib/index.js\",\"name\":\"./node_modules/react-loadable/lib/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./components/Context\":[{\"id\":\"./node_modules/react-redux/es/components/Context.js\",\"name\":\"./node_modules/react-redux/es/components/Context.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./components/Provider\":[{\"id\":\"./node_modules/react-redux/es/components/Provider.js\",\"name\":\"./node_modules/react-redux/es/components/Provider.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./components/connectAdvanced\":[{\"id\":\"./node_modules/react-redux/es/components/connectAdvanced.js\",\"name\":\"./node_modules/react-redux/es/components/connectAdvanced.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./connect/connect\":[{\"id\":\"./node_modules/react-redux/es/connect/connect.js\",\"name\":\"./node_modules/react-redux/es/connect/connect.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./mapDispatchToProps\":[{\"id\":\"./node_modules/react-redux/es/connect/mapDispatchToProps.js\",\"name\":\"./node_modules/react-redux/es/connect/mapDispatchToProps.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./mapStateToProps\":[{\"id\":\"./node_modules/react-redux/es/connect/mapStateToProps.js\",\"name\":\"./node_modules/react-redux/es/connect/mapStateToProps.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./mergeProps\":[{\"id\":\"./node_modules/react-redux/es/connect/mergeProps.js\",\"name\":\"./node_modules/react-redux/es/connect/mergeProps.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./selectorFactory\":[{\"id\":\"./node_modules/react-redux/es/connect/selectorFactory.js\",\"name\":\"./node_modules/react-redux/es/connect/selectorFactory.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./verifySubselectors\":[{\"id\":\"./node_modules/react-redux/es/connect/verifySubselectors.js\",\"name\":\"./node_modules/react-redux/es/connect/verifySubselectors.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./wrapMapToProps\":[{\"id\":\"./node_modules/react-redux/es/connect/wrapMapToProps.js\",\"name\":\"./node_modules/react-redux/es/connect/wrapMapToProps.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-redux\":[{\"id\":\"./node_modules/react-redux/es/index.js\",\"name\":\"./node_modules/react-redux/es/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./isPlainObject\":[{\"id\":\"./node_modules/react-redux/es/utils/isPlainObject.js\",\"name\":\"./node_modules/react-redux/es/utils/isPlainObject.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"../utils/shallowEqual\":[{\"id\":\"./node_modules/react-redux/es/utils/shallowEqual.js\",\"name\":\"./node_modules/react-redux/es/utils/shallowEqual.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"../utils/verifyPlainObject\":[{\"id\":\"./node_modules/react-redux/es/utils/verifyPlainObject.js\",\"name\":\"./node_modules/react-redux/es/utils/verifyPlainObject.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./warning\":[{\"id\":\"./node_modules/react-redux/es/utils/warning.js\",\"name\":\"./node_modules/react-redux/es/utils/warning.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-router-config\":[{\"id\":\"./node_modules/react-router-config/esm/react-router-config.js\",\"name\":\"./node_modules/react-router-config/esm/react-router-config.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./BrowserRouter\":[{\"id\":\"./node_modules/react-router-dom/es/BrowserRouter.js\",\"name\":\"./node_modules/react-router-dom/es/BrowserRouter.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./HashRouter\":[{\"id\":\"./node_modules/react-router-dom/es/HashRouter.js\",\"name\":\"./node_modules/react-router-dom/es/HashRouter.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./Link\":[{\"id\":\"./node_modules/react-router-dom/es/Link.js\",\"name\":\"./node_modules/react-router-dom/es/Link.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./MemoryRouter\":[{\"id\":\"./node_modules/react-router-dom/es/MemoryRouter.js\",\"name\":\"./node_modules/react-router-dom/es/MemoryRouter.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./NavLink\":[{\"id\":\"./node_modules/react-router-dom/es/NavLink.js\",\"name\":\"./node_modules/react-router-dom/es/NavLink.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./Prompt\":[{\"id\":\"./node_modules/react-router-dom/es/Prompt.js\",\"name\":\"./node_modules/react-router-dom/es/Prompt.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./Redirect\":[{\"id\":\"./node_modules/react-router-dom/es/Redirect.js\",\"name\":\"./node_modules/react-router-dom/es/Redirect.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./Route\":[{\"id\":\"./node_modules/react-router-dom/es/Route.js\",\"name\":\"./node_modules/react-router-dom/es/Route.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./Router\":[{\"id\":\"./node_modules/react-router-dom/es/Router.js\",\"name\":\"./node_modules/react-router-dom/es/Router.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./StaticRouter\":[{\"id\":\"./node_modules/react-router-dom/es/StaticRouter.js\",\"name\":\"./node_modules/react-router-dom/es/StaticRouter.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./Switch\":[{\"id\":\"./node_modules/react-router-dom/es/Switch.js\",\"name\":\"./node_modules/react-router-dom/es/Switch.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./generatePath\":[{\"id\":\"./node_modules/react-router-dom/es/generatePath.js\",\"name\":\"./node_modules/react-router-dom/es/generatePath.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-router-dom\":[{\"id\":\"./node_modules/react-router-dom/es/index.js\",\"name\":\"./node_modules/react-router-dom/es/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./matchPath\":[{\"id\":\"./node_modules/react-router-dom/es/matchPath.js\",\"name\":\"./node_modules/react-router-dom/es/matchPath.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./withRouter\":[{\"id\":\"./node_modules/react-router-dom/es/withRouter.js\",\"name\":\"./node_modules/react-router-dom/es/withRouter.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-router/es/MemoryRouter\":[{\"id\":\"./node_modules/react-router/es/MemoryRouter.js\",\"name\":\"./node_modules/react-router/es/MemoryRouter.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-router/es/Prompt\":[{\"id\":\"./node_modules/react-router/es/Prompt.js\",\"name\":\"./node_modules/react-router/es/Prompt.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-router/es/Redirect\":[{\"id\":\"./node_modules/react-router/es/Redirect.js\",\"name\":\"./node_modules/react-router/es/Redirect.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-router/es/Route\":[{\"id\":\"./node_modules/react-router/es/Route.js\",\"name\":\"./node_modules/react-router/es/Route.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-router/es/Router\":[{\"id\":\"./node_modules/react-router/es/Router.js\",\"name\":\"./node_modules/react-router/es/Router.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-router/es/StaticRouter\":[{\"id\":\"./node_modules/react-router/es/StaticRouter.js\",\"name\":\"./node_modules/react-router/es/StaticRouter.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-router/es/Switch\":[{\"id\":\"./node_modules/react-router/es/Switch.js\",\"name\":\"./node_modules/react-router/es/Switch.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-router/es/generatePath\":[{\"id\":\"./node_modules/react-router/es/generatePath.js\",\"name\":\"./node_modules/react-router/es/generatePath.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-router\":[{\"id\":\"./node_modules/react-router/es/index.js\",\"name\":\"./node_modules/react-router/es/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-router/es/matchPath\":[{\"id\":\"./node_modules/react-router/es/matchPath.js\",\"name\":\"./node_modules/react-router/es/matchPath.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-router/es/withRouter\":[{\"id\":\"./node_modules/react-router/es/withRouter.js\",\"name\":\"./node_modules/react-router/es/withRouter.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"isarray\":[{\"id\":\"./node_modules/react-router/node_modules/isarray/index.js\",\"name\":\"./node_modules/react-router/node_modules/isarray/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"path-to-regexp\":[{\"id\":\"./node_modules/react-router/node_modules/path-to-regexp/index.js\",\"name\":\"./node_modules/react-router/node_modules/path-to-regexp/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react-side-effect\":[{\"id\":\"./node_modules/react-side-effect/lib/index.js\",\"name\":\"./node_modules/react-side-effect/lib/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./cjs/react.development.js\":[{\"id\":\"./node_modules/react/cjs/react.development.js\",\"name\":\"./node_modules/react/cjs/react.development.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"react\":[{\"id\":\"./node_modules/react/index.js\",\"name\":\"./node_modules/react/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"redux-thunk\":[{\"id\":\"./node_modules/redux-thunk/es/index.js\",\"name\":\"./node_modules/redux-thunk/es/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"redux\":[{\"id\":\"./node_modules/redux/es/redux.js\",\"name\":\"./node_modules/redux/es/redux.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"resolve-pathname\":[{\"id\":\"./node_modules/resolve-pathname/index.js\",\"name\":\"./node_modules/resolve-pathname/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./cjs/scheduler-tracing.development.js\":[{\"id\":\"./node_modules/scheduler/cjs/scheduler-tracing.development.js\",\"name\":\"./node_modules/scheduler/cjs/scheduler-tracing.development.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./cjs/scheduler.development.js\":[{\"id\":\"./node_modules/scheduler/cjs/scheduler.development.js\",\"name\":\"./node_modules/scheduler/cjs/scheduler.development.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"scheduler\":[{\"id\":\"./node_modules/scheduler/index.js\",\"name\":\"./node_modules/scheduler/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"scheduler/tracing\":[{\"id\":\"./node_modules/scheduler/tracing.js\",\"name\":\"./node_modules/scheduler/tracing.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"shallowequal\":[{\"id\":\"./node_modules/shallowequal/index.js\",\"name\":\"./node_modules/shallowequal/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"!../../../node_modules/style-loader/lib/addStyles.js\":[{\"id\":\"./node_modules/style-loader/lib/addStyles.js\",\"name\":\"./node_modules/style-loader/lib/addStyles.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./urls\":[{\"id\":\"./node_modules/style-loader/lib/urls.js\",\"name\":\"./node_modules/style-loader/lib/urls.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"symbol-observable\":[{\"id\":\"./node_modules/symbol-observable/es/index.js\",\"name\":\"./node_modules/symbol-observable/es/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./ponyfill.js\":[{\"id\":\"./node_modules/symbol-observable/es/ponyfill.js\",\"name\":\"./node_modules/symbol-observable/es/ponyfill.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"value-equal\":[{\"id\":\"./node_modules/value-equal/index.js\",\"name\":\"./node_modules/value-equal/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./../../webpack/buildin/global.js\":[{\"id\":\"./node_modules/webpack/buildin/global.js\",\"name\":\"./node_modules/webpack/buildin/global.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./../../webpack/buildin/harmony-module.js\":[{\"id\":\"./node_modules/webpack/buildin/harmony-module.js\",\"name\":\"./node_modules/webpack/buildin/harmony-module.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./App\":[{\"id\":\"./src/App.js\",\"name\":\"./src/App.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"../Routes\":[{\"id\":\"./src/Routes.js\",\"name\":\"./src/Routes.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./src/client/index.js\":[{\"id\":\"./src/client/index.js\",\"name\":\"./src/client/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"../client/request\":[{\"id\":\"./src/client/request.js\",\"name\":\"./src/client/request.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./components/Header/\":[{\"id\":\"./src/components/Header/index.js\",\"name\":\"./src/components/Header/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./components/Header/store/actions\":[{\"id\":\"./src/components/Header/store/actions.js\",\"name\":\"./src/components/Header/store/actions.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./constants\":[{\"id\":\"./src/components/Header/store/constants.js\",\"name\":\"./src/components/Header/store/constants.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"},{\"id\":\"./src/containers/Home/store/constants.js\",\"name\":\"./src/containers/Home/store/constants.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"},{\"id\":\"./src/containers/Translation/store/constants.js\",\"name\":\"./src/containers/Translation/store/constants.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"../components/Header/store/index\":[{\"id\":\"./src/components/Header/store/index.js\",\"name\":\"./src/components/Header/store/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./reducer\":[{\"id\":\"./src/components/Header/store/reducer.js\",\"name\":\"./src/components/Header/store/reducer.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./style.css\":[{\"id\":\"./src/components/Header/style.css\",\"name\":\"./src/components/Header/style.css\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"},{\"id\":\"./src/containers/Footer/style.css\",\"name\":\"./src/containers/Footer/style.css\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"},{\"id\":\"./src/containers/Home/style.css\",\"name\":\"./src/containers/Home/style.css\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"},{\"id\":\"./src/containers/Translation/style.css\",\"name\":\"./src/containers/Translation/style.css\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"../config\":[{\"id\":\"./src/config.js\",\"name\":\"./src/config.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"../Footer/index\":[{\"id\":\"./src/containers/Footer/index.js\",\"name\":\"./src/containers/Footer/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./containers/Home\":[{\"id\":\"./src/containers/Home/index.js\",\"name\":\"./src/containers/Home/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./store/actions\":[{\"id\":\"./src/containers/Home/store/actions.js\",\"name\":\"./src/containers/Home/store/actions.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"},{\"id\":\"./src/containers/Translation/store/actions.js\",\"name\":\"./src/containers/Translation/store/actions.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"../containers/Home/store/reducer\":[{\"id\":\"./src/containers/Home/store/reducer.js\",\"name\":\"./src/containers/Home/store/reducer.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./containers/NotFound\":[{\"id\":\"./src/containers/NotFound/index.js\",\"name\":\"./src/containers/NotFound/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"./containers/Translation\":[{\"id\":\"./src/containers/Translation/index.js\",\"name\":\"./src/containers/Translation/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"../containers/Translation/store/reducer\":[{\"id\":\"./src/containers/Translation/store/reducer.js\",\"name\":\"./src/containers/Translation/store/reducer.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"../server/request\":[{\"id\":\"./src/server/request.js\",\"name\":\"./src/server/request.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"../store\":[{\"id\":\"./src/store/index.js\",\"name\":\"./src/store/index.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}],\"../../withStyle\":[{\"id\":\"./src/withStyle.js\",\"name\":\"./src/withStyle.js\",\"file\":\"index.js\",\"publicPath\":\"/public/index.js\"}]};\n\n//# sourceURL=webpack:///./public/react-loadable.json?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header/ */ \"./src/components/Header/index.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Routes */ \"./src/Routes.js\");\n/* harmony import */ var _components_Header_store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header/store/actions */ \"./src/components/Header/store/actions.js\");\n\n\n\n\n\n\nvar App = function App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header___WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    staticContext: props.staticContext\n  }), Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])(props.route.routes));\n};\n\nApp.loadData = function (store) {\n  return store.dispatch(Object(_components_Header_store_actions__WEBPACK_IMPORTED_MODULE_4__[\"getLoginInfo\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n/* harmony import */ var _containers_Translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/Translation */ \"./src/containers/Translation/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _containers_NotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/NotFound */ \"./src/containers/NotFound/index.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: _App__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  loadData: _App__WEBPACK_IMPORTED_MODULE_4__[\"default\"].loadData,\n  routes: [{\n    path: '/',\n    component: _containers_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    exact: true,\n    loadData: _containers_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadData\n  }, {\n    path: '/translation',\n    component: _containers_Translation__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    exact: true,\n    loadData: _containers_Translation__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loadData\n  }, {\n    component: _containers_NotFound__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\nvar instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: '/',\n  params: {\n    secret: _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].secret\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions */ \"./src/components/Header/store/actions.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/components/Header/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _withStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar header =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(header, _Component);\n\n  function header() {\n    _classCallCheck(this, header);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(header).apply(this, arguments));\n  }\n\n  _createClass(header, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          login = _this$props.login,\n          handleLogin = _this$props.handleLogin,\n          handleLogout = _this$props.handleLogout;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.container\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/\",\n        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.item\n      }, \"home\"), login ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/translation\",\n        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.item\n      }, \"translation list\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onClick: handleLogout,\n        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.item\n      }, \"log out\")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onClick: handleLogin,\n        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.item\n      }, \"login\"));\n    }\n  }]);\n\n  return header;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    login: state.header.login\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    handleLogin: function handleLogin() {\n      return dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"handleLogin\"])());\n    },\n    handleLogout: function handleLogout() {\n      return dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"handleLogout\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(_withStyle__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(header, _style_css__WEBPACK_IMPORTED_MODULE_4___default.a)));\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/actions.js ***!
  \************************************************/
/*! exports provided: getLoginInfo, handleLogin, handleLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLoginInfo\", function() { return getLoginInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleLogin\", function() { return handleLogin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleLogout\", function() { return handleLogout; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\n\nvar getLoginInfo = function getLoginInfo() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/isLogin.json').then(function (res) {\n      dispatch({\n        type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"GET_LOGIN_SUCCESS\"],\n        value: res.data.data.login\n      });\n    });\n  };\n};\nvar handleLogin = function handleLogin() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/Login.json').then(function (res) {\n      dispatch({\n        type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"GET_LOGIN_SUCCESS\"],\n        value: true\n      });\n    });\n  };\n};\nvar handleLogout = function handleLogout() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/logout.json').then(function (res) {\n      dispatch({\n        type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"GET_LOGIN_SUCCESS\"],\n        value: false\n      });\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/actions.js?");

/***/ }),

/***/ "./src/components/Header/store/constants.js":
/*!**************************************************!*\
  !*** ./src/components/Header/store/constants.js ***!
  \**************************************************/
/*! exports provided: GET_LOGIN_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_LOGIN_SUCCESS\", function() { return GET_LOGIN_SUCCESS; });\nvar GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';\n\n//# sourceURL=webpack:///./src/components/Header/store/constants.js?");

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/components/Header/store/reducer.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/Header/store/index.js?");

/***/ }),

/***/ "./src/components/Header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  login: null\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"GET_LOGIN_SUCCESS\"]:\n      return _objectSpread({}, state, {\n        login: action.value\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Header/store/reducer.js?");

/***/ }),

/***/ "./src/components/Header/style.css":
/*!*****************************************!*\
  !*** ./src/components/Header/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/components/Header/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Header/style.css?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  secret: 'PP87ANTIPIRATE'\n});\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/containers/Footer/index.js":
/*!****************************************!*\
  !*** ./src/containers/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/containers/Footer/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _withStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar LoadableComponent = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./AsyncComponent.js */ \"./src/containers/Footer/AsyncComponent.js\"));\n  },\n  modules: ['./AsyncComponent.js'],\n  webpack: function webpack() {\n    return [/*require.resolve*/(/*! ./AsyncComponent.js */ \"./src/containers/Footer/AsyncComponent.js\")];\n  },\n  loading: function loading() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\");\n  }\n});\n\nvar Footer =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Footer, _Component);\n\n  function Footer() {\n    _classCallCheck(this, Footer);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));\n  }\n\n  _createClass(Footer, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.container\n      }, \"I am a footer\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadableComponent, null));\n    }\n  }]);\n\n  return Footer;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_withStyle__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Footer, _style_css__WEBPACK_IMPORTED_MODULE_2___default.a));\n\n//# sourceURL=webpack:///./src/containers/Footer/index.js?");

/***/ }),

/***/ "./src/containers/Footer/style.css":
/*!*****************************************!*\
  !*** ./src/containers/Footer/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/containers/Footer/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Footer/style.css?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions */ \"./src/containers/Home/store/actions.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/containers/Home/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _withStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\n/* harmony import */ var _Footer_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Footer/index */ \"./src/containers/Footer/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\nvar home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(home, _Component);\n\n  function home() {\n    _classCallCheck(this, home);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(home).apply(this, arguments));\n  }\n\n  _createClass(home, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (!this.props.list.length) {\n        this.props.getList();\n      }\n    }\n  }, {\n    key: \"genList\",\n    value: function genList() {\n      return this.props.list.map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.item,\n          key: item.id\n        }, item.title);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"news feed\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: \"this is a news list page\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.container\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, this.genList()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_index__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n    }\n  }]);\n\n  return home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.home.name,\n    list: state.home.newsList\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getList: function getList() {\n      return dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getNewsList\"])());\n    }\n  };\n};\n\nvar exportHome = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(_withStyle__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(home, _style_css__WEBPACK_IMPORTED_MODULE_4___default.a));\n\nexportHome.loadData = function (store) {\n  //load data before server renders\n  return store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getNewsList\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (exportHome);\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/*! exports provided: getNewsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNewsList\", function() { return getNewsList; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\n\nvar getNewsList = function getNewsList() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/news.json').then(function (res) {\n      var list = res.data.data;\n      dispatch({\n        type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"LIST_LOAD_SUCCESS\"],\n        list: list\n      });\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/actions.js?");

/***/ }),

/***/ "./src/containers/Home/store/constants.js":
/*!************************************************!*\
  !*** ./src/containers/Home/store/constants.js ***!
  \************************************************/
/*! exports provided: LIST_LOAD_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIST_LOAD_SUCCESS\", function() { return LIST_LOAD_SUCCESS; });\nvar LIST_LOAD_SUCCESS = 'LIST_LOAD_SUCCESS';\n\n//# sourceURL=webpack:///./src/containers/Home/store/constants.js?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  name: 'xin',\n  newsList: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"LIST_LOAD_SUCCESS\"]:\n      return _objectSpread({}, state, {\n        newsList: action.list\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Home/style.css":
/*!***************************************!*\
  !*** ./src/containers/Home/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/containers/Home/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Home/style.css?");

/***/ }),

/***/ "./src/containers/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/containers/NotFound/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar NotFound =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(NotFound, _Component);\n\n  function NotFound() {\n    _classCallCheck(this, NotFound);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NotFound).apply(this, arguments));\n  }\n\n  _createClass(NotFound, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var staticContext = this.props.staticContext;\n      staticContext && (staticContext.NOT_FOUND = true);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"oops! page not found\");\n    }\n  }]);\n\n  return NotFound;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/containers/NotFound/index.js?");

/***/ }),

/***/ "./src/containers/Translation/index.js":
/*!*********************************************!*\
  !*** ./src/containers/Translation/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/actions */ \"./src/containers/Translation/store/actions.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/containers/Translation/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _withStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\nvar Translation =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Translation, _Component);\n\n  function Translation() {\n    _classCallCheck(this, Translation);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Translation).apply(this, arguments));\n  }\n\n  _createClass(Translation, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (!this.props.list.length) {\n        this.props.getList();\n      }\n    }\n  }, {\n    key: \"genList\",\n    value: function genList() {\n      return this.props.list.map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          calssName: _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.item,\n          key: item.id\n        }, item.title);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return this.props.login ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"translation list\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: \"this is a translation list page\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.container\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, this.genList()))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Redirect\"], {\n        to: \"/\"\n      });\n    }\n  }]);\n\n  return Translation;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    list: state.translation.translation,\n    login: state.header.login\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getList: function getList() {\n      return dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__[\"getTranslation\"])());\n    }\n  };\n};\n\nvar exportTranslation = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(_withStyle__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Translation, _style_css__WEBPACK_IMPORTED_MODULE_5___default.a));\n\nexportTranslation.loadData = function (store) {\n  //load data before server renders\n  return store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__[\"getTranslation\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (exportTranslation);\n\n//# sourceURL=webpack:///./src/containers/Translation/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/actions.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/actions.js ***!
  \*****************************************************/
/*! exports provided: getTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTranslation\", function() { return getTranslation; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/containers/Translation/store/constants.js\");\n\n\nvar getTranslation = function getTranslation() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/translations.json').then(function (res) {\n      if (res.data.success) {\n        var list = res.data.data;\n        dispatch({\n          type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"GET_TRANS_SUCCESS\"],\n          list: list\n        });\n      } else {\n        dispatch({\n          type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"GET_TRANS_FAIL\"]\n        });\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/containers/Translation/store/actions.js?");

/***/ }),

/***/ "./src/containers/Translation/store/constants.js":
/*!*******************************************************!*\
  !*** ./src/containers/Translation/store/constants.js ***!
  \*******************************************************/
/*! exports provided: GET_TRANS_SUCCESS, GET_TRANS_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_TRANS_SUCCESS\", function() { return GET_TRANS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_TRANS_FAIL\", function() { return GET_TRANS_FAIL; });\nvar GET_TRANS_SUCCESS = 'GET_TRANS_SUCCESS';\nvar GET_TRANS_FAIL = 'GET_TRANS_FAIL';\n\n//# sourceURL=webpack:///./src/containers/Translation/store/constants.js?");

/***/ }),

/***/ "./src/containers/Translation/store/reducer.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/reducer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/containers/Translation/store/constants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  translation: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"GET_TRANS_SUCCESS\"]:\n      return _objectSpread({}, state, {\n        translation: action.list\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"GET_TRANS_FAIL\"]:\n      return state;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/containers/Translation/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Translation/style.css":
/*!**********************************************!*\
  !*** ./src/containers/Translation/style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/containers/Translation/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Translation/style.css?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar port = 8080;\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_3___default()('http://47.95.113.63', {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    return '/ssr/api' + req.url;\n  }\n}));\napp.get('*', function (req, res) {\n  var store = Object(_store__WEBPACK_IMPORTED_MODULE_5__[\"getStore\"])(req); //load data based on route\n\n  var promises = [];\n  var matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"matchRoutes\"])(_Routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"], req.path);\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) {\n      var promise = new Promise(function (resolve, reject) {\n        item.route.loadData(store).then(resolve).catch(resolve);\n      });\n      promises.push(promise);\n    }\n  });\n  Promise.all(promises).then(function () {\n    var context = {};\n    context.css = [];\n    var html = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(req, store, _Routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"], context);\n\n    if (context.action === 'REPLACE') {\n      res.redirect(301, context.url);\n    } else if (context.NOT_FOUND) {\n      res.status(404);\n      res.send(html);\n    } else {\n      res.send(html);\n    }\n  });\n});\nreact_loadable__WEBPACK_IMPORTED_MODULE_4___default.a.preloadAll().then(function () {\n  app.listen(port, function () {\n    console.log(\"Example app listening on port \".concat(port, \"!\"));\n  });\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\n\nvar createInstance = function createInstance(req) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n    baseURL: 'http://47.95.113.63/ssr',\n    headers: {\n      cookie: req.get('cookie') || ''\n    },\n    params: {\n      secret: _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].secret\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createInstance);\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_loadable_webpack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loadable/webpack */ \"react-loadable/webpack\");\n/* harmony import */ var react_loadable_webpack__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loadable_webpack__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_react_loadable_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/react-loadable.json */ \"./public/react-loadable.json\");\nvar _public_react_loadable_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/react-loadable.json */ \"./public/react-loadable.json\", 1);\n\n\n\n\n\n\n\n\n\nvar render = function render(req, store, Routes, context) {\n  var modules = [];\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loadable__WEBPACK_IMPORTED_MODULE_6___default.a.Capture, {\n    report: function report(moduleName) {\n      return modules.push(moduleName);\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__[\"renderRoutes\"])(Routes))))));\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_3__[\"Helmet\"].renderStatic();\n  var bundles = Object(react_loadable_webpack__WEBPACK_IMPORTED_MODULE_7__[\"getBundles\"])(_public_react_loadable_json__WEBPACK_IMPORTED_MODULE_8__, modules);\n  var css = context.css.length ? context.css.join('\\n') : '';\n  return \"\\n        <html>\\n          <head>\\n            \".concat(helmet.title.toString(), \"\\n            \").concat(helmet.meta.toString(), \"\\n            <style>\").concat(css, \"</style>\\n          </head>\\n          <body>\\n            <div id=\\\"root\\\">\").concat(content, \"</div>\\n            <script>\\n              window.context = {\\n                state: \").concat(JSON.stringify(store.getState()), \"\\n              }\\n            </script>\\n            \").concat(bundles.map(function (bundle) {\n    return \"<script src=\\\"\".concat(bundle.file, \"\\\"></script>\");\n  }).join('\\n'), \"\\n            <script src='./index.js'></script>\\n          </body>\\n        </html>\\n        \");\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStore\", function() { return getStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers_Home_store_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Home/store/reducer */ \"./src/containers/Home/store/reducer.js\");\n/* harmony import */ var _components_Header_store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/store/index */ \"./src/components/Header/store/index.js\");\n/* harmony import */ var _containers_Translation_store_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Translation/store/reducer */ \"./src/containers/Translation/store/reducer.js\");\n/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\n\n\n\n\n\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  home: _containers_Home_store_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  header: _components_Header_store_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  translation: _containers_Translation_store_reducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\nvar getStore = function getStore(req) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(Object(_server_request__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req))));\n};\nvar getClientStore = function getClientStore() {\n  var defaultState = window.context.state;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(_client_request__WEBPACK_IMPORTED_MODULE_5__[\"default\"])));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/withStyle.js":
/*!**************************!*\
  !*** ./src/withStyle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (DecoratedComponent, styles) {\n  return (\n    /*#__PURE__*/\n    function (_Component) {\n      _inherits(NewComponent, _Component);\n\n      function NewComponent() {\n        _classCallCheck(this, NewComponent);\n\n        return _possibleConstructorReturn(this, _getPrototypeOf(NewComponent).apply(this, arguments));\n      }\n\n      _createClass(NewComponent, [{\n        key: \"componentWillMount\",\n        value: function componentWillMount() {\n          if (this.props.staticContext) {\n            this.props.staticContext.css.push(styles._getCss());\n          }\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecoratedComponent, this.props);\n        }\n      }]);\n\n      return NewComponent;\n    }(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"])\n  );\n});\n\n//# sourceURL=webpack:///./src/withStyle.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");\n\n//# sourceURL=webpack:///external_%22react-loadable%22?");

/***/ }),

/***/ "react-loadable/webpack":
/*!*****************************************!*\
  !*** external "react-loadable/webpack" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable/webpack\");\n\n//# sourceURL=webpack:///external_%22react-loadable/webpack%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });