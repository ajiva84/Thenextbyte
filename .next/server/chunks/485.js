"use strict";
exports.id = 485;
exports.ids = [485];
exports.modules = {

/***/ 5485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1400);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__);


const ProgressBar = ({ value , color , extraCls  })=>{
    const hex2rgba = (hex, alpha = 1)=>{
        const [r, g, b] = hex.match(/\w\w/g).map((x)=>parseInt(x, 16));
        return `rgba(${r},${g},${b},${alpha})`;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `progress-content mb-3 ${extraCls ? extraCls : "one"}`,
        style: {
            width: 130,
            height: 130
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                children: [
                    value,
                    "%"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__.CircularProgressbar, {
                width: 130,
                value: value,
                strokeWidth: 5,
                styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__.buildStyles)({
                    pathColor: color,
                    trailColor: hex2rgba(color, 0.2)
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);


/***/ })

};
;