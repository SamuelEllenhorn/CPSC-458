"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/date */ \"./components/date.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(param) {\n    var postData = param.postData;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\CPSC458\\\\multiPageBlog\\\\nextjs-blog\\\\pages\\\\posts\\\\[id].js\",\n            lineNumber: 10,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\CPSC458\\\\multiPageBlog\\\\nextjs-blog\\\\pages\\\\posts\\\\[id].js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\CPSC458\\\\multiPageBlog\\\\nextjs-blog\\\\pages\\\\posts\\\\[id].js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: postData.title\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"article\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\CPSC458\\\\multiPageBlog\\\\nextjs-blog\\\\pages\\\\posts\\\\[id].js\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().headingXl),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\CPSC458\\\\multiPageBlog\\\\nextjs-blog\\\\pages\\\\posts\\\\[id].js\",\n                            lineNumber: 15,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: postData.title\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightText),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\CPSC458\\\\multiPageBlog\\\\nextjs-blog\\\\pages\\\\posts\\\\[id].js\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_date__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            dateString: postData.date,\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\CPSC458\\\\multiPageBlog\\\\nextjs-blog\\\\pages\\\\posts\\\\[id].js\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        dangerouslySetInnerHTML: {\n                            __html: postData.contentHtml\n                        },\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Samuel\\\\Desktop\\\\CPSC458\\\\multiPageBlog\\\\nextjs-blog\\\\pages\\\\posts\\\\[id].js\",\n                            lineNumber: 19,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUVoQjtBQUNZO0FBQ2M7O0FBR3ZDLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLEtBQVksRUFBRSxDQUFDO1FBQWJDLFFBQVEsR0FBVixLQUFZLENBQVZBLFFBQVE7SUFDckMsTUFBTSx1RUFDSEwsMERBQU07Ozs7Ozs7O2lGQUNKQyxrREFBSTs7Ozs7OzsrRkFDRkssQ0FBSzs7Ozs7Ozs4QkFBRUQsUUFBUSxDQUFDQyxLQUFLOzs7a0ZBRXZCQyxDQUFPOzs7Ozs7Ozt5RkFDTEMsQ0FBRTt3QkFBQ0MsU0FBUyxFQUFFTiwyRUFBb0I7Ozs7Ozs7a0NBQUdFLFFBQVEsQ0FBQ0MsS0FBSzs7eUZBQ25ESyxDQUFHO3dCQUFDRixTQUFTLEVBQUVOLDJFQUFvQjs7Ozs7Ozt1R0FDakNELHdEQUFJOzRCQUFDVyxVQUFVLEVBQUVSLFFBQVEsQ0FBQ1MsSUFBSTs7Ozs7Ozs7O3lGQUVoQ0gsQ0FBRzt3QkFBQ0ksdUJBQXVCLEVBQUUsQ0FBQzs0QkFBQ0MsTUFBTSxFQUFFWCxRQUFRLENBQUNZLFdBQVc7d0JBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FBSXRFLENBQUM7S0FmdUJiLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW2lkXS5qcz83OTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7IGdldEFsbFBvc3RJZHMsIGdldFBvc3REYXRhIH0gZnJvbSAnLi4vLi4vbGliL3Bvc3RzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBEYXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGF0ZSdcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3REYXRhIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntwb3N0RGF0YS50aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ1hsfT57cG9zdERhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saWdodFRleHR9PlxyXG4gICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17cG9zdERhdGEuZGF0ZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcGF0aHMgPSBnZXRBbGxQb3N0SWRzKClcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YShwYXJhbXMuaWQpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3REYXRhXHJcbiAgICB9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkxheW91dCIsIkhlYWQiLCJEYXRlIiwidXRpbFN0eWxlcyIsIlBvc3QiLCJwb3N0RGF0YSIsInRpdGxlIiwiYXJ0aWNsZSIsImgxIiwiY2xhc3NOYW1lIiwiaGVhZGluZ1hsIiwiZGl2IiwibGlnaHRUZXh0IiwiZGF0ZVN0cmluZyIsImRhdGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnRlbnRIdG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ })

});