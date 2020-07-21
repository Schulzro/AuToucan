(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-booking-my-booking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-booking/my-booking.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-booking/my-booking.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid no-padding class=\"grid ion-margin-bottom\">\r\n  <ion-row class=\"full-height\">\r\n    <ion-col class=\"menu-column vertical-align\" size-sm=\"1\">\r\n      <ion-menu-button size=\"large\"></ion-menu-button>\r\n    </ion-col>\r\n    <ion-col size=\"12\" size-md=\"7\" class=\"photo-column vertical-align\" no-padding>\r\n      <ion-menu-button color=\"light\" size=\"large\" class=\"mobile-menu-button-position ion-float-left\"></ion-menu-button>\r\n      <div id=\"photo-column-picture\">\r\n        <img src=\"assets/Anse_Rouge_AS.jpeg\" alt=\"\">\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"12\" size-md=\"4\">\r\n      <ion-row>\r\n        <ion-col class=\"ion-justify-content-end ion-align-items-center display-logo\">\r\n          <ion-text>Le Toucan</ion-text>\r\n          <div id=\"logo-wrap\">\r\n            <img src=\"assets/toucan.PNG\" alt=\"Au Toucan\">\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\" *ngIf=\"!myBooking\">\r\n          <div class=\"danger-message\" *ngIf=\"searchBookingFailure\">\r\n            <ion-text color=\"danger\"> Une erreur est survenue avec votre réservation. Veuillez réessayer.</ion-text>\r\n          </div>\r\n          <p>Bonjour</p>\r\n          <p>Entrez votre réference de réservation pour continuer s'il vous plait</p>\r\n          <div class=\"reference-input\">\r\n            <ion-input placeholder=\"Réference\" [(ngModel)]=\"reference\" required></ion-input>\r\n          </div>\r\n          <ion-button [disabled]=\"!reference\" (click)=\"searchBooking()\">OK</ion-button>\r\n        </ion-col>\r\n        <ion-col *ngIf=\"!!myBooking\">\r\n          <app-recap-booking [booking]=\"myBooking\" class=\"ion-margin-top\"></app-recap-booking>\r\n          <div class=\"ion-text-center\">\r\n            <ion-button>Modifier</ion-button>\r\n            <ion-button color=\"danger\" (click)=\"detele()\">\r\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"!myBooking\">\r\n        <ion-col class=\"ion-text-center\">\r\n          <p>La réference de réservation vous a été envoyé par mail lors de votre réservation</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ "./src/app/my-booking/my-booking.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-booking/my-booking.module.ts ***!
  \*************************************************/
/*! exports provided: MyBookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBookingPageModule", function() { return MyBookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _my_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-booking.page */ "./src/app/my-booking/my-booking.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _my_booking_page__WEBPACK_IMPORTED_MODULE_6__["MyBookingPage"]
    }
];
var MyBookingPageModule = /** @class */ (function () {
    function MyBookingPageModule() {
    }
    MyBookingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_booking_page__WEBPACK_IMPORTED_MODULE_6__["MyBookingPage"]]
        })
    ], MyBookingPageModule);
    return MyBookingPageModule;
}());



/***/ }),

/***/ "./src/app/my-booking/my-booking.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-booking/my-booking.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-height {\n  height: 100%;\n}\n\n.grid {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.photo-column {\n  display: flex;\n  padding-right: 16px;\n}\n\n.vertical-align {\n  align-items: center;\n}\n\n.menu-column {\n  display: flex;\n  height: 100%;\n}\n\n.mobile-menu-button-position {\n  display: none;\n}\n\n.display-logo {\n  display: flex;\n}\n\n#logo-wrap {\n  width: 80px;\n  height: auto;\n}\n\n.reference-input {\n  border-width: 1px;\n  border-color: #ddd9d9;\n  border-style: solid;\n  width: 80%;\n  margin: 0 auto 1em;\n}\n\n@media screen and (max-width: 768px) {\n  .menu-column {\n    display: none;\n  }\n  .photo-column {\n    display: flex;\n    background-image: url('shore.jpg');\n    height: 30%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding-right: 0px;\n  }\n  #photo-column-picture {\n    display: none;\n  }\n  .mobile-menu-button-position {\n    display: block;\n    position: relative;\n    top: -30%;\n    left: 5%;\n  }\n  .display-logo {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktYm9va2luZy9DOlxcVXNlcnNcXHNjaHVsXFxEb2N1bWVudHNcXEF1VG91Y2FuL3NyY1xcYXBwXFxteS1ib29raW5nXFxteS1ib29raW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXktYm9va2luZy9teS1ib29raW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7QUNDaEI7O0FERUU7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQ0NuQjs7QURFRTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUNDdkI7O0FERUU7RUFDRSxtQkFBbUI7QUNDdkI7O0FERUU7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQ0NoQjs7QURFRTtFQUNFLGFBQWE7QUNDakI7O0FERUU7RUFDRSxhQUFhO0FDQ2pCOztBREVFO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUNDaEI7O0FERUU7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0FDQ3RCOztBREVFO0VBQ0U7SUFDRSxhQUFhO0VDQ2pCO0VERUU7SUFDRSxhQUFhO0lBQ2Isa0NBQStDO0lBQy9DLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUNBdEI7RURHRTtJQUNFLGFBQWE7RUNEakI7RURJRTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7RUNGWjtFREtFO0lBQ0UsYUFBYTtFQ0hqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbXktYm9va2luZy9teS1ib29raW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmlkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLnBob3RvLWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLnZlcnRpY2FsLWFsaWduIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51LWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubW9iaWxlLW1lbnUtYnV0dG9uLXBvc2l0aW9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNwbGF5LWxvZ28ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgI2xvZ28td3JhcCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5yZWZlcmVuY2UtaW5wdXQge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZGQ5ZDk7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvIDFlbTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubWVudS1jb2x1bW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnBob3RvLWNvbHVtbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaG9yZS5qcGdcIik7XHJcbiAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICBcclxuICAgICNwaG90by1jb2x1bW4tcGljdHVyZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubW9iaWxlLW1lbnUtYnV0dG9uLXBvc2l0aW9uIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtMzAlO1xyXG4gICAgICBsZWZ0OiA1JTtcclxuICAgIH1cclxuICBcclxuICAgIC5kaXNwbGF5LWxvZ28ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCIuZnVsbC1oZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ncmlkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnBob3RvLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi52ZXJ0aWNhbC1hbGlnbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW51LWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1vYmlsZS1tZW51LWJ1dHRvbi1wb3NpdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kaXNwbGF5LWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jbG9nby13cmFwIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnJlZmVyZW5jZS1pbnB1dCB7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6ICNkZGQ5ZDk7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvIDFlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1lbnUtY29sdW1uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5waG90by1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3Nob3JlLmpwZ1wiKTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuICAjcGhvdG8tY29sdW1uLXBpY3R1cmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm1vYmlsZS1tZW51LWJ1dHRvbi1wb3NpdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTMwJTtcbiAgICBsZWZ0OiA1JTtcbiAgfVxuICAuZGlzcGxheS1sb2dvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/my-booking/my-booking.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-booking/my-booking.page.ts ***!
  \***********************************************/
/*! exports provided: MyBookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBookingPage", function() { return MyBookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_bookings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bookings.service */ "./src/app/services/bookings.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var MyBookingPage = /** @class */ (function () {
    function MyBookingPage(bookingService, alertCtrl, router) {
        this.bookingService = bookingService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.reference = '';
        this.searchBookingFailure = false;
    }
    MyBookingPage.prototype.ngOnInit = function () {
    };
    MyBookingPage.prototype.searchBooking = function () {
        var _this = this;
        this.bookingService.getByReference(this.reference)
            .then(function (booking) {
            _this.myBooking = booking;
            _this.searchBookingFailure = false;
        })
            .catch(function (error) {
            console.error(error);
            _this.searchBookingFailure = !_this.searchBookingFailure;
        });
    };
    MyBookingPage.prototype.presentDeleteAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Supprimer',
                            message: 'Etes vous sur de vouloir supprmier votre réservation ?',
                            buttons: [
                                {
                                    text: 'Annuler',
                                    role: 'cancel',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Oui',
                                    handler: function () {
                                        _this.deleteBooking();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyBookingPage.prototype.detele = function () {
        this.presentDeleteAlert();
    };
    MyBookingPage.prototype.deleteBooking = function () {
        var _this = this;
        this.bookingService.delete(this.myBooking.id)
            .then(function (booking) {
            _this.router.navigate(['/home']).then(function () { return _this.myBooking = null; });
        })
            .catch(function (error) { return console.error(error); });
    };
    MyBookingPage.ctorParameters = function () { return [
        { type: _services_bookings_service__WEBPACK_IMPORTED_MODULE_2__["BookingsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    MyBookingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-booking',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-booking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-booking/my-booking.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-booking.page.scss */ "./src/app/my-booking/my-booking.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_bookings_service__WEBPACK_IMPORTED_MODULE_2__["BookingsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MyBookingPage);
    return MyBookingPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-booking-my-booking-module.js.map