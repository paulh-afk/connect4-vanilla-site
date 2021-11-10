/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/img/fRouge.jpg */ \"./src/img/fRouge.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/img/fVerte.jpg */ \"./src/img/fVerte.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n:root {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  font-size: 1.6rem;\\n  color: #333;\\n  font-family: 'Lato', sans-serif;\\n  height: 100vh;\\n  position: relative;\\n}\\n\\nh1,\\nh2,\\nh3 {\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\n.blur-effect {\\n  filter: blur(0.7rem);\\n}\\n\\n.btn {\\n  cursor: pointer;\\n  padding: 2rem 4rem;\\n  border: none;\\n  border-radius: 0.4rem;\\n  color: #fff;\\n  font-size: 1.6rem;\\n}\\n\\n.primary {\\n  background-color: #3498db;\\n}\\n\\n.continue {\\n  background-color: #2ecc71;\\n}\\n\\ni.far,\\ni.fas {\\n  font-size: 2rem;\\n}\\n\\n.container {\\n  height: 100vh;\\n  z-index: 1;\\n}\\n\\nheader {\\n  height: 10%;\\n  padding: 3rem;\\n  text-align: center;\\n  text-decoration: underline;\\n}\\n\\nmain {\\n  height: 90%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.game {\\n  display: grid;\\n  grid-template-columns: 10rem 10rem 10rem 10rem 10rem 10rem 10rem;\\n  grid-template-rows: 2rem 10rem 10rem 10rem 10rem 10rem 10rem;\\n  grid-gap: 0.2rem;\\n}\\n\\n.game .start-piece {\\n  height: 2rem;\\n  background-size: cover;\\n}\\n\\n.game .case {\\n  background: #000;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.case .piece {\\n  margin: auto;\\n  background: #fff;\\n  border-radius: 50%;\\n  height: 6rem;\\n  width: 6rem;\\n}\\n\\n.piece.red {\\n  background: #e74c3c;\\n}\\n\\n.piece.green {\\n  background: #2ecc71;\\n}\\n\\n.red-turn {\\n  background: center no-repeat url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n.green-turn {\\n  background: center no-repeat url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n.red {\\n  font-weight: 700;\\n  color: #e74c3c;\\n}\\n\\n.green {\\n  font-weight: 700;\\n  color: #2ecc71;\\n}\\n\\n.calc {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 100vh;\\n  width: 100vw;\\n  z-index: 2;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.modal {\\n  padding: 10rem;\\n  height: 40rem;\\n  width: 60rem;\\n  border-radius: 3rem;\\n  background-color: #fff;\\n}\\n\\n.modal > h3 {\\n  text-align: center;\\n  font-size: 2.5rem;\\n  padding-bottom: 5rem;\\n}\\n\\n.modal .btn-container {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.modal .btn-container-flex {\\n  display: flex;\\n  justify-content: center;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://puissance-4/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://puissance-4/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://puissance-4/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://puissance-4/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://puissance-4/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://puissance-4/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://puissance-4/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://puissance-4/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://puissance-4/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://puissance-4/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://puissance-4/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals */ \"./src/js/modals.js\");\n/* harmony import */ var _img_connect4_icon_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/connect4-icon.gif */ \"./src/img/connect4-icon.gif\");\n\n\n\n\n// initial animated icon\nconst fav = document.querySelector('link[rel=\"icon\"]');\nfav.href = _img_connect4_icon_gif__WEBPACK_IMPORTED_MODULE_2__;\n\nconst columnElements = document.querySelectorAll('.start-piece');\nconst pieceElements = document.querySelectorAll('.piece');\n\nlet pieceArr = [];\n\npieceElements.forEach((elem) => {\n  pieceArr.push([Number(elem.attributes.columnId.value), Number(elem.attributes.rowId.value), 0]);\n});\nconst nbPieceArr = [0, 0, 0, 0, 0, 0, 0];\n// nombre de pièces dans le tableau ex: [1, 0, 4, 3]\n\n// dry functions required\nconst columnsPiecesArr = () => {\n  const newArr = [[], [], [], [], [], [], []];\n  let col = 0;\n\n  for (let i = 0; i < newArr.length * 6; i++) {\n    if (col === newArr.length) {\n      col = 0;\n    }\n    newArr[col].push(pieceArr[i]);\n\n    col++;\n  }\n  return newArr;\n};\n\nconst rowsPiecesArr = () => {\n  const newArr = [[], [], [], [], [], []];\n  let row = 0;\n\n  for (let i = 0; i < newArr.length * 7; i++) {\n    if (!(i % 7)) {\n      row++;\n    }\n    newArr[row - 1].push(pieceArr[i]);\n  }\n  return newArr;\n};\n\nconst diagonalsPiecesArr1 = () => {\n  const newArr = [[], [], [], [], [], []];\n  let row = 2;\n  let col = 0;\n  // revoir fonction pour faire fonction dry\n\n  for (let i = 0; i < 4; i++) {\n    newArr[0].push(columnsPiecesArr()[col][row]);\n    row++;\n    col++;\n  }\n\n  row = 1;\n  col = 0;\n  for (let i = 0; i < 5; i++) {\n    newArr[1].push(columnsPiecesArr()[col][row]);\n    row++;\n    col++;\n  }\n\n  row = 0;\n  col = 0;\n  for (let i = 0; i < 6; i++) {\n    newArr[2].push(columnsPiecesArr()[col][row]);\n    row++;\n    col++;\n  }\n\n  row = 0;\n  col = 1;\n  for (let i = 0; i < 6; i++) {\n    newArr[3].push(columnsPiecesArr()[col][row]);\n    row++;\n    col++;\n  }\n\n  row = 0;\n  col = 2;\n  for (let i = 0; i < 5; i++) {\n    newArr[4].push(columnsPiecesArr()[col][row]);\n    row++;\n    col++;\n  }\n\n  row = 0;\n  col = 3;\n  for (let i = 0; i < 4; i++) {\n    newArr[5].push(columnsPiecesArr()[col][row]);\n    row++;\n    col++;\n  }\n\n  return newArr;\n};\n\nconst diagonalsPiecesArr2 = () => {\n  const newArr = [[], [], [], [], [], []];\n  let row = 2;\n  let col = 6;\n  // fonction dry\n\n  for (let i = 0; i < 4; i++) {\n    newArr[0].push(columnsPiecesArr()[col][row]);\n    row++;\n    col--;\n  }\n\n  row = 1;\n  col = 6;\n  for (let i = 0; i < 5; i++) {\n    newArr[1].push(columnsPiecesArr()[col][row]);\n    row++;\n    col--;\n  }\n\n  row = 0;\n  col = 6;\n  for (let i = 0; i < 6; i++) {\n    newArr[2].push(columnsPiecesArr()[col][row]);\n    row++;\n    col--;\n  }\n\n  row = 0;\n  col = 5;\n  for (let i = 0; i < 6; i++) {\n    newArr[3].push(columnsPiecesArr()[col][row]);\n    row++;\n    col--;\n  }\n\n  row = 0;\n  col = 4;\n  for (let i = 0; i < 5; i++) {\n    newArr[4].push(columnsPiecesArr()[col][row]);\n    row++;\n    col--;\n  }\n\n  row = 0;\n  col = 3;\n  for (let i = 0; i < 4; i++) {\n    newArr[5].push(columnsPiecesArr()[col][row]);\n    row++;\n    col--;\n  }\n\n  return newArr;\n};\n\nlet playerTurn = 1;\n// 1 : vert\n// 2 : rouge\n\nconst winCondition = () => {\n  let winConditionVertical = 0;\n  let winConditionHorizontal = 0;\n  let winConditionDiagonal1 = 0;\n  let winConditionDiagonal2 = 0;\n\n  columnsPiecesArr().map((columnArr) => {\n    let ite = 0;\n    columnArr.map((arr) => {\n      ite += 1;\n      if (ite === 6) {\n        winConditionVertical = 0;\n        ite = 0;\n      }\n      if (arr[2] === playerTurn) {\n        winConditionVertical += 1;\n        if (winConditionVertical === 4) {\n          (0,_modals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n            `Le joueur ${\n              playerTurn === 1\n                ? '<span class=\"red\">Rouge</span>'\n                : '<span class=\"green\">Vert</span>'\n            } gagne la partie avec un alignement vertical !`,\n            'save',\n            0,\n          );\n        }\n      } else {\n        winConditionVertical = 0;\n      }\n    });\n  });\n\n  rowsPiecesArr().map((rowArr) => {\n    let ite = 0;\n    rowArr.map((arr) => {\n      ite += 1;\n      if (ite === 7) {\n        winConditionHorizontal = 0;\n        ite = 0;\n      }\n      if (arr[2] === playerTurn) {\n        winConditionHorizontal += 1;\n\n        if (winConditionHorizontal === 4) {\n          (0,_modals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n            `Le joueur ${\n              playerTurn === 1\n                ? '<span class=\"red\">Rouge</span>'\n                : '<span class=\"green\">Vert</span>'\n            } gagne la partie avec un alignement horizontal !`,\n            'save',\n            1,\n          );\n        }\n      } else {\n        winConditionHorizontal = 0;\n      }\n    });\n  });\n\n  diagonalsPiecesArr1().map((diagArr) => {\n    diagArr.map((arr) => {\n      if (arr[2] === playerTurn) {\n        winConditionDiagonal1 += 1;\n        if (winConditionDiagonal1 === 4) {\n          (0,_modals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n            `Le joueur ${\n              playerTurn === 1\n                ? '<span class=\"red\">Rouge</span>'\n                : '<span class=\"green\">Vert</span>'\n            } gagne la partie avec un alignement diagonale !`,\n            'save',\n            0,\n          );\n        }\n      } else {\n        winConditionDiagonal1 = 0;\n      }\n    });\n  });\n\n  diagonalsPiecesArr2().map((diagArr) => {\n    diagArr.map((arr) => {\n      if (arr[2] === playerTurn) {\n        winConditionDiagonal2 += 1;\n        if (winConditionDiagonal2 === 4) {\n          (0,_modals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n            `Le joueur ${\n              playerTurn === 1\n                ? '<span class=\"red\">Rouge</span>'\n                : '<span class=\"green\">Vert</span>'\n            } gagne la partie avec un alignement diagonale !`,\n            'save',\n            0,\n          );\n        }\n      } else {\n        winConditionDiagonal2 = 0;\n      }\n    });\n  });\n};\n\nconst changeCSSClass = () => {\n  columnElements.forEach((column) => {\n    if (playerTurn === 2) {\n      column.classList.add('red-turn');\n      column.classList.remove('green-turn');\n    } else {\n      column.classList.add('green-turn');\n      column.classList.remove('red-turn');\n    }\n  });\n};\n\nconst displayPiece = (column, row) => {\n  pieceElements.forEach((piece) => {\n    const { attributes } = piece;\n    if (\n      attributes.columnId.value === column.toString() &&\n      attributes.rowId.value === row.toString()\n    ) {\n      attributes.class.value += playerTurn === 1 ? ' red' : ' green';\n    }\n  });\n};\n\nconst changePlayerTurn = () => {\n  if (playerTurn === 1) {\n    playerTurn = 2;\n  } else {\n    playerTurn = 1;\n  }\n};\n\nconst addPiece = (column) => {\n  let max;\n\n  if (nbPieceArr[column - 1] === 6) {\n    (0,_modals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Vous ne pouvez pas ajouter de pièce ici !', '', true);\n    // openmodal de réinitialisation du jeu ou annuler le coup,\n    // second paramètre contient le texte à afficher dans les boutons\n  }\n\n  nbPieceArr[column - 1] += 1;\n\n  if (nbPieceArr.join('') === '6666666') {\n    (0,_modals__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Vous avez remplit de pièces tout le tableau !', '', true);\n    return null;\n  }\n\n  if (columnsPiecesArr()[column - 1][nbPieceArr[column - 1] - 1] != undefined) {\n    columnsPiecesArr()[column - 1][nbPieceArr[column - 1] - 1][2] = playerTurn;\n    max = false;\n  } else {\n    max = true;\n  }\n  const row = nbPieceArr[column - 1];\n\n  changeCSSClass();\n  winCondition();\n  displayPiece(column, row);\n  if (!max) {\n    changePlayerTurn();\n  }\n};\n\ncolumnElements.forEach((column) => {\n  column.addEventListener('click', (e) => {\n    const { value } = e.target.attributes.columnId;\n\n    addPiece(Number(value));\n  });\n});\n\n\n//# sourceURL=webpack://puissance-4/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modals.js":
/*!**************************!*\
  !*** ./src/js/modals.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet calcElement;\n\nconst calc = () => {\n  calcElement = document.createElement('div');\n  calcElement.className = 'calc';\n};\n\nconst modal = (word, secondBtn, complete) => {\n  const container = document.querySelector('.container');\n\n  const m = document.createElement('div');\n  m.className = 'modal';\n  m.innerHTML = `<h3>${word}</h3>`;\n\n  const firstBtnElement = document.createElement('button');\n  firstBtnElement.innerHTML = `<i class=\"fas fa-sync-alt></i> Rejouer`;\n  firstBtnElement.className = 'btn continue';\n  firstBtnElement.addEventListener('click', () => {\n    try {\n    } catch (e) {\n      console.error(e);\n    }\n  });\n\n  const secondBtnElement = document.createElement('button');\n  secondBtnElement.innerHTML = `<i class=\"${\n    secondBtn === 'save' ? 'far fa-save' : 'fas fa-arrow-right'\n  }\"></i> ${secondBtn === 'save' ? 'Sauvegarder' : 'Continuer'}`;\n  secondBtnElement.className = 'btn primary';\n  secondBtnElement.addEventListener('click', () => {\n    try {\n      calcElement.remove();\n      container.classList.remove('blur-effect');\n    } catch (e) {\n      console.error(e);\n    }\n  });\n\n  const btnContainer = document.createElement('div');\n  btnContainer.className = 'btn-container';\n\n  const btnContainerFlex = document.createElement('div');\n  btnContainerFlex.className = 'btn-container-flex';\n\n  if (complete) {\n    btnContainer.append(firstBtnElement, secondBtnElement);\n  } else {\n    btnContainerFlex.appendChild(secondBtnElement);\n  }\n\n  /* window.addEventListener('click', (e) => {\n    e.stopPropagation();\n    calcElement.remove();\n  }); */\n\n  m.appendChild(complete ? btnContainer : btnContainerFlex);\n\n  container.classList.add('blur-effect');\n\n  calcElement.appendChild(m);\n  document.body.appendChild(calcElement);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((word) => {\n  calc();\n  modal(word);\n});\n\n\n//# sourceURL=webpack://puissance-4/./src/js/modals.js?");

/***/ }),

/***/ "./src/img/connect4-icon.gif":
/*!***********************************!*\
  !*** ./src/img/connect4-icon.gif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8ebcef284f41be5d094e.gif\";\n\n//# sourceURL=webpack://puissance-4/./src/img/connect4-icon.gif?");

/***/ }),

/***/ "./src/img/fRouge.jpg":
/*!****************************!*\
  !*** ./src/img/fRouge.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d56580623ec584dabd4b.jpg\";\n\n//# sourceURL=webpack://puissance-4/./src/img/fRouge.jpg?");

/***/ }),

/***/ "./src/img/fVerte.jpg":
/*!****************************!*\
  !*** ./src/img/fVerte.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bc01860187fa377916e3.jpg\";\n\n//# sourceURL=webpack://puissance-4/./src/img/fVerte.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;