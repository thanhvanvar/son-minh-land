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

/***/ "./components/Home/SliderNews.tsx":
/*!****************************************!*\
  !*** ./components/Home/SliderNews.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SliderNewsHome; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Loading_NextPageLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loading/NextPageLoading */ \"./components/Loading/NextPageLoading.tsx\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/dist/index.mjs\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SliderNewsHome() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [dataList, setDataList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const urlAPI = \"/api/news/newsListHome\";\n        fetch(urlAPI).then((res)=>res.json()).then((data)=>{\n            setDataList(data);\n            setLoading(false);\n            console.log(data);\n        });\n    }, []);\n    // @ts-ignore\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading_NextPageLoading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/components/Home/SliderNews.tsx\",\n                lineNumber: 32,\n                columnNumber: 18\n            }, this) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {\n                slidesPerView: 2.3,\n                spaceBetween: 10,\n                pagination: {\n                    clickable: true\n                },\n                breakpoints: {\n                    640: {\n                        slidesPerView: 2,\n                        spaceBetween: 20\n                    },\n                    768: {\n                        slidesPerView: 4,\n                        spaceBetween: 40\n                    },\n                    1024: {\n                        slidesPerView: 3.2,\n                        spaceBetween: 20\n                    }\n                },\n                className: \"mySwiper pb-3\",\n                children: dataList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {\n                        className: \"pb-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.Card, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.CardHeader, {\n                                    className: \"p-0 flex-col items-start\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.Image, {\n                                        alt: \"Card background\",\n                                        width: 470,\n                                        className: \"object-cover rounded-xl w-[470px] h-[170px]\",\n                                        src: item.image_url\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/components/Home/SliderNews.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/components/Home/SliderNews.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_8__.CardBody, {\n                                    className: \"overflow-visible py-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"font-bold text-large line-clamp-2\",\n                                            children: item.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/components/Home/SliderNews.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                            className: \"text-default-500 py-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                                format: \"DD/MM/YYYY\",\n                                                children: item.date_added\n                                            }, void 0, false, {\n                                                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/components/Home/SliderNews.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 58\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/components/Home/SliderNews.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm line-clamp-2\",\n                                            children: item.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/components/Home/SliderNews.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/components/Home/SliderNews.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/components/Home/SliderNews.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/components/Home/SliderNews.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/thanhvan/Desktop/NextJS/son-minh-land/components/Home/SliderNews.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SliderNewsHome, \"ZjM9fBGnK+ZJIL0n/fec06YpE0E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SliderNewsHome;\nvar _c;\n$RefreshReg$(_c, \"SliderNewsHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvU2xpZGVyTmV3cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDaUI7QUFNOUI7QUFDd0I7QUFDL0I7QUFDVztBQUNHO0FBQ25CLFNBQVNZOztJQUN0QixNQUFNQyxTQUFTVixzREFBU0E7SUFDeEIsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1pQixTQUFVO1FBQ2hCQyxNQUFNRCxRQUNIRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHO1lBQ0xOLFlBQVlNO1lBQ1pSLFdBQVc7WUFDWFMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0osR0FBRyxFQUFFO0lBRUwsYUFBYTtJQUNiLHFCQUNFOztZQUNHVCx3QkFBVSw4REFBQ1YsZ0VBQWVBOzs7O3VCQUFNOzBCQUVqQyw4REFBQ0ssZ0RBQU1BO2dCQUNMaUIsZUFBZTtnQkFDZkMsY0FBYztnQkFDZEMsWUFBWTtvQkFDVkMsV0FBVztnQkFDYjtnQkFDQUMsYUFBYTtvQkFDWCxLQUFLO3dCQUNISixlQUFlO3dCQUNmQyxjQUFjO29CQUNoQjtvQkFDQSxLQUFLO3dCQUNIRCxlQUFlO3dCQUNmQyxjQUFjO29CQUNoQjtvQkFDQSxNQUFNO3dCQUNKRCxlQUFlO3dCQUNmQyxjQUFjO29CQUNoQjtnQkFDRjtnQkFDQUksV0FBVTswQkFFVGYsU0FBU2dCLEdBQUcsQ0FBQyxDQUFDQyxNQUFXQyxzQkFDeEIsOERBQUN4QixxREFBV0E7d0JBQUNxQixXQUFVO2tDQUNyQiw0RUFBQ3pCLG1EQUFJQTs7OENBQ0gsOERBQUNDLHlEQUFVQTtvQ0FBQ3dCLFdBQVU7OENBQ3BCLDRFQUFDMUIsb0RBQUtBO3dDQUNKOEIsS0FBSTt3Q0FDSkMsT0FBTzt3Q0FDUEwsV0FBVTt3Q0FDVk0sS0FBS0osS0FBS0ssU0FBUzs7Ozs7Ozs7Ozs7OENBSXZCLDhEQUFDOUIsdURBQVFBO29DQUFDdUIsV0FBVTs7c0RBQ2xCLDhEQUFDUTs0Q0FBR1IsV0FBVTtzREFBcUNFLEtBQUtPLEtBQUs7Ozs7OztzREFDN0QsOERBQUNDOzRDQUFNVixXQUFVO3NEQUF3Qiw0RUFBQ3BCLHFEQUFNQTtnREFBQytCLFFBQU87MERBQWNULEtBQUtVLFVBQVU7Ozs7Ozs7Ozs7O3NEQUNyRiw4REFBQ0M7NENBQUViLFdBQVU7c0RBQXdCRSxLQUFLWSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckU7R0FqRXdCakM7O1FBQ1BULGtEQUFTQTs7O0tBREZTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZS9TbGlkZXJOZXdzLnRzeD8wZjQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBOZXh0UGFnZUxvYWRpbmcgZnJvbSBcIi4uL0xvYWRpbmcvTmV4dFBhZ2VMb2FkaW5nXCI7XG5pbXBvcnQge1xuICBJbWFnZSxcbiAgQ2FyZCxcbiAgQ2FyZEhlYWRlcixcbiAgQ2FyZEJvZHksXG59IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xuaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXJOZXdzSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZGF0YUxpc3QsIHNldERhdGFMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cmxBUEkgPSBgL2FwaS9uZXdzL25ld3NMaXN0SG9tZWA7XG4gICAgZmV0Y2godXJsQVBJKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldERhdGFMaXN0KGRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRpbmcgPyA8TmV4dFBhZ2VMb2FkaW5nIC8+IDogXCJcIn1cbiAgICAgIFxuICAgICAgPFN3aXBlclxuICAgICAgICBzbGlkZXNQZXJWaWV3PXsyLjN9XG4gICAgICAgIHNwYWNlQmV0d2Vlbj17MTB9XG4gICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIH19XG4gICAgICAgIGJyZWFrcG9pbnRzPXt7XG4gICAgICAgICAgNjQwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMDI0OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLjIsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cIm15U3dpcGVyIHBiLTNcIlxuICAgICAgPlxuICAgICAgICB7ZGF0YUxpc3QubWFwKChpdGVtOiBhbnksIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInBiLTNcIj5cbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJwLTAgZmxleC1jb2wgaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkNhcmQgYmFja2dyb3VuZFwiIFxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezQ3MH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciByb3VuZGVkLXhsIHctWzQ3MHB4XSBoLVsxNzBweF1cIlxuICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlX3VybH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cIm92ZXJmbG93LXZpc2libGUgcHktMlwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sYXJnZSBsaW5lLWNsYW1wLTJcIj57aXRlbS50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LWRlZmF1bHQtNTAwIHB5LTJcIj48TW9tZW50IGZvcm1hdD1cIkREL01NL1lZWVlcIj57aXRlbS5kYXRlX2FkZGVkfTwvTW9tZW50Pjwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsaW5lLWNsYW1wLTJcIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgKSl9XG4gICAgICA8L1N3aXBlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTmV4dFBhZ2VMb2FkaW5nIiwiSW1hZ2UiLCJDYXJkIiwiQ2FyZEhlYWRlciIsIkNhcmRCb2R5IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJNb21lbnQiLCJTbGlkZXJOZXdzSG9tZSIsInJvdXRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YUxpc3QiLCJzZXREYXRhTGlzdCIsInVybEFQSSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwiYnJlYWtwb2ludHMiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJhbHQiLCJ3aWR0aCIsInNyYyIsImltYWdlX3VybCIsImg0IiwidGl0bGUiLCJzbWFsbCIsImZvcm1hdCIsImRhdGVfYWRkZWQiLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home/SliderNews.tsx\n"));

/***/ })

});