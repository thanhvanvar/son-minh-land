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

/***/ "./pages/admin/MenuSidebar.tsx":
/*!*************************************!*\
  !*** ./pages/admin/MenuSidebar.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuSidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/auth-ui-react */ \"./node_modules/@supabase/auth-ui-react/dist/index.es.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/dist/index.mjs\");\n/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap-icons */ \"./node_modules/react-bootstrap-icons/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MenuSidebar() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const user = _supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_3__.Auth.useUser();\n    console.log(user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.User, {\n                name: \"Jane Doe\",\n                description: \"Product Designer\",\n                avatarProps: {\n                    src: \"https://i.pravatar.cc/150?u=a04258114e29026702d\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Accordion, {\n                selectionMode: \"multiple\",\n                variant: \"bordered\",\n                defaultExpandedKeys: [\n                    \"1\",\n                    \"2\",\n                    \"3\"\n                ],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.AccordionItem, {\n                        \"aria-label\": \"Quản l\\xfd\",\n                        title: \"Quản l\\xfd\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {\n                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-3 p-3 items-center justify-between cursor-pointer hover:bg-gray-100\",\n                                onClick: ()=>router.push(\"/admin/project\", undefined, {\n                                        shallow: true\n                                    }),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center text-base\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-bold pr-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__.Building, {\n                                                    size: 20\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 17\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: \"Dự \\xe1n\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__.CaretRightFill, {\n                                            size: 13\n                                        }, void 0, false, {\n                                            fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {\n                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-3 p-3 items-center justify-between cursor-pointer hover:bg-gray-100\",\n                                onClick: ()=>router.push(\"/admin/news\", undefined, {\n                                        shallow: true\n                                    }),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center text-base\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-bold pr-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__.Backspace, {\n                                                    size: 20\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 17\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: \"Tin tức\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__.CaretRightFill, {\n                                            size: 13\n                                        }, void 0, false, {\n                                            fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, \"2\", true, {\n                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-3 p-3 items-center justify-between cursor-pointer hover:bg-gray-100\",\n                        onClick: ()=>router.push(\"/admin/news\", undefined, {\n                                shallow: true\n                            }),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center text-base\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-bold pr-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__.Backspace, {\n                                            size: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                            lineNumber: 115,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"Tin tức\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__.CaretRightFill, {\n                                    size: 13\n                                }, void 0, false, {\n                                    fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/admin/MenuSidebar.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MenuSidebar, \"XqRpeCacPo29PV/RS3WuUSjKCC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_3__.Auth.useUser\n    ];\n});\n_c = MenuSidebar;\nvar _c;\n$RefreshReg$(_c, \"MenuSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9NZW51U2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFHTztBQUM2QjtBQUM5QjtBQUUvQixTQUFTUTs7SUFDdEIsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU1TLE9BQU9SLHlEQUFJQSxDQUFDUyxPQUFPO0lBQ3pCQyxRQUFRQyxHQUFHLENBQUNIO0lBQ1oscUJBQ0U7OzBCQUNFLDhEQUFDSixtREFBSUE7Z0JBQ0hRLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLGFBQWE7b0JBQ1hDLEtBQUs7Z0JBQ1A7Ozs7OzswQkFFRiw4REFBQ2Isd0RBQVNBO2dCQUNSYyxlQUFjO2dCQUNkQyxTQUFRO2dCQUNSQyxxQkFBcUI7b0JBQUM7b0JBQUs7b0JBQUs7aUJBQUk7O2tDQUVwQyw4REFBQ2YsNERBQWFBO3dCQUFTZ0IsY0FBVzt3QkFBVUMsT0FBTTs7MENBQ2hELDhEQUFDbkIsc0RBQU9BOzs7OzswQ0F1Q1IsOERBQUNvQjtnQ0FDQ0MsV0FBVTtnQ0FDVkMsU0FBUyxJQUNQaEIsT0FBT2lCLElBQUksQ0FBQyxrQkFBa0JDLFdBQVc7d0NBQ3ZDQyxTQUFTO29DQUNYOztrREFHRiw4REFBQ0w7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDRDtnREFBSUMsV0FBVTswREFDYiw0RUFBQ2pCLDJEQUFhO29EQUFDdUIsTUFBTTs7Ozs7Ozs7Ozs7MERBRXZCLDhEQUFDUDswREFBSTs7Ozs7Ozs7Ozs7O2tEQUVQLDhEQUFDQTt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ2pCLGlFQUFtQjs0Q0FBQ3VCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUcvQiw4REFBQzNCLHNEQUFPQTs7Ozs7MENBQ1IsOERBQUNvQjtnQ0FDQ0MsV0FBVTtnQ0FDVkMsU0FBUyxJQUNQaEIsT0FBT2lCLElBQUksQ0FBQyxlQUFlQyxXQUFXO3dDQUNwQ0MsU0FBUztvQ0FDWDs7a0RBR0YsOERBQUNMO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ0Q7Z0RBQUlDLFdBQVU7MERBQ2IsNEVBQUNqQiw0REFBYztvREFBQ3VCLE1BQU07Ozs7Ozs7Ozs7OzBEQUV4Qiw4REFBQ1A7MERBQUk7Ozs7Ozs7Ozs7OztrREFFUCw4REFBQ0E7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNqQixpRUFBbUI7NENBQUN1QixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBMUVkOzs7OztrQ0E4RW5CLDhEQUFDUDt3QkFDQ0MsV0FBVTt3QkFDVkMsU0FBUyxJQUNQaEIsT0FBT2lCLElBQUksQ0FBQyxlQUFlQyxXQUFXO2dDQUNwQ0MsU0FBUzs0QkFDWDs7MENBR0YsOERBQUNMO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNqQiw0REFBYzs0Q0FBQ3VCLE1BQU07Ozs7Ozs7Ozs7O2tEQUV4Qiw4REFBQ1A7a0RBQUk7Ozs7Ozs7Ozs7OzswQ0FFUCw4REFBQ0E7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNqQixpRUFBbUI7b0NBQUN1QixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0R2QztHQWpLd0J0Qjs7UUFDUFAsa0RBQVNBO1FBQ1hDLHlEQUFJQSxDQUFDUzs7O0tBRklIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluL01lbnVTaWRlYmFyLnRzeD8zMjIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uLy4uL2xpYi9zdXBhYmFzZUNsaWVudFwiO1xuXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBEaXZpZGVyLCBBY2NvcmRpb24sIEFjY29yZGlvbkl0ZW0sIFVzZXIgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCAqIGFzIEljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51U2lkZWJhcigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHVzZXIgPSBBdXRoLnVzZVVzZXIoKTtcbiAgY29uc29sZS5sb2codXNlcik7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxVc2VyXG4gICAgICAgIG5hbWU9XCJKYW5lIERvZVwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiUHJvZHVjdCBEZXNpZ25lclwiXG4gICAgICAgIGF2YXRhclByb3BzPXt7XG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vaS5wcmF2YXRhci5jYy8xNTA/dT1hMDQyNTgxMTRlMjkwMjY3MDJkXCIsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPEFjY29yZGlvblxuICAgICAgICBzZWxlY3Rpb25Nb2RlPVwibXVsdGlwbGVcIlxuICAgICAgICB2YXJpYW50PVwiYm9yZGVyZWRcIlxuICAgICAgICBkZWZhdWx0RXhwYW5kZWRLZXlzPXtbXCIxXCIsIFwiMlwiLCBcIjNcIl19XG4gICAgICA+XG4gICAgICAgIDxBY2NvcmRpb25JdGVtIGtleT1cIjJcIiBhcmlhLWxhYmVsPVwiUXXhuqNuIGzDvVwiIHRpdGxlPVwiUXXhuqNuIGzDvVwiPlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgey8qIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgcC0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS0xMDBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvdHJhbmctY2Etbmhhbi9kYW5nLXRpblwiLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHByLTJcIj5cbiAgICAgICAgICAgICAgICA8SWNvbi5QZW5jaWxTcXVhcmUgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PsSQxINuZyB0aW4gbeG7m2k8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPEljb24uQ2FyZXRSaWdodEZpbGwgc2l6ZT17MTN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RGl2aWRlciAvPiAqL31cbiAgICAgICAgICB7LyogPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBwLTMgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTEwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi90cmFuZy1jYS1uaGFuP3N0YT10aW4tZGEtZGFuZ1wiLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHByLTJcIj5cbiAgICAgICAgICAgICAgICA8SWNvbi5QYXRjaENoZWNrIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj7EkMOjIMSRxINuZzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICA8SWNvbi5DYXJldFJpZ2h0RmlsbCBzaXplPXsxM30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxEaXZpZGVyIC8+ICovfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgcC0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS0xMDBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYWRtaW4vcHJvamVjdFwiLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHByLTJcIj5cbiAgICAgICAgICAgICAgICA8SWNvbi5CdWlsZGluZyBzaXplPXsyMH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+ROG7sSDDoW48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPEljb24uQ2FyZXRSaWdodEZpbGwgc2l6ZT17MTN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgcC0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS0xMDBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYWRtaW4vbmV3c1wiLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHByLTJcIj5cbiAgICAgICAgICAgICAgICA8SWNvbi5CYWNrc3BhY2Ugc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlRpbiB04bupYzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICA8SWNvbi5DYXJldFJpZ2h0RmlsbCBzaXplPXsxM30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIHAtMyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWdyYXktMTAwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYWRtaW4vbmV3c1wiLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHByLTJcIj5cbiAgICAgICAgICAgICAgPEljb24uQmFja3NwYWNlIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlRpbiB04bupYzwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8SWNvbi5DYXJldFJpZ2h0RmlsbCBzaXplPXsxM30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8QWNjb3JkaW9uSXRlbVxuICAgICAgICAgIGtleT1cIjJcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJRdeG6o24gbMO9IHTDoGkga2hv4bqjblwiXG4gICAgICAgICAgdGl0bGU9XCJRdeG6o24gbMO9IHTDoGkga2hv4bqjblwiXG4gICAgICAgID5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgcC0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS0xMDBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvdHJhbmctY2Etbmhhbi90aG9uZy10aW4tY2EtbmhhblwiLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHByLTJcIj5cbiAgICAgICAgICAgICAgICA8SWNvbi5QZXJzb25HZWFyIHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5DaOG7iW5oIHPhu69hIHRow7RuZyB0aW48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPEljb24uQ2FyZXRSaWdodEZpbGwgc2l6ZT17MTN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgcC0zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS0xMDBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvdHJhbmctY2Etbmhhbi9kb2ktbWF0LWtoYXVcIiwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBwci0yXCI+XG4gICAgICAgICAgICAgICAgPEljb24uUGVyc29uQm91bmRpbmdCb3ggc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PsSQ4buVaSBt4bqtdCBraOG6qXU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPEljb24uQ2FyZXRSaWdodEZpbGwgc2l6ZT17MTN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9BY2NvcmRpb25JdGVtPiAqL31cbiAgICAgIDwvQWNjb3JkaW9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiQXV0aCIsIkRpdmlkZXIiLCJBY2NvcmRpb24iLCJBY2NvcmRpb25JdGVtIiwiVXNlciIsIkljb24iLCJNZW51U2lkZWJhciIsInJvdXRlciIsInVzZXIiLCJ1c2VVc2VyIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImF2YXRhclByb3BzIiwic3JjIiwic2VsZWN0aW9uTW9kZSIsInZhcmlhbnQiLCJkZWZhdWx0RXhwYW5kZWRLZXlzIiwiYXJpYS1sYWJlbCIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInB1c2giLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwiQnVpbGRpbmciLCJzaXplIiwiQ2FyZXRSaWdodEZpbGwiLCJCYWNrc3BhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin/MenuSidebar.tsx\n"));

/***/ })

});