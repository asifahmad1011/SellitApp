(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/search/search.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/search/search.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"search-block\">\r\n   \r\n                <div class=\"container\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 offset-lg-3\">\r\n                      <form [formGroup]=\"searchForm\" class=\"form-header\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"text\" (keyup)=\"searchTerm.next($event)\"  class=\"form-control\" formControlName=\"search\" id=\"exampleInputPassword1\" placeholder=\"Search Here...\">\r\n                        </div>\r\n                        <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i></button>\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n  <div *ngIf=\"searchResults\">\r\n    <div class=\"results\" >\r\n      <div class=\"repo\" *ngFor=\"let result of paginationElements | paginate: { itemsPerPage: 12, currentPage: page }\">\r\n          <div class=\"card-deck\">\r\n              <div class=\"card\">\r\n              <img loading=\"lazy\" src=\"../../assets/{{result.image}}\"\r\n                  width=\"200\"\r\n                  height=\"auto\"\r\n                  alt=\"image\"\r\n              />\r\n              <h4><a href=\"/home/right-sidebar/product/{{result.product_id}}\">{{result.product_name}}</a></h4>\r\n              <p>{{result.description}}</p>\r\n              <p>Price: {{result.price}}</p>\r\n          </div>\r\n          </div> \r\n      </div>\r\n  </div>\r\n      <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n  </div>\r\n \r\n  <div *ngIf=\"errorMessage\" class=\"errorMessage\">\r\n      <h2>Error</h2>\r\n      <p class=\"error\">{{errorMessage}}</p>\r\n  </div>\r\n\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/pages/search/search.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

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



/***/ })

}]);
//# sourceMappingURL=common.js.map