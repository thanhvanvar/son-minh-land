"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/[contentId]",{

/***/ "./pages/admin/user/Login.tsx":
/*!************************************!*\
  !*** ./pages/admin/user/Login.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/auth-ui-react */ \"./node_modules/@supabase/auth-ui-react/dist/index.es.js\");\n/* harmony import */ var _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-ui-shared */ \"./node_modules/@supabase/auth-ui-shared/dist/index.mjs\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Login() {\n    _s();\n    const supabase = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.useSupabaseClient)();\n    const user = supabase.useUser();\n    console.log(user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto md:w-[1170px] p-2 md:p-6 justify-center \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-12 gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-3xl font-bold text-center\",\n                            children: \"Đăng nhập\"\n                        }, void 0, false, {\n                            fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/user/Login.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/user/Login.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-12 flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[300px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_4__.Auth, {\n                                supabaseClient: supabase,\n                                providers: [],\n                                appearance: {\n                                    theme: _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__.ThemeSupa\n                                },\n                                theme: \"light\",\n                                localization: {\n                                    variables: {\n                                        sign_in: {\n                                            email_label: \"Email\",\n                                            password_label: \"Mật khẩu\",\n                                            email_input_placeholder: \"Địa chỉ email của bạn\",\n                                            password_input_placeholder: \"Mật khẩu của bạn\",\n                                            button_label: \"Đăng nhập\",\n                                            loading_button_label: \"Đăng nhập...\"\n                                        },\n                                        sign_up: {\n                                            email_label: \"Email\",\n                                            password_label: \"Mật khẩu\",\n                                            email_input_placeholder: \"Địa chỉ email của bạn\",\n                                            password_input_placeholder: \"Mật khẩu của bạn\",\n                                            link_text: \"Bạn chưa c\\xf3 t\\xe0i khoản? Đăng k\\xfd\",\n                                            button_label: \"Đăng k\\xfd\",\n                                            loading_button_label: \"Đăng k\\xfd...\"\n                                        },\n                                        magic_link: {\n                                            link_text: \"Đ\\xe3 c\\xf3 t\\xe0i khoản? Đăng nhập\"\n                                        },\n                                        forgotten_password: {\n                                            email_label: \"Email\",\n                                            password_label: \"Mật khẩu\",\n                                            email_input_placeholder: \"Địa chỉ email của bạn\",\n                                            button_label: \"Đặt lại mật khẩu\"\n                                        }\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/user/Login.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/user/Login.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/user/Login.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/user/Login.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/user/Login.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Login, \"xG9vA8JGoO0DYuRHICgzpvTZuIU=\", true, function() {\n    return [\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.useSupabaseClient\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi91c2VyL0xvZ2luLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNKO0FBQ007QUFDWTtBQUVsRCxTQUFTSTs7SUFDdEIsTUFBTUMsV0FBV0YsK0VBQWlCQTtJQUNsQyxNQUFNRyxPQUFPRCxTQUFTRSxPQUFPO0lBQzdCQyxRQUFRQyxHQUFHLENBQUNIO0lBRVoscUJBQ0U7a0JBQ0UsNEVBQUNJO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVk7a0NBQ2YsNEVBQUNDOzRCQUFFRCxXQUFVO3NDQUFpQzs7Ozs7Ozs7Ozs7a0NBRWhELDhEQUFDRDt3QkFBSUMsV0FBWTtrQ0FDZiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNWLHlEQUFJQTtnQ0FDSFksZ0JBQWdCUjtnQ0FDaEJTLFdBQVcsRUFBRTtnQ0FDYkMsWUFBWTtvQ0FBRUMsT0FBT2QsK0RBQVNBO2dDQUFDO2dDQUMvQmMsT0FBTTtnQ0FDTkMsY0FBYztvQ0FDWkMsV0FBVzt3Q0FDVEMsU0FBUzs0Q0FDUEMsYUFBYTs0Q0FDYkMsZ0JBQWdCOzRDQUNoQkMseUJBQXlCOzRDQUN6QkMsNEJBQTRCOzRDQUM1QkMsY0FBYzs0Q0FDZEMsc0JBQXNCO3dDQUN4Qjt3Q0FDQUMsU0FBUzs0Q0FDUE4sYUFBYTs0Q0FDYkMsZ0JBQWdCOzRDQUNoQkMseUJBQXlCOzRDQUN6QkMsNEJBQTRCOzRDQUM1QkksV0FBVzs0Q0FDWEgsY0FBYzs0Q0FDZEMsc0JBQXNCO3dDQUN4Qjt3Q0FDQUcsWUFBWTs0Q0FDVkQsV0FBVzt3Q0FDYjt3Q0FDQUUsb0JBQW9COzRDQUNsQlQsYUFBYTs0Q0FDYkMsZ0JBQWdCOzRDQUNoQkMseUJBQXlCOzRDQUN6QkUsY0FBYzt3Q0FFaEI7b0NBQ0Y7Z0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaEI7R0F6RHdCcEI7O1FBQ0xELDJFQUFpQkE7OztLQURaQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi91c2VyL0xvZ2luLnRzeD83Yjk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZVN1cGEgfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtdWktc2hhcmVkXCI7XG5pbXBvcnQgeyB1c2VTdXBhYmFzZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLXJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBzdXBhYmFzZSA9IHVzZVN1cGFiYXNlQ2xpZW50KCk7XG4gIGNvbnN0IHVzZXIgPSBzdXBhYmFzZS51c2VVc2VyKCk7XG4gIGNvbnNvbGUubG9nKHVzZXIpXG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1kOnctWzExNzBweF0gcC0yIG1kOnAtNiBqdXN0aWZ5LWNlbnRlciBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xMiBnYXAtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLXNwYW4tMTJgfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPsSQxINuZyBuaOG6rXA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtc3Bhbi0xMiBmbGV4IGp1c3RpZnktY2VudGVyYH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzMwMHB4XVwiPlxuICAgICAgICAgICAgICA8QXV0aFxuICAgICAgICAgICAgICAgIHN1cGFiYXNlQ2xpZW50PXtzdXBhYmFzZX1cbiAgICAgICAgICAgICAgICBwcm92aWRlcnM9e1tdfVxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9e3sgdGhlbWU6IFRoZW1lU3VwYSB9fVxuICAgICAgICAgICAgICAgIHRoZW1lPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvbj17e1xuICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNpZ25faW46IHtcbiAgICAgICAgICAgICAgICAgICAgICBlbWFpbF9sYWJlbDogXCJFbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2xhYmVsOiBcIk3huq10IGto4bqpdVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGVtYWlsX2lucHV0X3BsYWNlaG9sZGVyOiBcIsSQ4buLYSBjaOG7iSBlbWFpbCBj4bunYSBi4bqhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2lucHV0X3BsYWNlaG9sZGVyOiBcIk3huq10IGto4bqpdSBj4bunYSBi4bqhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbl9sYWJlbDogXCLEkMSDbmcgbmjhuq1wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ19idXR0b25fbGFiZWw6IFwixJDEg25nIG5o4bqtcC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzaWduX3VwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZW1haWxfbGFiZWw6IFwiRW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9sYWJlbDogXCJN4bqtdCBraOG6qXVcIixcbiAgICAgICAgICAgICAgICAgICAgICBlbWFpbF9pbnB1dF9wbGFjZWhvbGRlcjogXCLEkOG7i2EgY2jhu4kgZW1haWwgY+G7p2EgYuG6oW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9pbnB1dF9wbGFjZWhvbGRlcjogXCJN4bqtdCBraOG6qXUgY+G7p2EgYuG6oW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBsaW5rX3RleHQ6IFwiQuG6oW4gY2jGsGEgY8OzIHTDoGkga2hv4bqjbj8gxJDEg25nIGvDvVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbl9sYWJlbDogXCLEkMSDbmcga8O9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ19idXR0b25fbGFiZWw6IFwixJDEg25nIGvDvS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtYWdpY19saW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGlua190ZXh0OiBcIsSQw6MgY8OzIHTDoGkga2hv4bqjbj8gxJDEg25nIG5o4bqtcFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb3Jnb3R0ZW5fcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICBlbWFpbF9sYWJlbDogXCJFbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2xhYmVsOiBcIk3huq10IGto4bqpdVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGVtYWlsX2lucHV0X3BsYWNlaG9sZGVyOiBcIsSQ4buLYSBjaOG7iSBlbWFpbCBj4bunYSBi4bqhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbl9sYWJlbDogXCLEkOG6t3QgbOG6oWkgbeG6rXQga2jhuql1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICBsaW5rX3RleHQ6IFwiUXXDqm4gbeG6rXQga2jhuql1P1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBdXRoIiwiVGhlbWVTdXBhIiwidXNlU3VwYWJhc2VDbGllbnQiLCJMb2dpbiIsInN1cGFiYXNlIiwidXNlciIsInVzZVVzZXIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInN1cGFiYXNlQ2xpZW50IiwicHJvdmlkZXJzIiwiYXBwZWFyYW5jZSIsInRoZW1lIiwibG9jYWxpemF0aW9uIiwidmFyaWFibGVzIiwic2lnbl9pbiIsImVtYWlsX2xhYmVsIiwicGFzc3dvcmRfbGFiZWwiLCJlbWFpbF9pbnB1dF9wbGFjZWhvbGRlciIsInBhc3N3b3JkX2lucHV0X3BsYWNlaG9sZGVyIiwiYnV0dG9uX2xhYmVsIiwibG9hZGluZ19idXR0b25fbGFiZWwiLCJzaWduX3VwIiwibGlua190ZXh0IiwibWFnaWNfbGluayIsImZvcmdvdHRlbl9wYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/user/Login.tsx\n"));

/***/ })

});