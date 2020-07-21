(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/ng-typed/__ivy_ngcc__/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/ng-typed/__ivy_ngcc__/index.js ***!
  \*****************************************************/
/*! exports provided: NgTypedDirective, NgTypedModule, Typed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./node_modules/ng-typed/__ivy_ngcc__/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgTypedDirective", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["NgTypedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgTypedModule", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["NgTypedModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Typed", function() { return _src_index__WEBPACK_IMPORTED_MODULE_0__["Typed"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng-typed/__ivy_ngcc__/src/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng-typed/__ivy_ngcc__/src/index.js ***!
  \*********************************************************/
/*! exports provided: NgTypedDirective, NgTypedModule, Typed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _typed_ng_typed_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typed/ng-typed.directive */ "./node_modules/ng-typed/__ivy_ngcc__/src/typed/ng-typed.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgTypedDirective", function() { return _typed_ng_typed_directive__WEBPACK_IMPORTED_MODULE_0__["NgTypedDirective"]; });

/* harmony import */ var _typed_ng_typed_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typed/ng-typed-module */ "./node_modules/ng-typed/__ivy_ngcc__/src/typed/ng-typed-module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgTypedModule", function() { return _typed_ng_typed_module__WEBPACK_IMPORTED_MODULE_1__["NgTypedModule"]; });

/* harmony import */ var _typed_typed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typed/typed */ "./node_modules/ng-typed/__ivy_ngcc__/src/typed/typed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Typed", function() { return _typed_typed__WEBPACK_IMPORTED_MODULE_2__["Typed"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng-typed/__ivy_ngcc__/src/typed/ng-typed-module.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng-typed/__ivy_ngcc__/src/typed/ng-typed-module.js ***!
  \*************************************************************************/
/*! exports provided: NgTypedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgTypedModule", function() { return NgTypedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_typed_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-typed.directive */ "./node_modules/ng-typed/__ivy_ngcc__/src/typed/ng-typed.directive.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




var NgTypedModule = /** @class */ (function () {
    function NgTypedModule() {
    }
NgTypedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgTypedModule });
NgTypedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgTypedModule_Factory(t) { return new (t || NgTypedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgTypedModule, { declarations: function () { return [_ng_typed_directive__WEBPACK_IMPORTED_MODULE_1__["NgTypedDirective"]]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [_ng_typed_directive__WEBPACK_IMPORTED_MODULE_1__["NgTypedDirective"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [
                    _ng_typed_directive__WEBPACK_IMPORTED_MODULE_1__["NgTypedDirective"]
                ],
                exports: [
                    _ng_typed_directive__WEBPACK_IMPORTED_MODULE_1__["NgTypedDirective"]
                ]
            }]
    }], function () { return []; }, null); })();
    return NgTypedModule;
}());


//# sourceMappingURL=ng-typed-module.js.map

/***/ }),

/***/ "./node_modules/ng-typed/__ivy_ngcc__/src/typed/ng-typed.directive.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng-typed/__ivy_ngcc__/src/typed/ng-typed.directive.js ***!
  \****************************************************************************/
/*! exports provided: NgTypedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgTypedDirective", function() { return NgTypedDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _typed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typed */ "./node_modules/ng-typed/__ivy_ngcc__/src/typed/typed.js");




var NgTypedDirective = /** @class */ (function () {
    function NgTypedDirective(elRef) {
        this.elRef = elRef;
        this.ngTyped = {
            speed: 0,
            timeout: 0,
            hideCursorOnComplete: false,
            hideCursor: false,
            text: '',
            cursor: ''
        };
        this.complete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.typingLock = false;
    }
    NgTypedDirective.prototype.ngOnInit = function () {
        if (!this.ngTyped.text || this.ngTyped.text === '') {
            this.ngTyped.text = this.elRef.nativeElement.innerHTML;
        }
        if (!this.checkContent()) {
            return;
        }
        this.createTyped();
    };
    NgTypedDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.typed) {
            return;
        }
        if (!this.checkContent()) {
            this.contentObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (ob) {
                if (_this.checkContent()) {
                    ob.next(_this.ngTyped.text);
                    ob.complete();
                }
            });
            this.contentSubscription = this.contentObservable.subscribe(function (content) {
                _this.createTyped();
                _this.contentSubscription.unsubscribe();
            });
            return;
        }
        this.createTyped();
    };
    NgTypedDirective.prototype.ngOnChanges = function (changes) {
        if ('text' in changes && this.typed) {
            if (this.typingLock) {
                return;
            }
            this.typed.textContent = this.ngTyped.text;
            this.typed.begin();
            this.typingLock = true;
        }
    };
    NgTypedDirective.prototype.checkContent = function () {
        return this.ngTyped.text;
    };
    NgTypedDirective.prototype.createTyped = function () {
        var _this = this;
        this.typed = new _typed__WEBPACK_IMPORTED_MODULE_2__["Typed"](this.elRef.nativeElement, {
            speed: this.ngTyped.speed,
            timeout: this.ngTyped.timeout,
            hideCursorOnComplete: this.ngTyped.hideCursorOnComplete,
            hideCursor: this.ngTyped.hideCursor,
            cursor: this.ngTyped.cursor || '|',
            onComplete: function () {
                _this.complete.emit(null);
                _this.typingLock = false;
            },
            text: this.ngTyped.text
        });
        this.typed.begin();
        this.typingLock = true;
    };
    /** @nocollapse */
    NgTypedDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NgTypedDirective.propDecorators = {
        ngTyped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ng-typed',] }],
        complete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['complete',] }]
    };
NgTypedDirective.ɵfac = function NgTypedDirective_Factory(t) { return new (t || NgTypedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NgTypedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgTypedDirective, selectors: [["", "ng-typed", ""]], inputs: { ngTyped: ["ng-typed", "ngTyped"] }, outputs: { complete: "complete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ng-typed]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { ngTyped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ng-typed']
        }], complete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['complete']
        }] }); })();
    return NgTypedDirective;
}());


//# sourceMappingURL=ng-typed.directive.js.map

/***/ }),

/***/ "./node_modules/ng-typed/__ivy_ngcc__/src/typed/typed.js":
/*!***************************************************************!*\
  !*** ./node_modules/ng-typed/__ivy_ngcc__/src/typed/typed.js ***!
  \***************************************************************/
/*! exports provided: Typed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typed", function() { return Typed; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Typed = /** @class */ (function () {
    function Typed(element, options) {
        var defaults = {
            speed: 0,
            timeout: 0,
            showCursor: true,
            hideCursorOnComplete: false,
            hideCursor: false,
            onComplete: function () { },
            text: '',
            cursor: '|'
        };
        this.element = element;
        this.options = __assign({}, defaults, options);
        this.textContent = element.textContent.trim();
        this.strPos = 0;
        this.typingComplete = false;
        this.textContent = this.options.text;
        this.cursorCharacter = this.options.cursor;
        this.element.textContent = '';
        this.appendAnimationCss();
    }
    Typed.prototype.begin = function () {
        var _this = this;
        if (this.typingComplete) {
            return this.restart();
        }
        if (!this.options.hideCursor) {
            this.insertCursor();
        }
        this.timeout = setTimeout(function () {
            _this.typewrite();
        }, this.options.timeout);
    };
    Typed.prototype.typewrite = function () {
        var _this = this;
        var humanize = this.humanizer(this.options.speed);
        this.timeout = setTimeout(function () {
            _this.toggleBlinking(false);
            if (_this.strPos === _this.textContent.length) {
                _this.doneTyping();
            }
            else {
                _this.keepTyping();
            }
        }, humanize);
    };
    Typed.prototype.keepTyping = function () {
        if (this.strPos === 0) {
            this.toggleBlinking(false);
        }
        this.strPos += 1;
        var nextString = this.textContent.substr(0, this.strPos);
        this.replaceText(nextString);
        this.typewrite();
    };
    Typed.prototype.doneTyping = function () {
        this.toggleBlinking(true);
        if (this.textContent.length === this.strPos) {
            this.complete();
        }
    };
    Typed.prototype.complete = function () {
        if (this.options.hideCursorOnComplete) {
            this.removeCursor();
        }
        this.typingComplete = true;
        this.options.onComplete();
    };
    Typed.prototype.restart = function () {
        if (!this.typingComplete) {
            return;
        }
        clearTimeout(this.timeout);
        this.replaceText('');
        this.removeCursor();
        this.strPos = 0;
        this.typingComplete = false;
        this.begin();
    };
    Typed.prototype.insertCursor = function () {
        if (this.cursor) {
            return;
        }
        this.cursor = document.createElement('span');
        this.cursor.className = 'typed-cursor';
        this.cursor.innerHTML = this.cursorCharacter;
        var retVal = this.element.parentNode.insertBefore(this.cursor, this.element.nextSibling) && this.element.parentNode;
    };
    Typed.prototype.removeCursor = function () {
        if (this.cursor && this.cursor.parentNode) {
            this.cursor.parentNode.removeChild(this.cursor);
            this.cursor = null;
        }
    };
    Typed.prototype.replaceText = function (str) {
        this.element.textContent = str;
    };
    Typed.prototype.humanizer = function (speed) {
        return Math.round(Math.random() * speed / 2) + speed;
    };
    Typed.prototype.toggleBlinking = function (isBlinking) {
        if (!this.cursor) {
            return;
        }
        if (this.cursorBlinking === isBlinking) {
            return;
        }
        this.cursorBlinking = this.options.hideCursor == false;
        var status = isBlinking ? 'infinite' : 0;
        this.cursor.style.animationIterationCount = status;
    };
    Typed.prototype.appendAnimationCss = function () {
        if (this.options.showCursor) {
            if (document.head.querySelector('#typing')) {
                return;
            }
            var css = document.createElement('style');
            css.type = 'text/css';
            css.id = 'typing';
            var innerCss = "\n                .typed-cursor{\n                    opacity: 1;\n                    animation: typedjsBlink 0.7s infinite;\n                    -webkit-animation: typedjsBlink 0.7s infinite;\n                    animation: typedjsBlink 0.7s infinite;\n                }\n                @keyframes typedjsBlink{\n                    50% { opacity: 0.0; }\n                }\n                @-webkit-keyframes typedjsBlink{\n                    0% { opacity: 1; }\n                    50% { opacity: 0.0; }\n                    100% { opacity: 1; }\n                }\n            ";
            css.innerHTML = innerCss;
            document.head.appendChild(css);
        }
    };
    return Typed;
}());

//# sourceMappingURL=typed.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-toolbar></app-main-toolbar>\r\n\r\n<ion-grid no-padding class=\"grid\">\r\n  <ion-row class=\"full-height\">\r\n    <ion-col class=\"menu-column vertical-align\" size-sm=\"1\">\r\n      <ion-menu-button size=\"large\"></ion-menu-button>\r\n    </ion-col>\r\n    <ion-col class=\"photo-column\" size=\"12\" size-md=\"7\">\r\n      <div @insertfromBottom>\r\n        <img src=\"assets/noirmoutier_from_iss.jpg\" alt=\"\">\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"12\" size-md=\"4\">\r\n      <ion-row class=\"ion-justify-content-end ion-align-items-center display-logo\">\r\n        <ion-text>Le Toucan</ion-text>\r\n        <div id=\"logo-wrap\">\r\n          <img src=\"assets/toucan.PNG\" alt=\"Au Toucan\">\r\n        </div>\r\n      </ion-row>\r\n      <ion-col class=\"actions-column flex-no-wrap\">\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <div class=\"ion-text-center\">\r\n            <ion-text color=\"dark\">\r\n              <h1 [ng-typed]=\"typeWriterOptions\">Bienvenue à Noirmoutier</h1>\r\n            </ion-text>\r\n          </div>\r\n          <ion-row class=\"full-width\" @insertActionButtons>\r\n            <ion-col class=\"ion-text-center\">\r\n              <ion-button fill=\"outline\" color=\"dark\" [routerLink]=\"['/book']\">\r\n                Réserver\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col class=\"ion-text-center\">\r\n              <ion-button fill=\"outline\" color=\"dark\">Voir la maison</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ng_typed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-typed */ "./node_modules/ng-typed/__ivy_ngcc__/index.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                ng_typed__WEBPACK_IMPORTED_MODULE_6__["NgTypedModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ])
            ],
            declarations: [
                _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"],
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-height {\n  height: 100%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.vertical-align {\n  align-items: center;\n}\n\n.grid {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.menu-column {\n  display: flex;\n  height: 100%;\n}\n\n.photo-column {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.actions-column {\n  height: 80%;\n  display: flex;\n  align-items: center;\n}\n\n.flex-no-wrap {\n  flex-wrap: nowrap;\n}\n\n.display-logo {\n  display: flex;\n}\n\n@media screen and (max-width: 768px) {\n  .menu-column {\n    display: none;\n  }\n  .full-height {\n    height: 85%;\n  }\n  .display-logo {\n    display: none;\n  }\n  .photo-column {\n    height: auto;\n    display: flex;\n    align-items: center;\n    -webkit-padding-start: 0;\n            padding-inline-start: 0;\n    -webkit-padding-end: 0;\n            padding-inline-end: 0;\n  }\n  .actions-column {\n    display: flex;\n    align-items: center;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHNjaHVsXFxEb2N1bWVudHNcXEF1VG91Y2FuL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7QUNDaEI7O0FERUE7RUFDSSxXQUFXO0FDQ2Y7O0FERUE7RUFDSSxtQkFBbUI7QUNDdkI7O0FERUE7RUFDSSxjQUFjO0VBQ2QsZUFBZTtBQ0NuQjs7QURFQTtFQUNJLGFBQWE7RUFDYixZQUFZO0FDQ2hCOztBREVBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUNDdkI7O0FERUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtBQ0N2Qjs7QURFQTtFQUNJLGlCQUFpQjtBQ0NyQjs7QURFQTtFQUNJLGFBQWE7QUNDakI7O0FERUE7RUFDSTtJQUNJLGFBQWE7RUNDbkI7RURFRTtJQUNJLFdBQVc7RUNBakI7RURHRTtJQUNJLGFBQWE7RUNEbkI7RURJRTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsc0JBQXFCO1lBQXJCLHFCQUFxQjtFQ0YzQjtFREtFO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtFQ0h6QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udmVydGljYWwtYWxpZ24ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmdyaWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5tZW51LWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucGhvdG8tY29sdW1uIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aW9ucy1jb2x1bW4ge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtbm8td3JhcCB7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuLmRpc3BsYXktbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgIHtcclxuICAgIC5tZW51LWNvbHVtbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZnVsbC1oZWlnaHQge1xyXG4gICAgICAgIGhlaWdodDogODUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXNwbGF5LWxvZ28ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBob3RvLWNvbHVtbiB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbnMtY29sdW1uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCIuZnVsbC1oZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52ZXJ0aWNhbC1hbGlnbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ncmlkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLm1lbnUtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGhvdG8tY29sdW1uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWN0aW9ucy1jb2x1bW4ge1xuICBoZWlnaHQ6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXgtbm8td3JhcCB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uZGlzcGxheS1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1lbnUtY29sdW1uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5mdWxsLWhlaWdodCB7XG4gICAgaGVpZ2h0OiA4NSU7XG4gIH1cbiAgLmRpc3BsYXktbG9nbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucGhvdG8tY29sdW1uIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgfVxuICAuYWN0aW9ucy1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");



var HomePage = /** @class */ (function () {
    function HomePage() {
        this.startAnimation = false;
        this.typeWriterOptions = { speed: 40, timeout: 1000, hideCursor: true };
    }
    HomePage.prototype.ngOnInit = function () {
        this.startAnimation = true;
    };
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('insertActionButtons', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s 2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.4 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.8 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                        ])),
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('balloonEffect', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(0.3)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms 200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(1)' }))
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('insertfromBottom', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateY(30%)',
                            opacity: 0.2
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms 200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'none',
                            opacity: 1
                        }))
                    ])
                ]),
            ],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map