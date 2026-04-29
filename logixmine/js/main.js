/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/ui/cases.ts"
/*!************************!*\
  !*** ./ts/ui/cases.ts ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => document.addEventListener('DOMContentLoaded', () => {
    const cases = document.querySelector('.cases');
    if (!cases)
        return;
    const swiperElem = cases.querySelector('.swiper');
    if (!swiperElem)
        return;
    const prevEl = cases.querySelector('.cases__prev-el');
    const nextEl = cases.querySelector('.cases__next-el');
    new Swiper(swiperElem, {
        slidesPerView: 'auto',
        spaceBetween: 10,
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: nextEl,
            prevEl: prevEl
        },
        breakpoints: {
            993: {
                spaceBeetween: 20
            }
        }
    });
}));


/***/ },

/***/ "./ts/ui/footerLinks.ts"
/*!******************************!*\
  !*** ./ts/ui/footerLinks.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => document.addEventListener('DOMContentLoaded', () => {
    const toggleHeight = (footerLinks) => {
        const list = footerLinks.querySelector('.footer-links__list');
        if (!list)
            return;
        if (footerLinks.classList.contains('--active')) {
            list.style.maxHeight = list.scrollHeight + "px";
        }
        else {
            list.style.maxHeight = '0px';
        }
    };
    document.querySelectorAll('.footer-links').forEach(el => {
        toggleHeight(el);
    });
    document.addEventListener('click', ev => {
        const target = ev.target;
        const footerLinks = target.closest('.footer-links');
        const label = target.closest('.footer-links__label');
        if (footerLinks && label) {
            footerLinks.classList.toggle('--active');
            toggleHeight(footerLinks);
        }
    });
}));


/***/ },

/***/ "./ts/ui/header.ts"
/*!*************************!*\
  !*** ./ts/ui/header.ts ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    if (!header)
        return;
    let isScrollDown = false;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 5 && !isScrollDown) {
            header.classList.add('--scrolled');
            isScrollDown = true;
        }
        else if (window.scrollY <= 5 && isScrollDown) {
            header.classList.remove('--scrolled');
            isScrollDown = false;
        }
    });
}));


/***/ },

/***/ "./ts/ui/input.ts"
/*!************************!*\
  !*** ./ts/ui/input.ts ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => document.addEventListener('DOMContentLoaded', () => {
    const imaskMap = new WeakMap();
    const clear = function (input) {
        const inputElem = input.querySelector('input');
        if (!inputElem)
            return;
        inputElem.value = "";
        inputElem.dispatchEvent(new Event('input', { bubbles: true }));
    };
    document.addEventListener('pointerdown', ev => {
        const target = ev.target;
        const input = target.closest('.input');
        if (input && target.closest('.input__clear')) {
            ev.preventDefault();
        }
    });
    document.addEventListener('click', ev => {
        const target = ev.target;
        const input = target.closest('.input');
        if (input && target.closest('.input__clear')) {
            clear(input);
        }
    });
    document.addEventListener('input', ev => {
        const phoneMaskInput = ev.target.closest('input.phone-mask');
        // Phone mask
        if (phoneMaskInput && !imaskMap.has(phoneMaskInput)) {
            imaskMap.set(phoneMaskInput, IMask(phoneMaskInput, {
                mask: '+7 (000) 000-00-00'
            }));
        }
    });
}));


/***/ },

/***/ "./ts/ui/mobileMenu.ts"
/*!*****************************!*\
  !*** ./ts/ui/mobileMenu.ts ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (!burgerBtn || !mobileMenu)
        return;
    burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('--show');
    });
}));


/***/ },

/***/ "./ts/ui/popularRoutes.ts"
/*!********************************!*\
  !*** ./ts/ui/popularRoutes.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => document.addEventListener('DOMContentLoaded', () => {
    // const popularRoutes = document.querySelector<HTMLElement>('.popular-routes');
    // if (!popularRoutes) return;
    // const swiperElem = popularRoutes.querySelector<HTMLElement>('.swiper');
    // if (!swiperElem) return;
    // const prevEl = popularRoutes.querySelector<HTMLElement>('.popular-routes__prev-el');
    // const nextEl = popularRoutes.querySelector<HTMLElement>('.popular-routes__next-el');
    // new Swiper(swiperElem, {
    //     slidesPerView: 'auto',
    //     spaceBetween: 20,
    //     direction: 'horizontal',
    //     loop: true,
    //     navigation: {
    //         nextEl: nextEl,
    //         prevEl: prevEl
    //     },
    // });
}));


/***/ },

/***/ "./ts/ui/ui.ts"
/*!*********************!*\
  !*** ./ts/ui/ui.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cases */ "./ts/ui/cases.ts");
/* harmony import */ var _footerLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footerLinks */ "./ts/ui/footerLinks.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./ts/ui/header.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ "./ts/ui/input.ts");
/* harmony import */ var _mobileMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobileMenu */ "./ts/ui/mobileMenu.ts");
/* harmony import */ var _popularRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popularRoutes */ "./ts/ui/popularRoutes.ts");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    (0,_input__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_cases__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_popularRoutes__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_header__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_footerLinks__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_mobileMenu__WEBPACK_IMPORTED_MODULE_4__["default"])();
});


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ui */ "./ts/ui/ui.ts");

(0,_ui_ui__WEBPACK_IMPORTED_MODULE_0__["default"])();
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('--loaded');
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map