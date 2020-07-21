(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-book-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid no-padding class=\"grid ion-margin-bottom\">\r\n  <ion-row class=\"full-height\">\r\n    <ion-col class=\"menu-column vertical-align\" size-sm=\"1\">\r\n      <ion-menu-button size=\"large\"></ion-menu-button>\r\n    </ion-col>\r\n    <ion-col size=\"12\" size-md=\"7\" class=\"photo-column vertical-align\" no-padding>\r\n      <ion-menu-button color=\"light\" size=\"large\" class=\"mobile-menu-button-position ion-float-left\"></ion-menu-button>\r\n      <div>\r\n        <img id=\"photo-column-picture\" src=\"assets/Anse_Rouge_AS.jpeg\" alt=\"\">\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"12\" size-md=\"4\">\r\n      <ion-row>\r\n        <ion-col class=\"ion-justify-content-end ion-align-items-center display-logo\">\r\n          <ion-text>Le Toucan</ion-text>\r\n          <div id=\"logo-wrap\">\r\n            <img src=\"assets/toucan.PNG\" alt=\"Au Toucan\">\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-slides pager=\"false\" #bookingSlider>\r\n        <ion-slide class=\"slide-flex-prop\">\r\n          <app-calendar class=\"calendar\" [bookings]=\"bookings\" [reset]=\"resetSubject.asObservable()\" (canBook)=\"onBook($event)\"></app-calendar>\r\n          <div class=\"validation\">\r\n            <ion-button *ngIf=\"canBook;else notAvailableMessage\" [disabled]=\"!(booking.booking_start_date || booking.booking_end_date)\"\r\n              id=\"validationButton\" (click)=\"swipeRight()\">SUIV</ion-button>\r\n            <ng-template #notAvailableMessage>\r\n              <div class=\"danger-message\">\r\n                <ion-text color=\"danger\"> La période sélectionnée n'est pas libre. Veuillez choisir d'autres dates\r\n                </ion-text>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide class=\"slide-flex-prop\">\r\n          <app-profileformbooking class=\"slide-component-width ion-margin-top\" [reset]=\"resetSubject.asObservable()\"></app-profileformbooking>\r\n          <div>\r\n              <ion-button fill=\"outline\" class=\"ion-margin-right\" (click)=\"swipeLeft()\">PREV</ion-button>\r\n              <ion-button class=\"suiv-margin-left\" [disabled]=\"!(booking.name && booking.number_of_persons)\" (click)=\"swipeRight()\">SUIV</ion-button>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide class=\"slide-flex-prop\">\r\n            <app-contactformbooking class=\"slide-component-width ion-margin-top\" [reset]=\"resetSubject.asObservable()\"></app-contactformbooking>  \r\n          <div>\r\n              <ion-button fill=\"outline\" class=\"ion-margin-right\" (click)=\"swipeLeft()\">PREV</ion-button>\r\n              <ion-button class=\"suiv-margin-left\" [disabled]=\"!(booking.phone_number && booking.email)\" (click)=\"swipeRight()\">SUIV</ion-button>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide class=\"slide-flex-prop\">\r\n          <div class=\"danger-message\" *ngIf=\"bookingFailure\">\r\n            <ion-text color=\"danger\"> Une erreur est survenue avec votre réservation. Veuillez réessayer.</ion-text>\r\n          </div>\r\n          <app-recap-booking [booking]=\"booking\" class=\"slide-component-width ion-margin-top\"></app-recap-booking>\r\n          <div>\r\n              <ion-button fill=\"outline\" class=\"ion-margin-right\" (click)=\"swipeLeft()\">PREV</ion-button>\r\n              <ion-button (click)=\"book()\">Réserver</ion-button>\r\n          </div>\r\n        </ion-slide>\r\n        <ion-slide class=\"slide-flex-prop\">\r\n          <app-booking-success class=\"slide-component-width ion-margin-top\" [newBooking]=\"bookingCreated\"></app-booking-success>\r\n          <div>\r\n            <ion-button (click)=\"goToHomePage()\"> Aller à l'accueil</ion-button>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/booking-success/booking-success.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/booking-success/booking-success.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  Merci d'avoir réservé. Ce numéro de référence <strong>{{newBooking?.reference}}</strong> vous permettra de gérer votre réservation. \r\n  Ouvrir le menu et entrer dans la catégorie ma réservation pour modifier ou supprimer votre reservation jusqu'à 1 semaine \r\n  avant le début de la réservation.\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/calendar/calendar.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/calendar/calendar.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <div class=\"ion-text-center bold-text\">\r\n        <ion-text> Combien de temps voulez-vous rester ? </ion-text>\r\n      </div>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col>\r\n        <ion-text color=\"dark bold-text big-text\">{{ monthName }} {{ year }}</ion-text>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button fill=\"clear\" (click)=\"pastMonth()\">\r\n          <ion-icon slot=\"icon-only\" mode=\"ios\" name=\"arrow-dropleft\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" (click)=\"futureMonth()\" class=\"ion-no-padding\">\r\n          <ion-icon slot=\"icon-only\" mode=\"ios\" name=\"arrow-dropright\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <div id=\"mobile-calendar\">\r\n        <ul class=\"calendar-grid\">\r\n          <li class=\"week-days\">L</li>\r\n          <li class=\"week-days\">M</li>\r\n          <li class=\"week-days\">M</li>\r\n          <li class=\"week-days\">J</li>\r\n          <li class=\"week-days\">V</li>\r\n          <li class=\"week-days\">S</li>\r\n          <li class=\"week-days\">D</li>\r\n        </ul>\r\n        <ul class=\"calendar-grid\">\r\n          <ion-button #calendarDay size=\"small\" fill=\"clear\" *ngFor=\"let day of days; let i = index\"\r\n            appCalendarStart appCalendarSelectDay [calendarStartDayNumber]=\"calendarStartDateNumber\"\r\n            [calendarIndex]=\"i\" class=\"calendar-day bold-text\" [ngClass]=\"{'today-calendar': isToday(day)}\"\r\n            (click)=\"selectDays(day)\">\r\n            {{ day.format('D') }}\r\n          </ion-button>\r\n        </ul>\r\n      </div>\r\n    </ion-row>\r\n  </ion-grid>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contactformbooking/contactformbooking.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contactformbooking/contactformbooking.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #contactForm=\"ngForm\">\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Contact</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Votre Email <ion-text color=\"danger\">*</ion-text>\r\n      </ion-label>\r\n      <ion-input type=\"mail\" name=\"email\" [(ngModel)]=\"email\" (ionBlur)=\"saveEmail()\" required></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Votre Numero de Téléphone <ion-text color=\"danger\">*</ion-text>\r\n      </ion-label>\r\n      <ion-input type=\"tel\" name=\"tel\" [(ngModel)]=\"tel\" (ionBlur)=\"saveTel()\" required></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profileformbooking/profileformbooking.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profileformbooking/profileformbooking.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #profileForm=ngForm>\r\n  <ion-list class=\"profile-list\">\r\n    <ion-list-header>\r\n      <ion-label>Profil</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Votre Nom <ion-text color=\"danger\">*</ion-text>\r\n      </ion-label>\r\n      <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"model.name\" (ionBlur)=\"saveName()\" required #name=\"ngModel\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"picker-margin\">\r\n      <ion-button fill=\"clear\" (click)=\"showPicker()\">Nombre de pers. <ion-text color=\"danger\">*</ion-text>\r\n      </ion-button>\r\n      <div *ngIf=\"model.number_of_persons\">\r\n        <ion-text>{{model.number_of_persons}} X</ion-text>\r\n        <ion-icon name=\"man\"></ion-icon>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Commentaires</ion-label>\r\n      <ion-textarea name=\"comments\" [(ngModel)]=\"model.comments\" (ionBlur)=\"saveComments()\"></ion-textarea>\r\n    </ion-item>\r\n  </ion-list>\r\n</form>");

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/internal/util/identity.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./src/app/book/book.module.ts":
/*!*************************************!*\
  !*** ./src/app/book/book.module.ts ***!
  \*************************************/
/*! exports provided: BookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPageModule", function() { return BookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _book_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book.page */ "./src/app/book/book.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _directives_calendar_start_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/calendar-start.directive */ "./src/app/directives/calendar-start.directive.ts");
/* harmony import */ var _directives_calendar_select_day_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/calendar-select-day.directive */ "./src/app/directives/calendar-select-day.directive.ts");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/calendar/calendar.component */ "./src/app/components/calendar/calendar.component.ts");
/* harmony import */ var _components_profileformbooking_profileformbooking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/profileformbooking/profileformbooking.component */ "./src/app/components/profileformbooking/profileformbooking.component.ts");
/* harmony import */ var _components_contactformbooking_contactformbooking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/contactformbooking/contactformbooking.component */ "./src/app/components/contactformbooking/contactformbooking.component.ts");
/* harmony import */ var _components_booking_success_booking_success_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/booking-success/booking-success.component */ "./src/app/components/booking-success/booking-success.component.ts");














var routes = [
    {
        path: '',
        component: _book_page__WEBPACK_IMPORTED_MODULE_6__["BookPage"]
    }
];
var BookPageModule = /** @class */ (function () {
    function BookPageModule() {
    }
    BookPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _book_page__WEBPACK_IMPORTED_MODULE_6__["BookPage"],
                _directives_calendar_start_directive__WEBPACK_IMPORTED_MODULE_8__["CalendarStartDirective"],
                _directives_calendar_select_day_directive__WEBPACK_IMPORTED_MODULE_9__["CalendarSelectDayDirective"],
                _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_10__["CalendarComponent"],
                _components_profileformbooking_profileformbooking_component__WEBPACK_IMPORTED_MODULE_11__["ProfileformbookingComponent"],
                _components_contactformbooking_contactformbooking_component__WEBPACK_IMPORTED_MODULE_12__["ContactformbookingComponent"],
                _components_booking_success_booking_success_component__WEBPACK_IMPORTED_MODULE_13__["BookingSuccessComponent"],
            ],
            providers: []
        })
    ], BookPageModule);
    return BookPageModule;
}());



/***/ }),

/***/ "./src/app/book/book.page.scss":
/*!*************************************!*\
  !*** ./src/app/book/book.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-height {\n  height: 100%;\n}\n\n.grid {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.calendar-row {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.calendar-column {\n  border: 1px solid #ddd9d9;\n  border-radius: 10%;\n}\n\n.vertical-align {\n  align-items: center;\n}\n\n.menu-column {\n  display: flex;\n  height: 100%;\n}\n\n.mobile-menu-button-position {\n  display: none;\n}\n\n.change-month {\n  display: flex;\n  align-content: flex-end !important;\n}\n\n.display-logo {\n  display: flex;\n}\n\n#logo-wrap {\n  width: 80px;\n  height: auto;\n}\n\n.photo-column {\n  display: flex;\n  padding-right: 16px;\n}\n\n.slide-flex-prop {\n  display: flex;\n  flex-direction: column;\n}\n\n.suiv-margin-left {\n  margin-left: 1em;\n}\n\n.calendar {\n  width: 100%;\n}\n\n.validation {\n  width: 100%;\n}\n\n.slide-component-width {\n  width: 80%;\n}\n\n@media screen and (max-width: 768px) {\n  .menu-column {\n    display: none;\n  }\n  .photo-column {\n    display: flex;\n    background-image: url('port.jpeg');\n    height: auto;\n    max-height: 30%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding-right: 0px;\n  }\n  #photo-column-picture {\n    display: none;\n  }\n  .mobile-menu-button-position {\n    display: block;\n    position: relative;\n    top: -30%;\n    left: 5%;\n  }\n  .display-logo {\n    display: none;\n  }\n}\n\n@media screen and (max-height: 505px) {\n  .photo-column {\n    background-image: none;\n    background-color: var(--ion-color-primary);\n    max-height: 50px;\n    min-height: none;\n  }\n  .mobile-menu-button-position {\n    display: block;\n    position: relative;\n    top: 0%;\n    left: 5%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay9DOlxcVXNlcnNcXHNjaHVsXFxEb2N1bWVudHNcXEF1VG91Y2FuL3NyY1xcYXBwXFxib29rXFxib29rLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYm9vay9ib29rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUNDZDs7QURFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FDQ2pCOztBREVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQ0NwQjs7QURFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUNDcEI7O0FERUE7RUFDRSxtQkFBbUI7QUNDckI7O0FERUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQ0NkOztBREVBO0VBQ0UsYUFBYTtBQ0NmOztBREVBO0VBQ0ksYUFBYTtFQUNiLGtDQUFrQztBQ0N0Qzs7QURFQTtFQUNFLGFBQWE7QUNDZjs7QURFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FDQ2Q7O0FERUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FDQ3JCOztBREVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQ0N4Qjs7QURFQTtFQUNFLGdCQUFnQjtBQ0NsQjs7QURFQTtFQUNFLFdBQVc7QUNDYjs7QURFQTtFQUNFLFdBQVc7QUNDYjs7QURFQTtFQUNFLFVBQVU7QUNDWjs7QURFQTtFQUNFO0lBQ0UsYUFBYTtFQ0NmO0VERUE7SUFDRSxhQUFhO0lBQ2Isa0NBQStDO0lBQy9DLFlBQVk7SUFDWixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0VDQXBCO0VER0E7SUFDRSxhQUFhO0VDRGY7RURJQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7RUNGVjtFREtBO0lBQ0UsYUFBYTtFQ0hmO0FBQ0Y7O0FETUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QiwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQ0hsQjtFRE1BO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtFQ0pWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ib29rL2Jvb2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtaGVpZ2h0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jYWxlbmRhci1yb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuLmNhbGVuZGFyLWNvbHVtbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDlkOTtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1hbGlnbiB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnUtY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1vYmlsZS1tZW51LWJ1dHRvbi1wb3NpdGlvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNoYW5nZS1tb250aCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktbG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuI2xvZ28td3JhcCB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucGhvdG8tY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5zbGlkZS1mbGV4LXByb3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnN1aXYtbWFyZ2luLWxlZnR7XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG5cclxuLmNhbGVuZGFyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnZhbGlkYXRpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2xpZGUtY29tcG9uZW50LXdpZHRoIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tZW51LWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnBob3RvLWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3BvcnQuanBlZ1wiKTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDMwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIH1cclxuXHJcbiAgI3Bob3RvLWNvbHVtbi1waWN0dXJlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLW1lbnUtYnV0dG9uLXBvc2l0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMzAlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgfVxyXG5cclxuICAuZGlzcGxheS1sb2dvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTA1cHgpIHtcclxuICAucGhvdG8tY29sdW1uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogbm9uZTtcclxuICB9XHJcblxyXG4gIC5tb2JpbGUtbWVudS1idXR0b24tcG9zaXRpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgfVxyXG59XHJcbiIsIi5mdWxsLWhlaWdodCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2FsZW5kYXItcm93IHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmNhbGVuZGFyLWNvbHVtbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ5ZDk7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuLnZlcnRpY2FsLWFsaWduIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubW9iaWxlLW1lbnUtYnV0dG9uLXBvc2l0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNoYW5nZS1tb250aCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNwbGF5LWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jbG9nby13cmFwIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnBob3RvLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5zbGlkZS1mbGV4LXByb3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3Vpdi1tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG5cbi5jYWxlbmRhciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udmFsaWRhdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2xpZGUtY29tcG9uZW50LXdpZHRoIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1lbnUtY29sdW1uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5waG90by1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3BvcnQuanBlZ1wiKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogMzAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gICNwaG90by1jb2x1bW4tcGljdHVyZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubW9iaWxlLW1lbnUtYnV0dG9uLXBvc2l0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMzAlO1xuICAgIGxlZnQ6IDUlO1xuICB9XG4gIC5kaXNwbGF5LWxvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDUwNXB4KSB7XG4gIC5waG90by1jb2x1bW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7XG4gICAgbWluLWhlaWdodDogbm9uZTtcbiAgfVxuICAubW9iaWxlLW1lbnUtYnV0dG9uLXBvc2l0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwJTtcbiAgICBsZWZ0OiA1JTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/book/book.page.ts":
/*!***********************************!*\
  !*** ./src/app/book/book.page.ts ***!
  \***********************************/
/*! exports provided: BookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPage", function() { return BookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_bookings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bookings.service */ "./src/app/services/bookings.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var BookPage = /** @class */ (function () {
    function BookPage(bookingService, router) {
        var _this = this;
        this.bookingService = bookingService;
        this.router = router;
        this.bookings = [];
        this.canBook = true;
        this.bookingFailure = false;
        this.resetSliderData = false;
        this.resetSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.bookingService.booking$.subscribe(function (booking) { return _this.booking = booking; });
    }
    BookPage.prototype.ionViewWillEnter = function () {
        this.bookingSlider.lockSwipes(true);
        this.getBookings();
    };
    BookPage.prototype.onBook = function (canBook) {
        this.canBook = canBook;
    };
    BookPage.prototype.swipeRight = function () {
        this.bookingSlider.lockSwipes(false);
        this.bookingSlider.slideNext();
        this.bookingSlider.lockSwipes(true);
    };
    BookPage.prototype.swipeLeft = function () {
        this.bookingSlider.lockSwipes(false);
        this.bookingSlider.slidePrev();
        this.bookingSlider.lockSwipes(true);
    };
    BookPage.prototype.book = function () {
        var _this = this;
        this.bookingService.book().toPromise()
            .then(function (booking) {
            _this.bookingCreated = booking;
            _this.swipeRight();
        })
            .catch(function () { return _this.bookingFailure = true; });
    };
    BookPage.prototype.goToHomePage = function () {
        var _this = this;
        this.router.navigate(['/home']).then(function () {
            _this.bookingService.emptyBooking();
            _this.resetSubject.next();
            _this.bookingSlider.lockSwipes(false);
            _this.bookingSlider.slideTo(0)
                .then(function () {
                _this.bookingSlider.lockSwipes(true);
            });
        });
    };
    BookPage.prototype.getBookings = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var bookings, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.bookingService.getAll().toPromise()];
                    case 1:
                        bookings = _a.sent();
                        return [2 /*return*/, this.bookings = bookings];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, console.error(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BookPage.ctorParameters = function () { return [
        { type: _services_bookings_service__WEBPACK_IMPORTED_MODULE_2__["BookingsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bookingSlider'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], BookPage.prototype, "bookingSlider", void 0);
    BookPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./book.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book/book.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./book.page.scss */ "./src/app/book/book.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_bookings_service__WEBPACK_IMPORTED_MODULE_2__["BookingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BookPage);
    return BookPage;
}());



/***/ }),

/***/ "./src/app/components/booking-success/booking-success.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/booking-success/booking-success.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9va2luZy1zdWNjZXNzL2Jvb2tpbmctc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/booking-success/booking-success.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/booking-success/booking-success.component.ts ***!
  \*************************************************************************/
/*! exports provided: BookingSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingSuccessComponent", function() { return BookingSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var BookingSuccessComponent = /** @class */ (function () {
    function BookingSuccessComponent() {
    }
    BookingSuccessComponent.prototype.ngOnInit = function () { };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], BookingSuccessComponent.prototype, "newBooking", void 0);
    BookingSuccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booking-success',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./booking-success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/booking-success/booking-success.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./booking-success.component.scss */ "./src/app/components/booking-success/booking-success.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BookingSuccessComponent);
    return BookingSuccessComponent;
}());



/***/ }),

/***/ "./src/app/components/calendar/calendar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".week-days {\n  list-style: none;\n  margin-left: 0;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  color: #bfbdbd;\n}\n\n.bold-text {\n  font-weight: bold;\n  color: #3f3c3c;\n}\n\n.big-text {\n  font-size: 20px;\n}\n\n.calendar-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  max-width: 1024px;\n  width: 100%;\n  padding: 0;\n}\n\n.calendar-day {\n  margin-left: 0;\n  margin-right: 0;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n#mobile-calendar {\n  width: 100%;\n}\n\n.today-calendar {\n  color: var(--ion-color-primary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9DOlxcVXNlcnNcXHNjaHVsXFxEb2N1bWVudHNcXEF1VG91Y2FuL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYWxlbmRhclxcY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7QUNDbEI7O0FERUU7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQ0NsQjs7QURFRTtFQUNFLGVBQWU7QUNDbkI7O0FER0U7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsVUFBVTtBQ0FkOztBREdFO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtBQ0EzQjs7QURHRTtFQUNFLFdBQVc7QUNBZjs7QURHRTtFQUNFLCtCQUErQjtBQ0FuQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2Vlay1kYXlzIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2JmYmRiZDtcclxuICB9XHJcblxyXG4gIC5ib2xkLXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzNmM2MzYztcclxuICB9XHJcbiAgXHJcbiAgLmJpZy10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5jYWxlbmRhci1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xyXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYWxlbmRhci1kYXkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAjbW9iaWxlLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudG9kYXktY2FsZW5kYXIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgIiwiLndlZWstZGF5cyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNiZmJkYmQ7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzZjNjM2M7XG59XG5cbi5iaWctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNhbGVuZGFyLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jYWxlbmRhci1kYXkge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI21vYmlsZS1jYWxlbmRhciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9kYXktY2FsZW5kYXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/calendar/calendar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.ts ***!
  \***********************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/calendar.service */ "./src/app/services/calendar.service.ts");
/* harmony import */ var src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bookings.service */ "./src/app/services/bookings.service.ts");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_5__);






var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calendarService, bookingService) {
        this.calendarService = calendarService;
        this.bookingService = bookingService;
        this._bookings = [];
        this.canBook = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.monthsNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
            'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        this.monthNumber = moment__WEBPACK_IMPORTED_MODULE_2__().month();
        this.monthName = this.monthsNames[this.monthNumber];
        this.year = moment__WEBPACK_IMPORTED_MODULE_2__().year();
        this.viewDate = new Date();
        this.highlightedCalendarDays = [];
        this.days = [];
    }
    Object.defineProperty(CalendarComponent.prototype, "bookings", {
        get: function () {
            return this._bookings;
        },
        set: function (bookings) {
            this._bookings = bookings || [];
            this.initializeCalendarView();
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetSub = this.reset.subscribe(function () {
            _this.booking_start_date = null;
            _this.booking_end_date = null;
            _this.initializeCalendarView();
        });
    };
    CalendarComponent.prototype.ngOnDestroy = function () {
        this.resetSub.unsubscribe();
    };
    CalendarComponent.prototype.futureMonth = function () {
        if (this.monthNumber === 11) {
            this.year++;
            this.monthNumber = -1;
        }
        this.monthNumber = this.monthNumber + 1;
        this.initializeCalendarView();
    };
    CalendarComponent.prototype.pastMonth = function () {
        if (this.monthNumber === 0) {
            this.year--;
            this.monthNumber = 12;
        }
        this.monthNumber = this.monthNumber - 1;
        this.initializeCalendarView();
    };
    CalendarComponent.prototype.initializeCalendarView = function () {
        var _this = this;
        this.monthName = this.monthsNames[this.monthNumber];
        this.days = Array.from({ length: moment__WEBPACK_IMPORTED_MODULE_2__().month(this.monthNumber).daysInMonth() }, function (x, i) { return moment__WEBPACK_IMPORTED_MODULE_2__().month(_this.monthNumber).startOf('month').add(i, 'days'); });
        this.calendarStartDateNumber = this.days[0].day();
        setTimeout(function () {
            _this.hightlightSelectedDays();
            _this.hightlightPeriodBetweenSelectedDays();
            _this.disableBookedDays();
        }, 500);
    };
    CalendarComponent.prototype.isToday = function (day) {
        return moment__WEBPACK_IMPORTED_MODULE_2__().isSame(day, 'day');
    };
    CalendarComponent.prototype.getCalendarDayRef = function (day) {
        return this.calendarDayRefs.filter(function (calendarDayRef) { return calendarDayRef.nativeElement.innerText === day + ''; })[0];
    };
    CalendarComponent.prototype.hightlightSelectedDays = function () {
        var monthNumberString = (this.monthNumber + 1).toString();
        if (this.booking_start_date && this.booking_start_date.format('M') === monthNumberString) {
            this.calendarService.selectDay(this.getCalendarDayRef(parseInt(this.booking_start_date.format('D'), 10)));
        }
        if (this.booking_end_date && this.booking_end_date.format('M') === monthNumberString) {
            this.calendarService.selectDay(this.getCalendarDayRef(parseInt(this.booking_end_date.format('D'), 10)));
        }
    };
    CalendarComponent.prototype.hightlightPeriodBetweenSelectedDays = function () {
        if (this.highlightedCalendarDays && this.highlightedCalendarDays.length) {
            this.highlightedCalendarDays.forEach(function (el) { return el.nativeElement.style.background = '#ffffff'; });
        }
        this.highlightedCalendarDays = this.getCalendarDaysPeriod(this.booking_start_date, this.booking_end_date);
        if (this.highlightedCalendarDays && this.highlightedCalendarDays.length) {
            this.highlightedCalendarDays.forEach(function (el) { return el.nativeElement.style.background = '#d4f7f7'; });
        }
    };
    CalendarComponent.prototype.disableBookedDays = function () {
        var _this = this;
        var monthNumberString = (this.monthNumber + 1).toString();
        this.bookings
            .filter(function (booking) { return booking &&
            (booking.booking_start_date.format('M') === monthNumberString ||
                booking.booking_end_date.format('M') === monthNumberString); })
            .forEach(function (booking) {
            _this.getCalendarDaysPeriod(booking.booking_start_date, booking.booking_end_date).forEach(function (calendarDay) {
                _this.calendarService.disableDay(calendarDay);
            });
        });
    };
    CalendarComponent.prototype.getCalendarDaysPeriod = function (booking_start, booking_end) {
        var monthNumberString = (this.monthNumber + 1).toString();
        if (!booking_end ||
            !booking_start ||
            (booking_end.format('M') !== monthNumberString && booking_start.format('M') !== monthNumberString) ||
            booking_end.clone().subtract(1, 'days').isSame(booking_start, 'day')) {
            return;
        }
        var booking_start_index = booking_start.format('M') === monthNumberString ?
            this.calendarDayRefs.toArray().indexOf(this.getCalendarDayRef(parseInt(booking_start.format('D'), 10))) : 0;
        var booking_end_index = booking_end.format('M') === monthNumberString ? this.calendarDayRefs.toArray()
            .indexOf(this.getCalendarDayRef(parseInt(booking_end.format('D'), 10))) : this.calendarDayRefs.length;
        return this.calendarDayRefs.toArray().slice(booking_start_index, booking_end_index + 1);
    };
    CalendarComponent.prototype.selectDays = function (day) {
        var selected_day = moment__WEBPACK_IMPORTED_MODULE_2__().set({
            'year': this.year,
            'month': this.monthNumber,
            'date': parseInt(day.format('D'), 10)
        });
        if (!this.booking_start_date) {
            if (this.booking_end_date) {
                if (selected_day.isSame(this.booking_end_date, 'day')) {
                    this.booking_end_date = null;
                }
                else if (selected_day.isBefore(this.booking_end_date)) {
                    this.booking_start_date = selected_day;
                }
                else {
                    this.booking_start_date = this.booking_end_date;
                    this.booking_end_date = selected_day;
                }
            }
            else {
                this.booking_start_date = selected_day;
            }
        }
        else {
            if (this.booking_start_date && selected_day.isSame(this.booking_start_date, 'day')) {
                this.booking_start_date = null;
            }
            else if (this.booking_end_date && selected_day.isSame(this.booking_end_date, 'day')) {
                this.booking_end_date = null;
            }
            else if (this.booking_start_date && selected_day.isBefore(this.booking_start_date, 'day')) {
                if (!this.booking_end_date) {
                    this.booking_end_date = this.booking_start_date;
                    this.booking_start_date = selected_day;
                }
                else {
                    var firstBookingDay = parseInt(this.booking_start_date.format('D'), 10);
                    this.calendarService.selectDay(this.getCalendarDayRef(firstBookingDay));
                    this.booking_start_date = selected_day;
                }
            }
            else if (this.booking_start_date && selected_day.isAfter(this.booking_start_date, 'day')) {
                if (this.booking_end_date && this.booking_end_date.format('M') === (this.monthNumber + 1).toString()) {
                    var lastBookingDay = parseInt(this.booking_end_date.format('D'), 10);
                    this.calendarService.selectDay(this.getCalendarDayRef(lastBookingDay));
                }
                this.booking_end_date = selected_day;
            }
        }
        this.hightlightPeriodBetweenSelectedDays();
        this.bookingService.bookingStart = this.booking_start_date;
        this.bookingService.bookingEnd = this.booking_end_date;
        this.canBook.emit(this.isBookingFree());
    };
    CalendarComponent.prototype.isBookingFree = function () {
        var _this = this;
        return this.bookings && this.bookings.length && this.booking_start_date && this.booking_end_date ?
            !this.bookings.find(function (booking) {
                return booking.booking_start_date.isBetween(_this.booking_start_date, _this.booking_end_date, null, '[]') ||
                    booking.booking_end_date.isBetween(_this.booking_start_date, _this.booking_end_date, null, '[]');
            }) : true;
    };
    CalendarComponent.ctorParameters = function () { return [
        { type: src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"] },
        { type: src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_4__["BookingsService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], CalendarComponent.prototype, "reset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])
    ], CalendarComponent.prototype, "bookings", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CalendarComponent.prototype, "canBook", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('calendarDay', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], CalendarComponent.prototype, "calendarDayRefs", void 0);
    CalendarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/calendar/calendar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calendar.component.scss */ "./src/app/components/calendar/calendar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"], src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_4__["BookingsService"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/components/contactformbooking/contactformbooking.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/contactformbooking/contactformbooking.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdGZvcm1ib29raW5nL2NvbnRhY3Rmb3JtYm9va2luZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/contactformbooking/contactformbooking.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/contactformbooking/contactformbooking.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContactformbookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactformbookingComponent", function() { return ContactformbookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_bookings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bookings.service */ "./src/app/services/bookings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");





var ContactformbookingComponent = /** @class */ (function () {
    function ContactformbookingComponent(bookingService) {
        this.bookingService = bookingService;
        this.tel = '';
        this.email = '';
    }
    ContactformbookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetSub = this.reset.subscribe(function () {
            _this.tel = '';
            _this.email = '';
            _this.contactForm.reset();
        });
    };
    ContactformbookingComponent.prototype.ngOnDestroy = function () {
        this.resetSub.unsubscribe();
    };
    ContactformbookingComponent.prototype.saveTel = function () {
        this.bookingService.tel = this.tel;
    };
    ContactformbookingComponent.prototype.saveEmail = function () {
        this.bookingService.mail = this.email;
    };
    ContactformbookingComponent.ctorParameters = function () { return [
        { type: _services_bookings_service__WEBPACK_IMPORTED_MODULE_2__["BookingsService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], ContactformbookingComponent.prototype, "reset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contactForm'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ContactformbookingComponent.prototype, "contactForm", void 0);
    ContactformbookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactformbooking',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contactformbooking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contactformbooking/contactformbooking.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contactformbooking.component.scss */ "./src/app/components/contactformbooking/contactformbooking.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_bookings_service__WEBPACK_IMPORTED_MODULE_2__["BookingsService"]])
    ], ContactformbookingComponent);
    return ContactformbookingComponent;
}());



/***/ }),

/***/ "./src/app/components/profileformbooking/profileformbooking.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/profileformbooking/profileformbooking.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-list {\n  width: 100%;\n}\n\n.picker-margin {\n  margin-top: 1em;\n  margin-bottom: 1em;\n  --inner-border-width: 0;\n  --padding-start: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlZm9ybWJvb2tpbmcvQzpcXFVzZXJzXFxzY2h1bFxcRG9jdW1lbnRzXFxBdVRvdWNhbi9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZmlsZWZvcm1ib29raW5nXFxwcm9maWxlZm9ybWJvb2tpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZWZvcm1ib29raW5nL3Byb2ZpbGVmb3JtYm9va2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7QUNDZjs7QURFQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUJBQXFCO0VBQ3JCLGtCQUFnQjtBQ0NwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZWZvcm1ib29raW5nL3Byb2ZpbGVmb3JtYm9va2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5waWNrZXItbWFyZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG59IiwiLnByb2ZpbGUtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGlja2VyLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/profileformbooking/profileformbooking.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/profileformbooking/profileformbooking.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProfileformbookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileformbookingComponent", function() { return ProfileformbookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bookings.service */ "./src/app/services/bookings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");






var ProfileformbookingComponent = /** @class */ (function () {
    function ProfileformbookingComponent(pickerCtrl, bookingService) {
        this.pickerCtrl = pickerCtrl;
        this.bookingService = bookingService;
        this.model = {
            name: '',
            comments: '',
            number_of_persons: null
        };
    }
    ProfileformbookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetSub = this.reset.subscribe(function () {
            _this.model.name = '';
            _this.model.comments = '';
            _this.model.number_of_persons = null;
            _this.profileForm.reset();
        });
    };
    ProfileformbookingComponent.prototype.ngOnDestroy = function () {
        this.resetSub.unsubscribe();
    };
    ProfileformbookingComponent.prototype.saveName = function () {
        this.bookingService.name = this.model.name;
    };
    ProfileformbookingComponent.prototype.saveComments = function () {
        this.bookingService.comments = this.model.name;
    };
    ProfileformbookingComponent.prototype.showPicker = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var opts, picker;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = {
                            buttons: [
                                {
                                    text: 'Done'
                                }
                            ],
                            columns: [
                                {
                                    name: 'number_of_persons',
                                    options: [
                                        { text: '1', value: 1 },
                                        { text: '2', value: 2 },
                                        { text: '3', value: 3 },
                                        { text: '4', value: 4 },
                                        { text: '5', value: 5 },
                                        { text: '6', value: 6 },
                                        { text: '7', value: 7 },
                                        { text: '8', value: 8 },
                                        { text: '9', value: 9 },
                                        { text: '10', value: 10 }
                                    ]
                                }
                            ]
                        };
                        return [4 /*yield*/, this.pickerCtrl.create(opts)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        picker.onDidDismiss().then(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var col;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, picker.getColumn('number_of_persons')];
                                    case 1:
                                        col = _a.sent();
                                        this.model.number_of_persons = col.options[col.selectedIndex].value;
                                        this.bookingService.number_of_persons = this.model.number_of_persons;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileformbookingComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"] },
        { type: src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_3__["BookingsService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], ProfileformbookingComponent.prototype, "reset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('profileForm'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], ProfileformbookingComponent.prototype, "profileForm", void 0);
    ProfileformbookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profileformbooking',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profileformbooking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profileformbooking/profileformbooking.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profileformbooking.component.scss */ "./src/app/components/profileformbooking/profileformbooking.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"], src_app_services_bookings_service__WEBPACK_IMPORTED_MODULE_3__["BookingsService"]])
    ], ProfileformbookingComponent);
    return ProfileformbookingComponent;
}());



/***/ }),

/***/ "./src/app/directives/calendar-select-day.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/directives/calendar-select-day.directive.ts ***!
  \*************************************************************/
/*! exports provided: CalendarSelectDayDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarSelectDayDirective", function() { return CalendarSelectDayDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/calendar.service */ "./src/app/services/calendar.service.ts");



var CalendarSelectDayDirective = /** @class */ (function () {
    function CalendarSelectDayDirective(el, calendarService) {
        this.el = el;
        this.calendarService = calendarService;
    }
    CalendarSelectDayDirective.prototype.onClick = function () {
        this.calendarService.selectDay(this.el);
    };
    CalendarSelectDayDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _services_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], CalendarSelectDayDirective.prototype, "onClick", null);
    CalendarSelectDayDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCalendarSelectDay]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]])
    ], CalendarSelectDayDirective);
    return CalendarSelectDayDirective;
}());



/***/ }),

/***/ "./src/app/directives/calendar-start.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/calendar-start.directive.ts ***!
  \********************************************************/
/*! exports provided: CalendarStartDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarStartDirective", function() { return CalendarStartDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var CalendarStartDirective = /** @class */ (function () {
    function CalendarStartDirective(el) {
        this.el = el;
    }
    CalendarStartDirective.prototype.ngOnChanges = function () {
        if (this.calendarIndex === 0) {
            this.el.nativeElement.style.gridColumnStart = this.calendarStartDayNumber;
        }
    };
    CalendarStartDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CalendarStartDirective.prototype, "calendarStartDayNumber", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], CalendarStartDirective.prototype, "calendarIndex", void 0);
    CalendarStartDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCalendarStart]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CalendarStartDirective);
    return CalendarStartDirective;
}());



/***/ }),

/***/ "./src/app/services/calendar.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/calendar.service.ts ***!
  \**********************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var CalendarService = /** @class */ (function () {
    function CalendarService() {
    }
    CalendarService.prototype.selectDay = function (el) {
        if (el.nativeElement.getAttribute('fill') === 'clear') {
            el.nativeElement.setAttribute('fill', 'solid');
            el.nativeElement.style.color = 'white';
        }
        else {
            el.nativeElement.setAttribute('fill', 'clear');
            el.nativeElement.style.color = '#3f3c3c';
        }
    };
    CalendarService.prototype.disableDay = function (el) {
        el.nativeElement.setAttribute('disabled', true);
    };
    CalendarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CalendarService);
    return CalendarService;
}());



/***/ })

}]);
//# sourceMappingURL=book-book-module.js.map