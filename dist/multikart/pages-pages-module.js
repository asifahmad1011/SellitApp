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

module.exports = ".container {\n  max-width: 1170px;\n  margin: auto; }\n\nimg {\n  max-width: 100%; }\n\n.inbox_people {\n  background: white none repeat scroll 0 0;\n  float: left;\n  overflow: hidden;\n  width: 40%;\n  border-right: 4px solid #ffffff; }\n\n.inbox_msg {\n  border: 1px solid white;\n  clear: both;\n  overflow: hidden; }\n\n.top_spac {\n  margin: 20px 0 0; }\n\n.recent_heading {\n  float: left;\n  width: 40%; }\n\n.srch_bar {\n  display: inline-block;\n  text-align: right;\n  width: 60%; }\n\n.recent_heading h4 {\n  color: #05728f;\n  font-size: 21px;\n  margin: auto; }\n\n.srch_bar input {\n  border: 1px solid #cdcdcd;\n  border-width: 0 0 1px 0;\n  width: 80%;\n  padding: 2px 0 4px 6px;\n  background: none; }\n\n.srch_bar .input-group-addon button {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  padding: 0;\n  color: #707070;\n  font-size: 18px; }\n\n.srch_bar .input-group-addon {\n  margin: 0 0 0 -27px; }\n\n.chat_ib h5 {\n  font-size: 15px;\n  color: #464646;\n  margin: 0 0 8px 0; }\n\n.chat_ib h5 span {\n  font-size: 13px;\n  float: right; }\n\n.chat_ib p {\n  font-size: 14px;\n  color: #989898;\n  margin: auto; }\n\n.chat_img {\n  float: left;\n  width: 11%; }\n\n.chat_ib {\n  float: left;\n  padding: 0 0 0 15px;\n  width: 88%; }\n\n.chat_people {\n  overflow: hidden;\n  clear: both; }\n\n.chat_list {\n  border-bottom: 1px solid #c4c4c4;\n  margin: 0;\n  padding: 18px 16px 10px; }\n\n.inbox_chat {\n  height: 550px;\n  overflow-y: scroll; }\n\n.active_chat {\n  background: #ebebeb; }\n\n.incoming_msg_img {\n  display: inline-block;\n  width: 6%; }\n\n.received_msg {\n  display: inline-block;\n  padding: 0 0 0 10px;\n  vertical-align: top;\n  width: 92%; }\n\n.received_withd_msg p {\n  background: #ebebeb none repeat scroll 0 0;\n  border-radius: 3px;\n  color: #646464;\n  font-size: 14px;\n  margin: 0;\n  padding: 5px 10px 5px 12px;\n  width: 100%; }\n\n.time_date {\n  color: #747474;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 0; }\n\n.received_withd_msg {\n  width: 57%; }\n\n.mesgs {\n  float: left;\n  padding: 30px 15px 0 25px;\n  width: 60%; }\n\n.sent_msg p {\n  background: #05728f none repeat scroll 0 0;\n  border-radius: 3px;\n  font-size: 14px;\n  margin: 0;\n  color: #fff;\n  padding: 5px 10px 5px 12px;\n  width: 100%; }\n\n.outgoing_msg {\n  overflow: hidden;\n  margin: 26px 0 26px; }\n\n.sent_msg {\n  float: right;\n  width: 46%; }\n\n.input_msg_write input {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  color: #4c4c4c;\n  font-size: 15px;\n  min-height: 48px;\n  width: 100%; }\n\n.type_msg {\n  border-top: 1px solid #c4c4c4;\n  position: relative; }\n\n.msg_send_btn {\n  background: #05728f none repeat scroll 0 0;\n  border: medium none;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  font-size: 17px;\n  height: 33px;\n  position: absolute;\n  right: 0;\n  top: 11px;\n  width: 33px; }\n\n.messaging {\n  padding: 0 0 50px 0; }\n\n.msg_history {\n  height: 516px;\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQ2hhdC9EOlxcR0RTRGZpbmFsXFxzZWxsSXRBcHAvc3JjXFxhcHBcXHBhZ2VzXFxDaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsaUJBQWdCO0VBQUUsWUFBVyxFQUFBOztBQUN4QztFQUFLLGVBQWMsRUFBQTs7QUFDbkI7RUFDRSx3Q0FBdUM7RUFDdkMsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixVQUFVO0VBQUUsK0JBQThCLEVBQUE7O0FBRTVDO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFBVyxnQkFBZ0IsRUFBQTs7QUFHM0I7RUFBaUIsV0FBVztFQUFFLFVBQVMsRUFBQTs7QUFDdkM7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFVBQVUsRUFBQTs7QUFTWjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUVkO0VBQWlCLHlCQUF3QjtFQUFFLHVCQUFzQjtFQUFFLFVBQVM7RUFBRSxzQkFBcUI7RUFBRSxnQkFBZSxFQUFBOztBQUNwSDtFQUNFLG1EQUFtRDtFQUNuRCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRWpCO0VBQStCLG1CQUFtQixFQUFBOztBQUVsRDtFQUFhLGVBQWM7RUFBRSxjQUFhO0VBQUUsaUJBQWdCLEVBQUE7O0FBQzVEO0VBQWtCLGVBQWM7RUFBRSxZQUFXLEVBQUE7O0FBQzdDO0VBQVksZUFBYztFQUFFLGNBQWE7RUFBRSxZQUFXLEVBQUE7O0FBQ3REO0VBQ0UsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFFWjtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQUdaO0VBQWMsZ0JBQWU7RUFBRSxXQUFVLEVBQUE7O0FBQ3pDO0VBQ0UsZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCx1QkFBdUIsRUFBQTs7QUFFekI7RUFBYyxhQUFhO0VBQUUsa0JBQWtCLEVBQUE7O0FBRS9DO0VBQWMsbUJBQWtCLEVBQUE7O0FBRWhDO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVMsRUFBQTs7QUFFWDtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTs7QUFFWDtFQUNDLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFakI7RUFBc0IsVUFBVSxFQUFBOztBQUNoQztFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsVUFBVSxFQUFBOztBQUdYO0VBQ0MsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsU0FBUztFQUFFLFdBQVU7RUFDckIsMEJBQTBCO0VBQzFCLFdBQVUsRUFBQTs7QUFFWjtFQUFlLGdCQUFlO0VBQUUsbUJBQWtCLEVBQUE7O0FBQ2xEO0VBQ0UsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFFWjtFQUNFLG1EQUFtRDtFQUNuRCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQVcsNkJBQTZCO0VBQUMsa0JBQWtCLEVBQUE7O0FBQzNEO0VBQ0UsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVcsRUFBQTs7QUFFYjtFQUFhLG1CQUFtQixFQUFBOztBQUNoQztFQUNFLGFBQWE7RUFDYixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7bWF4LXdpZHRoOjExNzBweDsgbWFyZ2luOmF1dG87fVxyXG5pbWd7IG1heC13aWR0aDoxMDAlO31cclxuLmluYm94X3Blb3BsZSB7XHJcbiAgYmFja2dyb3VuZDp3aGl0ZSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDQwJTsgYm9yZGVyLXJpZ2h0OjRweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcbi5pbmJveF9tc2cge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnRvcF9zcGFjeyBtYXJnaW46IDIwcHggMCAwO31cclxuXHJcblxyXG4ucmVjZW50X2hlYWRpbmcge2Zsb2F0OiBsZWZ0OyB3aWR0aDo0MCU7fVxyXG4uc3JjaF9iYXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogNjAlOyBcclxufVxyXG5cclxuLy8gLmhlYWRpbmRfc3JjaHsgXHJcbi8vICAgcGFkZGluZzogMTBweCAyOXB4IDEwcHggMjBweDsgXHJcbi8vICAgb3ZlcmZsb3c6aGlkZGVuOyBcclxuLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcclxuLy8gfSBcclxuXHJcbi5yZWNlbnRfaGVhZGluZyBoNCB7XHJcbiAgY29sb3I6ICMwNTcyOGY7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uc3JjaF9iYXIgaW5wdXR7IGJvcmRlcjoxcHggc29saWQgI2NkY2RjZDsgYm9yZGVyLXdpZHRoOjAgMCAxcHggMDsgd2lkdGg6ODAlOyBwYWRkaW5nOjJweCAwIDRweCA2cHg7IGJhY2tncm91bmQ6bm9uZTt9XHJcbi5zcmNoX2JhciAuaW5wdXQtZ3JvdXAtYWRkb24gYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIHsgbWFyZ2luOiAwIDAgMCAtMjdweDt9XHJcblxyXG4uY2hhdF9pYiBoNXsgZm9udC1zaXplOjE1cHg7IGNvbG9yOiM0NjQ2NDY7IG1hcmdpbjowIDAgOHB4IDA7fVxyXG4uY2hhdF9pYiBoNSBzcGFueyBmb250LXNpemU6MTNweDsgZmxvYXQ6cmlnaHQ7fVxyXG4uY2hhdF9pYiBweyBmb250LXNpemU6MTRweDsgY29sb3I6Izk4OTg5ODsgbWFyZ2luOmF1dG99XHJcbi5jaGF0X2ltZyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDExJTtcclxufVxyXG4uY2hhdF9pYiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMCAwIDAgMTVweDtcclxuICB3aWR0aDogODglO1xyXG59XHJcblxyXG4uY2hhdF9wZW9wbGV7IG92ZXJmbG93OmhpZGRlbjsgY2xlYXI6Ym90aDt9XHJcbi5jaGF0X2xpc3Qge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxOHB4IDE2cHggMTBweDtcclxufVxyXG4uaW5ib3hfY2hhdCB7IGhlaWdodDogNTUwcHg7IG92ZXJmbG93LXk6IHNjcm9sbDt9XHJcblxyXG4uYWN0aXZlX2NoYXR7IGJhY2tncm91bmQ6I2ViZWJlYjt9XHJcblxyXG4uaW5jb21pbmdfbXNnX2ltZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2JTtcclxufVxyXG4ucmVjZWl2ZWRfbXNnIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAwIDAgMTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHdpZHRoOiA5MiU7XHJcbiB9XHJcbiAucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xyXG4gIGJhY2tncm91bmQ6ICNlYmViZWIgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY29sb3I6ICM2NDY0NjQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udGltZV9kYXRlIHtcclxuICBjb2xvcjogIzc0NzQ3NDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiA4cHggMCAwO1xyXG59XHJcbi5yZWNlaXZlZF93aXRoZF9tc2cgeyB3aWR0aDogNTclO31cclxuLm1lc2dzIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAzMHB4IDE1cHggMCAyNXB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbiAuc2VudF9tc2cgcCB7XHJcbiAgYmFja2dyb3VuZDogIzA1NzI4ZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwOyBjb2xvcjojZmZmO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLm91dGdvaW5nX21zZ3sgb3ZlcmZsb3c6aGlkZGVuOyBtYXJnaW46MjZweCAwIDI2cHg7fVxyXG4uc2VudF9tc2cge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogNDYlO1xyXG59XHJcbi5pbnB1dF9tc2dfd3JpdGUgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG4gIGNvbG9yOiAjNGM0YzRjO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udHlwZV9tc2cge2JvcmRlci10b3A6IDFweCBzb2xpZCAjYzRjNGM0O3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5tc2dfc2VuZF9idG4ge1xyXG4gIGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGhlaWdodDogMzNweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAxMXB4O1xyXG4gIHdpZHRoOiAzM3B4O1xyXG59XHJcbi5tZXNzYWdpbmcgeyBwYWRkaW5nOiAwIDAgNTBweCAwO31cclxuLm1zZ19oaXN0b3J5IHtcclxuICBoZWlnaHQ6IDUxNnB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn0iXX0= */"

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
        this.Url = "http://3.134.103.215:3000/api/v1/chat/";
        this.Url1 = "http://3.134.103.215:3000/api/v1/chat/sendMessage/";
        this.serverUrl = "http://3.134.103.215:3000/api/v1/chat/getAllMessages/";
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

module.exports = ".card-body {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n  width: 80% !important; }\n\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n  width: 100% !important;\n  height: 280px !important; }\n\n.myOwnBg {\n  background-color: yellow; }\n\n@media (min-width: 576px) {\n  .card-columns .card {\n    display: inline-block;\n    width: 80% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0Q6XFxHRFNEZmluYWxcXHNlbGxJdEFwcC9zcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSwyQ0FBMkM7RUFDM0MsNENBQTRDO0VBQzVDLHNCQUFzQjtFQUN0Qix3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx3QkFBd0IsRUFBQTs7QUFHM0I7RUFDRDtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUIsRUFBQSxFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib2R5IHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKDAuMjVyZW0gLSAxcHgpO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGNhbGMoMC4yNXJlbSAtIDFweCk7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyODBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXlPd25CZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiB9XHJcblxyXG4gQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbi5jYXJkLWNvbHVtbnMgLmNhcmQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG59XHJcbn0iXX0= */"

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
        this.url = "http://3.134.103.215:3000/product/changeProductStatus/";
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
        this.UrlStatus = "http://3.134.103.215:3000/api/v1/product/changeProductStatus";
        this.Url = "http://3.134.103.215:3000/api/v1/product/userproduct/";
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
        this.baseUrl = "http://3.134.103.215:3000/api/v1/";
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
        this.Url = "http://3.134.103.215:3000/api/v1/product/recentproduct/";
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
        this.Url = "http://3.134.103.215:3000/api/v1/";
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
        this.baseUrl = "http://3.134.103.215:3000/api/v1/product/";
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

module.exports = "/* ==========================================================================\r\n   #FONT\r\n   ========================================================================== */\n.font-robo {\n  font-family: \"Roboto\", \"Arial\", \"Helvetica Neue\", sans-serif; }\n.font-poppins {\n  font-family: \"Poppins\", \"Arial\", \"Helvetica Neue\", sans-serif; }\n.font-opensans {\n  font-family: \"Open Sans\", \"Arial\", \"Helvetica Neue\", sans-serif; }\n/* ==========================================================================\r\n\t #GRID\r\n\t ========================================================================== */\n.row {\n  display: flex;\n  flex-wrap: wrap; }\n.row .col-2:last-child .input-group-desc {\n  margin-bottom: 0; }\n.row-space {\n  justify-content: space-between; }\n.row-refine {\n  margin: 0 -15px; }\n.row-refine .col-3 .input-group-desc,\n.row-refine .col-9 .input-group-desc {\n  margin-bottom: 0; }\n.col-2 {\n  width: calc((100% - 30px) / 2); }\n@media (max-width: 767px) {\n  .col-2 {\n    width: 100%; } }\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 40px; }\n.form-row .name {\n  width: 125px;\n  color: #555;\n  font-size: 15px;\n  font-weight: 700; }\n.form-row .value {\n  width: calc(100% - 125px); }\n@media (max-width: 767px) {\n  .form-row {\n    display: block; }\n  .form-row .name,\n  .form-row .value {\n    display: block;\n    width: 100%; }\n  .form-row .name {\n    margin-bottom: 7px; } }\n.col-3,\n.col-9 {\n  padding: 0 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px; }\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n@media (max-width: 767px) {\n  .col-3 {\n    flex: 0 0 35%;\n    max-width: 35%; } }\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n@media (max-width: 767px) {\n  .col-9 {\n    flex: 0 0 65%;\n    max-width: 65%; } }\n/* ==========================================================================\r\n\t #BOX-SIZING\r\n\t ========================================================================== */\n/**\r\n   * More sensible default box-sizing:\r\n   * css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice\r\n   */\nhtml {\n  box-sizing: border-box; }\n* {\n  padding: 0;\n  margin: 0; }\n*, *:before, *:after {\n  box-sizing: inherit; }\n/* ==========================================================================\r\n\t #RESET\r\n\t ========================================================================== */\n/**\r\n   * A very simple reset that sits on top of Normalize.css.\r\n   */\nbody,\nh1, h2, h3, h4, h5, h6,\nblockquote, p, pre,\ndl, dd, ol, ul,\nfigure,\nhr,\nfieldset, legend {\n  margin: 0;\n  padding: 0; }\n/**\r\n   * Remove trailing margins from nested lists.\r\n   */\nli > ol,\nli > ul {\n  margin-bottom: 0; }\n/**\r\n   * Remove default table spacing.\r\n   */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n/**\r\n   * 1. Reset Chrome and Firefox behaviour which sets a `min-width: min-content;`\r\n   *    on fieldsets.\r\n   */\nfieldset {\n  min-width: 0;\n  /* [1] */\n  border: 0; }\nbutton {\n  outline: none;\n  background: none;\n  border: none; }\n/* ==========================================================================\r\n\t #PAGE WRAPPER\r\n\t ========================================================================== */\n.page-wrapper {\n  min-height: 100vh; }\nbody {\n  font-family: \"Open Sans\", \"Arial\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  font-size: 14px; }\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400; }\nh1 {\n  font-size: 36px; }\nh2 {\n  font-size: 30px; }\nh3 {\n  font-size: 24px; }\nh4 {\n  font-size: 18px; }\nh5 {\n  font-size: 15px; }\nh6 {\n  font-size: 13px; }\n/* ==========================================================================\r\n\t #BACKGROUND\r\n\t ========================================================================== */\n/* ==========================================================================\r\n\t #SPACING\r\n\t ========================================================================== */\n.p-t-100 {\n  padding-top: 100px; }\n.p-t-130 {\n  padding-top: 130px; }\n.p-t-180 {\n  padding-top: 180px; }\n.p-t-45 {\n  padding-top: 45px; }\n.p-t-20 {\n  padding-top: 20px; }\n.p-t-15 {\n  padding-top: 15px; }\n.p-t-10 {\n  padding-top: 10px; }\n.p-t-30 {\n  padding-top: 30px; }\n.p-b-100 {\n  padding-bottom: 100px; }\n.p-b-50 {\n  padding-bottom: 50px; }\n.m-r-45 {\n  margin-right: 45px; }\n.m-r-55 {\n  margin-right: 55px; }\n.m-b-55 {\n  margin-bottom: 55px; }\n/* ==========================================================================\r\n\t #WRAPPER\r\n\t ========================================================================== */\n.wrapper {\n  margin: 0 auto; }\n.wrapper--w960 {\n  max-width: 960px; }\n.wrapper--w790 {\n  max-width: 790px; }\n.wrapper--w780 {\n  max-width: 780px; }\n.wrapper--w680 {\n  max-width: 680px; }\n/* ==========================================================================\r\n\t #BUTTON\r\n\t ========================================================================== */\n.btn {\n  display: inline-block;\n  line-height: 50px;\n  padding: 0 50px;\n  transition: all 0.4s ease;\n  cursor: pointer;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #fff;\n  font-family: inherit; }\n.btn--radius {\n  border-radius: 3px; }\n.btn--radius-2 {\n  border-radius: 5px; }\n.btn--pill {\n  border-radius: 20px; }\n.btn--green {\n  background: #57b846; }\n.btn--green:hover {\n  background: #4dae3c; }\n.btn--blue {\n  background: #4272d7; }\n.btn--blue:hover {\n  background: #3868cd; }\n.btn--red {\n  background: #ff4b5a; }\n.btn--red:hover {\n  background: #eb3746; }\n/* ==========================================================================\r\n\t #DATE PICKER\r\n\t ========================================================================== */\ntd.active {\n  background-color: #2c6ed5; }\ninput[type=\"date\" i] {\n  padding: 14px; }\n.table-condensed td, .table-condensed th {\n  font-size: 14px;\n  font-family: \"Roboto\", \"Arial\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400; }\n.daterangepicker td {\n  width: 40px;\n  height: 30px; }\n.daterangepicker {\n  border: none;\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\n  display: none;\n  border: 1px solid #e0e0e0;\n  margin-top: 5px; }\n.daterangepicker::after, .daterangepicker::before {\n  display: none; }\n.daterangepicker thead tr th {\n  padding: 10px 0; }\n.daterangepicker .table-condensed th select {\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-size: 14px;\n  padding: 5px;\n  outline: none; }\n/* ==========================================================================\r\n\t #FORM\r\n\t ========================================================================== */\ninput {\n  outline: none;\n  margin: 0;\n  border: none;\n  box-shadow: none;\n  width: 100%;\n  font-size: 14px;\n  font-family: inherit; }\n.radio-container {\n  display: inline-block;\n  position: relative;\n  padding-left: 30px;\n  cursor: pointer;\n  font-size: 16px;\n  color: #666;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n.radio-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer; }\n.radio-container input:checked ~ .checkmark {\n  background-color: #e5e5e5; }\n.radio-container input:checked ~ .checkmark:after {\n  display: block; }\n.radio-container .checkmark:after {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #57b846; }\n.checkmark {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #e5e5e5;\n  border-radius: 50%;\n  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08); }\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n.input--style-5 {\n  background: #e5e5e5;\n  line-height: 50px;\n  border-radius: 5px;\n  padding: 0 22px;\n  font-size: 16px;\n  color: #555; }\n.input-group-desc {\n  position: relative; }\n@media (max-width: 767px) {\n  .input-group-desc {\n    margin-bottom: 40px; } }\n.input-group {\n  position: relative;\n  margin: 0; }\n.label {\n  color: #555;\n  font-size: 15px;\n  font-weight: 700; }\n.label--block {\n  width: 100%; }\n.label--desc {\n  position: absolute;\n  text-transform: capitalize;\n  display: block;\n  color: #999;\n  font-size: 14px;\n  margin: 0;\n  margin-top: 7px;\n  left: 0; }\n/* ==========================================================================\r\n\t #SELECT2\r\n\t ========================================================================== */\n.select--no-search .select2-search {\n  display: none !important; }\n.select2-container--open .select2-dropdown--below {\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);\n  border: 1px solid #e0e0e0;\n  margin-top: 5px;\n  overflow: hidden; }\n.select2-container--default .select2-results__option {\n  padding-left: 22px; }\n.rs-select2 .select2-container {\n  width: 100% !important;\n  outline: none;\n  background: #e5e5e5;\n  border-radius: 5px; }\n.rs-select2 .select2-container .select2-selection--single {\n  outline: none;\n  border: none;\n  height: 50px;\n  background: transparent; }\n.rs-select2 .select2-container .select2-selection--single .select2-selection__rendered {\n  line-height: 50px;\n  padding-left: 0;\n  color: #555;\n  font-size: 16px;\n  font-family: inherit;\n  padding-left: 22px;\n  padding-right: 50px; }\n.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow {\n  height: 50px;\n  right: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow b {\n  display: none; }\n.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow:after {\n  font-family: \"Material-Design-Iconic-Font\";\n  content: '\\f2f9';\n  font-size: 24px;\n  color: #999;\n  transition: all 0.4s ease; }\n.rs-select2 .select2-container.select2-container--open .select2-selection--single .select2-selection__arrow::after {\n  -webkit-transform: rotate(-180deg);\n  transform: rotate(-180deg); }\n/* ==========================================================================\r\n\t #TITLE\r\n\t ========================================================================== */\n.title {\n  font-size: 24px;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-align: center;\n  color: #fff; }\n/* ==========================================================================\r\n\t #CARD\r\n\t ========================================================================== */\n.card {\n  border-radius: 3px;\n  background: #fff; }\n.card-5 {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15); }\n.card-5 .card-heading {\n  padding: 20px 0;\n  background: #ed4c67;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px; }\n.card-5 .card-body {\n  padding: 52px 85px;\n  padding-bottom: 73px; }\n@media (max-width: 767px) {\n  .card-5 .card-body {\n    padding: 40px 30px;\n    padding-bottom: 50px; } }\n.placeholder {\n  font-size: small !important;\n  font-weight: 100 !important; }\nselect {\n  word-wrap: normal !important;\n  height: 44px !important;\n  background-color: #e5e5e5 !important;\n  color: #555 !important;\n  font-weight: 700 !important;\n  border: 0px !important;\n  border-radius: 6px !important; }\n.image-wrapper li {\n  width: 150px;\n  height: 150px;\n  margin: 10px;\n  float: left;\n  border: 1px solid #ccc;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  cursor: default;\n  background: #fff;\n  margin-bottom: 25px; }\n.browse-btn {\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 0.5rem;\n  position: relative;\n  width: 150px;\n  height: 150px;\n  border: 1px solid #ccc;\n  text-align: center; }\n.browse-image {\n  position: relative;\n  top: 25%; }\n.product-image {\n  width: 100%;\n  height: 125px; }\na.delete-btn {\n  color: #f00;\n  cursor: pointer; }\n#cameraImg {\n  cursor: pointer;\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 3; }\n.error {\n  color: #ff0000; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsbC9EOlxcR0RTRGZpbmFsXFxzZWxsSXRBcHAvc3JjXFxhcHBcXHBhZ2VzXFxzZWxsXFxzZWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWxsL3NlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OytFQ0MrRTtBREU1RTtFQUNGLDREQUE0RCxFQUFBO0FBRzNEO0VBQ0QsNkRBQTZELEVBQUE7QUFHNUQ7RUFDRCwrREFBK0QsRUFBQTtBQUc5RDs7OEVDRjRFO0FESzVFO0VBS0QsYUFBYTtFQUdiLGVBQWUsRUFBQTtBQUdkO0VBQ0QsZ0JBQWdCLEVBQUE7QUFHZjtFQUtELDhCQUE4QixFQUFBO0FBRzdCO0VBQ0QsZUFBZSxFQUFBO0FBR2Q7O0VBRUQsZ0JBQWdCLEVBQUE7QUFHZjtFQUdELDhCQUE4QixFQUFBO0FBRzdCO0VBQ0Q7SUFDRSxXQUFXLEVBQUEsRUFDWjtBQUdBO0VBS0QsYUFBYTtFQUdiLGVBQWU7RUFLZixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7QUFHbEI7RUFDRCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtBQUdmO0VBR0QseUJBQXlCLEVBQUE7QUFHeEI7RUFDRDtJQUNFLGNBQWMsRUFBQTtFQUVoQjs7SUFFRSxjQUFjO0lBQ2QsV0FBVyxFQUFBO0VBRWI7SUFDRSxrQkFBa0IsRUFBQSxFQUNuQjtBQUdBOztFQUVELGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWUsRUFBQTtBQUdkO0VBS0QsYUFBYTtFQUNiLGNBQWMsRUFBQTtBQUdiO0VBQ0Q7SUFLRSxhQUFhO0lBQ2IsY0FBYyxFQUFBLEVBQ2Y7QUFHQTtFQUtELGFBQWE7RUFDYixjQUFjLEVBQUE7QUFHYjtFQUNEO0lBS0UsYUFBYTtJQUNiLGNBQWMsRUFBQSxFQUNmO0FBR0E7OzhFQ3hCNEU7QUQyQjVFOzs7SUN2QkU7QUQyQkY7RUFHRCxzQkFBc0IsRUFBQTtBQUdyQjtFQUNELFVBQVU7RUFDVixTQUFTLEVBQUE7QUFHUjtFQUdELG1CQUFtQixFQUFBO0FBR2xCOzs4RUMzQjRFO0FEOEI1RTs7SUMzQkU7QUQ4QkY7Ozs7Ozs7RUFPRCxTQUFTO0VBQ1QsVUFBVSxFQUFBO0FBR1Q7O0lDNUJFO0FEK0JGOztFQUVELGdCQUFnQixFQUFBO0FBR2Y7O0lDN0JFO0FEZ0NGO0VBQ0QseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBO0FBR2hCOzs7SUM3QkU7QURpQ0Y7RUFDRCxZQUFZO0VBQ1osUUFBQTtFQUNBLFNBQVMsRUFBQTtBQUdSO0VBQ0QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7QUFHWDs7OEVDaEM0RTtBRG1DNUU7RUFDRCxpQkFBaUIsRUFBQTtBQUdoQjtFQUNELCtEQUErRDtFQUMvRCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0FBR2Q7RUFDRCxnQkFBZ0IsRUFBQTtBQUdmO0VBQ0QsZUFBZSxFQUFBO0FBR2Q7RUFDRCxlQUFlLEVBQUE7QUFHZDtFQUNELGVBQWUsRUFBQTtBQUdkO0VBQ0QsZUFBZSxFQUFBO0FBR2Q7RUFDRCxlQUFlLEVBQUE7QUFHZDtFQUNELGVBQWUsRUFBQTtBQUdkOzs4RUN6QzRFO0FEOEM1RTs7OEVDM0M0RTtBRDhDNUU7RUFDRCxrQkFBa0IsRUFBQTtBQUdqQjtFQUNELGtCQUFrQixFQUFBO0FBR2pCO0VBQ0Qsa0JBQWtCLEVBQUE7QUFHakI7RUFDRCxpQkFBaUIsRUFBQTtBQUdoQjtFQUNELGlCQUFpQixFQUFBO0FBR2hCO0VBQ0QsaUJBQWlCLEVBQUE7QUFHaEI7RUFDRCxpQkFBaUIsRUFBQTtBQUdoQjtFQUNELGlCQUFpQixFQUFBO0FBR2hCO0VBQ0QscUJBQXFCLEVBQUE7QUFHcEI7RUFDRCxvQkFBb0IsRUFBQTtBQUduQjtFQUNELGtCQUFrQixFQUFBO0FBR2pCO0VBQ0Qsa0JBQWtCLEVBQUE7QUFHakI7RUFDRCxtQkFBbUIsRUFBQTtBQUdsQjs7OEVDeEQ0RTtBRDJENUU7RUFDRCxjQUFjLEVBQUE7QUFHYjtFQUNELGdCQUFnQixFQUFBO0FBR2Y7RUFDRCxnQkFBZ0IsRUFBQTtBQUdmO0VBQ0QsZ0JBQWdCLEVBQUE7QUFHZjtFQUNELGdCQUFnQixFQUFBO0FBR2Y7OzhFQzdENEU7QURnRTVFO0VBQ0QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0VBSWYseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsb0JBQW9CLEVBQUE7QUFHbkI7RUFHRCxrQkFBa0IsRUFBQTtBQUdqQjtFQUdELGtCQUFrQixFQUFBO0FBR2pCO0VBR0QsbUJBQW1CLEVBQUE7QUFHbEI7RUFDRCxtQkFBbUIsRUFBQTtBQUdsQjtFQUNELG1CQUFtQixFQUFBO0FBR2xCO0VBQ0QsbUJBQW1CLEVBQUE7QUFHbEI7RUFDRCxtQkFBbUIsRUFBQTtBQUdsQjtFQUNELG1CQUFtQixFQUFBO0FBR2xCO0VBQ0QsbUJBQW1CLEVBQUE7QUFHbEI7OzhFQ3ZFNEU7QUQwRTVFO0VBQ0QseUJBQXlCLEVBQUE7QUFHeEI7RUFDRCxhQUFhLEVBQUE7QUFHWjtFQUNELGVBQWU7RUFDZiw0REFBNEQ7RUFDNUQsZ0JBQWdCLEVBQUE7QUFHZjtFQUNELFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFHWDtFQUNELFlBQVk7RUFHWixnREFBZ0Q7RUFDaEQsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7QUFHZDtFQUNELGFBQWEsRUFBQTtBQUdaO0VBQ0QsZUFBZSxFQUFBO0FBR2Q7RUFDRCxzQkFBc0I7RUFHdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYSxFQUFBO0FBR1o7OzhFQy9FNEU7QURrRjVFO0VBQ0QsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0VBR1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CLEVBQUE7QUFHbkI7RUFDRCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTtBQUdoQjtFQUNELGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZSxFQUFBO0FBR2Q7RUFDRCx5QkFBeUIsRUFBQTtBQUd4QjtFQUNELGNBQWMsRUFBQTtBQUdiO0VBQ0QsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBd0M7RUFJeEMsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxZQUFZO0VBR1osa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0FBR2xCO0VBQ0Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixtQ0FBbUM7RUFJbkMsMkJBQTJCO0VBQzNCLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUd6QixrQkFBa0I7RUFHbEIscURBQXFELEVBQUE7QUFHcEQ7RUFDRCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTtBQUdaO0VBQ0QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUdqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXLEVBQUE7QUFHVjtFQUNELGtCQUFrQixFQUFBO0FBR2pCO0VBQ0Q7SUFDRSxtQkFBbUIsRUFBQSxFQUNwQjtBQUdBO0VBQ0Qsa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTtBQUdSO0VBQ0QsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtBQUdmO0VBQ0QsV0FBVyxFQUFBO0FBR1Y7RUFDRCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLFNBQVM7RUFDVCxlQUFlO0VBQ2YsT0FBTyxFQUFBO0FBR047OzhFQy9GNEU7QURrRzVFO0VBQ0Qsd0JBQXdCLEVBQUE7QUFHdkI7RUFDRCxZQUFZO0VBR1osa0JBQWtCO0VBR2xCLGdEQUFnRDtFQUNoRCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0FBR2Y7RUFDRCxrQkFBa0IsRUFBQTtBQUdqQjtFQUNELHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBR25CLGtCQUFrQixFQUFBO0FBR2pCO0VBQ0QsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCLEVBQUE7QUFHdEI7RUFDRCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtBQUdsQjtFQUNELFlBQVk7RUFDWixXQUFXO0VBS1gsYUFBYTtFQUtiLHVCQUF1QjtFQUt2QixtQkFBbUIsRUFBQTtBQUdsQjtFQUNELGFBQWEsRUFBQTtBQUdaO0VBQ0QsMENBQTBDO0VBQzFDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUlYLHlCQUF5QixFQUFBO0FBR3hCO0VBQ0Qsa0NBQWtDO0VBSWxDLDBCQUEwQixFQUFBO0FBR3pCOzs4RUN6RzRFO0FENEc1RTtFQUNELGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7QUFHVjs7OEVDMUc0RTtBRDZHNUU7RUFHRCxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7QUFHZjtFQUNELGdCQUFnQjtFQUdoQixtQkFBbUI7RUFHbkIsZ0RBQWdELEVBQUE7QUFHL0M7RUFDRCxlQUFlO0VBQ2YsbUJBQW1CO0VBR25CLDRCQUE0QjtFQUc1Qiw2QkFBNkIsRUFBQTtBQUc1QjtFQUNELGtCQUFrQjtFQUNsQixvQkFBb0IsRUFBQTtBQUduQjtFQUNEO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQixFQUFBLEVBQ3JCO0FBSUY7RUFDQywyQkFBMkI7RUFDM0IsMkJBQTJCLEVBQUE7QUFFNUI7RUFDSSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDekIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUNuQiw2QkFBNkIsRUFBQTtBQUlqQztFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtBQUV2QjtFQUNJLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTtBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRLEVBQUE7QUFFWjtFQUNJLFdBQVU7RUFDVixhQUFZLEVBQUE7QUFFaEI7RUFDSSxXQUFXO0VBQ1gsZUFBZSxFQUFBO0FBRW5CO0VBQ0ksZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFLO0VBQ0wsU0FBUTtFQUNSLE9BQU07RUFDTixRQUFRO0VBQ1IsVUFBVSxFQUFBO0FBRWQ7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWxsL3NlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgI0ZPTlRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgLmZvbnQtcm9ibyB7XHJcblx0Zm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiQXJpYWxcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuZm9udC1wb3BwaW5zIHtcclxuXHRmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIFwiQXJpYWxcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuZm9udC1vcGVuc2FucyB7XHJcblx0Zm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIFwiQXJpYWxcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjR1JJRFxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIC5yb3cge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG5cdC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICBcclxuICAucm93IC5jb2wtMjpsYXN0LWNoaWxkIC5pbnB1dC1ncm91cC1kZXNjIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICAucm93LXNwYWNlIHtcclxuXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG5cdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XHJcblx0LW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3ctcmVmaW5lIHtcclxuXHRtYXJnaW46IDAgLTE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3ctcmVmaW5lIC5jb2wtMyAuaW5wdXQtZ3JvdXAtZGVzYyxcclxuICAucm93LXJlZmluZSAuY29sLTkgLmlucHV0LWdyb3VwLWRlc2Mge1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtMiB7XHJcblx0d2lkdGg6IC13ZWJraXQtY2FsYygoMTAwJSAtIDMwcHgpIC8gMik7XHJcblx0d2lkdGg6IC1tb3otY2FsYygoMTAwJSAtIDMwcHgpIC8gMik7XHJcblx0d2lkdGg6IGNhbGMoKDEwMCUgLSAzMHB4KSAvIDIpO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHQuY29sLTIge1xyXG5cdCAgd2lkdGg6IDEwMCU7XHJcblx0fVxyXG4gIH1cclxuICBcclxuICAuZm9ybS1yb3cge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG5cdC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcblx0LXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdC1tb3otYm94LWFsaWduOiBjZW50ZXI7XHJcblx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXJvdyAubmFtZSB7XHJcblx0d2lkdGg6IDEyNXB4O1xyXG5cdGNvbG9yOiAjNTU1O1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1yb3cgLnZhbHVlIHtcclxuXHR3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSAxMjVweCk7XHJcblx0d2lkdGg6IC1tb3otY2FsYygxMDAlIC0gMTI1cHgpO1xyXG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAxMjVweCk7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cdC5mb3JtLXJvdyB7XHJcblx0ICBkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblx0LmZvcm0tcm93IC5uYW1lLFxyXG5cdC5mb3JtLXJvdyAudmFsdWUge1xyXG5cdCAgZGlzcGxheTogYmxvY2s7XHJcblx0ICB3aWR0aDogMTAwJTtcclxuXHR9XHJcblx0LmZvcm0tcm93IC5uYW1lIHtcclxuXHQgIG1hcmdpbi1ib3R0b206IDdweDtcclxuXHR9XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtMyxcclxuICAuY29sLTkge1xyXG5cdHBhZGRpbmc6IDAgMTVweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWluLWhlaWdodDogMXB4O1xyXG4gIH1cclxuICBcclxuICAuY29sLTMge1xyXG5cdC13ZWJraXQtYm94LWZsZXg6IDA7XHJcblx0LXdlYmtpdC1mbGV4OiAwIDAgMjUlO1xyXG5cdC1tb3otYm94LWZsZXg6IDA7XHJcblx0LW1zLWZsZXg6IDAgMCAyNSU7XHJcblx0ZmxleDogMCAwIDI1JTtcclxuXHRtYXgtd2lkdGg6IDI1JTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0LmNvbC0zIHtcclxuXHQgIC13ZWJraXQtYm94LWZsZXg6IDA7XHJcblx0ICAtd2Via2l0LWZsZXg6IDAgMCAzNSU7XHJcblx0ICAtbW96LWJveC1mbGV4OiAwO1xyXG5cdCAgLW1zLWZsZXg6IDAgMCAzNSU7XHJcblx0ICBmbGV4OiAwIDAgMzUlO1xyXG5cdCAgbWF4LXdpZHRoOiAzNSU7XHJcblx0fVxyXG4gIH1cclxuICBcclxuICAuY29sLTkge1xyXG5cdC13ZWJraXQtYm94LWZsZXg6IDA7XHJcblx0LXdlYmtpdC1mbGV4OiAwIDAgNzUlO1xyXG5cdC1tb3otYm94LWZsZXg6IDA7XHJcblx0LW1zLWZsZXg6IDAgMCA3NSU7XHJcblx0ZmxleDogMCAwIDc1JTtcclxuXHRtYXgtd2lkdGg6IDc1JTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0LmNvbC05IHtcclxuXHQgIC13ZWJraXQtYm94LWZsZXg6IDA7XHJcblx0ICAtd2Via2l0LWZsZXg6IDAgMCA2NSU7XHJcblx0ICAtbW96LWJveC1mbGV4OiAwO1xyXG5cdCAgLW1zLWZsZXg6IDAgMCA2NSU7XHJcblx0ICBmbGV4OiAwIDAgNjUlO1xyXG5cdCAgbWF4LXdpZHRoOiA2NSU7XHJcblx0fVxyXG4gIH1cclxuICBcclxuICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjQk9YLVNJWklOR1xyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIC8qKlxyXG4gICAqIE1vcmUgc2Vuc2libGUgZGVmYXVsdCBib3gtc2l6aW5nOlxyXG4gICAqIGNzcy10cmlja3MuY29tL2luaGVyaXRpbmctYm94LXNpemluZy1wcm9iYWJseS1zbGlnaHRseS1iZXR0ZXItYmVzdC1wcmFjdGljZVxyXG4gICAqL1xyXG4gIGh0bWwge1xyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgKiB7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuXHQtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xyXG5cdGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNSRVNFVFxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIC8qKlxyXG4gICAqIEEgdmVyeSBzaW1wbGUgcmVzZXQgdGhhdCBzaXRzIG9uIHRvcCBvZiBOb3JtYWxpemUuY3NzLlxyXG4gICAqL1xyXG4gIGJvZHksXHJcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcclxuICBibG9ja3F1b3RlLCBwLCBwcmUsXHJcbiAgZGwsIGRkLCBvbCwgdWwsXHJcbiAgZmlndXJlLFxyXG4gIGhyLFxyXG4gIGZpZWxkc2V0LCBsZWdlbmQge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBSZW1vdmUgdHJhaWxpbmcgbWFyZ2lucyBmcm9tIG5lc3RlZCBsaXN0cy5cclxuICAgKi9cclxuICBsaSA+IG9sLFxyXG4gIGxpID4gdWwge1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBkZWZhdWx0IHRhYmxlIHNwYWNpbmcuXHJcbiAgICovXHJcbiAgdGFibGUge1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIDEuIFJlc2V0IENocm9tZSBhbmQgRmlyZWZveCBiZWhhdmlvdXIgd2hpY2ggc2V0cyBhIGBtaW4td2lkdGg6IG1pbi1jb250ZW50O2BcclxuICAgKiAgICBvbiBmaWVsZHNldHMuXHJcbiAgICovXHJcbiAgZmllbGRzZXQge1xyXG5cdG1pbi13aWR0aDogMDtcclxuXHQvKiBbMV0gKi9cclxuXHRib3JkZXI6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiB7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQgI1BBR0UgV1JBUFBFUlxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIC5wYWdlLXdyYXBwZXIge1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuXHRmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJBcmlhbFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIFxyXG4gIGgxIHtcclxuXHRmb250LXNpemU6IDM2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGgzIHtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGg0IHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGg1IHtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGg2IHtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNCQUNLR1JPVU5EXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4gIFxyXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNTUEFDSU5HXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgLnAtdC0xMDAge1xyXG5cdHBhZGRpbmctdG9wOiAxMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnAtdC0xMzAge1xyXG5cdHBhZGRpbmctdG9wOiAxMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLnAtdC0xODAge1xyXG5cdHBhZGRpbmctdG9wOiAxODBweDtcclxuICB9XHJcbiAgXHJcbiAgLnAtdC00NSB7XHJcblx0cGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wLXQtMjAge1xyXG5cdHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucC10LTE1IHtcclxuXHRwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnAtdC0xMCB7XHJcblx0cGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wLXQtMzAge1xyXG5cdHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAucC1iLTEwMCB7XHJcblx0cGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAucC1iLTUwIHtcclxuXHRwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm0tci00NSB7XHJcblx0bWFyZ2luLXJpZ2h0OiA0NXB4O1xyXG4gIH1cclxuICBcclxuICAubS1yLTU1IHtcclxuXHRtYXJnaW4tcmlnaHQ6IDU1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tLWItNTUge1xyXG5cdG1hcmdpbi1ib3R0b206IDU1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNXUkFQUEVSXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgLndyYXBwZXIge1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlci0tdzk2MCB7XHJcblx0bWF4LXdpZHRoOiA5NjBweDtcclxuICB9XHJcbiAgXHJcbiAgLndyYXBwZXItLXc3OTAge1xyXG5cdG1heC13aWR0aDogNzkwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVyLS13NzgwIHtcclxuXHRtYXgtd2lkdGg6IDc4MHB4O1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlci0tdzY4MCB7XHJcblx0bWF4LXdpZHRoOiA2ODBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQgI0JVVFRPTlxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIC5idG4ge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRsaW5lLWhlaWdodDogNTBweDtcclxuXHRwYWRkaW5nOiAwIDUwcHg7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tLXJhZGl1cyB7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICBcclxuICAuYnRuLS1yYWRpdXMtMiB7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBcclxuICAuYnRuLS1waWxsIHtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tLWdyZWVuIHtcclxuXHRiYWNrZ3JvdW5kOiAjNTdiODQ2O1xyXG4gIH1cclxuICBcclxuICAuYnRuLS1ncmVlbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogIzRkYWUzYztcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi0tYmx1ZSB7XHJcblx0YmFja2dyb3VuZDogIzQyNzJkNztcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi0tYmx1ZTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogIzM4NjhjZDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi0tcmVkIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmY0YjVhO1xyXG4gIH1cclxuICBcclxuICAuYnRuLS1yZWQ6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICNlYjM3NDY7XHJcbiAgfVxyXG4gIFxyXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNEQVRFIFBJQ0tFUlxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIHRkLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJjNmVkNTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cImRhdGVcIiBpXSB7XHJcblx0cGFkZGluZzogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLWNvbmRlbnNlZCB0ZCwgLnRhYmxlLWNvbmRlbnNlZCB0aCB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkFyaWFsXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICAuZGF0ZXJhbmdlcGlja2VyIHRkIHtcclxuXHR3aWR0aDogNDBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRlcmFuZ2VwaWNrZXIge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHRib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmRhdGVyYW5nZXBpY2tlcjo6YWZ0ZXIsIC5kYXRlcmFuZ2VwaWNrZXI6OmJlZm9yZSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmRhdGVyYW5nZXBpY2tlciB0aGVhZCB0ciB0aCB7XHJcblx0cGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuICBcclxuICAuZGF0ZXJhbmdlcGlja2VyIC50YWJsZS1jb25kZW5zZWQgdGggc2VsZWN0IHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNGT1JNXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgaW5wdXQge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcblx0LW1vei1ib3gtc2hhZG93OiBub25lO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICAucmFkaW8tY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHBhZGRpbmctbGVmdDogMzBweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGNvbG9yOiAjNjY2O1xyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yYWRpby1jb250YWluZXIgaW5wdXQge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnJhZGlvLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcclxuICB9XHJcbiAgXHJcbiAgLnJhZGlvLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5yYWRpby1jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0d2lkdGg6IDEycHg7XHJcblx0aGVpZ2h0OiAxMnB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiAjNTdiODQ2O1xyXG4gIH1cclxuICBcclxuICAuY2hlY2ttYXJrIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdGxlZnQ6IDA7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrbWFyazphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LS1zdHlsZS01IHtcclxuXHRiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG5cdGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRwYWRkaW5nOiAwIDIycHg7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGNvbG9yOiAjNTU1O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtZ3JvdXAtZGVzYyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHQuaW5wdXQtZ3JvdXAtZGVzYyB7XHJcblx0ICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cdH1cclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAubGFiZWwge1xyXG5cdGNvbG9yOiAjNTU1O1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICBcclxuICAubGFiZWwtLWJsb2NrIHtcclxuXHR3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmxhYmVsLS1kZXNjIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Y29sb3I6ICM5OTk7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1hcmdpbjogMDtcclxuXHRtYXJnaW4tdG9wOiA3cHg7XHJcblx0bGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQgI1NFTEVDVDJcclxuXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAuc2VsZWN0LS1uby1zZWFyY2ggLnNlbGVjdDItc2VhcmNoIHtcclxuXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiAuc2VsZWN0Mi1kcm9wZG93bi0tYmVsb3cge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0Ym94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24ge1xyXG5cdHBhZGRpbmctbGVmdDogMjJweDtcclxuICB9XHJcbiAgXHJcbiAgLnJzLXNlbGVjdDIgLnNlbGVjdDItY29udGFpbmVyIHtcclxuXHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0YmFja2dyb3VuZDogI2U1ZTVlNTtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ycy1zZWxlY3QyIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCB7XHJcblx0bGluZS1oZWlnaHQ6IDUwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cdGNvbG9yOiAjNTU1O1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LWZhbWlseTogaW5oZXJpdDtcclxuXHRwYWRkaW5nLWxlZnQ6IDIycHg7XHJcblx0cGFkZGluZy1yaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJzLXNlbGVjdDIgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3cge1xyXG5cdGhlaWdodDogNTBweDtcclxuXHRyaWdodDogMTVweDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcblx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQtbW96LWJveC1wYWNrOiBjZW50ZXI7XHJcblx0LW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcblx0LXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdC1tb3otYm94LWFsaWduOiBjZW50ZXI7XHJcblx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyBiIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdzphZnRlciB7XHJcblx0Zm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250XCI7XHJcblx0Y29udGVudDogJ1xcZjJmOSc7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdGNvbG9yOiAjOTk5O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIuc2VsZWN0Mi1jb250YWluZXItLW9wZW4gLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdzo6YWZ0ZXIge1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcblx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcblx0LW8tdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNUSVRMRVxyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIC50aXRsZSB7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNDQVJEXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgLmNhcmQge1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC01IHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHRib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLTUgLmNhcmQtaGVhZGluZyB7XHJcblx0cGFkZGluZzogMjBweCAwO1xyXG5cdGJhY2tncm91bmQ6ICNlZDRjNjc7XHJcblx0LXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiAxMHB4O1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcblx0LXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDEwcHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLTUgLmNhcmQtYm9keSB7XHJcblx0cGFkZGluZzogNTJweCA4NXB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiA3M3B4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHQuY2FyZC01IC5jYXJkLWJvZHkge1xyXG5cdCAgcGFkZGluZzogNDBweCAzMHB4O1xyXG5cdCAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcblx0fVxyXG4gIH1cclxuICBcclxuXHJcbi5wbGFjZWhvbGRlciB7XHJcblx0Zm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xyXG5cdGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcclxufVxyXG5zZWxlY3Qge1xyXG4gICAgd29yZC13cmFwOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1NTUgIWltcG9ydGFudDtcclxuXHRmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcblx0Ym9yZGVyOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmltYWdlLXdyYXBwZXIgbGkge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4uYnJvd3NlLWJ0biB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5icm93c2UtaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyNSU7XHJcbn1cclxuLnByb2R1Y3QtaW1hZ2V7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEyNXB4O1xyXG59XHJcbmEuZGVsZXRlLWJ0biB7XHJcbiAgICBjb2xvcjogI2YwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jY2FtZXJhSW1nIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDowO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG59IiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgI0ZPTlRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5mb250LXJvYm8ge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJBcmlhbFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLmZvbnQtcG9wcGlucyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgXCJBcmlhbFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLmZvbnQtb3BlbnNhbnMge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJBcmlhbFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQgI0dSSURcclxuXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5yb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7IH1cblxuLnJvdyAuY29sLTI6bGFzdC1jaGlsZCAuaW5wdXQtZ3JvdXAtZGVzYyB7XG4gIG1hcmdpbi1ib3R0b206IDA7IH1cblxuLnJvdy1zcGFjZSB7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cblxuLnJvdy1yZWZpbmUge1xuICBtYXJnaW46IDAgLTE1cHg7IH1cblxuLnJvdy1yZWZpbmUgLmNvbC0zIC5pbnB1dC1ncm91cC1kZXNjLFxuLnJvdy1yZWZpbmUgLmNvbC05IC5pbnB1dC1ncm91cC1kZXNjIHtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4uY29sLTIge1xuICB3aWR0aDogLXdlYmtpdC1jYWxjKCgxMDAlIC0gMzBweCkgLyAyKTtcbiAgd2lkdGg6IC1tb3otY2FsYygoMTAwJSAtIDMwcHgpIC8gMik7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gMzBweCkgLyAyKTsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbC0yIHtcbiAgICB3aWR0aDogMTAwJTsgfSB9XG5cbi5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4OyB9XG5cbi5mb3JtLXJvdyAubmFtZSB7XG4gIHdpZHRoOiAxMjVweDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uZm9ybS1yb3cgLnZhbHVlIHtcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gMTI1cHgpO1xuICB3aWR0aDogLW1vei1jYWxjKDEwMCUgLSAxMjVweCk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjVweCk7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtLXJvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLmZvcm0tcm93IC5uYW1lLFxuICAuZm9ybS1yb3cgLnZhbHVlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTsgfVxuICAuZm9ybS1yb3cgLm5hbWUge1xuICAgIG1hcmdpbi1ib3R0b206IDdweDsgfSB9XG5cbi5jb2wtMyxcbi5jb2wtOSB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMXB4OyB9XG5cbi5jb2wtMyB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIC13ZWJraXQtZmxleDogMCAwIDI1JTtcbiAgLW1vei1ib3gtZmxleDogMDtcbiAgLW1zLWZsZXg6IDAgMCAyNSU7XG4gIGZsZXg6IDAgMCAyNSU7XG4gIG1heC13aWR0aDogMjUlOyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29sLTMge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gICAgLXdlYmtpdC1mbGV4OiAwIDAgMzUlO1xuICAgIC1tb3otYm94LWZsZXg6IDA7XG4gICAgLW1zLWZsZXg6IDAgMCAzNSU7XG4gICAgZmxleDogMCAwIDM1JTtcbiAgICBtYXgtd2lkdGg6IDM1JTsgfSB9XG5cbi5jb2wtOSB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIC13ZWJraXQtZmxleDogMCAwIDc1JTtcbiAgLW1vei1ib3gtZmxleDogMDtcbiAgLW1zLWZsZXg6IDAgMCA3NSU7XG4gIGZsZXg6IDAgMCA3NSU7XG4gIG1heC13aWR0aDogNzUlOyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29sLTkge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gICAgLXdlYmtpdC1mbGV4OiAwIDAgNjUlO1xuICAgIC1tb3otYm94LWZsZXg6IDA7XG4gICAgLW1zLWZsZXg6IDAgMCA2NSU7XG4gICAgZmxleDogMCAwIDY1JTtcbiAgICBtYXgtd2lkdGg6IDY1JTsgfSB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNCT1gtU0laSU5HXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcclxuICAgKiBNb3JlIHNlbnNpYmxlIGRlZmF1bHQgYm94LXNpemluZzpcclxuICAgKiBjc3MtdHJpY2tzLmNvbS9pbmhlcml0aW5nLWJveC1zaXppbmctcHJvYmFibHktc2xpZ2h0bHktYmV0dGVyLWJlc3QtcHJhY3RpY2VcclxuICAgKi9cbmh0bWwge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwOyB9XG5cbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xuICAtbW96LWJveC1zaXppbmc6IGluaGVyaXQ7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQgI1JFU0VUXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcclxuICAgKiBBIHZlcnkgc2ltcGxlIHJlc2V0IHRoYXQgc2l0cyBvbiB0b3Agb2YgTm9ybWFsaXplLmNzcy5cclxuICAgKi9cbmJvZHksXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LFxuYmxvY2txdW90ZSwgcCwgcHJlLFxuZGwsIGRkLCBvbCwgdWwsXG5maWd1cmUsXG5ocixcbmZpZWxkc2V0LCBsZWdlbmQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cblxuLyoqXHJcbiAgICogUmVtb3ZlIHRyYWlsaW5nIG1hcmdpbnMgZnJvbSBuZXN0ZWQgbGlzdHMuXHJcbiAgICovXG5saSA+IG9sLFxubGkgPiB1bCB7XG4gIG1hcmdpbi1ib3R0b206IDA7IH1cblxuLyoqXHJcbiAgICogUmVtb3ZlIGRlZmF1bHQgdGFibGUgc3BhY2luZy5cclxuICAgKi9cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cblxuLyoqXHJcbiAgICogMS4gUmVzZXQgQ2hyb21lIGFuZCBGaXJlZm94IGJlaGF2aW91ciB3aGljaCBzZXRzIGEgYG1pbi13aWR0aDogbWluLWNvbnRlbnQ7YFxyXG4gICAqICAgIG9uIGZpZWxkc2V0cy5cclxuICAgKi9cbmZpZWxkc2V0IHtcbiAgbWluLXdpZHRoOiAwO1xuICAvKiBbMV0gKi9cbiAgYm9yZGVyOiAwOyB9XG5cbmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjUEFHRSBXUkFQUEVSXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ucGFnZS13cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7IH1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBcIkFyaWFsXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4OyB9XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBmb250LXdlaWdodDogNDAwOyB9XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzNnB4OyB9XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzMHB4OyB9XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyNHB4OyB9XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxOHB4OyB9XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxNXB4OyB9XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxM3B4OyB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNCQUNLR1JPVU5EXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjU1BBQ0lOR1xyXG5cdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnAtdC0xMDAge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7IH1cblxuLnAtdC0xMzAge1xuICBwYWRkaW5nLXRvcDogMTMwcHg7IH1cblxuLnAtdC0xODAge1xuICBwYWRkaW5nLXRvcDogMTgwcHg7IH1cblxuLnAtdC00NSB7XG4gIHBhZGRpbmctdG9wOiA0NXB4OyB9XG5cbi5wLXQtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweDsgfVxuXG4ucC10LTE1IHtcbiAgcGFkZGluZy10b3A6IDE1cHg7IH1cblxuLnAtdC0xMCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4OyB9XG5cbi5wLXQtMzAge1xuICBwYWRkaW5nLXRvcDogMzBweDsgfVxuXG4ucC1iLTEwMCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDsgfVxuXG4ucC1iLTUwIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7IH1cblxuLm0tci00NSB7XG4gIG1hcmdpbi1yaWdodDogNDVweDsgfVxuXG4ubS1yLTU1IHtcbiAgbWFyZ2luLXJpZ2h0OiA1NXB4OyB9XG5cbi5tLWItNTUge1xuICBtYXJnaW4tYm90dG9tOiA1NXB4OyB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNXUkFQUEVSXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbi53cmFwcGVyLS13OTYwIHtcbiAgbWF4LXdpZHRoOiA5NjBweDsgfVxuXG4ud3JhcHBlci0tdzc5MCB7XG4gIG1heC13aWR0aDogNzkwcHg7IH1cblxuLndyYXBwZXItLXc3ODAge1xuICBtYXgtd2lkdGg6IDc4MHB4OyB9XG5cbi53cmFwcGVyLS13NjgwIHtcbiAgbWF4LXdpZHRoOiA2ODBweDsgfVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjQlVUVE9OXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCA1MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgfVxuXG4uYnRuLS1yYWRpdXMge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxuXG4uYnRuLS1yYWRpdXMtMiB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG5cbi5idG4tLXBpbGwge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDsgfVxuXG4uYnRuLS1ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICM1N2I4NDY7IH1cblxuLmJ0bi0tZ3JlZW46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGRhZTNjOyB9XG5cbi5idG4tLWJsdWUge1xuICBiYWNrZ3JvdW5kOiAjNDI3MmQ3OyB9XG5cbi5idG4tLWJsdWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzg2OGNkOyB9XG5cbi5idG4tLXJlZCB7XG4gIGJhY2tncm91bmQ6ICNmZjRiNWE7IH1cblxuLmJ0bi0tcmVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ViMzc0NjsgfVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdCAjREFURSBQSUNLRVJcclxuXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbnRkLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzZlZDU7IH1cblxuaW5wdXRbdHlwZT1cImRhdGVcIiBpXSB7XG4gIHBhZGRpbmc6IDE0cHg7IH1cblxuLnRhYmxlLWNvbmRlbnNlZCB0ZCwgLnRhYmxlLWNvbmRlbnNlZCB0aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiQXJpYWxcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwOyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIgdGQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAzMHB4OyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBtYXJnaW4tdG9wOiA1cHg7IH1cblxuLmRhdGVyYW5nZXBpY2tlcjo6YWZ0ZXIsIC5kYXRlcmFuZ2VwaWNrZXI6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmRhdGVyYW5nZXBpY2tlciB0aGVhZCB0ciB0aCB7XG4gIHBhZGRpbmc6IDEwcHggMDsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyIC50YWJsZS1jb25kZW5zZWQgdGggc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNXB4O1xuICBvdXRsaW5lOiBub25lOyB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNGT1JNXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IH1cblxuLnJhZGlvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzY2NjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTsgfVxuXG4ucmFkaW8tY29udGFpbmVyIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnJhZGlvLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7IH1cblxuLnJhZGlvLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5yYWRpby1jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzU3Yjg0NjsgfVxuXG4uY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpOyB9XG5cbi5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmlucHV0LS1zdHlsZS01IHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwIDIycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1NTU7IH1cblxuLmlucHV0LWdyb3VwLWRlc2Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5pbnB1dC1ncm91cC1kZXNjIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4OyB9IH1cblxuLmlucHV0LWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7IH1cblxuLmxhYmVsIHtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4ubGFiZWwtLWJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmxhYmVsLS1kZXNjIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBsZWZ0OiAwOyB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0ICNTRUxFQ1QyXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uc2VsZWN0LS1uby1zZWFyY2ggLnNlbGVjdDItc2VhcmNoIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiAuc2VsZWN0Mi1kcm9wZG93bi0tYmVsb3cge1xuICBib3JkZXI6IG5vbmU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDIycHg7IH1cblxuLnJzLXNlbGVjdDIgLnNlbGVjdDItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cblxuLnJzLXNlbGVjdDIgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbi5ycy1zZWxlY3QyIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHBhZGRpbmctbGVmdDogMjJweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDsgfVxuXG4ucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyB7XG4gIGhlaWdodDogNTBweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4ucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyBiIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ucnMtc2VsZWN0MiAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdzphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsLURlc2lnbi1JY29uaWMtRm9udFwiO1xuICBjb250ZW50OiAnXFxmMmY5JztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzk5OTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7IH1cblxuLnJzLXNlbGVjdDIgLnNlbGVjdDItY29udGFpbmVyLnNlbGVjdDItY29udGFpbmVyLS1vcGVuIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3c6OmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQgI1RJVExFXHJcblx0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4udGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7IH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQgI0NBUkRcclxuXHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5jYXJkIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cblxuLmNhcmQtNSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggOHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTsgfVxuXG4uY2FyZC01IC5jYXJkLWhlYWRpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJhY2tncm91bmQ6ICNlZDRjNjc7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7IH1cblxuLmNhcmQtNSAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogNTJweCA4NXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzNweDsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcmQtNSAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7IH0gfVxuXG4ucGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IHNtYWxsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDsgfVxuXG5zZWxlY3Qge1xuICB3b3JkLXdyYXA6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzU1NSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50OyB9XG5cbi5pbWFnZS13cmFwcGVyIGxpIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XG5cbi5icm93c2UtYnRuIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYnJvd3NlLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTsgfVxuXG4ucHJvZHVjdC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyNXB4OyB9XG5cbmEuZGVsZXRlLWJ0biB7XG4gIGNvbG9yOiAjZjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuI2NhbWVyYUltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDM7IH1cblxuLmVycm9yIHtcbiAgY29sb3I6ICNmZjAwMDA7IH1cbiJdfQ== */"

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
        this.Url = "http://3.134.103.215:3000/api/v1/category/";
        this.serverUrl = "http://3.134.103.215:3000/api/v1/product/";
        this.brandUrl = "http://3.134.103.215:3000/api/v1/brand/";
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