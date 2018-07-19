webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * [Auto Generated] Created by :Carson. Chen
 */


// import {TouchID} from '@ionic-native';
/* HTML Template */
var LOCK_SCREEN_TEMPLATE = "\n      <div class=\"ILS_lock\" [ngClass]=\"!_showLockScreen ?  'ILS_lock-hidden' : ''\">\n        <div class=\"ILS_label-row\">\n          {{passcodeLabel}}\n        </div>\n        <div class=\"ILS_circles-row\" [ngClass]=\"passcodeWrong ?  'ILS_shake' : ''\">\n          <div class=\"ILS_circle\" [ngClass]=\" enteredPasscode.length>0 ? 'ILS_full' : ''\"></div>\n          <div class=\"ILS_circle\" [ngClass]=\" enteredPasscode.length>1 ? 'ILS_full' : ''\"></div>\n          <div class=\"ILS_circle\" [ngClass]=\" enteredPasscode.length>2 ? 'ILS_full' : ''\"></div>\n          <div class=\"ILS_circle\" [ngClass]=\" enteredPasscode.length>3 ? 'ILS_full' : ''\"></div>\n        </div>\n        <div class=\"ILS_numbers-row\">\n          <div (click)=\"digit(1)\" class=\"ILS_digit\">1</div>\n          <div (click)=\"digit(2)\" class=\"ILS_digit\">2</div>\n          <div (click)=\"digit(3)\" class=\"ILS_digit\">3</div>\n        </div>\n        <div class=\"ILS_numbers-row\">\n          <div (click)=\"digit(4)\" class=\"ILS_digit\">4</div>\n          <div (click)=\"digit(5)\" class=\"ILS_digit\">5</div>\n          <div (click)=\"digit(6)\" class=\"ILS_digit\">6</div>\n        </div>\n        <div class=\"ILS_numbers-row\">\n          <div (click)=\"digit(7)\" class=\"ILS_digit\">7</div>\n          <div (click)=\"digit(8)\" class=\"ILS_digit\">8</div>\n          <div (click)=\"digit(9)\" class=\"ILS_digit\">9</div>\n        </div>\n        <div class=\"ILS_numbers-row\">\n          <div *ngIf=\"ACDelbuttons\" (click)=\"allClear()\" class=\"ILS_digit ILS_ac\">AC</div>\n          <div (click)=\"digit(0)\" class=\"ILS_digit\">0</div>\n          <div *ngIf=\"ACDelbuttons\" (click)=\"remove()\" class=\"ILS_digit ILS_del\">DEL</div>\n        </div>\n      </div>\n    ";
/* Style */
var LOCK_SCREEN_STYLE = "\n          /* Animations*/\n          @keyframes ILS_shake {\n            from, to {\n              transform: translate3d(0, 0, 0);\n            }\n            10%, 30%, 50%, 70%, 90% {\n              transform: translate3d(-10px, 0, 0);\n            }\n            20%, 40%, 60%, 80% {\n              transform: translate3d(10px, 0, 0);\n            }\n          }\n          @keyframes ILS_buttonPress {\n            0% {\n              background-color: #E0E0E0;\n            }\n            100% {\n              background-color: #F1F1F1;\n            }\n          }\n          /* Lock Screen Layout*/\n          .ILS_lock {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            z-index: 999;\n            background-color: #F1F1F1;\n          }\n          .ILS_lock-hidden {\n            display: none;\n          }\n          .ILS_label-row {\n            height: 50px;\n            width: 100%;\n            text-align: center;\n            font-size: 23px;\n            padding-top: 10px;\n            color: #464646;\n          }\n          .ILS_circles-row {\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            width: 100%;\n            height: 60px;\n          }\n          .ILS_circle {\n            background-color: #F1F1F1!important;\n            border-radius: 50%;\n            width: 10px;\n            height: 10px;\n            border:solid 1px #464646;\n            margin: 0 15px;\n          }\n          .ILS_numbers-row {\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            width: 100%;\n            height: 100px;\n          }\n          .ILS_digit {\n            margin: 0 14px;\n            width: 80px;\n            border-radius: 10%;\n            height: 80px;\n            text-align: center;\n            padding-top: 29px;\n            font-size: 21px;\n            color: #464646;\n            background-color: #bed7ef;\n          }\n          .ILS_digit.activated {\n            -webkit-animation-name: ILS_buttonPress;\n            animation-name: ILS_buttonPress;\n            -webkit-animation-duration: 0.3;\n            animation-duration: 0.3s;\n          }\n          .ILS_ac {\n            color: #464646;\n            background-color: #F8F8F8;\n            }\n          .ILS_del {\n            color: #464646;\n            background-color: #F8F8F8;\n            }\n          .ILS_full {\n            background-color:#464646!important;\n          }\n          .ILS_shake {\n            -webkit-animation-name: ILS_shake;\n            animation-name: ILS_shake;\n            -webkit-animation-duration: 0.5;\n            animation-duration: 0.5s;\n            -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n          }\n";
var LockScreenComponent = /** @class */ (function () {
    function LockScreenComponent(events, navCtrl, navParams) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // touchId:boolean;
        this.passcodeAttempts = 0;
        this.enteredPasscode = '';
        this._showLockScreen = true;
        // this.touchId           = navParams.data.touchId || false;
        this.ACDelbuttons = navParams.data.ACDelbuttons || false;
        this.passcode = navParams.data.code;
        this.onCorrect = navParams.data.onCorrect || null;
        this.onWrong = navParams.data.onWrong || null;
        this.passcodeLabel = navParams.data.passcodeLabel || 'Enter Passcode';
        this.touchLabel = navParams.data.passcodeLabel || 'Verify Passcode';
    }
    LockScreenComponent.prototype.ngOnInit = function () {
        // setTimeout(()=>{
        //   if (this.touchId) {
        //     TouchID.isAvailable().then(
        //       res => {
        //         TouchID.verifyFingerprint(this.passcodeLabel).then(
        //           res => {
        //             this._showLockScreen = false;
        //             this.onCorrect && this.onCorrect();
        //             this.navCtrl.pop();
        //           },
        //           err => {
        //             console.log("Unable to unlock the device with this fingerprint.");
        //           }
        //         )
        //       },
        //       err => {
        //         console.log("Touch ID is not available.");
        //       }
        //     )
        //   }
        // }, 50);
    };
    LockScreenComponent.prototype.allClear = function () {
        this.enteredPasscode = "";
    };
    LockScreenComponent.prototype.remove = function () {
        this.enteredPasscode = this.enteredPasscode.slice(0, -1);
    };
    LockScreenComponent.prototype.digit = function (digit) {
        var _this = this;
        this.selected = +digit;
        if (this.passcodeWrong) {
            return;
        }
        this.enteredPasscode += '' + digit;
        if (this.enteredPasscode.length >= 4) {
            if (this.enteredPasscode === '' + this.passcode) {
                this.enteredPasscode = '';
                this.passcodeAttempts = 0;
                this.onCorrect && this.onCorrect();
                this._showLockScreen = false;
                this.navCtrl.pop();
            }
            else {
                this.passcodeWrong = true;
                this.passcodeAttempts++;
                this.onWrong && this.onWrong(this.passcodeAttempts);
                setTimeout(function () {
                    _this.enteredPasscode = '';
                    _this.passcodeWrong = false;
                }, 800);
            }
        }
    };
    LockScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'lock-screen',
            template: LOCK_SCREEN_TEMPLATE,
            styles: [LOCK_SCREEN_STYLE]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LockScreenComponent);
    return LockScreenComponent;
}());

//# sourceMappingURL=lock-screen-component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/vishal/Desktop/IonicLocalPin/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/vishal/Desktop/IonicLocalPin/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_lock_lock_screen_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__components_lock_lock_screen_component__["a" /* LockScreenComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__components_lock_lock_screen_component__["a" /* LockScreenComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_lock_lock_screen_component__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__components_lock_lock_screen_component__["a" /* LockScreenComponent */], {
                code: '1234',
                ACDelbuttons: true,
                passcodeLabel: 'Please Enter Passcode',
                onCorrect: function () {
                    console.log('Correct!');
                },
                onWrong: function (attemptNumber) {
                    console.log(attemptNumber + ' wrong passcode attempt(s)');
                }
            });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/vishal/Desktop/IonicLocalPin/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/vishal/Desktop/IonicLocalPin/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map