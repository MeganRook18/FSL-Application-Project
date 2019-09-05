(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"wrapper\">\n\n  <section id=\"header-wrapper\">\n    <app-header></app-header>\n  </section>\n\n  <section id=\"body-wrapper\">\n    <router-outlet></router-outlet>\n  </section>\n\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"header-container\">\n  <section id=\"navigation-container\">\n    <div class=\"navigation-container\">\n      <nav>\n        <a class=\"page-links\" *ngFor=\"let link of routeLinks; let i = index\" id=\"{{link.link}}\" [routerLink]=\"link.link\"\n          routerLinkActive #rla=\"routerLinkActive\">\n          {{link.label}}\n        </a>\n      </nav>\n    </div>\n\n  </section>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/current-status/current-status.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/current-status/current-status.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"current-status-container\">\n  <p>\n    current-status works!\n  </p>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/log-in/log-in.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/log-in/log-in.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"login-container\">\n    <mat-card>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n        <mat-card-header>\n          <h1 i18n class=\"mat-headline\">Welcome to Company X</h1>\n        </mat-card-header>\n\n      <mat-card-content>\n        <mat-form-field>\n          <label>\n              <input formControlName=\"username\"\n                type=\"text\"\n                matInput\n                required\n                placeholder=\"Enter your email\"/>\n          </label>\n        </mat-form-field>\n        <mat-form-field>\n            <label>\n                <input\n                  formControlName=\"password\"\n                  matInput\n                  required\n                  placeholder=\"Enter your password\"\n                  [type]=\"hidePassword ? 'password' : 'text'\"\n                />\n            </label>\n            <mat-icon matSuffix (click)=\"hidePassword = !hidePassword\"\n              >{{ hidePassword ? \"visibility\" : \"visibility_off\" }}\n              </mat-icon>\n        </mat-form-field>\n      </mat-card-content>\n\n      <mat-card-actions>\n        <button type=\"submit\" id=\"login-btn\">Login</button>\n\n        <a (click)=\"navigateTo('sign-in')\">Sign In</a>\n      </mat-card-actions>\n\n    </form>\n    </mat-card>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/nested-data/nested-data.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/nested-data/nested-data.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nested-data works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sign-in/sign-in.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sign-in/sign-in.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"sign-in-container\">\n\n    <section id=\"form-content\">\n  \n      <input type=\"text\" placeholder=\"Email\" value=\"\" />\n  \n      <input type=\"text\" placeholder=\"Password\" value=\"\">\n\n      <input type=\"text\" placeholder=\"Re-password\" value=\"\">\n  \n      <button type=\"submit\" id=\"login-btn\">Sign In</button>\n  \n      <a (click)=\"navigateTo('login')\">Sign In</a>\n  \n    </section>\n  \n  </section>"

/***/ }),

/***/ "./src/app/api-data.service.ts":
/*!*************************************!*\
  !*** ./src/app/api-data.service.ts ***!
  \*************************************/
/*! exports provided: ApiDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDataService", function() { return ApiDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApiDataService = /** @class */ (function () {
    function ApiDataService() {
    }
    ApiDataService.prototype.createDb = function () {
        var auth = [
            {
                userId: 1,
                username: "admin",
                password: "admin",
                email: "admin@admin.com"
            },
            {
                userId: 2,
                username: "guest",
                password: "guest",
                email: "guest@guest.com"
            }
        ];
        var policies = [
            {
                polId: 0,
                num: "PO0",
                amount: 100,
                userId: 1,
                description: "Insurance policy number POO"
            },
            {
                polId: 1,
                num: "PO1",
                amount: 1000,
                userId: 1,
                description: "Insurance policy number PO1"
            },
            {
                polId: 2,
                num: "PO2",
                amount: 2000,
                userId: 1,
                description: "Insurance policy number PO2"
            },
            {
                polId: 3,
                num: "PO3",
                amount: 3000,
                userId: 1,
                description: "Insurance policy number PO3"
            },
            {
                polId: 4,
                num: "PO4",
                amount: 4000,
                userId: 1,
                description: "Insurance policy number PO4"
            },
            {
                polId: 5,
                num: "PO5",
                amount: 5000,
                userId: 1,
                description: "Insurance policy number PO5"
            },
            {
                polId: 6,
                num: "PO6",
                amount: 6000,
                userId: 1,
                description: "Insurance policy number PO6"
            },
            {
                polId: 7,
                num: "PO7",
                amount: 7000,
                userId: 1,
                description: "Insurance policy number PO7"
            },
            {
                polId: 8,
                num: "PO8",
                amount: 8000,
                userId: 1,
                description: "Insurance policy number PO8"
            },
            {
                polId: 9,
                num: "PO9",
                amount: 9000,
                userId: 1,
                description: "Insurance policy number PO9"
            },
            {
                polId: 10,
                num: "P10",
                amount: 1100,
                userId: 2,
                description: "Insurance policy number POO"
            },
            {
                polId: 22,
                num: "P11",
                amount: 1200,
                userId: 2,
                description: "Insurance policy number PO1"
            },
            {
                polId: 12,
                num: "P12",
                amount: 2300,
                userId: 2,
                description: "Insurance policy number PO2"
            },
            {
                polId: 13,
                num: "P13",
                amount: 3400,
                userId: 2,
                description: "Insurance policy number PO3"
            },
            {
                polId: 14,
                num: "P14",
                amount: 4500,
                userId: 2,
                description: "Insurance policy number PO4"
            },
            {
                polId: 15,
                num: "P15",
                amount: 5600,
                userId: 2,
                description: "Insurance policy number PO5"
            },
            {
                polId: 16,
                num: "P16",
                amount: 6700,
                userId: 2,
                description: "Insurance policy number PO6"
            },
            {
                polId: 17,
                num: "P17",
                amount: 7800,
                userId: 2,
                description: "Insurance policy number PO7"
            },
            {
                polId: 18,
                num: "P18",
                amount: 8900,
                userId: 2,
                description: "Insurance policy number PO8"
            },
            {
                polId: 19,
                num: "P19",
                amount: 9100,
                userId: 2,
                description: "Insurance policy number PO9"
            },
            {
                polId: 20,
                num: "P20",
                amount: 9100,
                userId: 3,
                description: "Insurance policy number POO"
            },
            {
                polId: 21,
                num: "P21",
                amount: 1000,
                userId: 3,
                description: "Insurance policy number PO1"
            },
            {
                polId: 22,
                num: "P22",
                amount: 2000,
                userId: 3,
                description: "Insurance policy number PO2"
            },
            {
                polId: 23,
                num: "P23",
                amount: 3000,
                userId: 3,
                description: "Insurance policy number PO3"
            },
            {
                polId: 24,
                num: "P24",
                amount: 4000,
                userId: 3,
                description: "Insurance policy number PO4"
            },
            {
                polId: 25,
                num: "P25",
                amount: 5000,
                userId: 3,
                description: "Insurance policy number PO5"
            },
            {
                polId: 26,
                num: "P26",
                amount: 6000,
                userId: 3,
                description: "Insurance policy number PO6"
            },
            {
                polId: 27,
                num: "P27",
                amount: 7000,
                userId: 3,
                description: "Insurance policy number PO7"
            },
            {
                polId: 28,
                num: "P28",
                amount: 8000,
                userId: 3,
                description: "Insurance policy number PO8"
            },
            {
                polId: 29,
                num: "P29",
                amount: 9000,
                userId: 3,
                description: "Insurance policy number PO9"
            }
        ];
        var policiesDetails = [
            { detailsId: 1, polId: 1, amount: 100, clientName: "admin1" },
            { detailsId: 2, polId: 2, amount: 100, clientName: "admin1" },
            { detailsId: 3, polId: 2, amount: 900, clientName: "admin2" },
            { detailsId: 4, polId: 4, amount: 2000, clientName: "admin1" },
            { detailsId: 5, polId: 4, amount: 2000, clientName: "admin3" },
            { detailsId: 6, polId: 5, amount: 5000, clientName: "admin5" },
            { detailsId: 7, polId: 8, amount: 4000, clientName: "admin1" },
            { detailsId: 8, polId: 8, amount: 500, clientName: "admin7" },
            { detailsId: 9, polId: 8, amount: 5500, clientName: "admin8" },
            { detailsId: 11, polId: 11, amount: 100, clientName: "admin21" },
            { detailsId: 12, polId: 13, amount: 100, clientName: "admin21" },
            { detailsId: 13, polId: 14, amount: 900, clientName: "admin22" },
            { detailsId: 14, polId: 15, amount: 2000, clientName: "admin21" },
            { detailsId: 15, polId: 16, amount: 2000, clientName: "admin23" },
            { detailsId: 16, polId: 17, amount: 5000, clientName: "admin25" },
            { detailsId: 17, polId: 18, amount: 4000, clientName: "admin21" },
            { detailsId: 18, polId: 19, amount: 500, clientName: "admin27" },
            { detailsId: 21, polId: 11, amount: 100, clientName: "admin31" },
            { detailsId: 22, polId: 13, amount: 100, clientName: "admin31" },
            { detailsId: 23, polId: 14, amount: 900, clientName: "admin32" },
            { detailsId: 24, polId: 15, amount: 2000, clientName: "admin31" },
            { detailsId: 25, polId: 16, amount: 2000, clientName: "admin33" },
            { detailsId: 26, polId: 17, amount: 5000, clientName: "admin35" },
            { detailsId: 27, polId: 18, amount: 4000, clientName: "admin31" },
            { detailsId: 28, polId: 19, amount: 500, clientName: "admin37" }
        ];
        return { auth: auth, policies: policies, policiesDetails: policiesDetails };
    };
    ApiDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApiDataService);
    return ApiDataService;
}());

// Add to Description
// 1. add to each request the Autorization tokenName
// 2. edit page and url params - modifie the records for specific user.


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/log-in/log-in.component */ "./src/app/pages/log-in/log-in.component.ts");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "./src/app/pages/sign-in/sign-in.component.ts");
/* harmony import */ var _pages_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/current-status/current-status.component */ "./src/app/pages/current-status/current-status.component.ts");
/* harmony import */ var _pages_nested_data_nested_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/nested-data/nested-data.component */ "./src/app/pages/nested-data/nested-data.component.ts");







var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'current-status' },
    { path: 'login', component: _pages_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"] },
    { path: 'sign-in', component: _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"] },
    { path: 'current-status', component: _pages_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_5__["CurrentStatusComponent"] },
    { path: 'nested-data', component: _pages_nested_data_nested_data_component__WEBPACK_IMPORTED_MODULE_6__["NestedDataComponent"] },
    { path: '**', redirectTo: 'current-status' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n#wrapper #header-wrapper {\n  width: 100%;\n  height: 6vh;\n  line-height: 6vh;\n  background: #2196f3;\n}\n#wrapper #body-wrapper {\n  width: 90%;\n  height: 94vh;\n  margin: 0 auto;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21lZ2Fuci9GU0wvRlNMLUFwcGxpY2F0aW9uLVByb2plY3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDUjtBREVJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgI2hlYWRlci13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDZ2aDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNnZoO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XHJcbiAgICB9XHJcblxyXG4gICAgI2JvZHktd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDk0dmg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxufSIsIiN3cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4jd3JhcHBlciAjaGVhZGVyLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2dmg7XG4gIGxpbmUtaGVpZ2h0OiA2dmg7XG4gIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG59XG4jd3JhcHBlciAjYm9keS13cmFwcGVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5NHZoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_datastore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/datastore.service */ "./src/app/services/datastore.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(api) {
        this.api = api;
        this.title = "Angular-Task";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.api.apiData().subscribe(function (data) { return console.log("API Data => ", data); });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_datastore_service__WEBPACK_IMPORTED_MODULE_2__["DatastoreService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _api_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-data.service */ "./src/app/api-data.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/log-in/log-in.component */ "./src/app/pages/log-in/log-in.component.ts");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "./src/app/pages/sign-in/sign-in.component.ts");
/* harmony import */ var _pages_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/current-status/current-status.component */ "./src/app/pages/current-status/current-status.component.ts");
/* harmony import */ var _pages_nested_data_nested_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/nested-data/nested-data.component */ "./src/app/pages/nested-data/nested-data.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _shared_material_modules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/material.modules */ "./src/app/shared/material.modules.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _pages_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_10__["LogInComponent"],
                _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"],
                _pages_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_12__["CurrentStatusComponent"],
                _pages_nested_data_nested_data_component__WEBPACK_IMPORTED_MODULE_13__["NestedDataComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["InMemoryWebApiModule"].forRoot(_api_data_service__WEBPACK_IMPORTED_MODULE_4__["ApiDataService"]),
                _shared_material_modules__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-links {\n  margin: 10px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21lZ2Fuci9GU0wvRlNMLUFwcGxpY2F0aW9uLVByb2plY3Qvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1saW5rcyB7XHJcbiAgICBtYXJnaW46IDEwcHggMTVweDtcclxufSIsIi5wYWdlLWxpbmtzIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.routeLinks = [
            { label: 'Current Status', link: 'client-status' },
            { label: 'Nested Data', link: 'nested-data' },
        ];
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/current-status/current-status.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/current-status/current-status.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1cnJlbnQtc3RhdHVzL2N1cnJlbnQtc3RhdHVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/current-status/current-status.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/current-status/current-status.component.ts ***!
  \******************************************************************/
/*! exports provided: CurrentStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentStatusComponent", function() { return CurrentStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_datastore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/datastore.service */ "./src/app/services/datastore.service.ts");



var CurrentStatusComponent = /** @class */ (function () {
    function CurrentStatusComponent(api) {
        this.api = api;
    }
    /* Page Tasks:
     *
     *  1) Connect and take the data from the API - use getPolicies function to retrieve the data
     *  2) Create one layer table witch will display the income data
     *  3) Table must contain the following columns:
     *
     *    ==> num, amount, description
     *
     *  3) Style the page;
     *  4) Header must be vissible for this page;
     *
     */
    CurrentStatusComponent.prototype.ngOnInit = function () { };
    CurrentStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-current-status',
            template: __webpack_require__(/*! raw-loader!./current-status.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/current-status/current-status.component.html"),
            styles: [__webpack_require__(/*! ./current-status.component.scss */ "./src/app/pages/current-status/current-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_datastore_service__WEBPACK_IMPORTED_MODULE_2__["DatastoreService"]])
    ], CurrentStatusComponent);
    return CurrentStatusComponent;
}());



/***/ }),

/***/ "./src/app/pages/log-in/log-in.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/log-in/log-in.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/log-in/log-in.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/log-in/log-in.component.ts ***!
  \**************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_datastore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/datastore.service */ "./src/app/services/datastore.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var LogInComponent = /** @class */ (function () {
    function LogInComponent(dataStore) {
        this.dataStore = dataStore;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.hidePassword = true;
    }
    /* Page Tasks:
     *
     *  1) Take and validate the user input fields
     *  2) Connect with API
     *  3) Display the necessary error messages
     *  4) Style the page
     *  5) Header should`t be visible for this page
     *
     */
    LogInComponent.prototype.ngOnInit = function () { };
    LogInComponent.prototype.navigateTo = function (page) {
        this.dataStore.navigateTo(page);
    };
    LogInComponent.prototype.login = function () {
    };
    LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-log-in",
            template: __webpack_require__(/*! raw-loader!./log-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.scss */ "./src/app/pages/log-in/log-in.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_datastore_service__WEBPACK_IMPORTED_MODULE_2__["DatastoreService"]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/pages/nested-data/nested-data.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/nested-data/nested-data.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25lc3RlZC1kYXRhL25lc3RlZC1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/nested-data/nested-data.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/nested-data/nested-data.component.ts ***!
  \************************************************************/
/*! exports provided: NestedDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedDataComponent", function() { return NestedDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_datastore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/datastore.service */ "./src/app/services/datastore.service.ts");



var NestedDataComponent = /** @class */ (function () {
    function NestedDataComponent(api) {
        this.api = api;
    }
    // Page Tasks:
    //  *
    //  *  1) Connect and take the data from the API - use getPolicies function to retrieve the data
    //  *  2) Create 2 layers table witch will display the income data
    //  *
    //  *  3) Table must contain the following columns:
    //  *
    //  *    ==> Layer 1: num, amount, description
    //  *    ==> Layer 2: clientName, amount        ==> It may contain multiple rows
    //  *
    //  *   Description:
    //  *     Second layer must be hidden all the time, until the user select the row icon to expand the details.
    //  *     By expanding the details, correct and fresh data need to be retrieved from the api and displayed on the screen each time
    //  *
    //  *  3) Style the page;
    //  *  4) Header must be vissible for this page;
    //  *
    /* Page Tasks:
     *
     *  1) Connect and take the data from the API - use getPolicies function to retrieve the data
     *  2) Create 2 layers table witch will display the income data
     *
     *  3) Table must contain the following columns:
     *
     *    ==> Layer 1: num, amount, description
     *    ==> Layer 2: clientName, amount        ==> It may contain multiple rows
     *
     *   Description:
     *     Second layer must be hidden all the time, until the user select the row icon to expand the details.
     *     By expanding the details, correct and fresh data need to be retrieved from the api and displayed on the screen each time
     *
     *  3) Style the page;
     *  4) Header must be vissible for this page;
     *
     */
    NestedDataComponent.prototype.ngOnInit = function () { };
    NestedDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-nested-data",
            template: __webpack_require__(/*! raw-loader!./nested-data.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/nested-data/nested-data.component.html"),
            styles: [__webpack_require__(/*! ./nested-data.component.scss */ "./src/app/pages/nested-data/nested-data.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_datastore_service__WEBPACK_IMPORTED_MODULE_2__["DatastoreService"]])
    ], NestedDataComponent);
    return NestedDataComponent;
}());



/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.ts ***!
  \****************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_datastore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/datastore.service */ "./src/app/services/datastore.service.ts");



var SignInComponent = /** @class */ (function () {
    function SignInComponent(datastore) {
        this.datastore = datastore;
    }
    /* Page Tasks:
     *  1) Take and validate the user input fields;
     *  2) Connect with API;
     *  3) Display the necessary error messages
     *  4) Style the page
     *  5) Header should`t be visible for this page;
     *
     */
    SignInComponent.prototype.ngOnInit = function () {
        this.datastore
            .getUser()
            .subscribe(function (data) { return console.log("user data => ", data); });
    };
    SignInComponent.prototype.navigateTo = function (page) {
        this.datastore.navigateTo(page);
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sign-in",
            template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/pages/sign-in/sign-in.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_datastore_service__WEBPACK_IMPORTED_MODULE_2__["DatastoreService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/services/datastore.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/datastore.service.ts ***!
  \***********************************************/
/*! exports provided: DatastoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatastoreService", function() { return DatastoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DatastoreService = /** @class */ (function () {
    function DatastoreService(router, http) {
        this.router = router;
        this.http = http;
        this.SERVER_URL = "http://localhost:8080/api/";
    }
    DatastoreService.prototype.navigateTo = function (page) {
        this.router.navigate(["/" + page]);
    };
    DatastoreService.prototype.getUser = function () {
        return this.http.get(this.SERVER_URL + "auth");
    };
    DatastoreService.prototype.getPolicies = function () {
        return this.http.get(this.SERVER_URL + "policies");
    };
    DatastoreService.prototype.getPoliciesDetails = function () {
        return this.http.get(this.SERVER_URL + "policiesDetails");
    };
    // Only for Demo purposes
    DatastoreService.prototype.apiData = function () {
        var response1 = this.getUser();
        var response2 = this.getPolicies();
        var response3 = this.getPoliciesDetails();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([response1, response2, response3]);
    };
    DatastoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DatastoreService);
    return DatastoreService;
}());



/***/ }),

/***/ "./src/app/shared/material.modules.ts":
/*!********************************************!*\
  !*** ./src/app/shared/material.modules.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/meganr/FSL/FSL-Application-Project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map