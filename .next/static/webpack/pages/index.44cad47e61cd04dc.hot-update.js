"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _style_status_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/status.module.scss */ \"./src/style/status.module.scss\");\n/* harmony import */ var _style_status_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_status_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\nvar _this = undefined;\n\n\n\n\n\n\n// if the proptype of error is true, use the red color,\n// if not use the success color\nvar Status = function(param) {\n    var message = param.message, state = param.state, fill = param.fill, outline = param.outline;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: state === \"error\" ? (_style_status_module_scss__WEBPACK_IMPORTED_MODULE_2___default().error) : \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"/home/seven/Documents/codes/oss/next-status-modal/src/index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            state !== \"error\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsCheck2All, {}, void 0, false, {\n                fileName: \"/home/seven/Documents/codes/oss/next-status-modal/src/index.js\",\n                lineNumber: 13,\n                columnNumber: 28\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdWifiTetheringErrorRounded, {}, void 0, false, {\n                fileName: \"/home/seven/Documents/codes/oss/next-status-modal/src/index.js\",\n                lineNumber: 13,\n                columnNumber: 46\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/seven/Documents/codes/oss/next-status-modal/src/index.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_c = Status;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Status);\n(prop_types__WEBPACK_IMPORTED_MODULE_5___default().Status) = {\n    message: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),\n    status: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)\n};\nvar _c;\n$RefreshReg$(_c, \"Status\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDUztBQUNZO0FBQ0Y7QUFDZ0I7QUFFN0QsdURBQXVEO0FBQ3ZELCtCQUErQjtBQUMvQixJQUFNSyxNQUFNLEdBQUcsZ0JBQXVDO1FBQXBDQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87SUFDN0MscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFSixLQUFLLEtBQUssT0FBTyxHQUFHTCx3RUFBVyxHQUFHLEVBQUU7OzBCQUNsRCw4REFBQ1csR0FBQzswQkFBRVAsT0FBTzs7Ozs7cUJBQUs7WUFDZkMsS0FBSyxLQUFLLE9BQU8saUJBQUcsOERBQUNKLHVEQUFXOzs7O3FCQUFHLGlCQUFHLDhEQUFDQyx1RUFBMkI7Ozs7cUJBQUc7Ozs7OzthQUNsRSxDQUNOO0NBQ0g7QUFQS0MsS0FBQUEsTUFBTTtBQVNaLCtEQUFlQSxNQUFNLEVBQUM7QUFFdEJKLDBEQUFnQixHQUFHO0lBQ2pCSyxPQUFPLEVBQUVMLHFFQUEyQjtJQUNwQ2UsTUFBTSxFQUFFZiwwREFBZ0I7Q0FDekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaW5kZXguanM/YTI5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vc3R5bGUvc3RhdHVzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBCc0NoZWNrMkFsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgTWRXaWZpVGV0aGVyaW5nRXJyb3JSb3VuZGVkIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5cbi8vIGlmIHRoZSBwcm9wdHlwZSBvZiBlcnJvciBpcyB0cnVlLCB1c2UgdGhlIHJlZCBjb2xvcixcbi8vIGlmIG5vdCB1c2UgdGhlIHN1Y2Nlc3MgY29sb3JcbmNvbnN0IFN0YXR1cyA9ICh7IG1lc3NhZ2UsIHN0YXRlLCBmaWxsLCBvdXRsaW5lIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3RhdGUgPT09IFwiZXJyb3JcIiA/IHN0eWxlLmVycm9yIDogXCJcIn0+XG4gICAgICA8cD57bWVzc2FnZX08L3A+XG4gICAgICB7c3RhdGUgIT09IFwiZXJyb3JcIiA/IDxCc0NoZWNrMkFsbCAvPiA6IDxNZFdpZmlUZXRoZXJpbmdFcnJvclJvdW5kZWQgLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0dXM7XG5cbnByb3BUeXBlcy5TdGF0dXMgPSB7XG4gIG1lc3NhZ2U6IHByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3RhdHVzOiBwcm9wVHlwZXMuc3RyaW5nLFxufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInByb3BUeXBlcyIsInN0eWxlIiwiQnNDaGVjazJBbGwiLCJNZFdpZmlUZXRoZXJpbmdFcnJvclJvdW5kZWQiLCJTdGF0dXMiLCJtZXNzYWdlIiwic3RhdGUiLCJmaWxsIiwib3V0bGluZSIsImRpdiIsImNsYXNzTmFtZSIsImVycm9yIiwicCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n"));

/***/ })

});