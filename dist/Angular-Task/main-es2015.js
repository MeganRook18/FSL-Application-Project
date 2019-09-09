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

/***/ "./node_modules/raw-loader/index.js!./src/app/_layout/app-layout/app-layout.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/_layout/app-layout/app-layout.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/_layout/pre-autehtication/pre-authentication.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/_layout/pre-autehtication/pre-authentication.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\n    <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/error-messages/error-messages.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/error-messages/error-messages.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n<ng-container *ngFor=\"let error of errors\">\n  <ng-container [ngSwitch]=\"error\">\n    <mat-error *ngSwitchCase=\"errorType.Validation\">\n       <span i18n>Please enter your login credentials</span>\n    </mat-error>\n    <mat-error *ngSwitchCase=\"errorType.Failed\">\n       <span i18n>Login details not recognised</span>\n    </mat-error>\n    <mat-error i18n *ngSwitchCase=\"errorType.Network\"\n    >A communication problem occurred, please speak to Company X support if you believe this is\n      in error\n    </mat-error>\n    <mat-error  *ngSwitchCase=\"errorType.Unknown\" i18n\n    >An unknown error occurred, please contact Company X support\n    </mat-error>\n  </ng-container>\n</ng-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"d-flex flex-row justify-content-between\">\n  <nav>\n    <button mat-button>Company X</button>\n    <a\n      class=\"page-links\"\n      *ngFor=\"let link of routeLinks; let i = index\"\n      id=\"{{ link.link }}\"\n      [routerLink]=\"link.link\"\n      routerLinkActive=\"menu-link-active\"\n      mat-button\n    >\n      {{ link.label }}\n    </a>\n\n  </nav>\n  <div class=\"logout-button d-flex flex-row align-items-center\">\n    <p>{{currentUser.username}}</p>\n    <button mat-button (click)=\"logout()\" title=\"logout\">\n      <mat-icon>exit_to_app</mat-icon>\n    </button>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/current-status/current-status.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/current-status/current-status.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"mat-headline text-center\" i18n>Current Status</h1>\n  <table class=\"table table-trapped table-bordered text-center\">\n  <thead>\n    <tr>\n      <th scope=\"col\" i18n>Number</th>\n      <th scope=\"col\" i18n>Amount</th>\n      <th scope=\"col\" i18n>Description</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let value of policies\" @fade>\n    <tr>\n      <td>\n        {{ value.num }}\n      </td>\n      <td>\n        {{ value.amount }}\n      </td>\n      <td>\n        {{ value.description }}\n      </td>\n    </tr>\n  </tbody>\n</table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/log-in/log-in.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/log-in/log-in.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"container\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n      <mat-card>\n        <div class=\"form-shared\">\n          <mat-card-header class=\"d-flex flex-column text-center login-components-title\">\n            <h4 i18n class=\"font-weight-bold\">Welcome back Company X</h4>\n            <h6 i18n>Sign in to continue</h6>\n          </mat-card-header>\n\n          <mat-card-content>\n            <mat-form-field class=\"input-full-width\">\n              <label>\n                <input\n                  formControlName=\"username\"\n                  type=\"text\"\n                  matInput\n                  required\n                  placeholder=\"Enter your username\"\n                />\n              </label>\n            </mat-form-field>\n\n            <mat-form-field class=\"input-full-width\">\n              <label>\n                <input\n                  formControlName=\"password\"\n                  matInput\n                  required\n                  placeholder=\"Enter your password\"\n                  [type]=\"hidePassword ? 'password' : 'text'\"\n                />\n              </label>\n              <mat-icon matSuffix (click)=\"hidePassword = !hidePassword\"\n              >{{ hidePassword ? \"visibility\" : \"visibility_off\" }}\n              </mat-icon>\n            </mat-form-field>\n          </mat-card-content>\n          <mat-card-actions class=\"d-flex flex-column\">\n            <button i18n mat-raised-button color=\"primary\" type=\"submit\" id=\"login-btn\">\n              Login\n            </button>\n             <a class=\"text-center\" (click)=\"navigateTo('sign-in')\" i18n>Sign Up</a>\n          </mat-card-actions>\n        </div>\n        <app-error-messages [errors]=\"errors\"></app-error-messages>\n\n      </mat-card>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/nested-data/inner-table/inner-table.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/nested-data/inner-table/inner-table.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"details.length !== 0\" class=\"table table-trapped table-bordered text-center\">\n  <thead>\n    <tr>\n      <th scope=\"col\" i18n>Client Name</th>\n      <th scope=\"col\" i18n>Amount</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let value of details\">\n    <tr>\n      <td>\n        {{ value.clientName }}\n      </td>\n      <td>\n        {{ value.amount }}\n      </td>\n    </tr>\n  </tbody>\n</table>\n<h6 *ngIf=\"details.length === 0\">No Policies Details</h6>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/nested-data/nested-data.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/nested-data/nested-data.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"mat-headline text-center\" i18n>Nested Data</h1>\n  <table\n    mat-table\n    [dataSource]=\"dataSource\"\n    multiTemplateDataRows\n    class=\"mat-elevation-z8\"\n  >\n    <ng-container matColumnDef=\"num\">\n      <th mat-header-cell *matHeaderCellDef i18n>Policy Number</th>\n      <td mat-cell *matCellDef=\"let element\" @fade>{{ element.num }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"amount\">\n      <th mat-header-cell *matHeaderCellDef i18n>Amount</th>\n      <td mat-cell *matCellDef=\"let element\" @fade>{{ element.amount }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef i18n>Description</th>\n      <td mat-cell *matCellDef=\"let element\" @fade>{{ element.description }}</td>\n    </ng-container>\n    <!-- Expanded Content Column -->\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td\n        mat-cell\n        *matCellDef=\"let element\"\n        [attr.colspan]=\"columnsToDisplay.length\"\n      >\n        <div\n          class=\"example-element-detail\"\n          [@detailExpand]=\"\n            element == expandedElement ? 'expanded' : 'collapsed'\n          \"\n        >\n\n          <app-inner-table [polId]=\"element.polId\"></app-inner-table>\n\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <tr\n      mat-row\n      *matRowDef=\"let element; columns: columnsToDisplay\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\"\n    ></tr>\n    <tr\n      mat-row\n      *matRowDef=\"let row; columns: ['expandedDetail']\"\n      class=\"example-detail-row\"\n    ></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sign-in/sign-in.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sign-in/sign-in.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"signUpForm\" (ngSubmit)=\"signUp()\">\n  <mat-card>\n    <div class=\"form-shared\">\n      <mat-card-header>\n        <mat-card-header class=\"d-flex flex-column text-center\">\n          <h4 i18n class=\"font-weight-bold\">Company X Sign Up</h4>\n          <h6 i18n>Please enter a valid email address & create a password</h6>\n        </mat-card-header>\n      </mat-card-header>\n\n      <mat-card-content>\n        <!-- Email -->\n        <mat-form-field class=\"input-full-width\">\n          <label>\n            <input\n              formControlName=\"email\"\n              type=\"email\"\n              matInput\n              required\n              placeholder=\"Enter your email\"\n            />\n          </label>\n          <mat-error *ngIf=\"hasError('email', 'pattern')\" i18n\n            >Incorrect formatting</mat-error\n          >\n        </mat-form-field>\n        <!-- User name -->\n        <mat-form-field class=\"input-full-width\">\n          <label>\n            <input\n              formControlName=\"username\"\n              type=\"text\"\n              matInput\n              required\n              placeholder=\"Enter an username\"\n            />\n          </label>\n          <mat-error *ngIf=\"hasError('email', 'pattern')\" i18n\n            >Incorrect formatting</mat-error\n          >\n        </mat-form-field>\n\n        <!-- Enter New Password -->\n        <mat-form-field appearance=\"outline\" class=\"input-full-width\">\n          <mat-label i18n>New Password</mat-label>\n          <label>\n            <input\n              matInput\n              #passwordWithValidation\n              required\n              formControlName=\"password\"\n              placeholder=\"New Password\"\n              [type]=\"hidePassword ? 'password' : 'text'\"\n            />\n          </label>\n          <mat-icon matSuffix (click)=\"hidePassword = !hidePassword\"\n            >{{ hidePassword ? \"visibility\" : \"visibility_off\" }}\n          </mat-icon>\n        </mat-form-field>\n        <mat-password-strength\n          [password]=\"passwordWithValidation.value\"\n          (onStrengthChanged)=\"onStrengthChanged($event)\"\n        >\n        </mat-password-strength>\n        <!-- Password's strength info -->\n        <label *ngIf=\"passwordStrength > 1\" class=\"password-strength\" i18n\n          >Password Strength:\n          <span *ngIf=\"passwordStrength <= 20\" i18n>Weak</span>\n          <span\n            *ngIf=\"passwordStrength > 21 && passwordStrength <= 80\"\n            i18n>Medium</span>\n          <span *ngIf=\"passwordStrength > 81\" i18n=\"@@ssp_strong\">Strong</span>\n        </label>\n        <!-- Confirm New Password -->\n        <mat-form-field\n          appearance=\"outline\"\n          class=\"input-full-width confirmPasswordInput\"\n        >\n          <mat-label i18n>Confirm Password</mat-label>\n          <label>\n            <input\n              matInput\n              formControlName=\"confirmPassword\"\n              required\n              placeholder=\"Confirm Password\"\n              [type]=\"hidePassword ? 'password' : 'text'\"\n            />\n          </label>\n          <mat-icon matSuffix (click)=\"hidePassword = !hidePassword\"\n            >{{ hidePassword ? \"visibility\" : \"visibility_off\" }}\n          </mat-icon>\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions class=\"d-flex flex-column\">\n        <button\n          i18n\n          mat-raised-button\n          color=\"primary\"\n          [disabled]=\"loading\"\n          type=\"submit\"\n        >\n          Create Account\n        </button>\n        <a class=\"text-center\" routerLink=\"/login\" i18n>Login</a>\n      </mat-card-actions>\n    </div>\n    <app-error-messages [errors]=\"errors\"></app-error-messages>\n  </mat-card>\n</form>\n"

/***/ }),

/***/ "./src/app/_layout/app-layout/app-layout.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/_layout/app-layout/app-layout.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19sYXlvdXQvYXBwLWxheW91dC9hcHAtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/_layout/app-layout/app-layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_layout/app-layout/app-layout.component.ts ***!
  \************************************************************/
/*! exports provided: AppLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLayoutComponent", function() { return AppLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppLayoutComponent = class AppLayoutComponent {
};
AppLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-app-layout",
        template: __webpack_require__(/*! raw-loader!./app-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/_layout/app-layout/app-layout.component.html"),
        styles: [__webpack_require__(/*! ./app-layout.component.scss */ "./src/app/_layout/app-layout/app-layout.component.scss")]
    })
], AppLayoutComponent);



/***/ }),

/***/ "./src/app/_layout/pre-autehtication/pre-authentication.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/_layout/pre-autehtication/pre-authentication.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-wrapper {\n  margin-top: 5vh;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21lZ2Fuci9GU0wvRlNMLUFwcGxpY2F0aW9uLVByb2plY3Qvc3JjL2FwcC9fbGF5b3V0L3ByZS1hdXRlaHRpY2F0aW9uL3ByZS1hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvX2xheW91dC9wcmUtYXV0ZWh0aWNhdGlvbi9wcmUtYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvX2xheW91dC9wcmUtYXV0ZWh0aWNhdGlvbi9wcmUtYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS13cmFwcGVye1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsIi5wYWdlLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/_layout/pre-autehtication/pre-authentication.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/_layout/pre-autehtication/pre-authentication.component.ts ***!
  \***************************************************************************/
/*! exports provided: PreAuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreAuthenticationComponent", function() { return PreAuthenticationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PreAuthenticationComponent = class PreAuthenticationComponent {
};
PreAuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-pre-authentication",
        template: __webpack_require__(/*! raw-loader!./pre-authentication.component.html */ "./node_modules/raw-loader/index.js!./src/app/_layout/pre-autehtication/pre-authentication.component.html"),
        styles: [__webpack_require__(/*! ./pre-authentication.component.scss */ "./src/app/_layout/pre-autehtication/pre-authentication.component.scss")]
    })
], PreAuthenticationComponent);



/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: fadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("fade", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("void => *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(750)])
]);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ApiDataService = class ApiDataService {
    constructor() { }
    createDb() {
        const auth = [
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
        const policies = [
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
        const policiesDetails = [
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
        return { auth, policies, policiesDetails };
    }
};
ApiDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ApiDataService);

// Add to Description
// 1. add to each request the Autorization tokenName
// 2. edit page and url params - modified the records for specific user.


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/log-in/log-in.component */ "./src/app/pages/log-in/log-in.component.ts");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "./src/app/pages/sign-in/sign-in.component.ts");
/* harmony import */ var _pages_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/current-status/current-status.component */ "./src/app/pages/current-status/current-status.component.ts");
/* harmony import */ var _pages_nested_data_nested_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/nested-data/nested-data.component */ "./src/app/pages/nested-data/nested-data.component.ts");
/* harmony import */ var _layout_pre_autehtication_pre_authentication_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_layout/pre-autehtication/pre-authentication.component */ "./src/app/_layout/pre-autehtication/pre-authentication.component.ts");
/* harmony import */ var _layout_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_layout/app-layout/app-layout.component */ "./src/app/_layout/app-layout/app-layout.component.ts");
/* harmony import */ var _guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guard/auth-guard.service */ "./src/app/guard/auth-guard.service.ts");
/* harmony import */ var _services_cx_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/cx.resolver */ "./src/app/services/cx.resolver.ts");











const routes = [
    {
        path: "",
        component: _layout_pre_autehtication_pre_authentication_component__WEBPACK_IMPORTED_MODULE_7__["PreAuthenticationComponent"],
        children: [
            { path: "login", component: _pages_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"] },
            { path: "sign-in", component: _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"] },
        ]
    },
    { path: "",
        component: _layout_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_8__["AppLayoutComponent"],
        canActivate: [_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        children: [
            {
                path: "current-status",
                component: _pages_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_5__["CurrentStatusComponent"],
                resolve: { data: _services_cx_resolver__WEBPACK_IMPORTED_MODULE_10__["CxResolver"] }
            },
            {
                path: "nested-data",
                component: _pages_nested_data_nested_data_component__WEBPACK_IMPORTED_MODULE_6__["NestedDataComponent"],
                resolve: { data: _services_cx_resolver__WEBPACK_IMPORTED_MODULE_10__["CxResolver"] },
            },
        ],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_services_cx_resolver__WEBPACK_IMPORTED_MODULE_10__["CxResolver"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_datastore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/datastore.service */ "./src/app/services/datastore.service.ts");



let AppComponent = class AppComponent {
    constructor(api) {
        this.api = api;
        this.title = "Company X";
    }
    ngOnInit() {
        // this.api.apiData().subscribe(data => console.log("API Data => ", data));
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_datastore_service__WEBPACK_IMPORTED_MODULE_2__["DatastoreService"]])
], AppComponent);

/*
* TODO: if a user is created and there is no data, show dialog or something
*       saying 'u have no data yet' etc eg userID 4 +
* */


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _api_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api-data.service */ "./src/app/api-data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/log-in/log-in.component */ "./src/app/pages/log-in/log-in.component.ts");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "./src/app/pages/sign-in/sign-in.component.ts");
/* harmony import */ var _pages_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/current-status/current-status.component */ "./src/app/pages/current-status/current-status.component.ts");
/* harmony import */ var _pages_nested_data_nested_data_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/nested-data/nested-data.component */ "./src/app/pages/nested-data/nested-data.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _shared_material_modules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/material.modules */ "./src/app/shared/material.modules.ts");
/* harmony import */ var _components_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/error-messages/error-messages.component */ "./src/app/components/error-messages/error-messages.component.ts");
/* harmony import */ var _layout_pre_autehtication_pre_authentication_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_layout/pre-autehtication/pre-authentication.component */ "./src/app/_layout/pre-autehtication/pre-authentication.component.ts");
/* harmony import */ var _layout_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_layout/app-layout/app-layout.component */ "./src/app/_layout/app-layout/app-layout.component.ts");
/* harmony import */ var _pages_nested_data_inner_table_inner_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/nested-data/inner-table/inner-table.component */ "./src/app/pages/nested-data/inner-table/inner-table.component.ts");
/* harmony import */ var _interceptors_fake_backend__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./interceptors/fake-backend */ "./src/app/interceptors/fake-backend.ts");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./interceptors/error.interceptor */ "./src/app/interceptors/error.interceptor.ts");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ "./src/app/interceptors/jwt.interceptor.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _pages_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_10__["LogInComponent"],
            _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"],
            _pages_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_12__["CurrentStatusComponent"],
            _pages_nested_data_nested_data_component__WEBPACK_IMPORTED_MODULE_13__["NestedDataComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
            _components_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_16__["ErrorMessagesComponent"],
            _layout_pre_autehtication_pre_authentication_component__WEBPACK_IMPORTED_MODULE_17__["PreAuthenticationComponent"],
            _layout_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_18__["AppLayoutComponent"],
            _pages_nested_data_inner_table_inner_table_component__WEBPACK_IMPORTED_MODULE_19__["InnerTableComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__["InMemoryWebApiModule"].forRoot(_api_data_service__WEBPACK_IMPORTED_MODULE_8__["ApiDataService"]),
            _shared_material_modules__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_22__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_21__["ErrorInterceptor"], multi: true },
            // provider used to create fake backend
            _interceptors_fake_backend__WEBPACK_IMPORTED_MODULE_20__["fakeBackendProvider"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/error-messages/error-messages.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/error-messages/error-messages.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZXMvZXJyb3ItbWVzc2FnZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/error-messages/error-messages.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/error-messages/error-messages.component.ts ***!
  \***********************************************************************/
/*! exports provided: ErrorMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessagesComponent", function() { return ErrorMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/types */ "./src/app/shared/types.ts");



let ErrorMessagesComponent = class ErrorMessagesComponent {
    constructor() {
        this.errors = [];
        this.errorType = _shared_types__WEBPACK_IMPORTED_MODULE_2__["ErrorType"];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ErrorMessagesComponent.prototype, "errors", void 0);
ErrorMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-error-messages",
        template: __webpack_require__(/*! raw-loader!./error-messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/error-messages/error-messages.component.html"),
        styles: [__webpack_require__(/*! ./error-messages.component.scss */ "./src/app/components/error-messages/error-messages.component.scss")]
    })
], ErrorMessagesComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  width: 100%;\n  background: #3f51b5;\n  color: #fff;\n  margin-bottom: 3em;\n}\nsection nav {\n  padding: 8px 16px;\n}\nsection nav .page-links {\n  margin: 10px 15px;\n}\nsection nav a:hover {\n  color: #fff;\n  text-decoration: none;\n}\nsection nav a.menu-link-active {\n  border-bottom: solid 1.5px #fff;\n}\nsection .logout-button p {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21lZ2Fuci9GU0wvRlNMLUFwcGxpY2F0aW9uLVByb2plY3Qvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDRSxpQkFBQTtBQ0VOO0FERFE7RUFDSSxpQkFBQTtBQ0daO0FERFE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7QUNHWjtBRERRO0VBQ0ksK0JBQUE7QUNHWjtBRENRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICAgIG5hdntcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAucGFnZS1saW5rcyB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTVweDtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYS5tZW51LWxpbmstYWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDEuNXB4ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvZ291dC1idXR0b257XG4gICAgICAgIHB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwic2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xufVxuc2VjdGlvbiBuYXYge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cbnNlY3Rpb24gbmF2IC5wYWdlLWxpbmtzIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG5zZWN0aW9uIG5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbnNlY3Rpb24gbmF2IGEubWVudS1saW5rLWFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDEuNXB4ICNmZmY7XG59XG5zZWN0aW9uIC5sb2dvdXQtYnV0dG9uIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_serivce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.serivce */ "./src/app/services/authentication.serivce.ts");




let HeaderComponent = class HeaderComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.routeLinks = [
            { label: "Current Status", link: "/current-status" },
            { label: "Nested Data", link: "/nested-data" },
        ];
        this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(["/login"]);
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-header",
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_authentication_serivce__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/guard/auth-guard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/guard/auth-guard.service.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_serivce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.serivce */ "./src/app/services/authentication.serivce.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_authentication_serivce__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/interceptors/error.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_serivce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.serivce */ "./src/app/services/authentication.serivce.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_serivce__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/interceptors/fake-backend.ts":
/*!**********************************************!*\
  !*** ./src/app/interceptors/fake-backend.ts ***!
  \**********************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let FakeBackendInterceptor = class FakeBackendInterceptor {
    intercept(request, next) {
        const users = [
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
        const authHeader = request.headers.get("Authorization");
        const isLoggedIn = authHeader && authHeader.startsWith("Bearer fake-jwt-token");
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => {
            // authenticate - public
            if (request.url.endsWith("auth/authenticate") && request.method === "POST") {
                const user = users.find(x => x.username === request.body.username && x.password === request.body.password);
                if (!user) {
                    return error("Username or password is incorrect");
                }
                return ok({
                    userId: user.userId,
                    username: user.username,
                    email: user.email,
                    token: `fake-jwt-token`
                });
            }
            // get all users
            if (request.url.endsWith("auth") && request.method === "GET") {
                if (!isLoggedIn) {
                    return unauthorised();
                }
                return ok(users);
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
        // private helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body }));
        }
        function unauthorised() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: "Unauthorised" } });
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 400, error: { message } });
        }
    }
};
FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FakeBackendInterceptor);

let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/interceptors/jwt.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_serivce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.serivce */ "./src/app/services/authentication.serivce.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");




let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add auth header with jwt if user is logged in and request is to api url
        const currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.token;
        const isApiUrl = request.url.startsWith(_config__WEBPACK_IMPORTED_MODULE_3__["config"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_serivce__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], JwtInterceptor);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations */ "./src/app/animations.ts");
/* harmony import */ var _services_authentication_serivce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.serivce */ "./src/app/services/authentication.serivce.ts");






let CurrentStatusComponent = class CurrentStatusComponent {
    constructor(authenticationService, route) {
        this.authenticationService = authenticationService;
        this.route = route;
        this.policies = [];
    }
    ngOnInit() {
        this._subscription = this.authenticationService.currentUser.subscribe(user => {
            this.policies = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.filter(this.route.snapshot.data.data, {
                userId: user.userId
            });
        });
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
};
CurrentStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-current-status",
        template: __webpack_require__(/*! raw-loader!./current-status.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/current-status/current-status.component.html"),
        animations: [_animations__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]],
        styles: [__webpack_require__(/*! ./current-status.component.scss */ "./src/app/pages/current-status/current-status.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_serivce__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], CurrentStatusComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_datastore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/datastore.service */ "./src/app/services/datastore.service.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/types */ "./src/app/shared/types.ts");
/* harmony import */ var _services_authentication_serivce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/authentication.serivce */ "./src/app/services/authentication.serivce.ts");








let LogInComponent = class LogInComponent {
    constructor(dataStore, authenticationService, route, router) {
        this.dataStore = dataStore;
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.hidePassword = true;
        this.errorType = _shared_types__WEBPACK_IMPORTED_MODULE_6__["ErrorType"];
        this.errors = [];
        this.loading = false;
    }
    navigateTo(page) {
        this.dataStore.navigateTo(page);
    }
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/current-status'
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/current-status";
    }
    // easy access to form fields
    get f() { return this.loginForm.controls; }
    login() {
        this.errors = [];
        if (!this.loginForm.valid) {
            this.errors.push(_shared_types__WEBPACK_IMPORTED_MODULE_6__["ErrorType"].Validation);
            return;
        }
        this.loading = true;
        this._subscription = this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            console.log("error", error);
            this.errors.push(this.errorType.Failed);
            this.loading = false;
        });
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
};
LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-log-in",
        template: __webpack_require__(/*! raw-loader!./log-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/log-in/log-in.component.html"),
        styles: [__webpack_require__(/*! ./log-in.component.scss */ "./src/app/pages/log-in/log-in.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_datastore_service__WEBPACK_IMPORTED_MODULE_5__["DatastoreService"],
        _services_authentication_serivce__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LogInComponent);



/***/ }),

/***/ "./src/app/pages/nested-data/inner-table/inner-table.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/nested-data/inner-table/inner-table.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21lZ2Fuci9GU0wvRlNMLUFwcGxpY2F0aW9uLVByb2plY3Qvc3JjL2FwcC9wYWdlcy9uZXN0ZWQtZGF0YS9pbm5lci10YWJsZS9pbm5lci10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbmVzdGVkLWRhdGEvaW5uZXItdGFibGUvaW5uZXItdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXN0ZWQtZGF0YS9pbm5lci10YWJsZS9pbm5lci10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xuICB3aWR0aDogMTAwJTtcbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/nested-data/inner-table/inner-table.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/nested-data/inner-table/inner-table.component.ts ***!
  \************************************************************************/
/*! exports provided: InnerTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerTableComponent", function() { return InnerTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_datastore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/datastore.service */ "./src/app/services/datastore.service.ts");




let InnerTableComponent = class InnerTableComponent {
    constructor(_api) {
        this._api = _api;
        this.details = [];
    }
    ngOnInit() {
        // TODO: how to only sub when in view? - something to do with the async pipe
        this._subscription = this._api.getPoliciesDetails().subscribe(details => {
            this.details = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(details, {
                polId: this.polId
            });
        });
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], InnerTableComponent.prototype, "polId", void 0);
InnerTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-inner-table",
        template: __webpack_require__(/*! raw-loader!./inner-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/nested-data/inner-table/inner-table.component.html"),
        styles: [__webpack_require__(/*! ./inner-table.component.scss */ "./src/app/pages/nested-data/inner-table/inner-table.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_datastore_service__WEBPACK_IMPORTED_MODULE_3__["DatastoreService"]])
], InnerTableComponent);



/***/ }),

/***/ "./src/app/pages/nested-data/nested-data.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/nested-data/nested-data.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\ntable tr.example-detail-row {\n  height: 0;\n}\ntable tr.example-element-row:not(.example-expanded-row):hover {\n  background: #cfcfcf;\n}\ntable tr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\ntable .example-element-row td {\n  border-bottom-width: 0;\n}\ntable .example-element-detail {\n  overflow: hidden;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21lZ2Fuci9GU0wvRlNMLUFwcGxpY2F0aW9uLVByb2plY3Qvc3JjL2FwcC9wYWdlcy9uZXN0ZWQtZGF0YS9uZXN0ZWQtZGF0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbmVzdGVkLWRhdGEvbmVzdGVkLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7QURDRTtFQUNFLFNBQUE7QUNDSjtBREVFO0VBQ0UsbUJBQUE7QUNBSjtBREdFO0VBQ0UsbUJBQUE7QUNESjtBRElFO0VBQ0Usc0JBQUE7QUNGSjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXN0ZWQtZGF0YS9uZXN0ZWQtZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgdHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cblxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjY2ZjZmNmO1xuICB9XG5cbiAgdHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIH1cblxuICAuZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgfVxuXG4gIC5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG50YWJsZSB0ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG50YWJsZSB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NmY2ZjZjtcbn1cbnRhYmxlIHRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cbnRhYmxlIC5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cbnRhYmxlIC5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animations */ "./src/app/animations.ts");
/* harmony import */ var _services_authentication_serivce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/authentication.serivce */ "./src/app/services/authentication.serivce.ts");








let NestedDataComponent = class NestedDataComponent {
    constructor(route, authenticationService) {
        this.route = route;
        this.authenticationService = authenticationService;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.columnsToDisplay = ["num", "amount", "description"];
    }
    ngOnInit() {
        // TODO - set id as route, so can do snap shot.
        this._subscription = this.authenticationService.currentUser.subscribe(user => {
            this.dataSource.data = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.filter(this.route.snapshot.data.data, {
                userId: user.userId
            });
        });
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
};
NestedDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-nested-data",
        template: __webpack_require__(/*! raw-loader!./nested-data.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/nested-data/nested-data.component.html"),
        animations: [
            _animations__WEBPACK_IMPORTED_MODULE_6__["fadeIn"],
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])("detailExpand", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: "0px", minHeight: "0" })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("expanded", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: "*" })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])("expanded <=> collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
            ]),
        ],
        styles: [__webpack_require__(/*! ./nested-data.component.scss */ "./src/app/pages/nested-data/nested-data.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_authentication_serivce__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
], NestedDataComponent);



/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-shared mat-card-content .password-strength {\n  padding-top: 15px;\n  font-size: 16px;\n}\n.form-shared mat-card-content .password-strength span {\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21lZ2Fuci9GU0wvRlNMLUFwcGxpY2F0aW9uLVByb2plY3Qvc3JjL2FwcC9wYWdlcy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FERVE7RUFDRSxtQkFBQTtBQ0FWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc2hhcmVke1xuICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICAgIC5wYXNzd29yZC1zdHJlbmd0aCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5mb3JtLXNoYXJlZCBtYXQtY2FyZC1jb250ZW50IC5wYXNzd29yZC1zdHJlbmd0aCB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZm9ybS1zaGFyZWQgbWF0LWNhcmQtY29udGVudCAucGFzc3dvcmQtc3RyZW5ndGggc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_datastore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/datastore.service */ "./src/app/services/datastore.service.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/types */ "./src/app/shared/types.ts");





let SignInComponent = class SignInComponent {
    constructor(dataStore) {
        this.dataStore = dataStore;
        this.hidePassword = true;
        this.errorType = _shared_types__WEBPACK_IMPORTED_MODULE_4__["ErrorType"];
        this.loading = false;
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
            ])),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
        console.log("ngOnInit");
        this.dataStore.getUsers().subscribe(data => {
            console.log(data);
        });
    }
    signUp() {
        console.log("sign up");
        // this.errors = [];
        //
        // if (!this.signUpForm.valid) {
        //   this.errors.push(ErrorType.Validation);
        //   return;
        // }
        // this.loading = true;
        // this.dataStore.createUser(this._formToUserObject()).subscribe((ret) => {
        //   console.log("user created: ", ret);
        // });
    }
    hasError(controlName, errorName) {
        return this.signUpForm.controls[controlName].hasError(errorName);
    }
    onStrengthChanged(strength) {
        this.passwordStrength = strength;
    }
    ngOnDestroy() { }
    // private _generateUserId() {
    //   console.log("_generateUserId");
    //   let n: number;
    //   return n;
    // }
    _formToUserObject() {
        const newUser = {
            userId: 3,
            username: this.signUpForm.get("username").value,
            password: this.signUpForm.get("password").value,
            email: this.signUpForm.get("email").value,
        };
        return newUser;
    }
};
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sign-in",
        template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sign-in/sign-in.component.html"),
        styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/pages/sign-in/sign-in.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_datastore_service__WEBPACK_IMPORTED_MODULE_3__["DatastoreService"]])
], SignInComponent);



/***/ }),

/***/ "./src/app/services/authentication.serivce.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.serivce.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/config.ts");






let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_5__["config"].apiUrl + "auth/authenticate", { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // TODO - use cache instead of local storage?
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("currentUser", JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem("currentUser");
        this.currentUserSubject.next(null);
    }
};
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/cx.resolver.ts":
/*!*****************************************!*\
  !*** ./src/app/services/cx.resolver.ts ***!
  \*****************************************/
/*! exports provided: CxResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CxResolver", function() { return CxResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _datastore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datastore.service */ "./src/app/services/datastore.service.ts");



let CxResolver = class CxResolver {
    constructor(_api) {
        this._api = _api;
    }
    resolve(route) {
        return this._api.getPolicies();
    }
};
CxResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_datastore_service__WEBPACK_IMPORTED_MODULE_2__["DatastoreService"]])
], CxResolver);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/config.ts");






let DatastoreService = class DatastoreService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    navigateTo(page) {
        this.router.navigate([`/${page}`]);
    }
    getUsers() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["config"].apiUrl + "auth");
    }
    getPolicies() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["config"].apiUrl + "policies");
    }
    getPoliciesDetails() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["config"].apiUrl + "policiesDetails");
    }
    createUser(user) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_5__["config"].apiUrl + "auth", { user });
    }
    // Only for Demo purposes
    apiData() {
        const response1 = this.getUsers();
        const response2 = this.getPolicies();
        const response3 = this.getPoliciesDetails();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([response1, response2, response3]);
    }
};
DatastoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DatastoreService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_extensions_password_strength__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-material-extensions/password-strength */ "./node_modules/@angular-material-extensions/password-strength/esm2015/password-strength.js");




let MaterialModule = class MaterialModule {
};
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
            _angular_material_extensions_password_strength__WEBPACK_IMPORTED_MODULE_3__["MatPasswordStrengthModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/shared/types.ts":
/*!*********************************!*\
  !*** ./src/app/shared/types.ts ***!
  \*********************************/
/*! exports provided: ErrorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return ErrorType; });
var ErrorType;
(function (ErrorType) {
    ErrorType["Failed"] = "failed";
    ErrorType["Disabled"] = "disabled";
    ErrorType["Network"] = "network";
    ErrorType["Unknown"] = "unknown";
    ErrorType["Validation"] = "validation";
})(ErrorType || (ErrorType = {}));


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
    apiUrl: "http://localhost:8080/api/"
};


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map