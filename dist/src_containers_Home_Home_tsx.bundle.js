"use strict";
(self["webpackChunkbradywebsite"] = self["webpackChunkbradywebsite"] || []).push([["src_containers_Home_Home_tsx"],{

/***/ "./src/containers/Home/Home.tsx":
/*!**************************************!*\
  !*** ./src/containers/Home/Home.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/containers/Home/styles.tsx");


var Home = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.homeContainer, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.introduce, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.introduceTitle, null, "Hi, I'm Brady"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.jobtitle, null, "Frontend Developer"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.introduceContent, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, deserunt amet? Nobis quo similique dolorum, modi iste obcaecati culpa, molestiae eum veniam, iure magnam impedit repellendus quidem ullam quisquam porro."),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.buttonGroup, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.homeButton, null, "Hire Me"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.homeButton, null, "Let's Talk"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ "./src/containers/Home/styles.tsx":
/*!****************************************!*\
  !*** ./src/containers/Home/styles.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonGroup": () => (/* binding */ buttonGroup),
/* harmony export */   "homeButton": () => (/* binding */ homeButton),
/* harmony export */   "homeContainer": () => (/* binding */ homeContainer),
/* harmony export */   "homeImage": () => (/* binding */ homeImage),
/* harmony export */   "introduce": () => (/* binding */ introduce),
/* harmony export */   "introduceContent": () => (/* binding */ introduceContent),
/* harmony export */   "introduceTitle": () => (/* binding */ introduceTitle),
/* harmony export */   "jobtitle": () => (/* binding */ jobtitle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_k6_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/static/k6.jpg */ "./src/static/k6.jpg");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var showRight = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  100% {\n    width: 0;\n  }\n"], ["\n  100% {\n    width: 0;\n  }\n"])));
var homeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0 10%;\n  height: 100vh;\n  background: url(", ") no-repeat;\n  background-size: cover;\n  // background-position: center;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0 10%;\n  height: 100vh;\n  background: url(", ") no-repeat;\n  background-size: cover;\n  // background-position: center;\n"])), _static_k6_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
var introduce = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  // border: 1px solid white;\n  max-width: 600px;\n"], ["\n  // border: 1px solid white;\n  max-width: 600px;\n"])));
var introduceTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  @import url(\"https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,600&display=swap\");\n  font-family: \"Rubik\", sans-serif;\n  font-size: 56px;\n  font-weight: 700;\n  line-height: 1.2;\n  position: relative;\n\n  &:before {\n    content: \"\";\n    position absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background: #222224;\n    animation: ", " 1s ease forwards;\n    animation-delay: 1s;\n  }\n"], ["\n  @import url(\"https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,600&display=swap\");\n  font-family: \"Rubik\", sans-serif;\n  font-size: 56px;\n  font-weight: 700;\n  line-height: 1.2;\n  position: relative;\n\n  &:before {\n    content: \"\";\n    position absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background: #222224;\n    animation: ", " 1s ease forwards;\n    animation-delay: 1s;\n  }\n"])), showRight);
var introduceContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: 20px 0 40px;\n  font-size: 16px;\n"], ["\n  margin: 20px 0 40px;\n  font-size: 16px;\n"])));
var jobtitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  @import url(\"https://fonts.googleapis.com/css2?family=Bitter&family=Rubik:ital,wght@1,600&display=swap\");\n  font-family: \"Bitter\", serif;\n  font-family: \"Rubik\", sans-serif;\n  font-size: 32px;\n  font-weight: 700;\n  color: #00abf0;\n"], ["\n  @import url(\"https://fonts.googleapis.com/css2?family=Bitter&family=Rubik:ital,wght@1,600&display=swap\");\n  font-family: \"Bitter\", serif;\n  font-family: \"Rubik\", sans-serif;\n  font-size: 32px;\n  font-weight: 700;\n  color: #00abf0;\n"])));
var homeImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  // \u5982\u679C\u6C92\u6709\u8A2D\u5B9A\u9019\u500Bimage\u6703\u76F4\u63A5\u7167\u539F\u6BD4\u4F8B\u5C07\u756B\u9762\u6490\u958B\n  max-height: 100%;\n  max-width: 100%;\n"], ["\n  // \u5982\u679C\u6C92\u6709\u8A2D\u5B9A\u9019\u500Bimage\u6703\u76F4\u63A5\u7167\u539F\u6BD4\u4F8B\u5C07\u756B\u9762\u6490\u958B\n  max-height: 100%;\n  max-width: 100%;\n"])));
var buttonGroup = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-item: center;\n  height: 50px;\n  width: 345px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-item: center;\n  height: 50px;\n  width: 345px;\n"])));
var homeButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: 150px;\n  height: 100%;\n  background: #00abf0;\n  border: 2px solid #00abf0;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #081b29;\n  font-weight: 600;\n  letter-spacing: 1px;\n\n  &:nth-child(2) {\n    background: transparent;\n    color: white;\n  }\n"], ["\n  width: 150px;\n  height: 100%;\n  background: #00abf0;\n  border: 2px solid #00abf0;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #081b29;\n  font-weight: 600;\n  letter-spacing: 1px;\n\n  &:nth-child(2) {\n    background: transparent;\n    color: white;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;


/***/ }),

/***/ "./src/static/k6.jpg":
/*!***************************!*\
  !*** ./src/static/k6.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/k6.7fb01e64f70fac090469711f07ac1769.jpg");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbnRhaW5lcnNfSG9tZV9Ib21lX3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUlHO0FBRWxDLElBQU0sSUFBSSxHQUFHO0lBQ1gsT0FBTyxDQUNMLGlEQUFDLDJDQUFjO1FBR2IsaURBQUMsa0RBQW1CO1lBQ2xCLGlEQUFDLDhDQUFlO2dCQUNkLGlEQUFDLG1EQUFvQix3QkFBcUM7Z0JBQzFELGlEQUFDLDZDQUFjLDZCQUFvQztnQkFDbkQsaURBQUMscURBQXNCLG9PQUtFO2dCQUN6QixpREFBQyxnREFBaUI7b0JBQ2hCLGlEQUFDLCtDQUFnQixrQkFBMkI7b0JBQzVDLGlEQUFDLCtDQUFnQixxQkFBOEIsQ0FDN0IsQ0FDSixDQUNFLENBQ1AsQ0FDbEIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCa0M7QUFDbEI7QUFFcEMsSUFBTSxTQUFTLEdBQUcsNERBQVMsdUlBSTFCLEtBQUM7QUFFSyxJQUFNLGFBQWEsR0FBRyw2REFBVSw2WkFNbkIsRUFBSyw4RUFHeEIsS0FIbUIsc0RBQUssQ0FHeEIsQ0FBQztBQUVLLElBQU0sU0FBUyxHQUFHLDZEQUFVLG1MQUdsQyxLQUFDO0FBRUssSUFBTSxjQUFjLEdBQUcsNERBQVMsdzRCQWdCdEIsRUFBUyxxREFHekIsS0FIZ0IsU0FBUyxDQUd6QixDQUFDO0FBRUssSUFBTSxnQkFBZ0IsR0FBRywyREFBUSxtS0FHdkMsS0FBQztBQUVLLElBQU0sUUFBUSxHQUFHLDREQUFTLHFqQkFPaEMsS0FBQztBQUVLLElBQU0sU0FBUyxHQUFHLDZEQUFVLHFhQUlsQyxLQUFDO0FBRUssSUFBTSxXQUFXLEdBQUcsNkRBQVUsdVNBTXBDLEtBQUM7QUFFSyxJQUFNLFVBQVUsR0FBRyxnRUFBYSx5bUJBZXRDLEtBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkYsaUVBQWUscUJBQXVCLG1EQUFtRCIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYWR5d2Vic2l0ZS8uL3NyYy9jb250YWluZXJzL0hvbWUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vYnJhZHl3ZWJzaXRlLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9zdHlsZXMudHN4Iiwid2VicGFjazovL2JyYWR5d2Vic2l0ZS8uL3NyYy9zdGF0aWMvazYuanBnIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9MYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBJbnRyb2R1Y2UgZnJvbSBcIi4uL0ludHJvZHVjZS9JbnRyb2R1Y2VcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL0xvYWRpbmcvTG9hZGluZ1wiO1xyXG5pbXBvcnQgKiBhcyBTdHlsZSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IGtvYmUxIGZyb20gXCJAL3N0YXRpYy8xLmpwZ1wiO1xyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHsvKiA8TG9hZGluZz48L0xvYWRpbmc+ICovfVxyXG4gICAgICB7LyogPEludHJvZHVjZT48L0ludHJvZHVjZT4gKi99XHJcbiAgICAgIDxTdHlsZS5ob21lQ29udGFpbmVyPlxyXG4gICAgICAgIDxTdHlsZS5pbnRyb2R1Y2U+XHJcbiAgICAgICAgICA8U3R5bGUuaW50cm9kdWNlVGl0bGU+SGksIEknbSBCcmFkeTwvU3R5bGUuaW50cm9kdWNlVGl0bGU+XHJcbiAgICAgICAgICA8U3R5bGUuam9idGl0bGU+RnJvbnRlbmQgRGV2ZWxvcGVyPC9TdHlsZS5qb2J0aXRsZT5cclxuICAgICAgICAgIDxTdHlsZS5pbnRyb2R1Y2VDb250ZW50PlxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdWxwYSxcclxuICAgICAgICAgICAgZGVzZXJ1bnQgYW1ldD8gTm9iaXMgcXVvIHNpbWlsaXF1ZSBkb2xvcnVtLCBtb2RpIGlzdGUgb2JjYWVjYXRpXHJcbiAgICAgICAgICAgIGN1bHBhLCBtb2xlc3RpYWUgZXVtIHZlbmlhbSwgaXVyZSBtYWduYW0gaW1wZWRpdCByZXBlbGxlbmR1cyBxdWlkZW1cclxuICAgICAgICAgICAgdWxsYW0gcXVpc3F1YW0gcG9ycm8uXHJcbiAgICAgICAgICA8L1N0eWxlLmludHJvZHVjZUNvbnRlbnQ+XHJcbiAgICAgICAgICA8U3R5bGUuYnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgIDxTdHlsZS5ob21lQnV0dG9uPkhpcmUgTWU8L1N0eWxlLmhvbWVCdXR0b24+XHJcbiAgICAgICAgICAgIDxTdHlsZS5ob21lQnV0dG9uPkxldCdzIFRhbGs8L1N0eWxlLmhvbWVCdXR0b24+XHJcbiAgICAgICAgICA8L1N0eWxlLmJ1dHRvbkdyb3VwPlxyXG4gICAgICAgIDwvU3R5bGUuaW50cm9kdWNlPlxyXG4gICAgICA8L1N0eWxlLmhvbWVDb250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBrb2JlMSBmcm9tIFwiQC9zdGF0aWMvazYuanBnXCI7XHJcblxyXG5jb25zdCBzaG93UmlnaHQgPSBrZXlmcmFtZXNgXHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgaG9tZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDEwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHVybCgke2tvYmUxfSkgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGludHJvZHVjZSA9IHN0eWxlZC5kaXZgXHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnRyb2R1Y2VUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWs6aXRhbCx3Z2h0QDEsNjAwJmRpc3BsYXk9c3dhcFwiKTtcclxuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb24gYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjIyNDtcclxuICAgIGFuaW1hdGlvbjogJHtzaG93UmlnaHR9IDFzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnRyb2R1Y2VDb250ZW50ID0gc3R5bGVkLnBgXHJcbiAgbWFyZ2luOiAyMHB4IDAgNDBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3Qgam9idGl0bGUgPSBzdHlsZWQuaDNgXHJcbiAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJpdHRlciZmYW1pbHk9UnViaWs6aXRhbCx3Z2h0QDEsNjAwJmRpc3BsYXk9c3dhcFwiKTtcclxuICBmb250LWZhbWlseTogXCJCaXR0ZXJcIiwgc2VyaWY7XHJcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzAwYWJmMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBob21lSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIC8vIOWmguaenOaykuacieioreWumumAmeWAi2ltYWdl5pyD55u05o6l54Wn5Y6f5q+U5L6L5bCH55Wr6Z2i5pKQ6ZaLXHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgYnV0dG9uR3JvdXAgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW06IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDM0NXB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzAwYWJmMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDBhYmYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMwODFiMjk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cclxuICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbmA7XHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvazYuN2ZiMDFlNjRmNzBmYWMwOTA0Njk3MTFmMDdhYzE3NjkuanBnXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9