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

/***/ "./src/app/add-dish/add-dish.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-dish/add-dish.component.ts ***!
  \************************************************/
/*! exports provided: AddDishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDishComponent", function() { return AddDishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_dish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/dish */ "./src/app/models/dish.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/navbar/navbar.component */ "./src/app/home/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AddDishComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);
} }
class AddDishComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        let obs = this.http.get('http://localhost:8081/categories');
        obs.subscribe((response) => this.categories = response);
    }
    addDish() {
        let dish = new _models_dish__WEBPACK_IMPORTED_MODULE_1__["Dish"](this.addName, this.description, this.price, this.category);
        let obs = this.http.post('http://localhost:8081/edit/adddish', dish);
        obs.subscribe((response) => console.log(response));
    }
    deleteDish() {
        let obs = this.http.delete('http://localhost:8081/edit/deletedish/' + this.deleteName);
        obs.subscribe((response) => console.log(response));
    }
}
AddDishComponent.ɵfac = function AddDishComponent_Factory(t) { return new (t || AddDishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AddDishComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddDishComponent, selectors: [["app-add-dish"]], decls: 34, vars: 6, consts: [["id", "edit-dish-list", 1, "container"], [1, "row", "top-buffer-20px"], [1, "col-6"], [1, "form-group"], ["for", "email"], ["type", "text", "name", "addName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "comment"], ["name", "description", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "sel1"], ["name", "category", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-success", 3, "click"], ["type", "text", "name", "deleteName", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger", 3, "click"]], template: function AddDishComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dodaj danie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nazwa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDishComponent_Template_input_ngModelChange_9_listener($event) { return ctx.addName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Opis:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDishComponent_Template_textarea_ngModelChange_13_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cena:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDishComponent_Template_input_ngModelChange_17_listener($event) { return ctx.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Kategoria:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDishComponent_Template_select_ngModelChange_21_listener($event) { return ctx.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddDishComponent_option_22_Template, 2, 1, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddDishComponent_Template_button_click_23_listener() { return ctx.addDish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Wy\u015Blij");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Usu\u0144 danie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Nazwa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDishComponent_Template_input_ngModelChange_31_listener($event) { return ctx.deleteName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddDishComponent_Template_button_click_32_listener() { return ctx.deleteDish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Wy\u015Blij");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.deleteName);
    } }, directives: [_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1kaXNoL2FkZC1kaXNoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddDishComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-dish',
                templateUrl: './add-dish.component.html',
                styleUrls: ['./add-dish.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-dish/add-dish.component */ "./src/app/add-dish/add-dish.component.ts");
/* harmony import */ var _edit_contact_data_edit_contact_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-contact-data/edit-contact-data.component */ "./src/app/edit-contact-data/edit-contact-data.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");











const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'shopping-cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'add-dish', component: _add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_6__["AddDishComponent"] },
    { path: 'edit-contact-data', component: _edit_contact_data_edit_contact_data_component__WEBPACK_IMPORTED_MODULE_7__["EditContactDataComponent"] },
    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_8__["OrdersComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'BurgerbarOrderWebApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/navbar/navbar.component */ "./src/app/home/navbar/navbar.component.ts");
/* harmony import */ var _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/footer/footer.component */ "./src/app/home/footer/footer.component.ts");
/* harmony import */ var _home_main_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/main/menu/menu.component */ "./src/app/home/main/menu/menu.component.ts");
/* harmony import */ var _home_main_dish_list_dish_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/main/dish-list/dish-list.component */ "./src/app/home/main/dish-list/dish-list.component.ts");
/* harmony import */ var _home_main_menu_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/main/menu/menu-item/menu-item.component */ "./src/app/home/main/menu/menu-item/menu-item.component.ts");
/* harmony import */ var _home_main_dish_list_dish_dish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/main/dish-list/dish/dish.component */ "./src/app/home/main/dish-list/dish/dish.component.ts");
/* harmony import */ var _home_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/main/main.component */ "./src/app/home/main/main.component.ts");
/* harmony import */ var _home_main_dish_list_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/main/dish-list/pagination/pagination.component */ "./src/app/home/main/dish-list/pagination/pagination.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth-service/auth.service */ "./src/app/services/auth-service/auth.service.ts");
/* harmony import */ var _services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/shopping-cart/shopping-cart.service */ "./src/app/services/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_list_shopping_cart_item_shopping_cart_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shopping-cart/shopping-cart-list/shopping-cart-item/shopping-cart-item.component */ "./src/app/shopping-cart/shopping-cart-list/shopping-cart-item/shopping-cart-item.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_list_shopping_cart_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shopping-cart/shopping-cart-list/shopping-cart-list.component */ "./src/app/shopping-cart/shopping-cart-list/shopping-cart-list.component.ts");
/* harmony import */ var _services_http_interceptor_httpinterceptor_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/http-interceptor/httpinterceptor.service */ "./src/app/services/http-interceptor/httpinterceptor.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-dish/add-dish.component */ "./src/app/add-dish/add-dish.component.ts");
/* harmony import */ var _edit_contact_data_edit_contact_data_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-contact-data/edit-contact-data.component */ "./src/app/edit-contact-data/edit-contact-data.component.ts");
/* harmony import */ var _shopping_cart_bill_bill_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shopping-cart/bill/bill.component */ "./src/app/shopping-cart/bill/bill.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _orders_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./orders/order-list/order-list.component */ "./src/app/orders/order-list/order-list.component.ts");
/* harmony import */ var _orders_order_list_order_list_item_order_list_item_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./orders/order-list/order-list-item/order-list-item.component */ "./src/app/orders/order-list/order-list-item/order-list-item.component.ts");
/* harmony import */ var _orders_order_list_order_dish_list_order_dish_list_order_dish_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./orders/order-list/order-dish-list/order-dish-list/order-dish-list.component */ "./src/app/orders/order-list/order-dish-list/order-dish-list/order-dish-list.component.ts");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_17__["ShoppingCartService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _services_http_interceptor_httpinterceptor_service__WEBPACK_IMPORTED_MODULE_21__["HttpInterceptorService"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _home_main_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
        _home_main_dish_list_dish_list_component__WEBPACK_IMPORTED_MODULE_8__["DishListComponent"],
        _home_main_menu_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_9__["MenuItemComponent"],
        _home_main_dish_list_dish_dish_component__WEBPACK_IMPORTED_MODULE_10__["DishComponent"],
        _home_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
        _home_main_dish_list_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_18__["ShoppingCartComponent"],
        _shopping_cart_shopping_cart_list_shopping_cart_item_shopping_cart_item_component__WEBPACK_IMPORTED_MODULE_19__["ShoppingCartItemComponent"],
        _shopping_cart_shopping_cart_list_shopping_cart_list_component__WEBPACK_IMPORTED_MODULE_20__["ShoppingCartListComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
        _add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_23__["AddDishComponent"],
        _edit_contact_data_edit_contact_data_component__WEBPACK_IMPORTED_MODULE_24__["EditContactDataComponent"],
        _shopping_cart_bill_bill_component__WEBPACK_IMPORTED_MODULE_25__["BillComponent"],
        _orders_orders_component__WEBPACK_IMPORTED_MODULE_26__["OrdersComponent"],
        _orders_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_27__["OrderListComponent"],
        _orders_order_list_order_list_item_order_list_item_component__WEBPACK_IMPORTED_MODULE_28__["OrderListItemComponent"],
        _orders_order_list_order_dish_list_order_dish_list_order_dish_list_component__WEBPACK_IMPORTED_MODULE_29__["OrderDishListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _home_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _home_main_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                    _home_main_dish_list_dish_list_component__WEBPACK_IMPORTED_MODULE_8__["DishListComponent"],
                    _home_main_menu_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_9__["MenuItemComponent"],
                    _home_main_dish_list_dish_dish_component__WEBPACK_IMPORTED_MODULE_10__["DishComponent"],
                    _home_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                    _home_main_dish_list_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                    _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_18__["ShoppingCartComponent"],
                    _shopping_cart_shopping_cart_list_shopping_cart_item_shopping_cart_item_component__WEBPACK_IMPORTED_MODULE_19__["ShoppingCartItemComponent"],
                    _shopping_cart_shopping_cart_list_shopping_cart_list_component__WEBPACK_IMPORTED_MODULE_20__["ShoppingCartListComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
                    _add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_23__["AddDishComponent"],
                    _edit_contact_data_edit_contact_data_component__WEBPACK_IMPORTED_MODULE_24__["EditContactDataComponent"],
                    _shopping_cart_bill_bill_component__WEBPACK_IMPORTED_MODULE_25__["BillComponent"],
                    _orders_orders_component__WEBPACK_IMPORTED_MODULE_26__["OrdersComponent"],
                    _orders_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_27__["OrderListComponent"],
                    _orders_order_list_order_list_item_order_list_item_component__WEBPACK_IMPORTED_MODULE_28__["OrderListItemComponent"],
                    _orders_order_list_order_dish_list_order_dish_list_order_dish_list_component__WEBPACK_IMPORTED_MODULE_29__["OrderDishListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
                ],
                providers: [_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_17__["ShoppingCartService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _services_http_interceptor_httpinterceptor_service__WEBPACK_IMPORTED_MODULE_21__["HttpInterceptorService"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/edit-contact-data/edit-contact-data.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/edit-contact-data/edit-contact-data.component.ts ***!
  \******************************************************************/
/*! exports provided: EditContactDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContactDataComponent", function() { return EditContactDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_contactData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/contactData */ "./src/app/models/contactData.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/navbar/navbar.component */ "./src/app/home/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class EditContactDataComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    editContactData() {
        let contactData = new _models_contactData__WEBPACK_IMPORTED_MODULE_1__["ContactData"](this.phoneNumber, this.email, this.address, this.description);
        let obs = this.http.put('http://localhost:8081/edit/editcontactdata', contactData);
        obs.subscribe((response) => console.log(response));
    }
}
EditContactDataComponent.ɵfac = function EditContactDataComponent_Factory(t) { return new (t || EditContactDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EditContactDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditContactDataComponent, selectors: [["app-edit-contact-data"]], decls: 24, vars: 4, consts: [["id", "edit-contacit-data", 1, "container"], [1, "row", "top-buffer-20px"], [1, "col-6"], [1, "form-group"], ["for", "email"], ["type", "text", "name", "phoneNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "comment"], ["name", "description", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "address", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", 3, "click"]], template: function EditContactDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edytuj dane kontaktowe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Numer telefonu:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditContactDataComponent_Template_input_ngModelChange_9_listener($event) { return ctx.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Opis:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditContactDataComponent_Template_textarea_ngModelChange_13_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditContactDataComponent_Template_input_ngModelChange_17_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Adres:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditContactDataComponent_Template_input_ngModelChange_21_listener($event) { return ctx.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditContactDataComponent_Template_button_click_22_listener() { return ctx.editContactData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Wy\u015Blij");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address);
    } }, directives: [_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtY29udGFjdC1kYXRhL2VkaXQtY29udGFjdC1kYXRhLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditContactDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-contact-data',
                templateUrl: './edit-contact-data.component.html',
                styleUrls: ['./edit-contact-data.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class FooterComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        let obs = this.http.get('http://localhost:8081/contactdata');
        obs.subscribe((response) => {
            this.contactData = response;
        });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 3, consts: [["id", "footer", 1, "bottom-buffer-10px", "card", "bg-light", "top-buffer-20px"], [1, "card-body"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactData.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactData.address);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/home/navbar/navbar.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/home/main/main.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/home/footer/footer.component.ts");





class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 0, consts: [["id", "content", 1, "container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/main/dish-list/dish-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home/main/dish-list/dish-list.component.ts ***!
  \************************************************************/
/*! exports provided: DishListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishListComponent", function() { return DishListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/home/main/dish-list/pagination/pagination.component.ts");
/* harmony import */ var _dish_dish_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dish/dish.component */ "./src/app/home/main/dish-list/dish/dish.component.ts");






function DishListComponent_div_1_app_dish_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dish", 4);
} if (rf & 2) {
    const dish_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dish", dish_r1);
} }
function DishListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DishListComponent_div_1_app_dish_1_Template, 1, 1, "app-dish", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.checkPage(i_r2));
} }
class DishListComponent {
    constructor(http) {
        this.http = http;
        this.currentPage = 1;
    }
    ngOnInit() {
        let obs = this.http.get('http://localhost:8081/dishes');
        obs.subscribe((response) => {
            this.dishes = response;
            this.currentPage = 1;
            this.numberOfPages = Math.ceil(this.dishes.length / 6) + 1;
        });
    }
    ngOnChanges() {
        if (!(this.currentCategory == null)) {
            let obs = this.http.get('http://localhost:8081/dishes/' + this.currentCategory);
            obs.subscribe((response) => {
                this.dishes = response;
                this.currentPage = 1;
                this.numberOfPages = Math.ceil(this.dishes.length / 6);
            });
        }
    }
    setCurrentCategoryIndex($event) {
        this.currentPage = $event;
    }
    checkPage(index) {
        if (index >= (this.currentPage - 1) * 6 && index < (this.currentPage - 1) * 6 + 6)
            return true;
        else
            return false;
    }
}
DishListComponent.ɵfac = function DishListComponent_Factory(t) { return new (t || DishListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DishListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DishListComponent, selectors: [["app-dish-list"]], inputs: { currentCategory: "currentCategory" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [["id", "dish-list"], [4, "ngFor", "ngForOf"], [3, "numberOfPages", "pageIndex"], [3, "dish", 4, "ngIf"], [3, "dish"]], template: function DishListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DishListComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-pagination", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageIndex", function DishListComponent_Template_app_pagination_pageIndex_2_listener($event) { return ctx.setCurrentCategoryIndex($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dishes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("numberOfPages", ctx.numberOfPages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _dish_dish_component__WEBPACK_IMPORTED_MODULE_4__["DishComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbi9kaXNoLWxpc3QvZGlzaC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DishListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dish-list',
                templateUrl: './dish-list.component.html',
                styleUrls: ['./dish-list.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { currentCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/main/dish-list/dish/dish.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home/main/dish-list/dish/dish.component.ts ***!
  \************************************************************/
/*! exports provided: DishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishComponent", function() { return DishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_orderItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/orderItem */ "./src/app/models/orderItem.ts");
/* harmony import */ var src_app_services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shopping-cart/shopping-cart.service */ "./src/app/services/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class DishComponent {
    constructor(shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
    ngOnInit() {
    }
    addToCart() {
        this.shoppingCart.addToCart(new src_app_models_orderItem__WEBPACK_IMPORTED_MODULE_1__["OrderItem"](this.dish, this.quantity));
        console.log(this.dish);
        this.quantity = 0;
        return false;
    }
}
DishComponent.ɵfac = function DishComponent_Factory(t) { return new (t || DishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"])); };
DishComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DishComponent, selectors: [["app-dish"]], inputs: { dish: "dish" }, decls: 25, vars: 4, consts: [[1, "dish", "bottom-buffer-10px", "card"], [1, "card-body"], [1, "name", "card-title"], [1, "price", "card-subtitle"], [1, "description", "card-text"], ["href", "#", "data-toggle", "modal", "data-target", "#quantityModal", 1, "btn", "btn-danger"], ["id", "quantityModal", 1, "modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "form-group"], ["type", "email", "id", "quantity", "name", "quantity", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"]], template: function DishComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dodaj do koszyka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Podaj ilo\u015B\u0107");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DishComponent_Template_input_ngModelChange_21_listener($event) { return ctx.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DishComponent_Template_button_click_23_listener() { return ctx.addToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Zamknij");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dish.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.dish.price, " z\u0142");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dish.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quantity);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbi9kaXNoLWxpc3QvZGlzaC9kaXNoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DishComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dish',
                templateUrl: './dish.component.html',
                styleUrls: ['./dish.component.css']
            }]
    }], function () { return [{ type: src_app_services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"] }]; }, { dish: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/main/dish-list/pagination/pagination.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/main/dish-list/pagination/pagination.component.ts ***!
  \************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function PaginationComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.previousPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginationComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const page_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showPage(page_r5 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r5 + 1);
} }
function PaginationComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PaginationComponent {
    constructor() {
        this.pageIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.localPageIndex = 1;
    }
    ngOnInit() {
        this.pages = Array(this.numberOfPages).fill(0).map((x, i) => i);
    }
    ngOnChanges() {
        this.pages = Array(this.numberOfPages).fill(0).map((x, i) => i);
        this.localPageIndex = 1;
    }
    showPage(pageIndex) {
        this.localPageIndex = pageIndex;
        this.pageIndex.emit(pageIndex);
        return false;
    }
    previousPage() {
        this.localPageIndex = this.localPageIndex - 1;
        this.pageIndex.emit(this.localPageIndex);
        return false;
    }
    nextPage() {
        this.localPageIndex = this.localPageIndex + 1;
        this.pageIndex.emit(this.localPageIndex);
        return false;
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { numberOfPages: "numberOfPages" }, outputs: { pageIndex: "pageIndex" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 3, consts: [["id", "pagination", 1, "top-buffer-5px"], [1, "pagination", "justify-content-center"], [4, "ngIf"], ["class", "page-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "page-item", 3, "click", 4, "ngIf"], ["href", "#", 1, "page-link", 3, "click"], [1, "page-item", 3, "click"], ["href", "#", 1, "page-link"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_li_3_Template, 3, 0, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 3, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_li_5_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localPageIndex != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localPageIndex != ctx.pages[ctx.pages.length - 1] + 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbi9kaXNoLWxpc3QvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagination',
                templateUrl: './pagination.component.html',
                styleUrls: ['./pagination.component.css']
            }]
    }], function () { return []; }, { pageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], numberOfPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/main/main.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/main/main.component.ts ***!
  \*********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/home/main/menu/menu.component.ts");
/* harmony import */ var _dish_list_dish_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dish-list/dish-list.component */ "./src/app/home/main/dish-list/dish-list.component.ts");




class MainComponent {
    constructor() { }
    ngOnInit() {
    }
    setCurrentCategory($event) {
        this.currentCategory = $event;
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 3, vars: 1, consts: [["id", "main", 1, "row", "top-buffer-20px"], [1, "col-3", 3, "currentCategory"], [1, "col-9", 3, "currentCategory"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("currentCategory", function MainComponent_Template_app_menu_currentCategory_1_listener($event) { return ctx.setCurrentCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-dish-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentCategory", ctx.currentCategory);
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _dish_list_dish_list_component__WEBPACK_IMPORTED_MODULE_2__["DishListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/main/menu/menu-item/menu-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/main/menu/menu-item/menu-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MenuItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuItemComponent.ɵfac = function MenuItemComponent_Factory(t) { return new (t || MenuItemComponent)(); };
MenuItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItemComponent, selectors: [["app-menu-item"]], inputs: { name: "name" }, decls: 2, vars: 1, consts: [[1, "category", "list-group-item", "list-group-item-action"]], template: function MenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, styles: ["a[_ngcontent-%COMP%]{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tYWluL21lbnUvbWVudS1pdGVtL21lbnUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbi9tZW51L21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-item',
                templateUrl: './menu-item.component.html',
                styleUrls: ['./menu-item.component.css']
            }]
    }], function () { return []; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['name']
        }] }); })();


/***/ }),

/***/ "./src/app/home/main/menu/menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home/main/menu/menu.component.ts ***!
  \**************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-item/menu-item.component */ "./src/app/home/main/menu/menu-item/menu-item.component.ts");





function MenuComponent_app_menu_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-menu-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_app_menu_item_3_Template_app_menu_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const category_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.showCategory(category_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", category_r1.name);
} }
class MenuComponent {
    constructor(http) {
        this.http = http;
        this.currentCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        let obs = this.http.get('http://localhost:8081/categories');
        obs.subscribe((response) => this.categories = response);
    }
    showCategory(category) {
        this.currentCategory.emit(category);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], outputs: { currentCategory: "currentCategory" }, decls: 4, vars: 1, consts: [["id", "menu", 1, "list-group"], ["href", "/home", 1, "category", "list-group-item", "list-group-item-action", "active"], [3, "name", "click", 4, "ngFor", "ngForOf"], [3, "name", "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuComponent_app_menu_item_3_Template, 1, 1, "app-menu-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_3__["MenuItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbi9tZW51L21lbnUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { currentCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-service/auth.service */ "./src/app/services/auth-service/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function NavbarComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edytuj ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "List\u0119 da\u0144");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dane kontaktowe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zam\u00F3wienia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.userName);
} }
function NavbarComponent_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} }
function NavbarComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function NavbarComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.handleLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wyloguj si\u0119");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zaloguj si\u0119");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
    }
    ngDoCheck() {
        this.userName = sessionStorage.getItem('authenticatedUser');
        this.roles = sessionStorage.getItem('roles');
    }
    handleLogout() {
        this.authenticationService.logout();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 26, vars: 7, consts: [[1, "row", "top-buffer-20px", "navbar", "navbar-expand", "bg-primary", "navbar-dark"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "/home", 1, "nav-link"], [1, "nav-item"], ["href", "#", 1, "nav-link"], ["class", "dropdown", 4, "ngIf"], ["class", "nav-link", "routerLink", "/orders", 4, "ngIf"], [1, "navbar-nav"], ["class", "nav-link", "routerLink", "/home", 4, "ngIf"], ["class", "shopping-cart", "src", "../../assets/shopping-cart.png", "routerLink", "/shopping-cart", 4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [1, "dropdown"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle"], [1, "dropdown-menu"], ["routerLink", "/add-dish", 1, "dropdown-item"], ["routerLink", "/edit-contact-data", 1, "dropdown-item"], ["routerLink", "/orders", 1, "nav-link"], ["routerLink", "/home", 1, "nav-link"], ["src", "../../assets/shopping-cart.png", "routerLink", "/shopping-cart", 1, "shopping-cart"], ["routerLink", "/home", 1, "btn", "btn-success", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-success"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "JohnnyBurger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "O nas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_div_12_Template, 8, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_a_14_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavbarComponent_a_17_Template, 2, 1, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavbarComponent_img_19_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavbarComponent_div_21_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavbarComponent_ng_template_22_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavbarComponent_ng_template_24_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName && ctx.roles === "ROLE_ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName && ctx.roles === "ROLE_STAFF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName && ctx.roles === "ROLE_USER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName)("ngIfThen", _r5)("ngIfElse", _r7);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".shopping-cart[_ngcontent-%COMP%]{\n    margin-left: 5px;\n    margin-right: 10px;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG9wcGluZy1jYXJ0e1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-service/auth.service */ "./src/app/services/auth-service/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function LoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMessage);
} }
class LoginComponent {
    constructor(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.errorMessage = 'Invalid Credentials';
        this.invalidLogin = false;
        this.loginSuccess = false;
    }
    ngOnInit() {
    }
    handleLogin() {
        this.authenticationService.authenticationService(this.username, this.password).subscribe((result) => {
            this.invalidLogin = false;
            this.loginSuccess = true;
            this.successMessage = 'Login Successful.';
            this.router.navigate(['/home']);
        }, () => {
            this.invalidLogin = true;
            this.loginSuccess = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 4, consts: [[1, "login", "container", "col-6"], [1, "text-center"], [1, "card"], [1, "card-body"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "form-group"], ["for", "email"], ["type", "text", "id", "username", "placeholder", "Wpisz nazw\u0119 u\u017Cytkownika", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "pwd"], ["type", "password", "id", "password", "placeholder", "Wpisz has\u0142o", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "justify-content-between"], ["routerLink", "/register", 1, "col-auto"], [1, "col-auto"], ["routerLink", "/login", 1, "btn", "btn-success", 3, "click"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nazwa u\u017Cytkownika:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Has\u0142o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Zarejestruj si\u0119");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() { return ctx.handleLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Zaloguj si\u0119");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/contactData.ts":
/*!***************************************!*\
  !*** ./src/app/models/contactData.ts ***!
  \***************************************/
/*! exports provided: ContactData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactData", function() { return ContactData; });
class ContactData {
    constructor(phoneNumber, email, address, description) {
        this.id = 1;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.description = description;
    }
}


/***/ }),

/***/ "./src/app/models/dish.ts":
/*!********************************!*\
  !*** ./src/app/models/dish.ts ***!
  \********************************/
/*! exports provided: Dish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dish", function() { return Dish; });
class Dish {
    constructor(name, description, price, category) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    }
}


/***/ }),

/***/ "./src/app/models/orderItem.ts":
/*!*************************************!*\
  !*** ./src/app/models/orderItem.ts ***!
  \*************************************/
/*! exports provided: OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
class OrderItem {
    constructor(dish, quantity) {
        this.dish = dish;
        this.quantity = quantity;
    }
}


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/orders/order-list/order-dish-list/order-dish-list/order-dish-list.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/orders/order-list/order-dish-list/order-dish-list/order-dish-list.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OrderDishListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDishListComponent", function() { return OrderDishListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["app-order-dish-list", ""];
function OrderDishListComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](orderItem_r1.dish.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](orderItem_r1.quantity);
} }
class OrderDishListComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        let obs = this.http.get('http://localhost:8081/activeorders/' + this.order.id);
        obs.subscribe((response) => {
            this.orderItems = response;
        });
    }
}
OrderDishListComponent.ɵfac = function OrderDishListComponent_Factory(t) { return new (t || OrderDishListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OrderDishListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderDishListComponent, selectors: [["", "app-order-dish-list", ""]], inputs: { order: "order" }, attrs: _c0, decls: 9, vars: 1, consts: [[1, "table-responsive"], ["mdbTable", "", 1, "table", "table-borderless", "table-condensed"], [4, "ngFor", "ngForOf"]], template: function OrderDishListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nazwa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ilo\u015B\u0107");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrderDishListComponent_tr_8_Template, 5, 2, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci1saXN0L29yZGVyLWRpc2gtbGlzdC9vcmRlci1kaXNoLWxpc3Qvb3JkZXItZGlzaC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDishListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-order-dish-list]',
                templateUrl: './order-dish-list.component.html',
                styleUrls: ['./order-dish-list.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/orders/order-list/order-list-item/order-list-item.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/orders/order-list/order-list-item/order-list-item.component.ts ***!
  \********************************************************************************/
/*! exports provided: OrderListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListItemComponent", function() { return OrderListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["app-order-list-item", ""];
class OrderListItemComponent {
    constructor(http) {
        this.http = http;
        this.endOrderEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        let obs = this.http.get('http://localhost:8081/activeorders/' + this.order.id);
        obs.subscribe((response) => {
            this.orderItems = response;
        });
    }
    endOrder() {
        console.log("endorder");
        this.order.isActive = false;
        let obs = this.http.put('http://localhost:8081/endorder', this.order);
        obs.subscribe((response) => {
            console.log(response);
            this.endOrderEvent.emit("true");
        });
    }
}
OrderListItemComponent.ɵfac = function OrderListItemComponent_Factory(t) { return new (t || OrderListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OrderListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderListItemComponent, selectors: [["", "app-order-list-item", ""]], inputs: { order: "order" }, outputs: { endOrderEvent: "endOrderEvent" }, attrs: _c0, decls: 10, vars: 6, consts: [[1, "btn", "btn-danger", 3, "click"]], template: function OrderListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderListItemComponent_Template_button_click_8_listener() { return ctx.endOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Zako\u0144cz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, ctx.order.date, "short"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci1saXN0L29yZGVyLWxpc3QtaXRlbS9vcmRlci1saXN0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-order-list-item]',
                templateUrl: './order-list-item.component.html',
                styleUrls: ['./order-list-item.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], endOrderEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/orders/order-list/order-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/orders/order-list/order-list.component.ts ***!
  \***********************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _order_list_item_order_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-list-item/order-list-item.component */ "./src/app/orders/order-list/order-list-item/order-list-item.component.ts");
/* harmony import */ var _order_dish_list_order_dish_list_order_dish_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-dish-list/order-dish-list/order-dish-list.component */ "./src/app/orders/order-list/order-dish-list/order-dish-list/order-dish-list.component.ts");






function OrderListComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("endOrderEvent", function OrderListComponent_ng_container_13_Template_tr_endOrderEvent_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getActiveOrders(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", order_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#d" + order_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "d" + order_r1.id)("order", order_r1);
} }
class OrderListComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        let obs = this.http.get('http://localhost:8081/activeorders');
        obs.subscribe((response) => {
            this.orders = response;
        });
    }
    getActiveOrders() {
        let obs = this.http.get('http://localhost:8081/activeorders');
        obs.subscribe((response) => {
            this.orders = response;
        });
    }
}
OrderListComponent.ɵfac = function OrderListComponent_Factory(t) { return new (t || OrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OrderListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderListComponent, selectors: [["app-order-list"]], decls: 14, vars: 1, consts: [[1, "top-buffer-20px", "table-hover", "table-reponsive"], ["mdbTable", "", 1, "table"], [4, "ngFor", "ngForOf"], ["role", "button", "data-toggle", "collapse", "app-order-list-item", "", 3, "order", "endOrderEvent"], ["app-order-dish-list", "", 1, "collapse", 3, "id", "order"]], template: function OrderListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Zam\u00F3wienia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Zamawiaj\u0105cy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OrderListComponent_ng_container_13_Template, 3, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _order_list_item_order_list_item_component__WEBPACK_IMPORTED_MODULE_3__["OrderListItemComponent"], _order_dish_list_order_dish_list_order_dish_list_component__WEBPACK_IMPORTED_MODULE_4__["OrderDishListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci1saXN0L29yZGVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-list',
                templateUrl: './order-list.component.html',
                styleUrls: ['./order-list.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/navbar/navbar.component */ "./src/app/home/navbar/navbar.component.ts");
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-list/order-list.component */ "./src/app/orders/order-list/order-list.component.ts");




class OrdersComponent {
    constructor() { }
    ngOnInit() {
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(); };
OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], decls: 4, vars: 0, consts: [["id", "orders", 1, "container"], [1, "row"], [1, "col-12"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-order-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_2__["OrderListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-orders',
                templateUrl: './orders.component.html',
                styleUrls: ['./orders.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class RegisterComponent {
    constructor(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
    }
    handleRegistration() {
        let obs = this.http.post('http://localhost:8081/register', new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"](this.username, this.password));
        obs.subscribe((response) => console.log(response));
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 20, vars: 3, consts: [[1, "register", "container", "col-6"], [1, "text-center"], [1, "card"], [1, "card-body"], [1, "form-group"], ["for", "email"], ["type", "text", "id", "username", "placeholder", "Wpisz nazw\u0119 u\u017Cytkownika", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "pwd"], ["type", "password", "id", "password", "placeholder", "Wpisz has\u0142o", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "secondPassword", "placeholder", "Wpisz has\u0142o", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["routerLink", "/login", 1, "btn", "btn-success", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Zarejestruj si\u0119");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nazwa u\u017Cytkownika:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_9_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Has\u0142o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Powt\u00F3rz has\u0142o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_17_listener($event) { return ctx.secondPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_18_listener() { return ctx.handleRegistration(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Zarejestruj si\u0119");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.secondPassword);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-service/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/auth-service/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AuthService {
    constructor(http) {
        this.http = http;
        // BASE_PATH: 'http://localhost:8081'
        this.USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
    }
    authenticationService(username, password) {
        return this.http.get(`http://localhost:8081/login`, { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            this.username = username;
            this.password = password;
            this.registerSuccessfulLogin(username, password, res.roles);
        }));
    }
    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password);
    }
    registerSuccessfulLogin(username, password, roles) {
        sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        sessionStorage.setItem("password", password);
        sessionStorage.setItem("roles", roles);
    }
    logout() {
        sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        this.username = null;
        this.password = null;
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null)
            return false;
        return true;
    }
    getLoggedInUserName() {
        let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null)
            return '';
        return user;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/http-interceptor/httpinterceptor.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/http-interceptor/httpinterceptor.service.ts ***!
  \**********************************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-service/auth.service */ "./src/app/services/auth-service/auth.service.ts");




class HttpInterceptorService {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(req, next) {
        if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
            const authReq = req.clone({
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${window.btoa(sessionStorage.getItem('authenticatedUser') + ":" + sessionStorage.getItem('password'))}`
                })
            });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    }
}
HttpInterceptorService.ɵfac = function HttpInterceptorService_Factory(t) { return new (t || HttpInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
HttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpInterceptorService, factory: HttpInterceptorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/shopping-cart/shopping-cart.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/shopping-cart/shopping-cart.service.ts ***!
  \*****************************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ShoppingCartService {
    constructor(http) {
        this.http = http;
        this.order = new Array();
    }
    addToCart(orderItem) {
        this.order.push(orderItem);
    }
    getOrder() {
        return this.order;
    }
    sendOrder() {
        let obs = this.http.post('http://localhost:8081/order', this.order);
        obs.subscribe(() => console.log("got response"));
        this.order = [];
    }
}
ShoppingCartService.ɵfac = function ShoppingCartService_Factory(t) { return new (t || ShoppingCartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ShoppingCartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShoppingCartService, factory: ShoppingCartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingCartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shopping-cart/bill/bill.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shopping-cart/bill/bill.component.ts ***!
  \******************************************************/
/*! exports provided: BillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillComponent", function() { return BillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shopping-cart/shopping-cart.service */ "./src/app/services/shopping-cart/shopping-cart.service.ts");



class BillComponent {
    constructor(shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
    ngOnInit() {
        this.toPay = this.countBill();
    }
    countBill() {
        let sum = 0;
        for (let orderItem of this.shoppingCart.getOrder())
            sum += orderItem.dish.price * orderItem.quantity;
        console.log(this.shoppingCart.getOrder());
        return sum;
    }
}
BillComponent.ɵfac = function BillComponent_Factory(t) { return new (t || BillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"])); };
BillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillComponent, selectors: [["app-bill"]], decls: 7, vars: 1, consts: [[1, "card", "top-buffer-20px"], [1, "card-body"], [1, "name", "card-title"], [1, "description", "card-text", "text-right"], [1, "badge", "badge-danger"]], template: function BillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Do zap\u0142aty:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.toPay, " z\u0142");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvYmlsbC9iaWxsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bill',
                templateUrl: './bill.component.html',
                styleUrls: ['./bill.component.css']
            }]
    }], function () { return [{ type: _services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart-list/shopping-cart-item/shopping-cart-item.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart-list/shopping-cart-item/shopping-cart-item.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ShoppingCartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartItemComponent", function() { return ShoppingCartItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["app-shopping-cart-item", ""];
class ShoppingCartItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShoppingCartItemComponent.ɵfac = function ShoppingCartItemComponent_Factory(t) { return new (t || ShoppingCartItemComponent)(); };
ShoppingCartItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingCartItemComponent, selectors: [["", "app-shopping-cart-item", ""]], inputs: { orderItem: "orderItem" }, attrs: _c0, decls: 6, vars: 3, template: function ShoppingCartItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orderItem.dish.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.orderItem.dish.price, " z\u0142");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orderItem.quantity);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC1saXN0L3Nob3BwaW5nLWNhcnQtaXRlbS9zaG9wcGluZy1jYXJ0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingCartItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-shopping-cart-item]',
                templateUrl: './shopping-cart-item.component.html',
                styleUrls: ['./shopping-cart-item.component.css']
            }]
    }], function () { return []; }, { orderItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart-list/shopping-cart-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart-list/shopping-cart-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ShoppingCartListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartListComponent", function() { return ShoppingCartListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shopping-cart/shopping-cart.service */ "./src/app/services/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shopping_cart_item_shopping_cart_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart-item/shopping-cart-item.component */ "./src/app/shopping-cart/shopping-cart-list/shopping-cart-item/shopping-cart-item.component.ts");





function ShoppingCartListComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 3);
} if (rf & 2) {
    const orderItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderItem", orderItem_r1);
} }
class ShoppingCartListComponent {
    constructor(shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
    ngOnInit() {
    }
}
ShoppingCartListComponent.ɵfac = function ShoppingCartListComponent_Factory(t) { return new (t || ShoppingCartListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"])); };
ShoppingCartListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingCartListComponent, selectors: [["app-shopping-cart-list"]], decls: 14, vars: 1, consts: [["id", "shopping-cart-list", 1, "top-buffer-20px", "table-striped", "table-reponsive"], ["mdbTable", "", 1, "table"], ["app-shopping-cart-item", "", 3, "orderItem", 4, "ngFor", "ngForOf"], ["app-shopping-cart-item", "", 3, "orderItem"]], template: function ShoppingCartListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Twoje zam\u00F3wienie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nazwa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ilo\u015B\u0107");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ShoppingCartListComponent_tr_13_Template, 1, 1, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shoppingCart.getOrder());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shopping_cart_item_shopping_cart_item_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC1saXN0L3Nob3BwaW5nLWNhcnQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingCartListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shopping-cart-list',
                templateUrl: './shopping-cart-list.component.html',
                styleUrls: ['./shopping-cart-list.component.css']
            }]
    }], function () { return [{ type: _services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shopping-cart/shopping-cart.service */ "./src/app/services/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/navbar/navbar.component */ "./src/app/home/navbar/navbar.component.ts");
/* harmony import */ var _shopping_cart_list_shopping_cart_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart-list/shopping-cart-list.component */ "./src/app/shopping-cart/shopping-cart-list/shopping-cart-list.component.ts");
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bill/bill.component */ "./src/app/shopping-cart/bill/bill.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class ShoppingCartComponent {
    constructor(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    ngOnInit() {
    }
    sendOrder() {
        this.shoppingCartService.sendOrder();
    }
}
ShoppingCartComponent.ɵfac = function ShoppingCartComponent_Factory(t) { return new (t || ShoppingCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"])); };
ShoppingCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingCartComponent, selectors: [["app-shopping-cart"]], decls: 7, vars: 0, consts: [["id", "shopping-cart", 1, "container"], [1, "row"], [1, "col-9"], [1, "col-3"], ["routerLink", "/home", 1, "top-buffer-10px", "btn", "btn-danger", 3, "click"]], template: function ShoppingCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-shopping-cart-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-bill", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShoppingCartComponent_Template_a_click_5_listener() { return ctx.sendOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Wy\u015Blij");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _shopping_cart_list_shopping_cart_list_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartListComponent"], _bill_bill_component__WEBPACK_IMPORTED_MODULE_4__["BillComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shopping-cart',
                templateUrl: './shopping-cart.component.html',
                styleUrls: ['./shopping-cart.component.css']
            }]
    }], function () { return [{ type: _services_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/daniel/BurgerBarOrderApp/BurgerbarOrderWebApp/BurgerbarOrderWebAppAngular/BurgerbarOrderWebApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map