"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tin-tuc",{

/***/ "./pages/tin-tuc/index.tsx":
/*!*********************************!*\
  !*** ./pages/tin-tuc/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"./components/Footer.tsx\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Menu */ \"./components/Menu.tsx\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/dist/index.mjs\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var _components_Loading_NextPageLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Loading/NextPageLoading */ \"./components/Loading/NextPageLoading.tsx\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Pagination */ \"./components/Pagination.tsx\");\n/* harmony import */ var _components_news_RelatedNews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/news/RelatedNews */ \"./components/news/RelatedNews.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Project() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [totalList, setTotalList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const query = {\n            active: \"1\",\n            deleted: \"0\"\n        };\n        const urlAPI = \"/api/news/newsListTotal?\".concat(query_string__WEBPACK_IMPORTED_MODULE_5__[\"default\"].stringify(query));\n        fetch(urlAPI).then((res)=>res.json()).then((data)=>{\n            setTotalList(data.length);\n        });\n    }, []);\n    console.log(totalList);\n    let searchParams = new URLSearchParams( true ? window.location.search : 0);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(searchParams.get(\"pa\") ? searchParams.get(\"pa\") : \"1\");\n    const [dataList, setDataList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const query = {\n            page: router.query.pa != null ? router.query.pa : \"1\",\n            limit: \"10\"\n        };\n        const urlAPI = \"/api/news/newsList?\".concat(query_string__WEBPACK_IMPORTED_MODULE_5__[\"default\"].stringify(query));\n        fetch(urlAPI).then((res)=>res.json()).then((data)=>{\n            setDataList(data);\n            setLoading(false);\n            console.log(data);\n        });\n    }, [\n        router\n    ]);\n    // @ts-ignore\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading_NextPageLoading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 18\n            }, this) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto md:w-[1170px] p-2 md:p-6 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold uppercase\",\n                    children: \"tin tức\"\n                }, void 0, false, {\n                    fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#ffffff]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto md:w-[1170px] p-2 md:p-6 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-12 gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-span-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-12 gap-8\",\n                                        children: dataList.map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"col-span-6\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_10__.Card, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_10__.CardHeader, {\n                                                            className: \"p-0 flex-col items-start\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_10__.Image, {\n                                                                alt: \"Card background\",\n                                                                className: \"object-cover rounded-xl h-[170px]\",\n                                                                src: row.image_url,\n                                                                width: 470\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                                                                lineNumber: 71,\n                                                                columnNumber: 25\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                                                            lineNumber: 70,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_10__.CardBody, {\n                                                            className: \"overflow-visible py-2\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                                    className: \"font-bold text-large line-clamp-2 cursor-pointer\",\n                                                                    onClick: ()=>router.push(\"/tin-tuc/\".concat(row.keyword, \"/\").concat(row.id), undefined, {\n                                                                            shallow: true\n                                                                        }),\n                                                                    children: row.title\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                                                                    lineNumber: 79,\n                                                                    columnNumber: 25\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                                                    className: \"text-default-500\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                                                        format: \"DD/MM/YYYY\",\n                                                                        children: row.date_added\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                                                                        lineNumber: 94,\n                                                                        columnNumber: 27\n                                                                    }, this)\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                                                                    lineNumber: 93,\n                                                                    columnNumber: 25\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    className: \"text-sm line-clamp-2\",\n                                                                    children: row.description\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                                                                    lineNumber: 96,\n                                                                    columnNumber: 25\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, index, false, {\n                                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        totalData: totalList\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-span-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_news_RelatedNews__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/pages/tin-tuc/index.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Project, \"JWgEQU+PPMgZskYev9WeSIurmPM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQU87a0ZBQWNmLElBQUlnQixVQUFVOzs7Ozs7Ozs7Ozs4RUFFN0MsOERBQUNDO29FQUFFcEIsV0FBVTs4RUFDVkcsSUFBSWtCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0E3QlNqQjs7Ozs7Ozs7OztrREFvQ3JDLDhEQUFDdEMsOERBQVVBO3dDQUFDd0QsV0FBV2xEOzs7Ozs7Ozs7Ozs7MENBRXpCLDhEQUFDMkI7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNqQyxvRUFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtwQiw4REFBQ1YsMERBQU1BOzs7Ozs7O0FBR2I7R0F0R3dCVzs7UUFDUFosa0RBQVNBOzs7S0FERlkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGluLXR1Yy9pbmRleC50c3g/ZWEyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgSW50cm9QYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvSW50cm9QYWdlXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiQC9jb21wb25lbnRzL01lbnVcIjtcbmltcG9ydCB7IEltYWdlLCBEaXZpZGVyLCBDYXJkLCBDYXJkSGVhZGVyLCBDYXJkQm9keSB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gXCJxdWVyeS1zdHJpbmdcIjtcbmltcG9ydCBOZXh0UGFnZUxvYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9Mb2FkaW5nL05leHRQYWdlTG9hZGluZ1wiO1xuaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uXCI7XG5pbXBvcnQgUmVsYXRlZE5ld3MgZnJvbSBcIkAvY29tcG9uZW50cy9uZXdzL1JlbGF0ZWROZXdzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3RvdGFsTGlzdCwgc2V0VG90YWxMaXN0XSA9IHVzZVN0YXRlKFwiMFwiKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgIGFjdGl2ZTogXCIxXCIsXG4gICAgICBkZWxldGVkOiBcIjBcIixcbiAgICB9O1xuICAgIGNvbnN0IHVybEFQSSA9IGAvYXBpL25ld3MvbmV3c0xpc3RUb3RhbD8ke3F1ZXJ5U3RyaW5nLnN0cmluZ2lmeShxdWVyeSl9YDtcbiAgICBmZXRjaCh1cmxBUEkpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0VG90YWxMaXN0KGRhdGEubGVuZ3RoKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKHRvdGFsTGlzdCk7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cubG9jYXRpb24uc2VhcmNoIDogXCJcIlxuICApO1xuXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKFxuICAgIHNlYXJjaFBhcmFtcy5nZXQoXCJwYVwiKSA/IHNlYXJjaFBhcmFtcy5nZXQoXCJwYVwiKSA6IFwiMVwiXG4gICk7XG5cbiAgY29uc3QgW2RhdGFMaXN0LCBzZXREYXRhTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICBwYWdlOiByb3V0ZXIucXVlcnkucGEgIT0gbnVsbCA/IHJvdXRlci5xdWVyeS5wYSA6IFwiMVwiLFxuICAgICAgbGltaXQ6IFwiMTBcIixcbiAgICB9O1xuICAgIGNvbnN0IHVybEFQSSA9IGAvYXBpL25ld3MvbmV3c0xpc3Q/JHtxdWVyeVN0cmluZy5zdHJpbmdpZnkocXVlcnkpfWA7XG4gICAgZmV0Y2godXJsQVBJKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldERhdGFMaXN0KGRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9KTtcbiAgfSwgW3JvdXRlcl0pO1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRpbmcgPyA8TmV4dFBhZ2VMb2FkaW5nIC8+IDogXCJcIn1cbiAgICAgIDxNZW51IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1kOnctWzExNzBweF0gcC0yIG1kOnAtNiBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj50aW4gdOG7qWM8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjZmZmZmZmXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1kOnctWzExNzBweF0gcC0yIG1kOnAtNiBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIGdhcC04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLThcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xMiBnYXAtOFwiPlxuICAgICAgICAgICAgICAgIHtkYXRhTGlzdC5tYXAoKHJvdzogYW55LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cInAtMCBmbGV4LWNvbCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNhcmQgYmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciByb3VuZGVkLXhsIGgtWzE3MHB4XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cm93LmltYWdlX3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQ3MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJvdmVyZmxvdy12aXNpYmxlIHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sYXJnZSBsaW5lLWNsYW1wLTIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYC90aW4tdHVjLyR7cm93LmtleXdvcmR9LyR7cm93LmlkfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtZGVmYXVsdC01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vbWVudCBmb3JtYXQ9XCJERC9NTS9ZWVlZXCI+e3Jvdy5kYXRlX2FkZGVkfTwvTW9tZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGluZS1jbGFtcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbiB0b3RhbERhdGE9e3RvdGFsTGlzdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00XCI+XG4gICAgICAgICAgICAgIDxSZWxhdGVkTmV3cyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkZvb3RlciIsIk1lbnUiLCJJbWFnZSIsIkNhcmQiLCJDYXJkSGVhZGVyIiwiQ2FyZEJvZHkiLCJxdWVyeVN0cmluZyIsIk5leHRQYWdlTG9hZGluZyIsIk1vbWVudCIsIlBhZ2luYXRpb24iLCJSZWxhdGVkTmV3cyIsIlByb2plY3QiLCJyb3V0ZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRvdGFsTGlzdCIsInNldFRvdGFsTGlzdCIsInF1ZXJ5IiwiYWN0aXZlIiwiZGVsZXRlZCIsInVybEFQSSIsInN0cmluZ2lmeSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwicGFnZSIsInNldFBhZ2UiLCJnZXQiLCJkYXRhTGlzdCIsInNldERhdGFMaXN0IiwicGEiLCJsaW1pdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwicm93IiwiaW5kZXgiLCJhbHQiLCJzcmMiLCJpbWFnZV91cmwiLCJ3aWR0aCIsImg0Iiwib25DbGljayIsInB1c2giLCJrZXl3b3JkIiwiaWQiLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwidGl0bGUiLCJzbWFsbCIsImZvcm1hdCIsImRhdGVfYWRkZWQiLCJwIiwiZGVzY3JpcHRpb24iLCJ0b3RhbERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tin-tuc/index.tsx\n"));

/***/ })

});