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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\r\n  const contact = document.createElement(\"div\");\r\n  contact.setAttribute(\"id\", \"contact\");\r\n  contact.innerHTML = `<h1>Tootsie Roll's</h1>\r\n                        <p>Order Online at :- Zomato/Swiggy</p>\r\n                        <p>Visit us at :- Bandra West Mumbai</p>\r\n                        <p>Contact Us at Email :- tootsie@rolls.com</p>\r\n                        <p>Mobile:- 8888888888</p>\r\n                        <p>Address:- Unknown Streeet,Bandra West,Mumbai - 400052</p>\r\n                        `;\r\n  content.appendChild(contact);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\r\n  const home = document.createElement(\"div\");\r\n  home.setAttribute(\"id\", \"homepage\");\r\n  home.innerHTML = `<h1>Tootsie Roll's</h1>\r\n                        <img src = \"roll.jpg\" alt = \"tasty-roll-image\" width = \"500\" height = \"500\">\r\n                        <p>Now Best Rolls</p>\r\n                        <p>Avalable in your city</p>\r\n                        <p>Bandra West</p>\r\n                        <p>Mumbai</p>\r\n                        <p>Contact:- 8888888888</p>\r\n                        `;\r\n  content.appendChild(home);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\nconst content = document.createElement(\"div\");\r\ndocument.body.appendChild(content);\r\ncontent.setAttribute(\"id\", \"content\");\r\n\r\n\r\n\r\n\r\n\r\n(0,_navbar__WEBPACK_IMPORTED_MODULE_3__.navbar)();\r\nconst homebtn = document.querySelector(\"#homebtn\");\r\nconst menubtn = document.querySelector(\"#menubtn\");\r\nconst contactbtn = document.querySelector(\"#contactbtn\");\r\nonload = (0,_home__WEBPACK_IMPORTED_MODULE_0__.home)();\r\n\r\nfunction showHome() {\r\n  if (content.children[1]) {\r\n    content.removeChild(content.children[1]);\r\n  }\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.home)();\r\n}\r\n\r\nfunction showMenu() {\r\n  if (content.children[1]) {\r\n    content.removeChild(content.children[1]);\r\n  }\r\n  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();\r\n}\r\n\r\nfunction showContact() {\r\n  if (content.children[1]) {\r\n    content.removeChild(content.children[1]);\r\n  }\r\n  (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)();\r\n}\r\n\r\nhomebtn.addEventListener(\"click\", showHome);\r\nmenubtn.addEventListener(\"click\", showMenu);\r\ncontactbtn.addEventListener(\"click\", showContact);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\r\n  const menu = document.createElement(\"div\");\r\n  menu.setAttribute(\"id\", \"menu\");\r\n  menu.innerHTML = `<h1>Menu</h1>\r\n                    <p>Veg Frankie</p>\r\n                    <p>Veg & Cheese Frankie</p>\r\n                    <p>Veg Shezwan Frankie</p>\r\n                    <p>Veg Masala Frankie</p>\r\n                    <p>Veg Masala & Cheese Frankie</p>\r\n                    <p>Veg Paneer Frankie</p>\r\n                    <p>Veg Paneer & Cheese Frankie</p>\r\n                    <p>Chicken Frankie</p>\r\n                    <p>Chicken & Shezwan Frankie</p>\r\n                    <p>Chicken & Cheese Frankie</p>\r\n                    <p>Chicken & Shezwan Cheese Frankie</p>\r\n                    <p>Chicken Masala Frankie</p>\r\n                    <p>Chicken Masala & Cheese Frankie</p>\r\n                    `;\r\n  content.appendChild(menu);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navbar\": () => (/* binding */ navbar)\n/* harmony export */ });\nfunction navbar() {\r\n  const navbar = document.createElement(\"div\");\r\n  navbar.setAttribute(\"id\", \"nav-bar\");\r\n  navbar.innerHTML = `\r\n  <button id=\"homebtn\">Home</button>\r\n  <button id=\"menubtn\">Menu</button>\r\n  <button id=\"contactbtn\">Contact</button>\r\n  `;\r\n  content.append(navbar);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;