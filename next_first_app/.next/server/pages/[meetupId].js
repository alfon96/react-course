/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[meetupId]";
exports.ids = ["pages/[meetupId]"];
exports.modules = {

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"MeetupDetail_detail__HjAUt\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5tb2R1bGUuY3NzP2Y0ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGV0YWlsXCI6IFwiTWVldHVwRGV0YWlsX2RldGFpbF9fSGpBVXRcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.module.css\n");

/***/ }),

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst MeetupDetail = (props)=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const id = router.query.meetupId;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default().detail),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: props.meetup.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MVQuadro_1\\\\Documents\\\\Udemy\\\\react-course\\\\next_first_app\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: props.meetup.image,\n                alt: props.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MVQuadro_1\\\\Documents\\\\Udemy\\\\react-course\\\\next_first_app\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                children: props.meetup.address\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MVQuadro_1\\\\Documents\\\\Udemy\\\\react-course\\\\next_first_app\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.meetup.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MVQuadro_1\\\\Documents\\\\Udemy\\\\react-course\\\\next_first_app\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MVQuadro_1\\\\Documents\\\\Udemy\\\\react-course\\\\next_first_app\\\\components\\\\meetups\\\\MeetupDetail.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupDetail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNRO0FBRWhELE1BQU1FLFlBQVksR0FBRyxDQUFDQyxLQUFLLEdBQUs7SUFDOUIsTUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBRTFCLE1BQU1LLEVBQUUsR0FBR0QsTUFBTSxDQUFDRSxLQUFLLENBQUNDLFFBQVE7SUFDaEMscUJBQ0UsOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFFUix3RUFBYzs7MEJBQ2hDLDhEQUFDVSxJQUFFOzBCQUFFUixLQUFLLENBQUNTLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7eUJBQU07MEJBQzdCLDhEQUFDQyxLQUFHO2dCQUFDQyxHQUFHLEVBQUVaLEtBQUssQ0FBQ1MsTUFBTSxDQUFDSSxLQUFLO2dCQUFFQyxHQUFHLEVBQUVkLEtBQUssQ0FBQ1UsS0FBSzs7Ozs7eUJBQUk7MEJBQ2xELDhEQUFDSyxTQUFPOzBCQUFFZixLQUFLLENBQUNTLE1BQU0sQ0FBQ00sT0FBTzs7Ozs7eUJBQVc7MEJBQ3pDLDhEQUFDQyxHQUFDOzBCQUFFaEIsS0FBSyxDQUFDUyxNQUFNLENBQUNRLFdBQVc7Ozs7O3lCQUFLOzs7Ozs7aUJBQ3pCLENBQ1Y7QUFDSixDQUFDO0FBRUQsaUVBQWVsQixZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcz8zMWQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NZWV0dXBEZXRhaWwubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgTWVldHVwRGV0YWlsID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5Lm1lZXR1cElkO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cclxuICAgICAgPGgxPntwcm9wcy5tZWV0dXAudGl0bGV9PC9oMT5cclxuICAgICAgPGltZyBzcmM9e3Byb3BzLm1lZXR1cC5pbWFnZX0gYWx0PXtwcm9wcy50aXRsZX0gLz5cclxuICAgICAgPGFkZHJlc3M+e3Byb3BzLm1lZXR1cC5hZGRyZXNzfTwvYWRkcmVzcz5cclxuICAgICAgPHA+e3Byb3BzLm1lZXR1cC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImNsYXNzZXMiLCJNZWV0dXBEZXRhaWwiLCJwcm9wcyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJtZWV0dXBJZCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkZXRhaWwiLCJoMSIsIm1lZXR1cCIsInRpdGxlIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJhZGRyZXNzIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n\n\n\nconst meetup = {\n    id: \"m1\",\n    title: \"A first meetup\",\n    image: \"https://th.bing.com/th/id/R.dc34bb669782d98d6a8a7aa5abbef929?rik=mZiFVzRj70dGWw&pid=ImgRaw&r=0&sres=1&sresct=1\",\n    address: \"\",\n    description: \"Here it is the city center\"\n};\nconst MeetupPage = (props)=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            meetup: props.meetup\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\MVQuadro_1\\\\Documents\\\\Udemy\\\\react-course\\\\next_first_app\\\\pages\\\\[meetupId]\\\\index.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\nasync function getStaticPaths() {\n    return {\n        fallback: false,\n        paths: [\n            {\n                params: {\n                    meetupId: \"m1\"\n                }\n            },\n            {\n                params: {\n                    meetupId: \"m2\"\n                }\n            }, \n        ]\n    };\n}\nasync function getStaticProps(context) {\n    const meetupId = context.params.meetupId;\n    console.log(meetupId);\n    return {\n        props: {\n            meetup\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDeUI7QUFFakUsTUFBTUUsTUFBTSxHQUFHO0lBQ2JDLEVBQUUsRUFBRSxJQUFJO0lBQ1JDLEtBQUssRUFBRSxnQkFBZ0I7SUFDdkJDLEtBQUssRUFDSCxnSEFBZ0g7SUFDbEhDLE9BQU8sRUFBRSxFQUFFO0lBQ1hDLFdBQVcsRUFBRSw0QkFBNEI7Q0FDMUM7QUFFRCxNQUFNQyxVQUFVLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO0lBQzVCLE1BQU1DLE1BQU0sR0FBR1Ysc0RBQVMsRUFBRTtJQUMxQixxQkFDRTtrQkFDRSw0RUFBQ0Msd0VBQVk7WUFBQ0MsTUFBTSxFQUFFTyxLQUFLLENBQUNQLE1BQU07Ozs7O3FCQUFpQjtxQkFDbEQsQ0FDSDtBQUNKLENBQUM7QUFFTSxlQUFlUyxjQUFjLEdBQUc7SUFDckMsT0FBTztRQUNMQyxRQUFRLEVBQUUsS0FBSztRQUNmQyxLQUFLLEVBQUU7WUFDTDtnQkFDRUMsTUFBTSxFQUFFO29CQUNOQyxRQUFRLEVBQUUsSUFBSTtpQkFDZjthQUNGO1lBQ0Q7Z0JBQ0VELE1BQU0sRUFBRTtvQkFDTkMsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFDTSxlQUFlQyxjQUFjLENBQUNDLE9BQU8sRUFBRTtJQUM1QyxNQUFNRixRQUFRLEdBQUdFLE9BQU8sQ0FBQ0gsTUFBTSxDQUFDQyxRQUFRO0lBQ3hDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osUUFBUSxDQUFDLENBQUM7SUFFdEIsT0FBTztRQUNMTixLQUFLLEVBQUU7WUFDTFAsTUFBTTtTQUNQO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFDRCxpRUFBZU0sVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanM/OGZmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbFwiO1xyXG5cclxuY29uc3QgbWVldHVwID0ge1xyXG4gIGlkOiBcIm0xXCIsXHJcbiAgdGl0bGU6IFwiQSBmaXJzdCBtZWV0dXBcIixcclxuICBpbWFnZTpcclxuICAgIFwiaHR0cHM6Ly90aC5iaW5nLmNvbS90aC9pZC9SLmRjMzRiYjY2OTc4MmQ5OGQ2YThhN2FhNWFiYmVmOTI5P3Jpaz1tWmlGVnpSajcwZEdXdyZwaWQ9SW1nUmF3JnI9MCZzcmVzPTEmc3Jlc2N0PTFcIixcclxuICBhZGRyZXNzOiBcIlwiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIkhlcmUgaXQgaXMgdGhlIGNpdHkgY2VudGVyXCIsXHJcbn07XHJcblxyXG5jb25zdCBNZWV0dXBQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZWV0dXBEZXRhaWwgbWVldHVwPXtwcm9wcy5tZWV0dXB9PjwvTWVldHVwRGV0YWlsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgcGF0aHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgbWVldHVwSWQ6IFwibTFcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBtZWV0dXBJZDogXCJtMlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xyXG4gIGNvbnNvbGUubG9nKG1lZXR1cElkKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cCxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTWVldHVwRGV0YWlsIiwibWVldHVwIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiTWVldHVwUGFnZSIsInByb3BzIiwicm91dGVyIiwiZ2V0U3RhdGljUGF0aHMiLCJmYWxsYmFjayIsInBhdGhzIiwicGFyYW1zIiwibWVldHVwSWQiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[meetupId]/index.js"));
module.exports = __webpack_exports__;

})();