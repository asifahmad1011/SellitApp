(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./node_modules/ngx-isotope/ngx-isotope.umd.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngx-isotope/ngx-isotope.umd.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js")) :
	undefined;
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var IsotopeGridComponent = (function () {
    /**
     * @param {?} el
     */
    function IsotopeGridComponent(el) {
        this.el = el;
        this.items = [];
    }
    /**
     * @return {?}
     */
    IsotopeGridComponent.prototype.ngOnInit = function () {
        if (!this.options)
            this.options = {};
        if (!this.options.itemSelector) {
            this.options.itemSelector = '[isotope-item], isotope-item';
        }
        if (this.el.nativeElement.tagName === 'ISOTOPE-GRID') {
            this.el.nativeElement.style.display = 'block';
        }
        this.isotope = new Isotope(this.el.nativeElement, this.options);
    };
    /**
     * @param {?} el
     * @return {?}
     */
    IsotopeGridComponent.prototype.add = function (el) {
        var _this = this;
        this.isotope.appended(el);
        this.isotope.layout();
        imagesLoaded(el).on('progress', function () {
            _this.isotope.layout();
        });
    };
    return IsotopeGridComponent;
}());
IsotopeGridComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'isotope-grid',
                template: "<ng-content></ng-content> ",
                styles: [""]
            },] },
];
/**
 * @nocollapse
 */
IsotopeGridComponent.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
]; };
IsotopeGridComponent.propDecorators = {
    'options': [{ type: _angular_core.Input },],
};

var IsotopeItemComponent = (function () {
    /**
     * @param {?} grid
     * @param {?} el
     */
    function IsotopeItemComponent(grid, el) {
        this.grid = grid;
        this.el = el;
    }
    /**
     * @return {?}
     */
    IsotopeItemComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    IsotopeItemComponent.prototype.ngAfterViewInit = function () {
        this.grid.add(this.el.nativeElement);
    };
    return IsotopeItemComponent;
}());
IsotopeItemComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'isotope-item',
                template: "<ng-content></ng-content> ",
                styles: [""]
            },] },
];
/**
 * @nocollapse
 */
IsotopeItemComponent.ctorParameters = function () { return [
    { type: IsotopeGridComponent, },
    { type: _angular_core.ElementRef, },
]; };

var IsotopeModule = (function () {
    function IsotopeModule() {
    }
    /**
     * @return {?}
     */
    IsotopeModule.forRoot = function () {
        return {
            ngModule: IsotopeModule,
            providers: []
        };
    };
    return IsotopeModule;
}());
IsotopeModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule
                ],
                declarations: [
                    IsotopeGridComponent,
                    IsotopeItemComponent,
                ],
                exports: [
                    IsotopeGridComponent,
                    IsotopeItemComponent,
                ]
            },] },
];
/**
 * @nocollapse
 */
IsotopeModule.ctorParameters = function () { return []; };

exports.IsotopeModule = IsotopeModule;
exports.IsotopeGridComponent = IsotopeGridComponent;
exports.IsotopeItemComponent = IsotopeItemComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/Chat/chat.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/Chat/chat.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\r\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script> \r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<section>\r\n<div class=\"container\">\r\n\r\n<div class=\"messaging\">\r\n      <div class=\"inbox_msg\">\r\n        <div class=\"inbox_people\">\r\n          <div class=\"headind_srch\">\r\n            <div class=\"recent_heading\">\r\n              <h6>Recent Messages</h6>\r\n            </div>\r\n            <div class=\"srch_bar\">\r\n              <div class=\"stylish-input-group\">\r\n                <input type=\"text\" class=\"invisible\" >\r\n                <span class=\"input-group-addon\">\r\n                </span> </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"inbox_chat\" >\r\n            <div class=\"card\" *ngFor=\"let result of selectedProduct.contacts\">\r\n                <div class=\"card-body\" >\r\n                    <div class=\"incoming_msg_img\"> <img src=\"https://ptetutorials.com/images/user-profile.png\" alt=\"sunil\"> </div>\r\n                  <h6 class=\"card-title\">{{result.first_name}}</h6>\r\n                  <p class=\"card-text\" (click)=\"getAllMessages(result.receiver_id, result.matrikel_number)\">{{result.product_name}}</p>\r\n                </div>\r\n              </div>\r\n           \r\n          </div>\r\n        </div>\r\n        <div class=\"mesgs\">\r\n          <div class=\"msg_history\" >\r\n            <div class=\"incoming_msg\">\r\n              <div class=\"received_msg\" *ngFor=\"let result of chat.rows\">\r\n                <div class=\"received_withd_msg\" *ngIf=\"result.matrikel_number ==  readLocalStorage('matrikel_number')\">\r\n                  <p>{{result.message}}</p>\r\n                  <span class=\"time_date\">{{result.first_name}}</span></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"outgoing_msg\" *ngFor=\"let result of chat.rows\">\r\n              <div class=\"sent_msg\" *ngIf=\"result.matrikel_number != readLocalStorage('matrikel_number')\">\r\n                <p>{{result.message}}</p>\r\n                <span class=\"time_date\">{{result.first_name}}</span> </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <form [formGroup]=\"chatform\" class=\"theme-form\">\r\n\r\n          <div class=\"type_msg\" *ngFor=\"let result of selectedProduct.contacts\">\r\n\r\n            <div class=\"input_msg_write\" *ngFor=\"let result of chat.rows\">\r\n              \r\n              <input type=\"text\" class=\"write_msg\" class=\"form-control\" formControlName=\"message\" name=\"message\" id=\"message\" [(ngModel)]=\"model.message\" placeholder=\"Type a message\" />\r\n              <button class=\"msg_send_btn\" type=\"button\"><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\" (click)=\"ChatMsg(selectedProduct.products[0].product_id, selectedProduct.products[0].seller_id)\"></i></button>\r\n            </div>\r\n          </div>\r\n         </form>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div></div>\r\n    </section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/about-us.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/about-us/about-us.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- about section start -->\r\n<section class=\"about-page  section-b-space\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"banner-section\">\r\n                    <img  src=\"assets/images/about/about%20us.jpg\" class=\"img-fluid\" alt=\"\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <h4>Sellit is a online marketplace, developed by the students of Hochschule Fulda - Global Software Development 2019</h4>\r\n                <p>The Sellit marketplace is a platform for buying and selling services and goods such as electronics, fashion items, furniture, household goods, cars and bikes.</p>\r\n                <p>Sellit online marketplace is a type of e-commerce site where product or service information is provided by multiple students, whereas listing is provided by us and transactions for selling is handled by students: who list their products. Online marketplaces are the primary type of multichannel ecommerce and can be a way to expand reach.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- about section end -->\r\n\r\n<!--Team start-->\r\n<section id=\"team\" class=\"team section-b-space\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <h2>Our Team - Fulda Group 1</h2>\r\n                <div class=\"team-4\">\r\n                    <ngx-slick-carousel class=\"team-4\" #slickModal=\"slick-carousel\" [config]=\"teamSliderConfig\">\r\n                    <div ngxSlickItem *ngFor=\"let tm of team\">\r\n                        <img [src]=\"tm.image\" class=\"img-fluid\" alt=\"\"/>\r\n                        <h4>{{tm.name}}</h4>\r\n                        <h6>{{tm.designation}}</h6>\r\n                    </div>\r\n                </ngx-slick-carousel>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Team ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- section start -->\r\n<section>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3\">\r\n                <div class=\"account-sidebar\">\r\n                    <a class=\"popup-btn\">\r\n                        my account\r\n                    </a>\r\n                </div>\r\n                <div class=\"dashboard-left\">\r\n                    <div class=\"collection-mobile-back\">\r\n                        <span class=\"filter-back\">\r\n                            <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> back\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"block-content\">\r\n                        <ul>\r\n                            <li><a [routerLink]=\"\" (click)=toggleDisplay()>My Ads</a></li>\r\n                            <li><a [routerLink]=\"\" (click)=toggleDisplay()>Change Password</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-9\">\r\n                <div class=\"dashboard-left\">\r\n                    <div class=\"dashboard\">\r\n                        <div class=\"page-title\">\r\n                            <h2>My Dashboard</h2>\r\n                        </div>\r\n                        <div class=\"welcome-msg\">\r\n                            <p>Welcome, {{matrik}}</p>\r\n                            <p>From your My Account Dashboard you have the ability to view a snapshot of your account activity.</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</section>\r\n<!-- section end -->\r\n<section>\r\n    <div class=\"container\">\r\n        <div class=\"card-columns\" *ngIf='isShow' width=\"200px\">\r\n            <!-- <form [formGroup]=\"statusUpdate\" (ngSubmit)=\"getProdId()\"> -->\r\n            <div class=\"card\" *ngFor=\"let result of selectedProduct.products\">\r\n                <img class=\"card-img-top\" src=\"{{result.image[0].url}}\" alt=\"Card image cap\" height=\"180px\" width=\"180px\">\r\n                <div class=\"card-body\">\r\n                    <h3 class=\"card-title\"><a href=\"/home/right-sidebar/product/{{result.product_id}}\">{{result.name}}</a></h3>\r\n                    <p class=\"card-text\">{{result.description}}</p>\r\n                </div>\r\n                <ul class=\"list-group list-group-flush\">\r\n                    <li class=\"list-group-item\">\r\n                        <b *ngIf=\"result.status === 1\" style=\"color: blueviolet\"> Approved</b> \r\n                        <b *ngIf=\"result.status === 2\" style=\"color: #28a745\"> Sold</b> \r\n                        <b *ngIf=\"result.status === 3\" style=\"color: #FFBF00\"> Under Review</b> \r\n                        <b *ngIf=\"result.status === 4\" style=\"color: black\"> Inactive</b> \r\n                        <b *ngIf=\"result.status === 5\" style=\"color: red\"> Deleted</b> \r\n                    </li>\r\n                </ul>\r\n                <div class=\"card-body\">\r\n                    <button *ngIf=\"result.status === 1 || result.status === 3 || result.status === 4\"\r\n                     class=\"btn btn-danger\" (click)=\"Delete(result.product_id)\">Delete</button>\r\n                    <button *ngIf=\"result.status === 1\"\r\n                    class=\"btn btn-success\" (click)=\"Sold(result.product_id)\">Mark as Sold</button>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- </form> -->\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- breadcrumb start -->\r\n<!-- <div class=\"breadcrumb-section\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"page-title\">\r\n                    <h2>Student login</h2>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/home/nine'\">Home</a></li>\r\n                        <li class=\"breadcrumb-item active\" >login</li>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<!-- breadcrumb End -->\r\n<!-- section start -->\r\n<section class=\"login-page section-b-space\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n                <h3>Login</h3>\r\n                <div class=\"theme-card\">\r\n                    <form  (ngSubmit)=\"login()\" #f=\"ngForm\" class=\"theme-form\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"username\">Matrikel#/Username</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Matrikel#/Username\" [(ngModel)]=\"model.matrikel_number\" name=\"matrikel_number\" required>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"password\">Password</label>\r\n                            <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"model.password\" name=\"password\" placeholder=\"Enter your password\" required>\r\n                        </div>\r\n                        <button class=\"btn btn-solid\">Login</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 right-login\">\r\n                <h3>Register</h3>\r\n                <div class=\"theme-card authentication-right\">\r\n                    <h6 class=\"title-font\">Create A Account</h6>\r\n                    <p>Sign up for a free account at our store. Registration is quick and easy. It allows you tp post your products and chat with the seller.</p>\r\n                    <h6>To start Selling & Buying click register</h6>\r\n                    <button class=\"btn btn-solid\" [routerLink]=\"'/pages/register'\">Register</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"errorMessage\" class=\"errorMessage\">\r\n        <h2>Error</h2>\r\n        <p class=\"error\">{{errorMessage}}</p>\r\n    </div>\r\n\r\n</section>\r\n\r\n\r\n\r\n<!--Section ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/order-success/order-success.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/order-success/order-success.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- thank-you section start -->\r\n<section class=\"section-b-space light-layout\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"success-text\">\r\n                    <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n                    <div id=\"user\" *ngFor=\"let result of selectedProduct.products\"><h2>thank you! {{result.seller_id}}</h2></div>\r\n                    <a href=\"/home/profile\"><p>HOME</p></a>\r\n                    <!-- <p>Transaction ID:267676GHERT105467</p> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Section ends -->\r\n<!-- order-detail section start -->\r\n<section class=\"section-b-space\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"product-order\">\r\n                    <h3>your product details</h3>\r\n                    <div class=\"row product-order-detail\">\r\n                        <div class=\"col-3\" *ngFor=\"let result of selectedProduct.products\">\r\n                            <a href=\"/home/right-sidebar/product/{{result.product_id}}\"><img src=\"{{result.image[0].url}}\" alt=\"\" class=\"img-fluid\"></a>\r\n                        </div>\r\n                        <div class=\"col-3 order_detail\">\r\n                            <div *ngFor=\"let result of selectedProduct.products\">\r\n                                <h4>{{result.name}}</h4>\r\n                                <h5>Price:{{result.price}}</h5>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"col-3 order_detail\">\r\n                            <div>\r\n                                <h4>quantity</h4>\r\n                                <h5>1</h5>\r\n                            </div>\r\n                        </div> \r\n                        <div class=\"col-3 order_detail\">\r\n                            <div>\r\n                                <h4>price</h4>\r\n                                <h5>$555.00</h5>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"row order-success-sec\">\r\n                    <!-- <div class=\"col-sm-6\">\r\n                        <h4>summery</h4>\r\n                        <ul class=\"order-detail\">\r\n                            <li>order ID: 5563853658932</li>\r\n                            <li>Order Date: October 22, 2018</li>\r\n                            <li>Order Total: $907.28</li>\r\n                        </ul>\r\n                    </div> -->\r\n                    <!-- <div class=\"col-sm-6\">\r\n                        <h4>shipping address</h4>\r\n                        <ul class=\"order-detail\">\r\n                            <li>gerg harvell</li>\r\n                            <li>568, suite ave.</li>\r\n                            <li>Austrlia, 235153</li>\r\n                            <li>Contact No. 987456321</li>\r\n                        </ul>\r\n                    </div> -->\r\n\r\n                    <!-- <div class=\"col-sm-12 payment-mode\">\r\n                        <h4>payment method</h4>\r\n                        <p>Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net banking acceptance subject to device availability.</p>\r\n                    </div> -->\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"delivery-sec\">\r\n                            <h2>We will get your Product Ad approved soon!</h2>\r\n                            <h6>Admin will check your details now.</h6>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- Section ends -->\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- section start -->\r\n<section class=\"register-page section-b-space\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n              <h3>create account</h3>\r\n              <div class=\"theme-card\">\r\n                  <form [formGroup]=\"registerForm\" (keydown.enter)=\"$event.preventDefault()\" class=\"theme-form\" (ngSubmit)=\"Register()\">\r\n                      <div class=\"form-row\">\r\n                          <div class=\"col-md-6\">\r\n                              <label for=\"email\">Matrikulation Number</label>\r\n                              <input type=\"text\" formControlName=\"matrikel_number\" class=\"form-control\" name=\"matrikel_number\" id=\"matrikNumber\" [(ngModel)]=\"model.matrikel_number\" placeholder=\"Matrikulation Number\" required=\"\" (keyup)=\"$event.keyCode == 13 && FetchData()\"/>\r\n                          </div>\r\n                          <div class=\"col-md-6\">\r\n                              <label for=\"review\">First Name</label>\r\n                              <input type=\"text\" class=\"form-control\" formControlName=\"firstname\" name=\"firstname\" [(ngModel)]=\"model.firstname\" id=\"firstname\" placeholder=\"First Name\" disabled  required=\"\" />\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"form-row\">\r\n                        <div class=\"col-md-6\">\r\n                            <label for=\"email\">Last Name</label>\r\n                            <input type=\"text\" formControlName=\"lastname\" class=\"form-control\" name=\"dob\" id=\"lastname\" [(ngModel)]=\"model.lastname\" placeholder=\"Last Name\" disabled required=\"\" />\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <label for=\"review\">Address</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"address\" name=\"address\" [(ngModel)]=\"model.address\" id=\"address\" placeholder=\"Address\" disabled required=\"\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                      <div class=\"col-md-6\">\r\n                          <label for=\"review\">Phone Number</label>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"phoneno\" name=\"phoneno\" [(ngModel)]=\"model.phoneno\" id=\"review\" placeholder=\"Phoneno\" disabled required=\"\" />\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                          <label for=\"review\">User Name</label>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"username\" name=\"username\" [(ngModel)]=\"model.username\" id=\"review\" placeholder=\"Enter Username\" required=\"\" />\r\n                      </div>\r\n                  </div>\r\n                      <div class=\"form-row\">\r\n                          <div class=\"col-md-6\">\r\n                              <label for=\"review\">Password</label>\r\n                              <input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"password\" [(ngModel)]=\"model.password\" id=\"review\" placeholder=\"Enter password\" required=\"\" />\r\n                          </div>\r\n                          <div class=\"col-md-6\">\r\n                              <label for=\"review\">Confirm Password</label>\r\n                              <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" name=\"confirmPassword\" [(ngModel)]=\"model.confirmPassword\" id=\"review\" placeholder=\"Confirm password\" required=\"\" />\r\n                          </div>\r\n                          <button type=\"submit\" class=\"btn btn-solid\">create Account</button>\r\n                      </div>\r\n\r\n                  </form>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<!--Section ends-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/search/search.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/search/search.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"search-block\">\r\n   \r\n                <div class=\"container\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 offset-lg-3\">\r\n                      <form [formGroup]=\"searchForm\" class=\"form-header\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"text\" (keyup)=\"searchTerm.next($event)\"  class=\"form-control\" formControlName=\"search\" id=\"exampleInputPassword1\" placeholder=\"Search Here...\">\r\n                        </div>\r\n                        <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i></button>\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n  <div *ngIf=\"searchResults\">\r\n    <div class=\"results\" >\r\n      <div class=\"repo\" *ngFor=\"let result of paginationElements | paginate: { itemsPerPage: 12, currentPage: page }\">\r\n          <div class=\"card-deck\">\r\n              <div class=\"card\">\r\n              <img loading=\"lazy\" src=\"../../assets/{{result.image}}\"\r\n                  width=\"200\"\r\n                  height=\"auto\"\r\n                  alt=\"image\"\r\n              />\r\n              <h4><a href=\"/home/right-sidebar/product/{{result.product_id}}\">{{result.product_name}}</a></h4>\r\n              <p>{{result.description}}</p>\r\n              <p>Price: {{result.price}}</p>\r\n          </div>\r\n          </div> \r\n      </div>\r\n  </div>\r\n      <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n  </div>\r\n \r\n  <div *ngIf=\"errorMessage\" class=\"errorMessage\">\r\n      <h2>Error</h2>\r\n      <p class=\"error\">{{errorMessage}}</p>\r\n  </div>\r\n\r\n\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sell/sell.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sell/sell.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper bg-gra-03 p-t-45 p-b-50\">\r\n    <div class=\"wrapper wrapper--w790\">\r\n        <div class=\"card card-5\">\r\n            <div class=\"card-heading\">\r\n                <h2 class=\"title\">Post a Product</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form [formGroup]=\"productform\" class=\"theme-form\" (ngSubmit)=\"Product()\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"name\">\r\n                            <h4>Title</h4>\r\n                        </div>\r\n                        <div class=\"value\">\r\n                            <div class=\"input-group\">\r\n                                <input class=\"input--style-5\" type=\"text\" id=\"name\" formControlName=\"name\" [(ngModel)]=\"model.name\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-row\">\r\n                        <div class=\"name\">\r\n                            <h4>Which Category?</h4>\r\n                        </div>\r\n                        <div class=\"value\">\r\n                            <div class=\"col-7\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"rs-select2 js-select-simple select--no-search\">\r\n                                    <select name=\"category_id\" id=\"category_id\" formControlName=\"category_id\" [(ngModel)]=\"model.category_id\" (click)=\"getbrands()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let result of results\"  value=\"{{result.category_id}}\">  \r\n\t\t\t\t\t\t\t\t\t\t\t\t{{result.name}}\r\n\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n                                    <div class=\"select-dropdown\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-row\">\r\n                        <div class=\"name\">\r\n                            <h4>Which Brand?</h4>\r\n                        </div>\r\n                        <div class=\"value\">\r\n                            <div class=\"col-7\">\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"rs-select2 js-select-simple select--no-search\">\r\n\r\n\r\n                                        <select name=\"brand_id\" id=\"brand_id\" formControlName=\"brand_id\" [(ngModel)]=\"model.brand_id\" (click)=\"getbrands()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let Bresult of resultsBrand\"  value=\"{{Bresult.brand_id}}\">  \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{Bresult.brand_name}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n                                        <div class=\"select-dropdown\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"name\">\r\n                            <h4>Price</h4>\r\n                        </div>\r\n                        <div class=\"value\">\r\n                            <div class=\"col-4\">\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"input--style-5\" type=\"text\" (click)=\"myFunction()\" name=\"price\" id=\"price\" formControlName=\"price\" [(ngModel)]=\"model.price\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row \">\r\n                        <div class=\"name\">\r\n                            <h4>Description</h4>\r\n                        </div>\r\n                        <div class=\"value\">\r\n                            <div class=\"input-group\">\r\n                                <textarea class=\"form-control rounded-0\" id=\"description\" name=\"description\" rows=\"3\" formControlName=\"description\" [(ngModel)]=\"model.description\" style=\"background-color:#e5e5e5\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row \">\r\n                        <div class=\"name\">\r\n                            <h4>Details</h4>\r\n                        </div>\r\n                        <div class=\"value\">\r\n                            <div class=\"input-group\">\r\n                                <textarea class=\"form-control rounded-0\" id=\"more_details\" name=\"more_details\" formControlName=\"more_details\" [(ngModel)]=\"model.more_details\" rows=\"2.5\" style=\"background-color: #e5e5e5;\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-row\">\r\n                        <div class=\"name\">\r\n                            <h4>Product Condition?</h4>\r\n                        </div>\r\n                        <div class=\"value\">\r\n                            <div class=\"input-group\">\r\n                                <div class=\"rs-select2 js-select-simple select--no-search\">\r\n                                    <select name=\"product_condition\" id=\"product_condition\" formControlName=\"product_condition\" [(ngModel)]=\"model.product_condition\">\r\n\t\t\t\t\t\t\t\t\t\t<option disabled=\"disabled\" selected=\"selected\">Choose option</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Very Good</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Good</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"3\">Poor</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n                                    <div class=\"select-dropdown\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-row\" ng-app=\"uploadPreview\" ng-controller=\"Upload\">\r\n                        <div class=\"col-4\">\r\n                            <input type=\"file\" (change)=\"onFileSelected($event)\" name=\"image\"/>    \r\n                            \r\n                        </div>\r\n                        <i class=\"fa fa-upload fa-2x\" (click)=\"onUpload()\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <div>\r\n                        <button class=\"btn btn--radius-2 btn--red\" type=\"submit\">Register</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Jquery JS-->\r\n<script src=\"vendor/jquery/jquery.min.js\"></script>\r\n<!-- Vendor JS-->\r\n<script src=\"vendor/select2/select2.min.js\"></script>\r\n<script src=\"vendor/datepicker/moment.min.js\"></script>\r\n<script src=\"vendor/datepicker/daterangepicker.js\"></script>\r\n\r\n<!-- Main JS-->\r\n<script src=\"js/global.js\"></script>"

/***/ }),

/***/ "./src/app/pages/Chat/chat.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/Chat/chat.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 1170px;\n  margin: auto; }\n\nimg {\n  max-width: 100%; }\n\n.inbox_people {\n  background: white none repeat scroll 0 0;\n  float: left;\n  overflow: hidden;\n  width: 40%;\n  border-right: 4px solid #ffffff; }\n\n.inbox_msg {\n  border: 1px solid white;\n  clear: both;\n  overflow: hidden; }\n\n.top_spac {\n  margin: 20px 0 0; }\n\n.recent_heading {\n  float: left;\n  width: 40%; }\n\n.srch_bar {\n  display: inline-block;\n  text-align: right;\n  width: 60%; }\n\n.recent_heading h4 {\n  color: #05728f;\n  font-size: 21px;\n  margin: auto; }\n\n.srch_bar input {\n  border: 1px solid #cdcdcd;\n  border-width: 0 0 1px 0;\n  width: 80%;\n  padding: 2px 0 4px 6px;\n  background: none; }\n\n.srch_bar .input-group-addon button {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  padding: 0;\n  color: #707070;\n  font-size: 18px; }\n\n.srch_bar .input-group-addon {\n  margin: 0 0 0 -27px; }\n\n.chat_ib h5 {\n  font-size: 15px;\n  color: #464646;\n  margin: 0 0 8px 0; }\n\n.chat_ib h5 span {\n  font-size: 13px;\n  float: right; }\n\n.chat_ib p {\n  font-size: 14px;\n  color: #989898;\n  margin: auto; }\n\n.chat_img {\n  float: left;\n  width: 11%; }\n\n.chat_ib {\n  float: left;\n  padding: 0 0 0 15px;\n  width: 88%; }\n\n.chat_people {\n  overflow: hidden;\n  clear: both; }\n\n.chat_list {\n  border-bottom: 1px solid #c4c4c4;\n  margin: 0;\n  padding: 18px 16px 10px; }\n\n.inbox_chat {\n  height: 550px;\n  overflow-y: scroll; }\n\n.active_chat {\n  background: #ebebeb; }\n\n.incoming_msg_img {\n  display: inline-block;\n  width: 6%; }\n\n.received_msg {\n  display: inline-block;\n  padding: 0 0 0 10px;\n  vertical-align: top;\n  width: 92%; }\n\n.received_withd_msg p {\n  background: #ebebeb none repeat scroll 0 0;\n  border-radius: 3px;\n  color: #646464;\n  font-size: 14px;\n  margin: 0;\n  padding: 5px 10px 5px 12px;\n  width: 100%; }\n\n.time_date {\n  color: #747474;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 0; }\n\n.received_withd_msg {\n  width: 57%; }\n\n.mesgs {\n  float: left;\n  padding: 30px 15px 0 25px;\n  width: 60%; }\n\n.sent_msg p {\n  background: #05728f none repeat scroll 0 0;\n  border-radius: 3px;\n  font-size: 14px;\n  margin: 0;\n  color: #fff;\n  padding: 5px 10px 5px 12px;\n  width: 100%; }\n\n.outgoing_msg {\n  overflow: hidden;\n  margin: 26px 0 26px; }\n\n.sent_msg {\n  float: right;\n  width: 46%; }\n\n.input_msg_write input {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  color: #4c4c4c;\n  font-size: 15px;\n  min-height: 48px;\n  width: 100%; }\n\n.type_msg {\n  border-top: 1px solid #c4c4c4;\n  position: relative; }\n\n.msg_send_btn {\n  background: #05728f none repeat scroll 0 0;\n  border: medium none;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  font-size: 17px;\n  height: 33px;\n  position: absolute;\n  right: 0;\n  top: 11px;\n  width: 33px; }\n\n.messaging {\n  padding: 0 0 50px 0; }\n\n.msg_history {\n  height: 516px;\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQ2hhdC9EOlxcR2xvYmFsIERpc3RyaWJ1dGVkIFNvZnR3YXJlIERldlxcQW5ndWxhclxcc2VsbEl0QXBwL3NyY1xcYXBwXFxwYWdlc1xcQ2hhdFxcY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGlCQUFnQjtFQUFFLFlBQVcsRUFBQTs7QUFDeEM7RUFBSyxlQUFjLEVBQUE7O0FBQ25CO0VBQ0Usd0NBQXVDO0VBQ3ZDLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUFFLCtCQUE4QixFQUFBOztBQUU1QztFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQVcsZ0JBQWdCLEVBQUE7O0FBRzNCO0VBQWlCLFdBQVc7RUFBRSxVQUFTLEVBQUE7O0FBQ3ZDO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7O0FBU1o7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFFZDtFQUFpQix5QkFBd0I7RUFBRSx1QkFBc0I7RUFBRSxVQUFTO0VBQUUsc0JBQXFCO0VBQUUsZ0JBQWUsRUFBQTs7QUFDcEg7RUFDRSxtREFBbUQ7RUFDbkQsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUVqQjtFQUErQixtQkFBbUIsRUFBQTs7QUFFbEQ7RUFBYSxlQUFjO0VBQUUsY0FBYTtFQUFFLGlCQUFnQixFQUFBOztBQUM1RDtFQUFrQixlQUFjO0VBQUUsWUFBVyxFQUFBOztBQUM3QztFQUFZLGVBQWM7RUFBRSxjQUFhO0VBQUUsWUFBVyxFQUFBOztBQUN0RDtFQUNFLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBRVo7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTs7QUFHWjtFQUFjLGdCQUFlO0VBQUUsV0FBVSxFQUFBOztBQUN6QztFQUNFLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQWMsYUFBYTtFQUFFLGtCQUFrQixFQUFBOztBQUUvQztFQUFjLG1CQUFrQixFQUFBOztBQUVoQztFQUNFLHFCQUFxQjtFQUNyQixTQUFTLEVBQUE7O0FBRVg7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixVQUFVLEVBQUE7O0FBRVg7RUFDQywwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsU0FBUztFQUNULDBCQUEwQjtFQUMxQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBRWpCO0VBQXNCLFVBQVUsRUFBQTs7QUFDaEM7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFVBQVUsRUFBQTs7QUFHWDtFQUNDLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFBRSxXQUFVO0VBQ3JCLDBCQUEwQjtFQUMxQixXQUFVLEVBQUE7O0FBRVo7RUFBZSxnQkFBZTtFQUFFLG1CQUFrQixFQUFBOztBQUNsRDtFQUNFLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBRVo7RUFDRSxtREFBbUQ7RUFDbkQsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHYjtFQUFXLDZCQUE2QjtFQUFDLGtCQUFrQixFQUFBOztBQUMzRDtFQUNFLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXLEVBQUE7O0FBRWI7RUFBYSxtQkFBbUIsRUFBQTs7QUFDaEM7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9DaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye21heC13aWR0aDoxMTcwcHg7IG1hcmdpbjphdXRvO31cclxuaW1neyBtYXgtd2lkdGg6MTAwJTt9XHJcbi5pbmJveF9wZW9wbGUge1xyXG4gIGJhY2tncm91bmQ6d2hpdGUgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBmbG9hdDogbGVmdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA0MCU7IGJvcmRlci1yaWdodDo0cHggc29saWQgI2ZmZmZmZjtcclxufVxyXG4uaW5ib3hfbXNnIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBjbGVhcjogYm90aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi50b3Bfc3BhY3sgbWFyZ2luOiAyMHB4IDAgMDt9XHJcblxyXG5cclxuLnJlY2VudF9oZWFkaW5nIHtmbG9hdDogbGVmdDsgd2lkdGg6NDAlO31cclxuLnNyY2hfYmFyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgd2lkdGg6IDYwJTsgXHJcbn1cclxuXHJcbi8vIC5oZWFkaW5kX3NyY2h7IFxyXG4vLyAgIHBhZGRpbmc6IDEwcHggMjlweCAxMHB4IDIwcHg7IFxyXG4vLyAgIG92ZXJmbG93OmhpZGRlbjsgXHJcbi8vICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbi8vIH0gXHJcblxyXG4ucmVjZW50X2hlYWRpbmcgaDQge1xyXG4gIGNvbG9yOiAjMDU3MjhmO1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnNyY2hfYmFyIGlucHV0eyBib3JkZXI6MXB4IHNvbGlkICNjZGNkY2Q7IGJvcmRlci13aWR0aDowIDAgMXB4IDA7IHdpZHRoOjgwJTsgcGFkZGluZzoycHggMCA0cHggNnB4OyBiYWNrZ3JvdW5kOm5vbmU7fVxyXG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiB7IG1hcmdpbjogMCAwIDAgLTI3cHg7fVxyXG5cclxuLmNoYXRfaWIgaDV7IGZvbnQtc2l6ZToxNXB4OyBjb2xvcjojNDY0NjQ2OyBtYXJnaW46MCAwIDhweCAwO31cclxuLmNoYXRfaWIgaDUgc3BhbnsgZm9udC1zaXplOjEzcHg7IGZsb2F0OnJpZ2h0O31cclxuLmNoYXRfaWIgcHsgZm9udC1zaXplOjE0cHg7IGNvbG9yOiM5ODk4OTg7IG1hcmdpbjphdXRvfVxyXG4uY2hhdF9pbWcge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMSU7XHJcbn1cclxuLmNoYXRfaWIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDE1cHg7XHJcbiAgd2lkdGg6IDg4JTtcclxufVxyXG5cclxuLmNoYXRfcGVvcGxleyBvdmVyZmxvdzpoaWRkZW47IGNsZWFyOmJvdGg7fVxyXG4uY2hhdF9saXN0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMThweCAxNnB4IDEwcHg7XHJcbn1cclxuLmluYm94X2NoYXQgeyBoZWlnaHQ6IDU1MHB4OyBvdmVyZmxvdy15OiBzY3JvbGw7fVxyXG5cclxuLmFjdGl2ZV9jaGF0eyBiYWNrZ3JvdW5kOiNlYmViZWI7fVxyXG5cclxuLmluY29taW5nX21zZ19pbWcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNiU7XHJcbn1cclxuLnJlY2VpdmVkX21zZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB3aWR0aDogOTIlO1xyXG4gfVxyXG4gLnJlY2VpdmVkX3dpdGhkX21zZyBwIHtcclxuICBiYWNrZ3JvdW5kOiAjZWJlYmViIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGNvbG9yOiAjNjQ2NDY0O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRpbWVfZGF0ZSB7XHJcbiAgY29sb3I6ICM3NDc0NzQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbjogOHB4IDAgMDtcclxufVxyXG4ucmVjZWl2ZWRfd2l0aGRfbXNnIHsgd2lkdGg6IDU3JTt9XHJcbi5tZXNncyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMzBweCAxNXB4IDAgMjVweDtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4gLnNlbnRfbXNnIHAge1xyXG4gIGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMDsgY29sb3I6I2ZmZjtcclxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5vdXRnb2luZ19tc2d7IG92ZXJmbG93OmhpZGRlbjsgbWFyZ2luOjI2cHggMCAyNnB4O31cclxuLnNlbnRfbXNnIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDQ2JTtcclxufVxyXG4uaW5wdXRfbXNnX3dyaXRlIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICBjb2xvcjogIzRjNGM0YztcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWluLWhlaWdodDogNDhweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnR5cGVfbXNnIHtib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4ubXNnX3NlbmRfYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjMDU3MjhmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBoZWlnaHQ6IDMzcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMTFweDtcclxuICB3aWR0aDogMzNweDtcclxufVxyXG4ubWVzc2FnaW5nIHsgcGFkZGluZzogMCAwIDUwcHggMDt9XHJcbi5tc2dfaGlzdG9yeSB7XHJcbiAgaGVpZ2h0OiA1MTZweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/Chat/chat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/Chat/chat.component.ts ***!
  \**********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "./src/app/pages/Chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = /** @class */ (function () {
    function ChatComponent(ChatService, formbulider) {
        this.ChatService = ChatService;
        this.formbulider = formbulider;
        this.chat = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem('matrikel_number');
        // console.log("data",user);
        this.ChatService.getProductsUser().subscribe(function (data) {
            // console.log(data);
            _this.selectedProduct = data;
        });
        this.chatform = this.formbulider.group({
            message: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            product_id: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            sender_id: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            receiver_id: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    ChatComponent.prototype.ChatMsg = function (prod, receiver) {
        var userdata = this.chatform.value;
        console.log("Result:", prod);
        var DBForm = { userdata: userdata };
        this.chatform.reset();
        var pdata = {
            message: DBForm.userdata.message,
            product_id: prod,
            sender_id: localStorage.getItem("matrikel_number"),
            receiver_id: receiver,
        };
        console.log("Post Data:", pdata);
        this.SendMsg(pdata);
    };
    ChatComponent.prototype.SendMsg = function (userData) {
        var jsonData = JSON.stringify(userData);
        console.log("Send Message:", jsonData);
        this.ChatService.SendMsg(jsonData).subscribe(function (data) { });
    };
    ChatComponent.prototype.getAllMessages = function (receiverid, senderid) {
        console.log("ReceiverID:", receiverid);
        console.log("senderID", senderid);
        var postdata = {
            receiver_id: receiverid,
            sender_id: senderid
        };
        // console.log("Get All Chat Messages!",postdata);
        this.getallMessages(postdata);
    };
    ChatComponent.prototype.getallMessages = function (postData) {
        var _this = this;
        var jsonData = JSON.stringify(postData);
        console.log("All Messages:", jsonData);
        // location.reload();
        this.ChatService.getallMessages(jsonData).subscribe(function (data) {
            _this.chat = data;
            console.log("in service", _this.chat);
        });
    };
    ChatComponent.prototype.readLocalStorage = function (key) {
        return localStorage.getItem(key);
    };
    ChatComponent.ctorParameters = function () { return [
        { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/Chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/pages/Chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/pages/Chat/chat.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/Chat/chat.service.ts ***!
  \********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var a = localStorage.getItem('matrikel_number');
console.log("Local:", a);
var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.Url = "http://localhost:3000/api/v1/chat/";
        this.Url1 = "http://localhost:3000/api/v1/chat/sendMessage/";
        this.serverUrl = "http://localhost:3000/api/v1/chat/getAllMessages/";
        var headerSettings = {};
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerSettings);
    }
    ChatService.prototype.getProductsUser = function () {
        return this.http.get("" + this.Url + a);
    };
    ChatService.prototype.getallMessages = function (UserMessages) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
        return this.http.post("" + this.serverUrl, UserMessages, httpOptions);
    };
    ChatService.prototype.SendMsg = function (send) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
        return this.http.post("" + this.Url1, send, httpOptions);
    };
    ChatService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
        // Team 
        this.team = [{
                image: 'assets/images/team/',
                name: 'Damilare Oyebanji',
                designation: 'Group Lead & Backend Developer'
            }, {
                image: 'assets/images/team/2.jpg',
                name: 'Parvin',
                designation: 'Backend Developer'
            }, {
                image: 'assets/images/team/3.jpg',
                name: 'Saksham Bhatnagar',
                designation: 'Frontend Developer'
            }, {
                image: 'assets/images/team/4.jpg',
                name: 'Lakshmi Ramesh',
                designation: 'Database Engineer'
            }, {
                image: 'assets/images/team/5.jpg',
                name: 'Sheila Adjei',
                designation: 'Frontend Developer'
            }, {
                image: 'assets/images/team/6.jpg',
                name: 'Asif Ahmad',
                designation: 'Frontend Developer'
            },
        ];
        // Team Slick slider config
        this.teamSliderConfig = {
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 586,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/pages/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n  width: 80% !important; }\n\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n  width: 100% !important;\n  height: 280px !important; }\n\n.myOwnBg {\n  background-color: yellow; }\n\n@media (min-width: 576px) {\n  .card-columns .card {\n    display: inline-block;\n    width: 80% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0Q6XFxHbG9iYWwgRGlzdHJpYnV0ZWQgU29mdHdhcmUgRGV2XFxBbmd1bGFyXFxzZWxsSXRBcHAvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksMkNBQTJDO0VBQzNDLDRDQUE0QztFQUM1QyxzQkFBc0I7RUFDdEIsd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzNCO0VBQ0Q7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCLEVBQUEsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9keSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3Age1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogY2FsYygwLjI1cmVtIC0gMXB4KTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBjYWxjKDAuMjVyZW0gLSAxcHgpO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15T3duQmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gfVxyXG5cclxuIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4uY2FyZC1jb2x1bW5zIC5jYXJkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxufVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/pages/dashboard/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(DashboardService, formbuilder) {
        this.DashboardService = DashboardService;
        this.formbuilder = formbuilder;
        this.matrik = localStorage.getItem("matrikel_number");
        // dashboardform: FormGroup;
        //Div toggle
        this.isShow = false;
        this.selectedProduct = [];
        this.url = "http://localhost:3000/product/changeProductStatus/";
    }
    DashboardComponent.prototype.toggleDisplay = function () {
        this.isShow = !this.isShow;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem('matrikel_number');
        console.log("data", user);
        this.DashboardService.getProductsUser().subscribe(function (data) {
            console.log("Kuch MIla", data);
            _this.selectedProduct = data;
        });
    };
    //  refresh() {
    //   location.reload();
    //  }
    DashboardComponent.prototype.Delete = function (resultd) {
        console.log("prodID", resultd);
        var pdata = {
            productid: resultd,
            status: 5,
        };
        console.log("Post Data for Del Status:", pdata);
        this.prodDeleteSatus(pdata);
    };
    DashboardComponent.prototype.prodDeleteSatus = function (postData) {
        var jsonData = JSON.stringify(postData);
        console.log("statusData:", jsonData);
        location.reload();
        this.DashboardService.changeStatus(jsonData).subscribe(function (data) { });
    };
    DashboardComponent.prototype.Sold = function (resultd) {
        console.log("prodID", resultd);
        var pdata = {
            productid: resultd,
            status: 2,
        };
        console.log("Post Data for Sold Status:", pdata);
        this.prodSoldSatus(pdata);
        location.reload();
    };
    DashboardComponent.prototype.prodSoldSatus = function (postData) {
        var jsonData = JSON.stringify(postData);
        console.log("statusData:", jsonData);
        this.DashboardService.changeStatus(jsonData).subscribe(function (data) { });
        location.reload();
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.service.ts ***!
  \******************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var a = localStorage.getItem('matrikel_number');
console.log("Local:", a);
var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
        this.UrlStatus = "http://localhost:3000/api/v1/product/changeProductStatus";
        this.Url = "http://localhost:3000/api/v1/product/userproduct/";
        var headerSettings = {};
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerSettings);
    }
    DashboardService.prototype.getProductsUser = function () {
        return this.http.get("" + this.Url + a);
    };
    DashboardService.prototype.changeStatus = function (Dashboard) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
        return this.http.post("" + this.UrlStatus, Dashboard, httpOptions);
    };
    DashboardService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/pages/login/login.service.ts");
/* harmony import */ var src_app_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/main/main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, LoginService, mc) {
        this.router = router;
        this.LoginService = LoginService;
        this.mc = mc;
        this.model = {};
        this.baseUrl = "http://localhost:3000/api/v1/";
    }
    LoginComponent.prototype.sessionStorageItem = function (matrikel_number) {
        console.log("number", matrikel_number);
        return sessionStorage.getItem(matrikel_number);
    };
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.LoginService.Login(this.model).subscribe(function (data) {
            if (data.status == "sucessfull") {
                alert("You are now Logged in!");
                if (!_this.LoginService.isRoutingFromSell)
                    _this.router.navigate(['./home/profile/']);
                else
                    _this.router.navigateByUrl('/pages/sell');
                _this.mc.isLoggedIn = true;
                // storing the session
                localStorage.setItem("matrikel_number", _this.model.matrikel_number);
                localStorage.setItem("token", data.token);
                console.log("mat", _this.model.matrikel_number);
                console.log(localStorage);
            }
            else {
                alert("Incorrect Username or Password!");
                _this.errorMessage = data.Message;
                // console.log(this.errorMessage);
            }
        }, function (error) {
            _this.errorMessage = error.message;
            // console.log(this.errorMessage);
        });
    };
    ;
    LoginComponent.prototype.getuser = function () {
        var user = localStorage.getItem('matrikel_number') ? JSON.parse(localStorage.getItem('matrikel_number')) : [];
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: src_app_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            src_app_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/order-success/order-success.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/order-success/order-success.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLXN1Y2Nlc3Mvb3JkZXItc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/order-success/order-success.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/order-success/order-success.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_success_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-success.service */ "./src/app/pages/order-success/order-success.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent(OrderService, Router) {
        this.OrderService = OrderService;
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem('matrikel_number');
        console.log("data", user);
        this.OrderService.getdetails().subscribe(function (data) {
            console.log("Kuch MIla", data);
            _this.selectedProduct = data;
        });
        localStorage.removeItem("image");
    };
    OrderSuccessComponent.ctorParameters = function () { return [
        { type: _order_success_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    OrderSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__(/*! raw-loader!./order-success.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/order-success/order-success.component.html"),
            styles: [__webpack_require__(/*! ./order-success.component.scss */ "./src/app/pages/order-success/order-success.component.scss")]
        }),
        __metadata("design:paramtypes", [_order_success_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/pages/order-success/order-success.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/order-success/order-success.service.ts ***!
  \**************************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var a = localStorage.getItem('matrikel_number');
console.log("Local:", a);
var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.Url = "http://localhost:3000/api/v1/product/recentproduct/";
        var headerSettings = {};
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerSettings);
    }
    OrderService.prototype.getdetails = function () {
        return this.http.get("" + this.Url + a);
    };
    OrderService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/pages/sell/sell.component.ts");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-success/order-success.component */ "./src/app/pages/order-success/order-success.component.ts");
/* harmony import */ var _Chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Chat/chat.component */ "./src/app/pages/Chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        children: [
            {
                path: 'about-us',
                component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            },
            {
                path: 'search',
                component: _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]
            },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
            },
            {
                path: 'sell',
                component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_7__["SellComponent"]
            },
            {
                path: 'order-success',
                component: _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_8__["OrderSuccessComponent"]
            },
            {
                path: 'chat',
                component: _Chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"]
            },
        ]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var ngx_isotope__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-isotope */ "./node_modules/ngx-isotope/ngx-isotope.umd.js");
/* harmony import */ var ngx_isotope__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_isotope__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/pages/sell/sell.component.ts");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order-success/order-success.component */ "./src/app/pages/order-success/order-success.component.ts");
/* harmony import */ var _Chat_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Chat/chat.component */ "./src/app/pages/Chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















/* Shared Service */
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _sell_sell_component__WEBPACK_IMPORTED_MODULE_12__["SellComponent"],
                _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_13__["OrderSuccessComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _Chat_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"],],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"],
                ngx_isotope__WEBPACK_IMPORTED_MODULE_5__["IsotopeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"],
            ],
            declarations: [
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _sell_sell_component__WEBPACK_IMPORTED_MODULE_12__["SellComponent"],
                _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_13__["OrderSuccessComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _Chat_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"],
            ],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.service */ "./src/app/pages/register/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formbulider, RegisterService, router) {
        this.formbulider = formbulider;
        this.RegisterService = RegisterService;
        this.router = router;
        this.model = {};
        this.users = [];
        this.data = false;
        this.submitted = false;
        this.pdata = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formbulider.group({
            matrikel_number: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            firstname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phoneno: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    RegisterComponent.prototype.FetchData = function () {
        var _this = this;
        var userdata = this.registerForm.value;
        this.RegisterService.StudentRecordByID(userdata.matrikel_number).subscribe(function (data) {
            var dbData = Object.values(data);
            //console.log(dbData[0]);
            _this.registerForm = _this.formbulider.group({
                matrikel_number: [dbData[0].matrikel_number, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                firstname: [dbData[0].first_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                lastname: [dbData[0].last_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                address: [dbData[0].address, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                phoneno: [dbData[0].phone_number, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
            _this.pdata = {
                matrikel_number: dbData[0].matrikel_number,
                first_name: dbData[0].first_name,
                last_name: dbData[0].last_name,
                dob: dbData[0].dob,
                email: dbData[0].email,
                address: dbData[0].address,
                phone_number: dbData[0].phone_number,
                role_id: 0,
                username: "",
                password: "",
                postal_code: dbData[0].postal_code,
                created_date: dbData[0].created_date,
                modified_date: dbData[0].modified_date
            };
            //console.log(pdata);
        });
    };
    RegisterComponent.prototype.Register = function () {
        var _this = this;
        var userdata = this.registerForm.value;
        console.log(userdata);
        this.pdata.username = userdata.username;
        this.pdata.password = userdata.password;
        console.log(this.pdata);
        if (this.registerForm.invalid) {
            alert("Registration Not Complete");
        }
        else {
            var jsonData = JSON.stringify(this.pdata);
            this.RegisterService.postUser(jsonData).subscribe(function (data) {
                console.log(data);
                if (data.status == "success") {
                    _this.router.navigate(['/pages/login']);
                }
            });
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.service.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/register/register.service.ts ***!
  \****************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.Url = "http://localhost:3000/api/v1/";
        // this.Url = "/api/v1/";
        var headerSettings = {};
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerSettings);
    }
    RegisterService.prototype.StudentRecordByID = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
        return this.http.get(this.Url + "studentrecord/" + id, httpOptions);
    };
    RegisterService.prototype.postUser = function (register) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
        return this.http.post(this.Url + "users/", register, httpOptions);
    };
    RegisterService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/pages/search/search.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.service */ "./src/app/pages/search/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.baseUrl = "/api/v1/product/";
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    SearchComponent.prototype.search = function () {
        var _this = this;
        this.searchTerm.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) {
            console.log(e.target.value);
            return e.target.value;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) {
            _this.loading = true;
            return _this.searchService._searchEntries(term);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
            //handle the error and return it
            console.log(e);
            _this.loading = false;
            _this.errorMessage = e.message;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
        })).subscribe(function (v) {
            _this.loading = false;
            //return the results and pass the to the paginate module
            _this.searchResults = v;
            _this.paginationElements = _this.searchResults;
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.search();
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"] }
    ]; };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/search/search.service.ts":
/*!************************************************!*\
  !*** ./src/app/pages/search/search.service.ts ***!
  \************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = /** @class */ (function () {
    function SearchService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "http://localhost:3000/api/v1/product/";
    }
    //makes the HTTP request to get the resources and returns the response as observable;  
    SearchService.prototype.searchEntries = function (product) {
        var _this = this;
        if (product === "") {
            console.log("Not defined");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            //return empty();
        }
        else {
            var params = { product: product };
            console.log(params);
            return this.httpClient.get(this.baseUrl + product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                console.log(response);
                return _this.searchResults = response["products"];
            }));
        }
    };
    //returns the response for the first method
    SearchService.prototype._searchEntries = function (product) {
        return this.searchEntries(product);
    };
    SearchService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/pages/sell/sell.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/sell/sell.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ==========================================================================\r\n   #FONT\r\n   ========================================================================== */\n.font-robo {\n  font-family: \"Roboto\", \"Arial\", \"Helvetica Neue\", sans-serif; }\n.font-poppins {\n  font-family: \"Poppins\", \"Arial\", \"Helvetica Neue\", sans-serif; }\n.font-opensans {\n  font-family: \"Open Sans\", \"Arial\", \"Helvetica Neue\", sans-serif; }\n/* ==========================================================================\r\n\t #GRID\r\n\t ========================================================================== */\n.row {\n  display: flex;\n  flex-wrap: wrap; }\n.row .col-2:last-child .input-group-desc {\n  margin-bottom: 0; }\n.row-space {\n  justify-content: space-between; }\n.row-refine {\n  margin: 0 -15px; }\n.row-refine .col-3 .input-group-desc,\n.row-refine .col-9 .input-group-desc {\n  margin-bottom: 0; }\n.col-2 {\n  width: calc((100% - 30px) / 2); }\n@media (max-width: 767px) {\n  .col-2 {\n    width: 100%; } }\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 40px; }\n.form-row .name {\n  width: 125px;\n  color: #555;\n  font-size: 15px;\n  font-weight: 700; }\n.form-row .value {\n  width: calc(100% - 125px); }\n@media (max-width: 767px) {\n  .form-row {\n    display: block; }\n  .form-row .name,\n  .form-row .value {\n    display: block;\n    width: 100%; }\n  .form-row .name {\n    margin-bottom: 7px; } }\n.col-3,\n.col-9 {\n  padding: 0 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px; }\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n@media (max-width: 767px) {\n  .col-3 {\n    flex: 0 0 35%;\n    max-width: 35%; } }\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n@media (max-width: 767px) {\n  .col-9 {\n    flex: 0 0 65%;\n    max-width: 65%; } }\n/* ==========================================================================\r\n\t #BOX-SIZING\r\n\t ========================================================================== */\n/**\r\n   * More sensible default box-sizing:\r\n   * css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice\r\n   */\nhtml {\n  box-sizing: border-box; }\n* {\n  padding: 0;\n  margin: 0; }\n*, *:before, *:after {\n  box-sizing: inherit; }\n/* ==========================================================================\r\n\t #RESET\r\n\t ========================================================================== */\n/**\r\n   * A very simple reset that sits on top of Normalize.css.\r\n   */\nbody,\nh1, h2, h3, h4, h5, h6,\nblockquote, p, pre,\ndl, dd, ol, ul,\nfigure,\nhr,\nfieldset, legend {\n  margin: 0;\n  padding: 0; }\n/**\r\n   * Remove trailing margins from nested lists.\r\n   */\nli > ol,\nli > ul {\n  margin-bottom: 0; }\n/**\r\n   * Remove default table spacing.\r\n   */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n/**\r\n   * 1. Reset Chrome and Firefox behaviour which sets a `min-width: min-content;`\r\n   *    on fieldsets.\r\n   */\nfieldset {\n  min-width: 0;\n  /* [1] */\n  border: 0; }\nbutton {\n  outline: none;\n  background: none;\n  border: none; }\n/* ==========================================================================\r\n\t #PAGE WRAPPER\r\n\t ========================================================================== */\n.page-wrapper {\n  min-height: 100vh; }\nbody {\n  font-family: \"Open Sans\", \"Arial\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  font-size: 14px; }\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400; }\nh1 {\n  font-size: 36px; }\nh2 {\n  font-size: 30px; }\nh3 {\n  font-size: 24px; }\nh4 {\n  font-size: 18px; }\nh5 {\n  font-size: 15px; }\nh6 {\n  font-size: 13px; }\n/* ==========================================================================\r\n\t #BACKGROUND\r\n\t ========================================================================== */\n/* ==========================================================================\r\n\t #SPACING\r\n\t ========================================================================== */\n.p-t-100 {\n  padding-top: 100px; }\n.p-t-130 {\n  padding-top: 130px; }\n.p-t-180 {\n  padding-top: 180px; }\n.p-t-45 {\n  padding-top: 45px; }\n.p-t-20 {\n  padding-top: 20px; }\n.p-t-15 {\n  padding-top: 15px; }\n.p-t-10 {\n  padding-top: 10px; }\n.p-t-30 {\n  padding-top: 30px; }\n.p-b-100 {\n  padding-bottom: 100px; }\n.p-b-50 {\n  padding-bottom: 50px; }\n.m-r-45 {\n  margin-right: 45px; }\n.m-r-55 {\n  margin-right: 55px; }\n.m-b-55 {\n  margin-bottom: 55px; }\n/* ==========================================================================\r\n\t #WRAPPER\r\n\t ========================================================================== */\n.wrapper {\n  margin: 0 auto; }\n.wrapper--w960 {\n  max-width: 960px; }\n.wrapper--w790 {\n  max-width: 790px; }\n.wrapper--w780 {\n  max-width: 780px; }\n.wrapper--w680 {\n  max-width: 680px; }\n/* ==========================================================================\r\n\t #BUTTON\r\n\t ========================================================================== */\n.btn {\n  display: inline-block;\n  line-height: 50px;\n  padding: 0 50px;\n  transition: all 0.4s ease;\n  cursor: pointer;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #fff;\n  font-family: inherit; }\n.btn--radius {\n  border-radius: 3px; }\n.btn--radius-2 {\n  border-radius: 5px; }\n.btn--pill {\n  border-radius: 20px; }\n.btn--green {\n  background: #57b846; }\n.btn--green:hover {\n  background: #4dae3c; }\n.btn--blue {\n  background: #4272d7; }\n.btn--blue:hover {\n  background: #3868cd; }\n.btn--red {\n  background: #ff4b5a; }\n.btn--red:hover {\n  background: #eb3746; }\n/* ==========================================================================\r\n\t #DATE PICKER\r\n\t ========================================================================== */\ntd.active {\n  background-color: #2c6ed5; }\ninput[type=\"date\" i] {\n  padding: 14px; }\n.table-condensed td, .table-condensed th {\n  font-size: 14px;\n  font-family: \"Roboto\", \"Arial\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400; }\n.daterangepicker td {\n  width: 40px;\n  height: 30px; }\n.daterangepicker {\n  border: none;\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\n  display: none;\n  border: 1px solid #e0e0e0;\n  margin-top: 5px; }\n.daterangepicker::after, .daterangepicker::before {\n  display: none; }\n.daterangepicker thead tr th {\n  padding: 10px 0; }\n.daterangepicker .table-condensed th select {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-size: 14px;\n  padding: 5px;\n  outline: none; }\n/* ==========================================================================\r\n\t #FORM\r\n\t ========================================================================== */\ninput {\n  outline: none;\n  margin: 0;\n  border: none;\n  box-shadow: none;\n  width: 100%;\n  font-size: 14px;\n  font-family: inherit; }\n.radio-container {\n  display: inline-block;\n  position: relative;\n  padding-left: 30px;\n  cursor: pointer;\n  font-size: 16px;\n  color: #666;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n.radio-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer; }\n.radio-container input:checked ~ .checkmark {\n  background-color: #e5e5e5; }\n.radio-container input:checked ~ .checkmark:after {\n  display: block; }\n.radio-container .checkmark:after {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #57b846; }\n.checkmark {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #e5e5e5;\n  border-radius: 50%;\n  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08); }\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n.input--style-5 {\n  background: #e5e5e5;\n  line-height: 50px;\n  border-radius: 5px;\n  padding: 0 22px;\n  font-size: 16px;\n  color: #555; }\n.input-group-desc {\n  position: relative; }\n@media (max-width: 767px) {\n  .input-group-desc {\n    margin-bottom: 40px; } }\n.input-group {\n  position: relative;\n  margin: 0; }\n.label {\n  color: #555;\n  font-size: 15px;\n  font-weight: 700; }\n.label--block {\n  width: 100%; }\n.label--desc {\n  position: absolute;\n  text-transform: capitalize;\n  display: block;\n  color: #999;\n  font-size: 14px;\n  margin: 0;\n  margin-top: 7px;\n  left: 0; }\n/* ==========================================================================\r\n\t #SELECT2\r\n\t ========================================================================== */\n.select--no-search .select2-search {\n  display: none !important; }\n.select2-container--open .select2-dropdown--below {\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\n  border: 1px solid #e0e0e0;\n  margin-top: 5px;\n  overflow: hidden; }\n.select2-container--default .select2-results__option {\n  padding-left: 22px; }\n.rs-select2 .select2-container {\n  width: 100% !important;\n  outline: none;\n  background: #e5e5e5;\n  border-radius: 5px; }\n.rs-select2 .select2-container .select2-selection--single {\n  outline: none;\n  border: none;\n  height: 50px;\n  background: transparent; }\n.rs-select2 .select2-container .select2-selection--single .select2-selection__rendered {\n  line-height: 50px;\n  padding-left: 0;\n  color: #555;\n  font-size: 16px;\n  font-family: inherit;\n  padding-left: 22px;\n  padding-right: 50px; }\n.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow {\n  height: 50px;\n  right: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow b {\n  display: none; }\n.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow:after {\n  font-family: \"Material-Design-Iconic-Font\";\n  content: '\\f2f9';\n  font-size: 24px;\n  color: #999;\n  transition: all 0.4s ease; }\n.rs-select2 .select2-container.select2-container--open .select2-selection--single .select2-selection__arrow::after {\n  -webkit-transform: rotate(-180deg);\n  transform: rotate(-180deg); }\n/* ==========================================================================\r\n\t #TITLE\r\n\t ========================================================================== */\n.title {\n  font-size: 24px;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-align: center;\n  color: #fff; }\n/* ==========================================================================\r\n\t #CARD\r\n\t ========================================================================== */\n.card {\n  border-radius: 3px;\n  background: #fff; }\n.card-5 {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); }\n.card-5 .card-heading {\n  padding: 20px 0;\n  background: #ed4c67;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px; }\n.card-5 .card-body {\n  padding: 52px 85px;\n  padding-bottom: 73px; }\n@media (max-width: 767px) {\n  .card-5 .card-body {\n    padding: 40px 30px;\n    padding-bottom: 50px; } }\n.placeholder {\n  font-size: small !important;\n  font-weight: 100 !important; }\nselect {\n  word-wrap: normal !important;\n  height: 44px !important;\n  background-color: #e5e5e5 !important;\n  color: #555 !important;\n  font-weight: 700 !important;\n  border: 0px !important;\n  border-radius: 6px !important; }\n.image-wrapper li {\n  width: 150px;\n  height: 150px;\n  margin: 10px;\n  float: left;\n  border: 1px solid #ccc;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  cursor: default;\n  background: #fff;\n  margin-bottom: 25px; }\n.browse-btn {\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 0.5rem;\n  position: relative;\n  width: 150px;\n  height: 150px;\n  border: 1px solid #ccc;\n  text-align: center; }\n.browse-image {\n  position: relative;\n  top: 25%; }\n.product-image {\n  width: 100%;\n  height: 125px; }\na.delete-btn {\n  color: #f00;\n  cursor: pointer; }\n#cameraImg {\n  cursor: pointer;\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 3; }\n.error {\n  color: #ff0000; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsbC9EOlxcR2xvYmFsIERpc3RyaWJ1dGVkIFNvZnR3YXJlIERldlxcQW5ndWxhclxcc2VsbEl0QXBwL3NyY1xcYXBwXFxwYWdlc1xcc2VsbFxcc2VsbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VsbC9zZWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzsrRUNDK0U7QURFNUU7RUFDRiw0REFBNEQsRUFBQTtBQUczRDtFQUNELDZEQUE2RCxFQUFBO0FBRzVEO0VBQ0QsK0RBQStELEVBQUE7QUFHOUQ7OzhFQ0Y0RTtBREs1RTtFQUtELGFBQWE7RUFHYixlQUFlLEVBQUE7QUFHZDtFQUNELGdCQUFnQixFQUFBO0FBR2Y7RUFLRCw4QkFBOEIsRUFBQTtBQUc3QjtFQUNELGVBQWUsRUFBQTtBQUdkOztFQUVELGdCQUFnQixFQUFBO0FBR2Y7RUFHRCw4QkFBOEIsRUFBQTtBQUc3QjtFQUNEO0lBQ0UsV0FBVyxFQUFBLEVBQ1o7QUFHQTtFQUtELGFBQWE7RUFHYixlQUFlO0VBS2YsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBO0FBR2xCO0VBQ0QsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFHZjtFQUdELHlCQUF5QixFQUFBO0FBR3hCO0VBQ0Q7SUFDRSxjQUFjLEVBQUE7RUFFaEI7O0lBRUUsY0FBYztJQUNkLFdBQVcsRUFBQTtFQUViO0lBQ0Usa0JBQWtCLEVBQUEsRUFDbkI7QUFHQTs7RUFFRCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlLEVBQUE7QUFHZDtFQUtELGFBQWE7RUFDYixjQUFjLEVBQUE7QUFHYjtFQUNEO0lBS0UsYUFBYTtJQUNiLGNBQWMsRUFBQSxFQUNmO0FBR0E7RUFLRCxhQUFhO0VBQ2IsY0FBYyxFQUFBO0FBR2I7RUFDRDtJQUtFLGFBQWE7SUFDYixjQUFjLEVBQUEsRUFDZjtBQUdBOzs4RUN4QjRFO0FEMkI1RTs7O0lDdkJFO0FEMkJGO0VBR0Qsc0JBQXNCLEVBQUE7QUFHckI7RUFDRCxVQUFVO0VBQ1YsU0FBUyxFQUFBO0FBR1I7RUFHRCxtQkFBbUIsRUFBQTtBQUdsQjs7OEVDM0I0RTtBRDhCNUU7O0lDM0JFO0FEOEJGOzs7Ozs7O0VBT0QsU0FBUztFQUNULFVBQVUsRUFBQTtBQUdUOztJQzVCRTtBRCtCRjs7RUFFRCxnQkFBZ0IsRUFBQTtBQUdmOztJQzdCRTtBRGdDRjtFQUNELHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTtBQUdoQjs7O0lDN0JFO0FEaUNGO0VBQ0QsWUFBWTtFQUNaLFFBQUE7RUFDQSxTQUFTLEVBQUE7QUFHUjtFQUNELGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0FBR1g7OzhFQ2hDNEU7QURtQzVFO0VBQ0QsaUJBQWlCLEVBQUE7QUFHaEI7RUFDRCwrREFBK0Q7RUFDL0QsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUdkO0VBQ0QsZ0JBQWdCLEVBQUE7QUFHZjtFQUNELGVBQWUsRUFBQTtBQUdkO0VBQ0QsZUFBZSxFQUFBO0FBR2Q7RUFDRCxlQUFlLEVBQUE7QUFHZDtFQUNELGVBQWUsRUFBQTtBQUdkO0VBQ0QsZUFBZSxFQUFBO0FBR2Q7RUFDRCxlQUFlLEVBQUE7QUFHZDs7OEVDekM0RTtBRDhDNUU7OzhFQzNDNEU7QUQ4QzVFO0VBQ0Qsa0JBQWtCLEVBQUE7QUFHakI7RUFDRCxrQkFBa0IsRUFBQTtBQUdqQjtFQUNELGtCQUFrQixFQUFBO0FBR2pCO0VBQ0QsaUJBQWlCLEVBQUE7QUFHaEI7RUFDRCxpQkFBaUIsRUFBQTtBQUdoQjtFQUNELGlCQUFpQixFQUFBO0FBR2hCO0VBQ0QsaUJBQWlCLEVBQUE7QUFHaEI7RUFDRCxpQkFBaUIsRUFBQTtBQUdoQjtFQUNELHFCQUFxQixFQUFBO0FBR3BCO0VBQ0Qsb0JBQW9CLEVBQUE7QUFHbkI7RUFDRCxrQkFBa0IsRUFBQTtBQUdqQjtFQUNELGtCQUFrQixFQUFBO0FBR2pCO0VBQ0QsbUJBQW1CLEVBQUE7QUFHbEI7OzhFQ3hENEU7QUQyRDVFO0VBQ0QsY0FBYyxFQUFBO0FBR2I7RUFDRCxnQkFBZ0IsRUFBQTtBQUdmO0VBQ0QsZ0JBQWdCLEVBQUE7QUFHZjtFQUNELGdCQUFnQixFQUFBO0FBR2Y7RUFDRCxnQkFBZ0IsRUFBQTtBQUdmOzs4RUM3RDRFO0FEZ0U1RTtFQUNELHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtFQUlmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQixFQUFBO0FBR25CO0VBR0Qsa0JBQWtCLEVBQUE7QUFHakI7RUFHRCxrQkFBa0IsRUFBQTtBQUdqQjtFQUdELG1CQUFtQixFQUFBO0FBR2xCO0VBQ0QsbUJBQW1CLEVBQUE7QUFHbEI7RUFDRCxtQkFBbUIsRUFBQTtBQUdsQjtFQUNELG1CQUFtQixFQUFBO0FBR2xCO0VBQ0QsbUJBQW1CLEVBQUE7QUFHbEI7RUFDRCxtQkFBbUIsRUFBQTtBQUdsQjtFQUNELG1CQUFtQixFQUFBO0FBR2xCOzs4RUN2RTRFO0FEMEU1RTtFQUNELHlCQUF5QixFQUFBO0FBR3hCO0VBQ0QsYUFBYSxFQUFBO0FBR1o7RUFDRCxlQUFlO0VBQ2YsNERBQTREO0VBQzVELGdCQUFnQixFQUFBO0FBR2Y7RUFDRCxXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBR1g7RUFDRCxZQUFZO0VBR1osZ0RBQWdEO0VBQ2hELGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZSxFQUFBO0FBR2Q7RUFDRCxhQUFhLEVBQUE7QUFHWjtFQUNELGVBQWUsRUFBQTtBQUdkO0VBQ0Qsc0JBQXNCO0VBR3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWEsRUFBQTtBQUdaOzs4RUMvRTRFO0FEa0Y1RTtFQUNELGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUdaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQixFQUFBO0FBR25CO0VBQ0QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7QUFHaEI7RUFDRCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWUsRUFBQTtBQUdkO0VBQ0QseUJBQXlCLEVBQUE7QUFHeEI7RUFDRCxjQUFjLEVBQUE7QUFHYjtFQUNELFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQXdDO0VBSXhDLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsWUFBWTtFQUdaLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtBQUdsQjtFQUNELGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUNBQW1DO0VBSW5DLDJCQUEyQjtFQUMzQixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFHekIsa0JBQWtCO0VBR2xCLHFEQUFxRCxFQUFBO0FBR3BEO0VBQ0QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7QUFHWjtFQUNELG1CQUFtQjtFQUNuQixpQkFBaUI7RUFHakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVyxFQUFBO0FBR1Y7RUFDRCxrQkFBa0IsRUFBQTtBQUdqQjtFQUNEO0lBQ0UsbUJBQW1CLEVBQUEsRUFDcEI7QUFHQTtFQUNELGtCQUFrQjtFQUNsQixTQUFTLEVBQUE7QUFHUjtFQUNELFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFHZjtFQUNELFdBQVcsRUFBQTtBQUdWO0VBQ0Qsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixTQUFTO0VBQ1QsZUFBZTtFQUNmLE9BQU8sRUFBQTtBQUdOOzs4RUMvRjRFO0FEa0c1RTtFQUNELHdCQUF3QixFQUFBO0FBR3ZCO0VBQ0QsWUFBWTtFQUdaLGtCQUFrQjtFQUdsQixnREFBZ0Q7RUFDaEQseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtBQUdmO0VBQ0Qsa0JBQWtCLEVBQUE7QUFHakI7RUFDRCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUduQixrQkFBa0IsRUFBQTtBQUdqQjtFQUNELGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QixFQUFBO0FBR3RCO0VBQ0QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7QUFHbEI7RUFDRCxZQUFZO0VBQ1osV0FBVztFQUtYLGFBQWE7RUFLYix1QkFBdUI7RUFLdkIsbUJBQW1CLEVBQUE7QUFHbEI7RUFDRCxhQUFhLEVBQUE7QUFHWjtFQUNELDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFJWCx5QkFBeUIsRUFBQTtBQUd4QjtFQUNELGtDQUFrQztFQUlsQywwQkFBMEIsRUFBQTtBQUd6Qjs7OEVDekc0RTtBRDRHNUU7RUFDRCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0FBR1Y7OzhFQzFHNEU7QUQ2RzVFO0VBR0Qsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0FBR2Y7RUFDRCxnQkFBZ0I7RUFHaEIsbUJBQW1CO0VBR25CLGdEQUFnRCxFQUFBO0FBRy9DO0VBQ0QsZUFBZTtFQUNmLG1CQUFtQjtFQUduQiw0QkFBNEI7RUFHNUIsNkJBQTZCLEVBQUE7QUFHNUI7RUFDRCxrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7QUFHbkI7RUFDRDtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0IsRUFBQSxFQUNyQjtBQUlGO0VBQ0MsMkJBQTJCO0VBQzNCLDJCQUEyQixFQUFBO0FBRTVCO0VBQ0ksNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3pCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDbkIsNkJBQTZCLEVBQUE7QUFJakM7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFFdkI7RUFDSSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7QUFFdEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUSxFQUFBO0FBRVo7RUFDSSxXQUFVO0VBQ1YsYUFBWSxFQUFBO0FBRWhCO0VBQ0ksV0FBVztFQUNYLGVBQWUsRUFBQTtBQUVuQjtFQUNJLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBSztFQUNMLFNBQVE7RUFDUixPQUFNO0VBQ04sUUFBUTtFQUNSLFVBQVUsRUFBQTtBQUVkO0VBQ0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VsbC9zZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICNGT05UXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgIC5mb250LXJvYm8ge1xyXG5cdGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkFyaWFsXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLmZvbnQtcG9wcGlucyB7XHJcblx0Zm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBcIkFyaWFsXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLmZvbnQtb3BlbnNhbnMge1xyXG5cdGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBcIkFyaWFsXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQgI0dSSURcclxuXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAucm93IHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuXHQtbXMtZmxleC13cmFwOiB3cmFwO1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgXHJcbiAgLnJvdyAuY29sLTI6bGFzdC1jaGlsZCAuaW5wdXQtZ3JvdXAtZGVzYyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgLnJvdy1zcGFjZSB7XHJcblx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuXHQtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHQtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG5cdC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICBcclxuICAucm93LXJlZmluZSB7XHJcblx0bWFyZ2luOiAwIC0xNXB4O1xyXG4gIH1cclxuICBcclxuICAucm93LXJlZmluZSAuY29sLTMgLmlucHV0LWdyb3VwLWRlc2MsXHJcbiAgLnJvdy1yZWZpbmUgLmNvbC05IC5pbnB1dC1ncm91cC1kZXNjIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICAuY29sLTIge1xyXG5cdHdpZHRoOiAtd2Via2l0LWNhbGMoKDEwMCUgLSAzMHB4KSAvIDIpO1xyXG5cdHdpZHRoOiAtbW96LWNhbGMoKDEwMCUgLSAzMHB4KSAvIDIpO1xyXG5cdHdpZHRoOiBjYWxjKCgxMDAlIC0gMzBweCkgLyAyKTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0LmNvbC0yIHtcclxuXHQgIHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tcm93IHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcclxuXHQtbXMtZmxleC13cmFwOiB3cmFwO1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG5cdC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQtbW96LWJveC1hbGlnbjogY2VudGVyO1xyXG5cdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1yb3cgLm5hbWUge1xyXG5cdHdpZHRoOiAxMjVweDtcclxuXHRjb2xvcjogIzU1NTtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tcm93IC52YWx1ZSB7XHJcblx0d2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gMTI1cHgpO1xyXG5cdHdpZHRoOiAtbW96LWNhbGMoMTAwJSAtIDEyNXB4KTtcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gMTI1cHgpO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHQuZm9ybS1yb3cge1xyXG5cdCAgZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cdC5mb3JtLXJvdyAubmFtZSxcclxuXHQuZm9ybS1yb3cgLnZhbHVlIHtcclxuXHQgIGRpc3BsYXk6IGJsb2NrO1xyXG5cdCAgd2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cdC5mb3JtLXJvdyAubmFtZSB7XHJcblx0ICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcblx0fVxyXG4gIH1cclxuICBcclxuICAuY29sLTMsXHJcbiAgLmNvbC05IHtcclxuXHRwYWRkaW5nOiAwIDE1cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1pbi1oZWlnaHQ6IDFweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbC0zIHtcclxuXHQtd2Via2l0LWJveC1mbGV4OiAwO1xyXG5cdC13ZWJraXQtZmxleDogMCAwIDI1JTtcclxuXHQtbW96LWJveC1mbGV4OiAwO1xyXG5cdC1tcy1mbGV4OiAwIDAgMjUlO1xyXG5cdGZsZXg6IDAgMCAyNSU7XHJcblx0bWF4LXdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cdC5jb2wtMyB7XHJcblx0ICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG5cdCAgLXdlYmtpdC1mbGV4OiAwIDAgMzUlO1xyXG5cdCAgLW1vei1ib3gtZmxleDogMDtcclxuXHQgIC1tcy1mbGV4OiAwIDAgMzUlO1xyXG5cdCAgZmxleDogMCAwIDM1JTtcclxuXHQgIG1heC13aWR0aDogMzUlO1xyXG5cdH1cclxuICB9XHJcbiAgXHJcbiAgLmNvbC05IHtcclxuXHQtd2Via2l0LWJveC1mbGV4OiAwO1xyXG5cdC13ZWJraXQtZmxleDogMCAwIDc1JTtcclxuXHQtbW96LWJveC1mbGV4OiAwO1xyXG5cdC1tcy1mbGV4OiAwIDAgNzUlO1xyXG5cdGZsZXg6IDAgMCA3NSU7XHJcblx0bWF4LXdpZHRoOiA3NSU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cdC5jb2wtOSB7XHJcblx0ICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG5cdCAgLXdlYmtpdC1mbGV4OiAwIDAgNjUlO1xyXG5cdCAgLW1vei1ib3gtZmxleDogMDtcclxuXHQgIC1tcy1mbGV4OiAwIDAgNjUlO1xyXG5cdCAgZmxleDogMCAwIDY1JTtcclxuXHQgIG1heC13aWR0aDogNjUlO1xyXG5cdH1cclxuICB9XHJcbiAgXHJcbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQgI0JPWC1TSVpJTkdcclxuXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAvKipcclxuICAgKiBNb3JlIHNlbnNpYmxlIGRlZmF1bHQgYm94LXNpemluZzpcclxuICAgKiBjc3MtdHJpY2tzLmNvbS9pbmhlcml0aW5nLWJveC1zaXppbmctcHJvYmFibHktc2xpZ2h0bHktYmV0dGVyLWJlc3QtcHJhY3RpY2VcclxuICAgKi9cclxuICBodG1sIHtcclxuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gICoge1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xyXG5cdC1tb3otYm94LXNpemluZzogaW5oZXJpdDtcclxuXHRib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjUkVTRVRcclxuXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAvKipcclxuICAgKiBBIHZlcnkgc2ltcGxlIHJlc2V0IHRoYXQgc2l0cyBvbiB0b3Agb2YgTm9ybWFsaXplLmNzcy5cclxuICAgKi9cclxuICBib2R5LFxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXHJcbiAgYmxvY2txdW90ZSwgcCwgcHJlLFxyXG4gIGRsLCBkZCwgb2wsIHVsLFxyXG4gIGZpZ3VyZSxcclxuICBocixcclxuICBmaWVsZHNldCwgbGVnZW5kIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRyYWlsaW5nIG1hcmdpbnMgZnJvbSBuZXN0ZWQgbGlzdHMuXHJcbiAgICovXHJcbiAgbGkgPiBvbCxcclxuICBsaSA+IHVsIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBSZW1vdmUgZGVmYXVsdCB0YWJsZSBzcGFjaW5nLlxyXG4gICAqL1xyXG4gIHRhYmxlIHtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiAxLiBSZXNldCBDaHJvbWUgYW5kIEZpcmVmb3ggYmVoYXZpb3VyIHdoaWNoIHNldHMgYSBgbWluLXdpZHRoOiBtaW4tY29udGVudDtgXHJcbiAgICogICAgb24gZmllbGRzZXRzLlxyXG4gICAqL1xyXG4gIGZpZWxkc2V0IHtcclxuXHRtaW4td2lkdGg6IDA7XHJcblx0LyogWzFdICovXHJcblx0Ym9yZGVyOiAwO1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNQQUdFIFdSQVBQRVJcclxuXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAucGFnZS13cmFwcGVyIHtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcblx0Zm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIFwiQXJpYWxcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICBoMSB7XHJcblx0Zm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxuICBcclxuICBoMiB7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBoMyB7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuICBcclxuICBoNCB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICBoNSB7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBoNiB7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICBcclxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjQkFDS0dST1VORFxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICBcclxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjU1BBQ0lOR1xyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIC5wLXQtMTAwIHtcclxuXHRwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wLXQtMTMwIHtcclxuXHRwYWRkaW5nLXRvcDogMTMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wLXQtMTgwIHtcclxuXHRwYWRkaW5nLXRvcDogMTgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wLXQtNDUge1xyXG5cdHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gIH1cclxuICBcclxuICAucC10LTIwIHtcclxuXHRwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnAtdC0xNSB7XHJcblx0cGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wLXQtMTAge1xyXG5cdHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAucC10LTMwIHtcclxuXHRwYWRkaW5nLXRvcDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLnAtYi0xMDAge1xyXG5cdHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnAtYi01MCB7XHJcblx0cGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tLXItNDUge1xyXG5cdG1hcmdpbi1yaWdodDogNDVweDtcclxuICB9XHJcbiAgXHJcbiAgLm0tci01NSB7XHJcblx0bWFyZ2luLXJpZ2h0OiA1NXB4O1xyXG4gIH1cclxuICBcclxuICAubS1iLTU1IHtcclxuXHRtYXJnaW4tYm90dG9tOiA1NXB4O1xyXG4gIH1cclxuICBcclxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjV1JBUFBFUlxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIC53cmFwcGVyIHtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLndyYXBwZXItLXc5NjAge1xyXG5cdG1heC13aWR0aDogOTYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVyLS13NzkwIHtcclxuXHRtYXgtd2lkdGg6IDc5MHB4O1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlci0tdzc4MCB7XHJcblx0bWF4LXdpZHRoOiA3ODBweDtcclxuICB9XHJcbiAgXHJcbiAgLndyYXBwZXItLXc2ODAge1xyXG5cdG1heC13aWR0aDogNjgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNCVVRUT05cclxuXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAuYnRuIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bGluZS1oZWlnaHQ6IDUwcHg7XHJcblx0cGFkZGluZzogMCA1MHB4O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICAuYnRuLS1yYWRpdXMge1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi0tcmFkaXVzLTIge1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi0tcGlsbCB7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuYnRuLS1ncmVlbiB7XHJcblx0YmFja2dyb3VuZDogIzU3Yjg0NjtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi0tZ3JlZW46aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICM0ZGFlM2M7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tLWJsdWUge1xyXG5cdGJhY2tncm91bmQ6ICM0MjcyZDc7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tLWJsdWU6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICMzODY4Y2Q7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tLXJlZCB7XHJcblx0YmFja2dyb3VuZDogI2ZmNGI1YTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi0tcmVkOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjZWIzNzQ2O1xyXG4gIH1cclxuICBcclxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjREFURSBQSUNLRVJcclxuXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICB0ZC5hY3RpdmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyYzZlZDU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJkYXRlXCIgaV0ge1xyXG5cdHBhZGRpbmc6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1jb25kZW5zZWQgdGQsIC50YWJsZS1jb25kZW5zZWQgdGgge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJBcmlhbFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgXHJcbiAgLmRhdGVyYW5nZXBpY2tlciB0ZCB7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuZGF0ZXJhbmdlcGlja2VyIHtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0Ym94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRlcmFuZ2VwaWNrZXI6OmFmdGVyLCAuZGF0ZXJhbmdlcGlja2VyOjpiZWZvcmUge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRlcmFuZ2VwaWNrZXIgdGhlYWQgdHIgdGgge1xyXG5cdHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmRhdGVyYW5nZXBpY2tlciAudGFibGUtY29uZGVuc2VkIHRoIHNlbGVjdCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjRk9STVxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIGlucHV0IHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdG1hcmdpbjogMDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG5cdC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LWZhbWlseTogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgLnJhZGlvLWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRjb2xvcjogIzY2NjtcclxuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuICBcclxuICAucmFkaW8tY29udGFpbmVyIGlucHV0IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0b3BhY2l0eTogMDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5yYWRpby1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yYWRpby1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAucmFkaW8tY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdHdpZHRoOiAxMnB4O1xyXG5cdGhlaWdodDogMTJweDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZDogIzU3Yjg0NjtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrbWFyayB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHRsZWZ0OiAwO1xyXG5cdGhlaWdodDogMjBweDtcclxuXHR3aWR0aDogMjBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja21hcms6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC0tc3R5bGUtNSB7XHJcblx0YmFja2dyb3VuZDogI2U1ZTVlNTtcclxuXHRsaW5lLWhlaWdodDogNTBweDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0cGFkZGluZzogMCAyMnB4O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRjb2xvcjogIzU1NTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLWRlc2Mge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0LmlucHV0LWdyb3VwLWRlc2Mge1xyXG5cdCAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHR9XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC1ncm91cCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmxhYmVsIHtcclxuXHRjb2xvcjogIzU1NTtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgXHJcbiAgLmxhYmVsLS1ibG9jayB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbC0tZGVzYyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGNvbG9yOiAjOTk5O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW46IDA7XHJcblx0bWFyZ2luLXRvcDogN3B4O1xyXG5cdGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNTRUxFQ1QyXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgLnNlbGVjdC0tbm8tc2VhcmNoIC5zZWxlY3QyLXNlYXJjaCB7XHJcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuc2VsZWN0Mi1jb250YWluZXItLW9wZW4gLnNlbGVjdDItZHJvcGRvd24tLWJlbG93IHtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cdGJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDIycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ycy1zZWxlY3QyIC5zZWxlY3QyLWNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBcclxuICAucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGhlaWdodDogNTBweDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLnJzLXNlbGVjdDIgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQge1xyXG5cdGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMDtcclxuXHRjb2xvcjogIzU1NTtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcblx0cGFkZGluZy1sZWZ0OiAyMnB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ycy1zZWxlY3QyIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93IHtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0cmlnaHQ6IDE1cHg7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG5cdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0LW1vei1ib3gtcGFjazogY2VudGVyO1xyXG5cdC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG5cdC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQtbW96LWJveC1hbGlnbjogY2VudGVyO1xyXG5cdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnJzLXNlbGVjdDIgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3cgYiB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnJzLXNlbGVjdDIgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3c6YWZ0ZXIge1xyXG5cdGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsLURlc2lnbi1JY29uaWMtRm9udFwiO1xyXG5cdGNvbnRlbnQ6ICdcXGYyZjknO1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuXHRjb2xvcjogIzk5OTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLnJzLXNlbGVjdDIgLnNlbGVjdDItY29udGFpbmVyLnNlbGVjdDItY29udGFpbmVyLS1vcGVuIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3c6OmFmdGVyIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG5cdC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcblx0LW1zLXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG5cdC1vLXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gIH1cclxuICBcclxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjVElUTEVcclxuXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAudGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjQ0FSRFxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIC5jYXJkIHtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtNSB7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0Ym94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC01IC5jYXJkLWhlYWRpbmcge1xyXG5cdHBhZGRpbmc6IDIwcHggMDtcclxuXHRiYWNrZ3JvdW5kOiAjZWQ0YzY3O1xyXG5cdC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogMTBweDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiAxMHB4O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC01IC5jYXJkLWJvZHkge1xyXG5cdHBhZGRpbmc6IDUycHggODVweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogNzNweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0LmNhcmQtNSAuY2FyZC1ib2R5IHtcclxuXHQgIHBhZGRpbmc6IDQwcHggMzBweDtcclxuXHQgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG5cdH1cclxuICB9XHJcbiAgXHJcblxyXG4ucGxhY2Vob2xkZXIge1xyXG5cdGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcclxuXHRmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuc2VsZWN0IHtcclxuICAgIHdvcmQtd3JhcDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNTU1ICFpbXBvcnRhbnQ7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG5cdGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5pbWFnZS13cmFwcGVyIGxpIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLmJyb3dzZS1idG4ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnJvd3NlLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjUlO1xyXG59XHJcbi5wcm9kdWN0LWltYWdle1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMjVweDtcclxufVxyXG5hLmRlbGV0ZS1idG4ge1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2NhbWVyYUltZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6MDtcclxuICAgIGJvdHRvbTowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxufSIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICNGT05UXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uZm9udC1yb2JvIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiQXJpYWxcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5mb250LXBvcHBpbnMge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIFwiQXJpYWxcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5mb250LW9wZW5zYW5zIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIFwiQXJpYWxcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNHUklEXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ucm93IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwOyB9XG5cbi5yb3cgLmNvbC0yOmxhc3QtY2hpbGQgLmlucHV0LWdyb3VwLWRlc2Mge1xuICBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbi5yb3ctc3BhY2Uge1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG5cbi5yb3ctcmVmaW5lIHtcbiAgbWFyZ2luOiAwIC0xNXB4OyB9XG5cbi5yb3ctcmVmaW5lIC5jb2wtMyAuaW5wdXQtZ3JvdXAtZGVzYyxcbi5yb3ctcmVmaW5lIC5jb2wtOSAuaW5wdXQtZ3JvdXAtZGVzYyB7XG4gIG1hcmdpbi1ib3R0b206IDA7IH1cblxuLmNvbC0yIHtcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygoMTAwJSAtIDMwcHgpIC8gMik7XG4gIHdpZHRoOiAtbW96LWNhbGMoKDEwMCUgLSAzMHB4KSAvIDIpO1xuICB3aWR0aDogY2FsYygoMTAwJSAtIDMwcHgpIC8gMik7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb2wtMiB7XG4gICAgd2lkdGg6IDEwMCU7IH0gfVxuXG4uZm9ybS1yb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDsgfVxuXG4uZm9ybS1yb3cgLm5hbWUge1xuICB3aWR0aDogMTI1cHg7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLmZvcm0tcm93IC52YWx1ZSB7XG4gIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDEyNXB4KTtcbiAgd2lkdGg6IC1tb3otY2FsYygxMDAlIC0gMTI1cHgpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTI1cHgpOyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1yb3cge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC5mb3JtLXJvdyAubmFtZSxcbiAgLmZvcm0tcm93IC52YWx1ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgLmZvcm0tcm93IC5uYW1lIHtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7IH0gfVxuXG4uY29sLTMsXG4uY29sLTkge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDFweDsgfVxuXG4uY29sLTMge1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAtd2Via2l0LWZsZXg6IDAgMCAyNSU7XG4gIC1tb3otYm94LWZsZXg6IDA7XG4gIC1tcy1mbGV4OiAwIDAgMjUlO1xuICBmbGV4OiAwIDAgMjUlO1xuICBtYXgtd2lkdGg6IDI1JTsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbC0zIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogMCAwIDM1JTtcbiAgICAtbW96LWJveC1mbGV4OiAwO1xuICAgIC1tcy1mbGV4OiAwIDAgMzUlO1xuICAgIGZsZXg6IDAgMCAzNSU7XG4gICAgbWF4LXdpZHRoOiAzNSU7IH0gfVxuXG4uY29sLTkge1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAtd2Via2l0LWZsZXg6IDAgMCA3NSU7XG4gIC1tb3otYm94LWZsZXg6IDA7XG4gIC1tcy1mbGV4OiAwIDAgNzUlO1xuICBmbGV4OiAwIDAgNzUlO1xuICBtYXgtd2lkdGg6IDc1JTsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbC05IHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogMCAwIDY1JTtcbiAgICAtbW96LWJveC1mbGV4OiAwO1xuICAgIC1tcy1mbGV4OiAwIDAgNjUlO1xuICAgIGZsZXg6IDAgMCA2NSU7XG4gICAgbWF4LXdpZHRoOiA2NSU7IH0gfVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjQk9YLVNJWklOR1xyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXHJcbiAgICogTW9yZSBzZW5zaWJsZSBkZWZhdWx0IGJveC1zaXppbmc6XHJcbiAgICogY3NzLXRyaWNrcy5jb20vaW5oZXJpdGluZy1ib3gtc2l6aW5nLXByb2JhYmx5LXNsaWdodGx5LWJldHRlci1iZXN0LXByYWN0aWNlXHJcbiAgICovXG5odG1sIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDsgfVxuXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gIC13ZWJraXQtYm94LXNpemluZzogaW5oZXJpdDtcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNSRVNFVFxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXHJcbiAgICogQSB2ZXJ5IHNpbXBsZSByZXNldCB0aGF0IHNpdHMgb24gdG9wIG9mIE5vcm1hbGl6ZS5jc3MuXHJcbiAgICovXG5ib2R5LFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcbmJsb2NrcXVvdGUsIHAsIHByZSxcbmRsLCBkZCwgb2wsIHVsLFxuZmlndXJlLFxuaHIsXG5maWVsZHNldCwgbGVnZW5kIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwOyB9XG5cbi8qKlxyXG4gICAqIFJlbW92ZSB0cmFpbGluZyBtYXJnaW5zIGZyb20gbmVzdGVkIGxpc3RzLlxyXG4gICAqL1xubGkgPiBvbCxcbmxpID4gdWwge1xuICBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbi8qKlxyXG4gICAqIFJlbW92ZSBkZWZhdWx0IHRhYmxlIHNwYWNpbmcuXHJcbiAgICovXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XG5cbi8qKlxyXG4gICAqIDEuIFJlc2V0IENocm9tZSBhbmQgRmlyZWZveCBiZWhhdmlvdXIgd2hpY2ggc2V0cyBhIGBtaW4td2lkdGg6IG1pbi1jb250ZW50O2BcclxuICAgKiAgICBvbiBmaWVsZHNldHMuXHJcbiAgICovXG5maWVsZHNldCB7XG4gIG1pbi13aWR0aDogMDtcbiAgLyogWzFdICovXG4gIGJvcmRlcjogMDsgfVxuXG5idXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQgI1BBR0UgV1JBUFBFUlxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnBhZ2Utd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJBcmlhbFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMzZweDsgfVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMzBweDsgfVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMjRweDsgfVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMThweDsgfVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMTVweDsgfVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMTNweDsgfVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjQkFDS0dST1VORFxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQgI1NQQUNJTkdcclxuXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5wLXQtMTAwIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4OyB9XG5cbi5wLXQtMTMwIHtcbiAgcGFkZGluZy10b3A6IDEzMHB4OyB9XG5cbi5wLXQtMTgwIHtcbiAgcGFkZGluZy10b3A6IDE4MHB4OyB9XG5cbi5wLXQtNDUge1xuICBwYWRkaW5nLXRvcDogNDVweDsgfVxuXG4ucC10LTIwIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7IH1cblxuLnAtdC0xNSB7XG4gIHBhZGRpbmctdG9wOiAxNXB4OyB9XG5cbi5wLXQtMTAge1xuICBwYWRkaW5nLXRvcDogMTBweDsgfVxuXG4ucC10LTMwIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7IH1cblxuLnAtYi0xMDAge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7IH1cblxuLnAtYi01MCB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4OyB9XG5cbi5tLXItNDUge1xuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7IH1cblxuLm0tci01NSB7XG4gIG1hcmdpbi1yaWdodDogNTVweDsgfVxuXG4ubS1iLTU1IHtcbiAgbWFyZ2luLWJvdHRvbTogNTVweDsgfVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjV1JBUFBFUlxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLndyYXBwZXIge1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4ud3JhcHBlci0tdzk2MCB7XG4gIG1heC13aWR0aDogOTYwcHg7IH1cblxuLndyYXBwZXItLXc3OTAge1xuICBtYXgtd2lkdGg6IDc5MHB4OyB9XG5cbi53cmFwcGVyLS13NzgwIHtcbiAgbWF4LXdpZHRoOiA3ODBweDsgfVxuXG4ud3JhcHBlci0tdzY4MCB7XG4gIG1heC13aWR0aDogNjgwcHg7IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQgI0JVVFRPTlxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IH1cblxuLmJ0bi0tcmFkaXVzIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cblxuLmJ0bi0tcmFkaXVzLTIge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuXG4uYnRuLS1waWxsIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IH1cblxuLmJ0bi0tZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjNTdiODQ2OyB9XG5cbi5idG4tLWdyZWVuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzRkYWUzYzsgfVxuXG4uYnRuLS1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzQyNzJkNzsgfVxuXG4uYnRuLS1ibHVlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzM4NjhjZDsgfVxuXG4uYnRuLS1yZWQge1xuICBiYWNrZ3JvdW5kOiAjZmY0YjVhOyB9XG5cbi5idG4tLXJlZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlYjM3NDY7IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQgI0RBVEUgUElDS0VSXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG50ZC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM2ZWQ1OyB9XG5cbmlucHV0W3R5cGU9XCJkYXRlXCIgaV0ge1xuICBwYWRkaW5nOiAxNHB4OyB9XG5cbi50YWJsZS1jb25kZW5zZWQgdGQsIC50YWJsZS1jb25kZW5zZWQgdGgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkFyaWFsXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyIHRkIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzBweDsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyIHtcbiAgYm9yZGVyOiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgbWFyZ2luLXRvcDogNXB4OyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXI6OmFmdGVyLCAuZGF0ZXJhbmdlcGlja2VyOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIgdGhlYWQgdHIgdGgge1xuICBwYWRkaW5nOiAxMHB4IDA7IH1cblxuLmRhdGVyYW5nZXBpY2tlciAudGFibGUtY29uZGVuc2VkIHRoIHNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgb3V0bGluZTogbm9uZTsgfVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjRk9STVxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyB9XG5cbi5yYWRpby1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM2NjY7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cblxuLnJhZGlvLWNvbnRhaW5lciBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1OyB9XG5cbi5yYWRpby1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4ucmFkaW8tY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICM1N2I4NDY7IH1cblxuLmNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTsgfVxuXG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5pbnB1dC0tc3R5bGUtNSB7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMCAyMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTU1OyB9XG5cbi5pbnB1dC1ncm91cC1kZXNjIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaW5wdXQtZ3JvdXAtZGVzYyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDsgfSB9XG5cbi5pbnB1dC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwOyB9XG5cbi5sYWJlbCB7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLmxhYmVsLS1ibG9jayB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5sYWJlbC0tZGVzYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgbGVmdDogMDsgfVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjU0VMRUNUMlxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnNlbGVjdC0tbm8tc2VhcmNoIC5zZWxlY3QyLXNlYXJjaCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4uc2VsZWN0Mi1jb250YWluZXItLW9wZW4gLnNlbGVjdDItZHJvcGRvd24tLWJlbG93IHtcbiAgYm9yZGVyOiBub25lO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4uc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAyMnB4OyB9XG5cbi5ycy1zZWxlY3QyIC5zZWxlY3QyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG5cbi5ycy1zZWxlY3QyIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuXG4ucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCB7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBwYWRkaW5nLWxlZnQ6IDIycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7IH1cblxuLnJzLXNlbGVjdDIgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3cge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLnJzLXNlbGVjdDIgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3cgYiB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLnJzLXNlbGVjdDIgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3c6YWZ0ZXIge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnRcIjtcbiAgY29udGVudDogJ1xcZjJmOSc7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM5OTk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlOyB9XG5cbi5ycy1zZWxlY3QyIC5zZWxlY3QyLWNvbnRhaW5lci5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93OjphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpOyB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNUSVRMRVxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNDQVJEXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uY2FyZCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG5cbi5jYXJkLTUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7IH1cblxuLmNhcmQtNSAuY2FyZC1oZWFkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZWQ0YzY3O1xuICAtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4OyB9XG5cbi5jYXJkLTUgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDUycHggODVweDtcbiAgcGFkZGluZy1ib3R0b206IDczcHg7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jYXJkLTUgLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4OyB9IH1cblxuLnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7IH1cblxuc2VsZWN0IHtcbiAgd29yZC13cmFwOiBub3JtYWwgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTUgIWltcG9ydGFudDtcbiAgY29sb3I6ICM1NTUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDsgfVxuXG4uaW1hZ2Utd3JhcHBlciBsaSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuXG4uYnJvd3NlLWJ0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmJyb3dzZS1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7IH1cblxuLnByb2R1Y3QtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjVweDsgfVxuXG5hLmRlbGV0ZS1idG4ge1xuICBjb2xvcjogI2YwMDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbiNjYW1lcmFJbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAzOyB9XG5cbi5lcnJvciB7XG4gIGNvbG9yOiAjZmYwMDAwOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/sell/sell.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/sell/sell.component.ts ***!
  \**********************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sell_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sell.service */ "./src/app/pages/sell/sell.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SellComponent = /** @class */ (function () {
    function SellComponent(formbulider, SellService, http, router) {
        this.formbulider = formbulider;
        this.SellService = SellService;
        this.http = http;
        this.router = router;
        this.model = {};
        this.user = [];
        this.rows = [];
        this.data = false;
        this.urls = [];
        this.selectedFile = null;
    }
    SellComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productform = this.formbulider.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            category_id: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            more_details: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            brand_id: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            product_condition: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            image: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            seller_id: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.SellService.CategoryByID().subscribe(function (data) {
            //Done
            var dbData = [];
            dbData = data;
            console.log("test", dbData);
            _this.results = dbData.rows.filter(function (item) {
                return item.parent_id != 0;
            });
        });
    };
    SellComponent.prototype.getbrands = function () {
        var _this = this;
        var junkData = this.productform.value;
        this.SellService.getAllBrands().subscribe(function (data) {
            console.log("changedata", data);
            var dbData = [];
            dbData = data;
            var cateID = junkData.category_id;
            console.log(cateID);
            _this.resultsBrand = dbData.brands.filter(function (item) {
                return item.category_id == cateID;
            });
            console.log("Selected Brand", _this.resultsBrand);
        });
    };
    SellComponent.prototype.Product = function () {
        var userdata = this.productform.value;
        console.log(userdata);
        var DBForm = { userdata: userdata, status: 3 };
        this.productform.reset();
        var pdata = {
            name: DBForm.userdata.name,
            slug: DBForm.userdata.name + DBForm.userdata.price,
            description: DBForm.userdata.description,
            price: DBForm.userdata.price,
            seller_id: localStorage.getItem("matrikel_number"),
            more_details: DBForm.userdata.more_details,
            status: 3,
            category_id: DBForm.userdata.category_id,
            brand_id: DBForm.userdata.brand_id,
            product_condition: DBForm.userdata.product_condition,
            image: localStorage.getItem("image"),
            created_date: Date,
            modified_date: Date
        };
        console.log("Post Data:", pdata.image);
        this.postNewAd(pdata);
    };
    SellComponent.prototype.postNewAd = function (userData) {
        var _this = this;
        var jsonData = JSON.stringify(userData);
        console.log("JSON", jsonData);
        this.SellService.postAd(jsonData).subscribe(function (data) {
            if (localStorage.getItem('image') === null) {
                alert("Please upload an image!");
            }
            else if (data.status = "sucessfull") {
                alert("Success");
                _this.router.navigateByUrl('/pages/order-success');
            }
            else {
                alert("There came an error, please try again!");
            }
        });
        return sessionStorage.getItem(this.model.matrikel_number);
    };
    SellComponent.prototype.myFunction = function () {
        var user = localStorage.getItem("matrikel_number");
        console.log(user);
    };
    SellComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
    };
    SellComponent.prototype.onUpload = function () {
        var fd = new FormData();
        fd.append("image", this.selectedFile, this.selectedFile.name);
        this.http
            .post("https://api.imgbb.com/1/upload?key=71754c0e6a4068fb0f4ea41370a58bb2", fd, {
            reportProgress: true,
            observe: "events"
        })
            .subscribe((function (event) {
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                console.log("Upload Progess:" +
                    Math.round((event.loaded / event.total) * 100) +
                    "%");
            }
            else if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                var a = (JSON.parse(JSON.stringify(event.body)).data);
                a = localStorage.setItem("image", a.url);
                alert("Image Upload Successful, please post your product");
            }
            console.log(event);
        }));
    };
    SellComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _sell_service__WEBPACK_IMPORTED_MODULE_4__["SellService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-sell",
            template: __webpack_require__(/*! raw-loader!./sell.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sell/sell.component.html"),
            styles: [__webpack_require__(/*! ./sell.component.scss */ "./src/app/pages/sell/sell.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _sell_service__WEBPACK_IMPORTED_MODULE_4__["SellService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SellComponent);
    return SellComponent;
}());



/***/ }),

/***/ "./src/app/pages/sell/sell.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/sell/sell.service.ts ***!
  \********************************************/
/*! exports provided: SellService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellService", function() { return SellService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SellService = /** @class */ (function () {
    function SellService(http) {
        this.http = http;
        this.Url = "http://localhost:3000/api/v1/category/";
        this.serverUrl = "http://localhost:3000/api/v1/product/";
        this.brandUrl = "http://localhost:3000/api/v1/brand/";
        var headerSettings = {};
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerSettings);
    }
    SellService.prototype.CategoryByID = function () {
        return this.http.get(this.Url);
    };
    SellService.prototype.getAllBrands = function () {
        return this.http.get(this.brandUrl);
    };
    SellService.prototype.postAd = function (sell) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
        return this.http.post(this.serverUrl + "add/", sell, httpOptions);
    };
    SellService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SellService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SellService);
    return SellService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map