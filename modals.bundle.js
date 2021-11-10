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

/***/ "./src/js/modals.js":
/*!**************************!*\
  !*** ./src/js/modals.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet calcElement;\n\nconst calc = () => {\n  calcElement = document.createElement('div');\n  calcElement.className = 'calc';\n};\n\nconst modal = (word, secondBtn, complete) => {\n  const container = document.querySelector('.container');\n\n  const m = document.createElement('div');\n  m.className = 'modal';\n  m.innerHTML = `<h3>${word}</h3>`;\n\n  const firstBtnElement = document.createElement('button');\n  firstBtnElement.innerHTML = `<i class=\"fas fa-sync-alt></i> Rejouer`;\n  firstBtnElement.className = 'btn continue';\n  firstBtnElement.addEventListener('click', () => {\n    try {\n    } catch (e) {\n      console.error(e);\n    }\n  });\n\n  const secondBtnElement = document.createElement('button');\n  secondBtnElement.innerHTML = `<i class=\"${\n    secondBtn === 'save' ? 'far fa-save' : 'fas fa-arrow-right'\n  }\"></i> ${secondBtn === 'save' ? 'Sauvegarder' : 'Continuer'}`;\n  secondBtnElement.className = 'btn primary';\n  secondBtnElement.addEventListener('click', () => {\n    try {\n      calcElement.remove();\n      container.classList.remove('blur-effect');\n    } catch (e) {\n      console.error(e);\n    }\n  });\n\n  const btnContainer = document.createElement('div');\n  btnContainer.className = 'btn-container';\n\n  const btnContainerFlex = document.createElement('div');\n  btnContainerFlex.className = 'btn-container-flex';\n\n  if (complete) {\n    btnContainer.append(firstBtnElement, secondBtnElement);\n  } else {\n    btnContainerFlex.appendChild(secondBtnElement);\n  }\n\n  /* window.addEventListener('click', (e) => {\n    e.stopPropagation();\n    calcElement.remove();\n  }); */\n\n  m.appendChild(complete ? btnContainer : btnContainerFlex);\n\n  container.classList.add('blur-effect');\n\n  calcElement.appendChild(m);\n  document.body.appendChild(calcElement);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((word) => {\n  calc();\n  modal(word);\n});\n\n\n//# sourceURL=webpack://puissance-4/./src/js/modals.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/modals.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;