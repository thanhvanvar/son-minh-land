"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/du-an/[postKeyword]/[postId]",{

/***/ "./lib/FtProgress.js":
/*!***************************!*\
  !*** ./lib/FtProgress.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData_project: function() { return /* binding */ fetchData_project; },\n/* harmony export */   handleDeletedData: function() { return /* binding */ handleDeletedData; },\n/* harmony export */   insertData: function() { return /* binding */ insertData; },\n/* harmony export */   updatetData: function() { return /* binding */ updatetData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _supabaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supabaseClient */ \"./lib/supabaseClient.tsx\");\n/* harmony import */ var unidecode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! unidecode */ \"./node_modules/unidecode/unidecode.js\");\n/* harmony import */ var unidecode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(unidecode__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _FtGeneral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FtGeneral */ \"./lib/FtGeneral.js\");\n\n\n\n\n\n\n\n\nasync function fetchData_project() {\n    const response = await fetch(\"/api/projects/projectListGetStaticPath\").then((response)=>{\n        console.log(response);\n        response.json();\n    }).then((data)=>{\n        console.log(\"Dữ liệu sau khi cập nhật:\", data);\n        console.log(data);\n        return data;\n    });\n// const filterParams = {\n//   tableBase: table,\n//   obj: ojb,\n// };\n// fetch(\"/api/projects/projectListGetStaticPath\", {\n//   method: \"POST\",\n//   headers: {\n//     \"Content-Type\": \"application/json\",\n//   },\n//   body: JSON.stringify({ filterParams }),\n// });\n}\nasync function updatetData(table, ojb) {\n    const filterParams = {\n        tableBase: table,\n        obj: ojb\n    };\n    fetch(\"/api/admin/updateData\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            filterParams\n        })\n    });\n}\nasync function insertData(table, ojb) {\n    const { data, error } = await _supabaseClient__WEBPACK_IMPORTED_MODULE_4__.supabase.from(table).insert(ojb);\n    if (error) {\n        console.log(\"Error:\", error.message);\n    } else {\n        console.log(data);\n        (0,_FtGeneral__WEBPACK_IMPORTED_MODULE_6__.toastSuccess)(\"Đăng tin th\\xe0nh c\\xf4ng\");\n    }\n}\nconst handleDeletedData = async (tableBase, info)=>{\n    const query = {\n        id: info.id,\n        deleted: \"1\"\n    };\n    const filterParams = {\n        tableBase: tableBase,\n        obj: query\n    };\n    fetch(\"/api/admin/updateDataDelete\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            filterParams\n        })\n    }).then((response)=>{\n        console.log(response);\n        response.json();\n    }).then((data)=>{\n        console.log(\"Dữ liệu sau khi cập nhật:\", data);\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvRnRQcm9ncmVzcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUNRO0FBQ0E7QUFDRjtBQUNLO0FBQ1Y7QUFDcUI7QUFFaEQsZUFBZVM7SUFDcEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDBDQUMxQkMsSUFBSSxDQUFDLENBQUNGO1FBQ0xHLFFBQVFDLEdBQUcsQ0FBQ0o7UUFDWkEsU0FBU0ssSUFBSTtJQUNmLEdBQ0NILElBQUksQ0FBQyxDQUFDSTtRQUNMSCxRQUFRQyxHQUFHLENBQUMsNkJBQTZCRTtRQUN6Q0gsUUFBUUMsR0FBRyxDQUFDRTtRQUNaLE9BQU9BO0lBQ1Q7QUFFRix5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCLGNBQWM7QUFDZCxLQUFLO0FBQ0wsb0RBQW9EO0FBQ3BELG9CQUFvQjtBQUNwQixlQUFlO0FBQ2YsMENBQTBDO0FBQzFDLE9BQU87QUFDUCw0Q0FBNEM7QUFDNUMsTUFBTTtBQUNSO0FBRU8sZUFBZUMsWUFBWUMsS0FBSyxFQUFFQyxHQUFHO0lBQzFDLE1BQU1DLGVBQWU7UUFDbkJDLFdBQVdIO1FBQ1hJLEtBQUtIO0lBQ1A7SUFDQVIsTUFBTSx5QkFBeUI7UUFDN0JZLFFBQVE7UUFDUkMsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtRQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFBRVA7UUFBYTtJQUN0QztBQUNGO0FBQ08sZUFBZVEsV0FBV1YsS0FBSyxFQUFFQyxHQUFHO0lBQ3pDLE1BQU0sRUFBRUgsSUFBSSxFQUFFYSxLQUFLLEVBQUUsR0FBRyxNQUFNeEIscURBQVFBLENBQUN5QixJQUFJLENBQUNaLE9BQU9hLE1BQU0sQ0FBQ1o7SUFDMUQsSUFBSVUsT0FBTztRQUNUaEIsUUFBUUMsR0FBRyxDQUFDLFVBQVVlLE1BQU1HLE9BQU87SUFDckMsT0FBTztRQUNMbkIsUUFBUUMsR0FBRyxDQUFDRTtRQUNaUix3REFBWUEsQ0FBQztJQUNmO0FBQ0Y7QUFDTyxNQUFNeUIsb0JBQW9CLE9BQU9aLFdBQVdhO0lBQ2pELE1BQU1DLFFBQVE7UUFDWkMsSUFBSUYsS0FBS0UsRUFBRTtRQUNYQyxTQUFTO0lBQ1g7SUFDQSxNQUFNakIsZUFBZTtRQUNuQkMsV0FBV0E7UUFDWEMsS0FBS2E7SUFDUDtJQUNBeEIsTUFBTSwrQkFBK0I7UUFDbkNZLFFBQVE7UUFDUkMsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtRQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFBRVA7UUFBYTtJQUN0QyxHQUNHUixJQUFJLENBQUMsQ0FBQ0Y7UUFDTEcsUUFBUUMsR0FBRyxDQUFDSjtRQUNaQSxTQUFTSyxJQUFJO0lBQ2YsR0FDQ0gsSUFBSSxDQUFDLENBQUNJO1FBQ0xILFFBQVFDLEdBQUcsQ0FBQyw2QkFBNkJFO0lBQzNDO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvRnRQcm9ncmVzcy5qcz9lNGFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiY29va2llcy1uZXh0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4vc3VwYWJhc2VDbGllbnRcIjtcclxuaW1wb3J0IHVuaWRlY29kZSBmcm9tIFwidW5pZGVjb2RlXCI7XHJcbmltcG9ydCB7IHRvYXN0RXJyb3IsIHRvYXN0U3VjY2VzcyB9IGZyb20gXCIuL0Z0R2VuZXJhbFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YV9wcm9qZWN0KCkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Byb2plY3RzL3Byb2plY3RMaXN0R2V0U3RhdGljUGF0aFwiKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiROG7ryBsaeG7h3Ugc2F1IGtoaSBj4bqtcCBuaOG6rXQ6XCIsIGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgLy8gY29uc3QgZmlsdGVyUGFyYW1zID0ge1xyXG4gIC8vICAgdGFibGVCYXNlOiB0YWJsZSxcclxuICAvLyAgIG9iajogb2piLFxyXG4gIC8vIH07XHJcbiAgLy8gZmV0Y2goXCIvYXBpL3Byb2plY3RzL3Byb2plY3RMaXN0R2V0U3RhdGljUGF0aFwiLCB7XHJcbiAgLy8gICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gIC8vICAgaGVhZGVyczoge1xyXG4gIC8vICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAvLyAgIH0sXHJcbiAgLy8gICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZpbHRlclBhcmFtcyB9KSxcclxuICAvLyB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZXREYXRhKHRhYmxlLCBvamIpIHtcclxuICBjb25zdCBmaWx0ZXJQYXJhbXMgPSB7XHJcbiAgICB0YWJsZUJhc2U6IHRhYmxlLFxyXG4gICAgb2JqOiBvamIsXHJcbiAgfTtcclxuICBmZXRjaChcIi9hcGkvYWRtaW4vdXBkYXRlRGF0YVwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZpbHRlclBhcmFtcyB9KSxcclxuICB9KTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0RGF0YSh0YWJsZSwgb2piKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSh0YWJsZSkuaW5zZXJ0KG9qYik7XHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB0b2FzdFN1Y2Nlc3MoXCLEkMSDbmcgdGluIHRow6BuaCBjw7RuZ1wiKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGhhbmRsZURlbGV0ZWREYXRhID0gYXN5bmMgKHRhYmxlQmFzZSwgaW5mbykgPT4ge1xyXG4gIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgaWQ6IGluZm8uaWQsXHJcbiAgICBkZWxldGVkOiBcIjFcIixcclxuICB9O1xyXG4gIGNvbnN0IGZpbHRlclBhcmFtcyA9IHtcclxuICAgIHRhYmxlQmFzZTogdGFibGVCYXNlLFxyXG4gICAgb2JqOiBxdWVyeSxcclxuICB9O1xyXG4gIGZldGNoKFwiL2FwaS9hZG1pbi91cGRhdGVEYXRhRGVsZXRlXCIsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZmlsdGVyUGFyYW1zIH0pLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJE4buvIGxp4buHdSBzYXUga2hpIGPhuq1wIG5o4bqtdDpcIiwgZGF0YSk7XHJcbiAgICB9KTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmV4dExpbmsiLCJMaW5rIiwiZ2V0Q29va2llIiwidG9hc3QiLCJzdXBhYmFzZSIsInVuaWRlY29kZSIsInRvYXN0RXJyb3IiLCJ0b2FzdFN1Y2Nlc3MiLCJmZXRjaERhdGFfcHJvamVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJkYXRhIiwidXBkYXRldERhdGEiLCJ0YWJsZSIsIm9qYiIsImZpbHRlclBhcmFtcyIsInRhYmxlQmFzZSIsIm9iaiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImluc2VydERhdGEiLCJlcnJvciIsImZyb20iLCJpbnNlcnQiLCJtZXNzYWdlIiwiaGFuZGxlRGVsZXRlZERhdGEiLCJpbmZvIiwicXVlcnkiLCJpZCIsImRlbGV0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/FtProgress.js\n"));

/***/ })

});