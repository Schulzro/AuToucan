(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-booking-my-booking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-booking/my-booking.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-booking/my-booking.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid no-padding class=\"grid ion-margin-bottom\">\n  <ion-row class=\"full-height\">\n    <ion-col class=\"menu-column vertical-align\" size-sm=\"1\">\n      <ion-menu-button size=\"large\"></ion-menu-button>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"7\" class=\"photo-column vertical-align\" no-padding>\n      <ion-menu-button color=\"light\" size=\"large\" class=\"mobile-menu-button-position ion-float-left\"></ion-menu-button>\n      <div id=\"photo-column-picture\">\n        <img src=\"assets/Anse_Rouge_AS.jpeg\" alt=\"\">\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"4\">\n      <ion-row>\n        <ion-col class=\"ion-justify-content-end ion-align-items-center display-logo\">\n          <ion-text>Le Toucan</ion-text>\n          <div id=\"logo-wrap\">\n            <img src=\"assets/toucan.PNG\" alt=\"Au Toucan\">\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-center\" *ngIf=\"!myBooking\">\n          <div class=\"danger-message\" *ngIf=\"searchBookingFailure\">\n            <ion-text color=\"danger\"> Une erreur est survenue avec votre réservation. Veuillez réessayer.</ion-text>\n          </div>\n          <p>Bonjour</p>\n          <p>Entrez votre réference de réservation pour continuer s'il vous plait</p>\n          <div class=\"reference-input\">\n            <ion-input placeholder=\"Réference\" [(ngModel)]=\"reference\" required></ion-input>\n          </div>\n          <ion-button [disabled]=\"!reference\" (click)=\"searchBooking()\">OK</ion-button>\n        </ion-col>\n        <ion-col *ngIf=\"!!myBooking\">\n          <app-recap-booking [booking]=\"myBooking\" class=\"ion-margin-top\"></app-recap-booking>\n          <div class=\"ion-text-center\">\n            <ion-button>Modifier</ion-button>\n            <ion-button color=\"danger\" (click)=\"detele()\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"!myBooking\">\n        <ion-col class=\"ion-text-center\">\n          <p>La réference de réservation vous a été envoyé par mail lors de votre réservation</p>\n        </ion-col>\n      </ion-row>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>");

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
/* harmony default export */ __webpack_exports__["default"] = (".full-height {\n  height: 100%;\n}\n\n.grid {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.photo-column {\n  display: flex;\n  padding-right: 16px;\n}\n\n.vertical-align {\n  align-items: center;\n}\n\n.menu-column {\n  display: flex;\n  height: 100%;\n}\n\n.mobile-menu-button-position {\n  display: none;\n}\n\n.display-logo {\n  display: flex;\n}\n\n#logo-wrap {\n  width: 80px;\n  height: auto;\n}\n\n.reference-input {\n  border-width: 1px;\n  border-color: #ddd9d9;\n  border-style: solid;\n  width: 80%;\n  margin: 0 auto 1em;\n}\n\n@media screen and (max-width: 768px) {\n  .menu-column {\n    display: none;\n  }\n\n  .photo-column {\n    display: flex;\n    background-image: url('shore.jpg');\n    height: 30%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding-right: 0px;\n  }\n\n  #photo-column-picture {\n    display: none;\n  }\n\n  .mobile-menu-button-position {\n    display: block;\n    position: relative;\n    top: -30%;\n    left: 5%;\n  }\n\n  .display-logo {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BbGV4YW5kcmFTZWxlZS9Eb2N1bWVudHMvQmVuamkvQXVUb3VjYW4vc3JjL2FwcC9teS1ib29raW5nL215LWJvb2tpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9teS1ib29raW5nL215LWJvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRTtJQUNFLGFBQUE7RUNDSjs7RURFRTtJQUNFLGFBQUE7SUFDQSxrQ0FBQTtJQUNBLFdBQUE7SUFDQSwyQkFBQTtJQUNBLDRCQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtFQ0NKOztFREVFO0lBQ0UsYUFBQTtFQ0NKOztFREVFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7RUNDSjs7RURFRTtJQUNFLGFBQUE7RUNDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbXktYm9va2luZy9teS1ib29raW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLWhlaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAuZ3JpZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgLnBob3RvLWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIFxuICAudmVydGljYWwtYWxpZ24ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5tZW51LWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5tb2JpbGUtbWVudS1idXR0b24tcG9zaXRpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5kaXNwbGF5LWxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gICNsb2dvLXdyYXAge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5yZWZlcmVuY2UtaW5wdXQge1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogI2RkZDlkOTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG8gMWVtO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAubWVudS1jb2x1bW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIFxuICAgIC5waG90by1jb2x1bW4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaG9yZS5qcGdcIik7XG4gICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIH1cbiAgXG4gICAgI3Bob3RvLWNvbHVtbi1waWN0dXJlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICBcbiAgICAubW9iaWxlLW1lbnUtYnV0dG9uLXBvc2l0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAtMzAlO1xuICAgICAgbGVmdDogNSU7XG4gICAgfVxuICBcbiAgICAuZGlzcGxheS1sb2dvIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gICIsIi5mdWxsLWhlaWdodCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ucGhvdG8tY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLnZlcnRpY2FsLWFsaWduIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubW9iaWxlLW1lbnUtYnV0dG9uLXBvc2l0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRpc3BsYXktbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNsb2dvLXdyYXAge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmVmZXJlbmNlLWlucHV0IHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogI2RkZDlkOTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMWVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWVudS1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucGhvdG8tY29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9zaG9yZS5qcGdcIik7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cblxuICAjcGhvdG8tY29sdW1uLXBpY3R1cmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLW1lbnUtYnV0dG9uLXBvc2l0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMzAlO1xuICAgIGxlZnQ6IDUlO1xuICB9XG5cbiAgLmRpc3BsYXktbG9nbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */");

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