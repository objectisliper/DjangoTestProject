(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-manage-admin-manage-module"],{

/***/ "./src/app/layout/admin/admin.component.css":
/*!**************************************************!*\
  !*** ./src/app/layout/admin/admin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/admin/admin.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/admin/admin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n  <router-outlet></router-outlet>\n</p>\n"

/***/ }),

/***/ "./src/app/layout/admin/admin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/admin/admin.component.ts ***!
  \*************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/layout/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/layout/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin-manage/admin-manage-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin-manage/admin-manage-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AdminManageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminManageRoutingModule", function() { return AdminManageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboards/dashboards.component */ "./src/app/pages/admin-manage/dashboards/dashboards.component.ts");
/* harmony import */ var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/admin/admin.component */ "./src/app/layout/admin/admin.component.ts");





var routes = [
    {
        path: '',
        component: _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        children: [
            {
                path: '**',
                redirectTo: 'dashboards',
            },
            {
                path: '',
                redirectTo: 'dashboards',
                pathMatch: 'full',
            },
            {
                path: 'dashboards',
                component: _dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_3__["DashboardsComponent"],
                pathMatch: 'full',
            }
        ]
    }
];
var AdminManageRoutingModule = /** @class */ (function () {
    function AdminManageRoutingModule() {
    }
    AdminManageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminManageRoutingModule);
    return AdminManageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/admin-manage/admin-manage.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/admin-manage/admin-manage.module.ts ***!
  \***********************************************************/
/*! exports provided: AdminManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminManageModule", function() { return AdminManageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboards/dashboards.component */ "./src/app/pages/admin-manage/dashboards/dashboards.component.ts");
/* harmony import */ var _admin_manage_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-manage-routing.module */ "./src/app/pages/admin-manage/admin-manage-routing.module.ts");
/* harmony import */ var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/admin/admin.component */ "./src/app/layout/admin/admin.component.ts");






var AdminManageModule = /** @class */ (function () {
    function AdminManageModule() {
    }
    AdminManageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboards_dashboards_component__WEBPACK_IMPORTED_MODULE_3__["DashboardsComponent"],
                _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _admin_manage_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminManageRoutingModule"],
            ]
        })
    ], AdminManageModule);
    return AdminManageModule;
}());



/***/ }),

/***/ "./src/app/pages/admin-manage/dashboards/dashboards.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin-manage/dashboards/dashboards.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluLW1hbmFnZS9kYXNoYm9hcmRzL2Rhc2hib2FyZHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin-manage/dashboards/dashboards.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin-manage/dashboards/dashboards.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboards works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/admin-manage/dashboards/dashboards.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin-manage/dashboards/dashboards.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsComponent", function() { return DashboardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardsComponent = /** @class */ (function () {
    function DashboardsComponent() {
    }
    DashboardsComponent.prototype.ngOnInit = function () {
    };
    DashboardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboards',
            template: __webpack_require__(/*! ./dashboards.component.html */ "./src/app/pages/admin-manage/dashboards/dashboards.component.html"),
            styles: [__webpack_require__(/*! ./dashboards.component.css */ "./src/app/pages/admin-manage/dashboards/dashboards.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardsComponent);
    return DashboardsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-manage-admin-manage-module.js.map