(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "body{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: awesome;\r\n    background: #6a3093;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient(to right, #a044ff, #6a3093); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    \r\n}\r\n\r\ndiv {\r\n       height: 200px;\r\n       width: auto;\r\n}\r\n\r\n.container {\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    width: 171px !important;\r\n    height: auto !important;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.logo{\r\n        height:90px;\r\n        margin-left: 0%;\r\n        margin-top: 119px;\r\n}\r\n\r\ninput[type=\"text\"]{\r\n    border-radius: 10px;\r\n    padding: 14px;\r\n    border: none;\r\n    display: block;\r\n    width: 70%;\r\n    margin: 2px auto 0px auto;\r\n    max-width: 600px;\r\n    box-shadow: 0px 0px 10px 0px rgba(213,214,214,1);\r\n}\r\n\r\n/* .search-message {\r\n    font-size: 20px;\r\n    color: white;\r\n    padding-top: 40px;\r\n    margin: 0px;\r\n    font-family: monospace !important;\r\n} */\r\n\r\n.results {\r\n    width: 80%;\r\n    margin: 95px auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n\r\n}\r\n\r\n.repo {\r\n    width: 100%;\r\n    max-width: 268px;\r\n    height: 332px;\r\n    padding-top: 20px;\r\n    border-radius: 10px;\r\n    margin: 10px;\r\n    background:#ffffff \r\n}\r\n\r\n.repo h2 {\r\n        width: 79%;\r\n        margin: 0 auto;\r\n        word-break: break-all;\r\n}\r\n\r\n.repo h2 > a {\r\n    color: rgba(0, 155, 103);\r\n}\r\n\r\n.errorMessage h2 {\r\n    color: red;\r\n}\r\n\r\n.error{\r\n    padding: 20px;\r\n    width: 40%;\r\n    margin: 60px auto;\r\n    box-shadow: 0px 10px 21px 0px rgba(214, 214,214, 1);\r\n    border-radius: 10px;\r\n}\r\n\r\n/**\r\n    loader\r\n*/\r\n\r\n.lds-ellipsis {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 64px;\r\n    /* height: 64px; */\r\n    margin-top:20px;\r\n  }\r\n\r\n.lds-ellipsis div {\r\n    position: absolute;\r\n    top: 27px;\r\n    width: 11px;\r\n    height: 11px;\r\n    border-radius: 50%;\r\n    background: #ff0076;\r\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n            animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n  }\r\n\r\n.lds-ellipsis div:nth-child(1) {\r\n    left: 6px;\r\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\r\n            animation: lds-ellipsis1 0.6s infinite;\r\n  }\r\n\r\n.lds-ellipsis div:nth-child(2) {\r\n    left: 6px;\r\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\r\n            animation: lds-ellipsis2 0.6s infinite;\r\n  }\r\n\r\n.lds-ellipsis div:nth-child(3) {\r\n    left: 26px;\r\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\r\n            animation: lds-ellipsis2 0.6s infinite;\r\n  }\r\n\r\n.lds-ellipsis div:nth-child(4) {\r\n    left: 45px;\r\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\r\n            animation: lds-ellipsis3 0.6s infinite;\r\n  }\r\n\r\n@-webkit-keyframes lds-ellipsis1 {\r\n    0% {\r\n      -webkit-transform: scale(0);\r\n              transform: scale(0);\r\n    }\r\n    100% {\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1);\r\n    }\r\n  }\r\n\r\n@keyframes lds-ellipsis1 {\r\n    0% {\r\n      -webkit-transform: scale(0);\r\n              transform: scale(0);\r\n    }\r\n    100% {\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes lds-ellipsis3 {\r\n    0% {\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1);\r\n    }\r\n    100% {\r\n      -webkit-transform: scale(0);\r\n              transform: scale(0);\r\n    }\r\n  }\r\n\r\n@keyframes lds-ellipsis3 {\r\n    0% {\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1);\r\n    }\r\n    100% {\r\n      -webkit-transform: scale(0);\r\n              transform: scale(0);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes lds-ellipsis2 {\r\n    0% {\r\n      -webkit-transform: translate(0, 0);\r\n              transform: translate(0, 0);\r\n    }\r\n    100% {\r\n      -webkit-transform: translate(19px, 0);\r\n              transform: translate(19px, 0);\r\n    }\r\n  }\r\n\r\n@keyframes lds-ellipsis2 {\r\n    0% {\r\n      -webkit-transform: translate(0, 0);\r\n              transform: translate(0, 0);\r\n    }\r\n    100% {\r\n      -webkit-transform: translate(19px, 0);\r\n              transform: translate(19px, 0);\r\n    }\r\n  }\r\n\r\n.ngx-pagination {\r\n    margin-left: 21px !important;\r\n    margin-bottom: 1rem !important;\r\n    font-family: monospace !important;\r\n    padding: 0px 28px 11px 0px !important;\r\n    margin-top: 614px;\r\n\r\n}\r\n\r\n.ngx-pagination .current {\r\n    padding: 0.1875rem 0.625rem !important;\r\n    background: #ff0076 !important;\r\n    color: #fefefe !important;\r\n    border-radius: 25px !important;\r\n    /* border: 0px; */\r\n    cursor: default !important;\r\n}\r\n\r\n.ngx-pagination a, .ngx-pagination button {\r\n    color: white !important;\r\n    display: block !important;\r\n    padding: 0.1875rem 0.625rem !important;\r\n    border-radius: 0 !important;\r\n    font-weight: 800 !important;\r\n}\r\n\r\n.ngx-pagination .disabled {\r\n    padding: 0.1875rem 0.625rem !important;\r\n    color: #cacaca !important;\r\n    cursor: default !important;\r\n    font-weight: 700 !important;\r\n    color: #acaaaa !important;\r\n}\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 10px;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n}\r\n\r\n.card-deck .card {\r\n    display: flex;\r\n    flex: 1 0 0%;\r\n    flex-direction: column;\r\n    margin-right: 15px;\r\n    margin-left: 15px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\np {\r\n  display: block !important;\r\n  -webkit-margin-before: 1em !important;\r\n          margin-block-start: 1em !important;\r\n  -webkit-margin-after: 1em !important;\r\n          margin-block-end: 1em !important;\r\n  -webkit-margin-start: 0px !important;\r\n          margin-inline-start: 0px !important;\r\n  -webkit-margin-end: 0px !important;\r\n          margin-inline-end: 0px !important;\r\n  font-weight: 600 !important;\r\n  color: #ff0076;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,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O0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsc0NBQXNDO0lBQ3RDLDJCQUEyQjtJQUMzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZiw2QkFBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDRCQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIseUJBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix1QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUVJLGFBQWE7SUFFYixZQUFZO0lBRVosc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFDQUFrQztVQUFsQyxrQ0FBa0M7RUFDbEMsb0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxvQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLGtDQUFpQztVQUFqQyxpQ0FBaUM7RUFDakMsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogYXdlc29tZTtcclxuICAgIGJhY2tncm91bmQ6ICM2YTMwOTM7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYTA0NGZmLCAjNmEzMDkzKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2EwNDRmZiwgIzZhMzA5Myk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgIFxyXG59XHJcblxyXG5kaXYge1xyXG4gICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxNzFweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmxvZ297XHJcbiAgICAgICAgaGVpZ2h0OjkwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDExOXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAycHggYXV0byAwcHggYXV0bztcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMjEzLDIxNCwyMTQsMSk7XHJcbn1cclxuXHJcbi8qIC5zZWFyY2gtbWVzc2FnZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG4ucmVzdWx0cyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiA5NXB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG5cclxuLnJlcG8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDI2OHB4O1xyXG4gICAgaGVpZ2h0OiAzMzJweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJhY2tncm91bmQ6I2ZmZmZmZiBcclxufVxyXG5cclxuLnJlcG8gaDIge1xyXG4gICAgICAgIHdpZHRoOiA3OSU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcblxyXG4ucmVwbyBoMiA+IGEge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMTU1LCAxMDMpO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdlIGgyIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5lcnJvcntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMXB4IDBweCByZ2JhKDIxNCwgMjE0LDIxNCwgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAgICBsb2FkZXJcclxuKi9cclxuLmxkcy1lbGxpcHNpcyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIC8qIGhlaWdodDogNjRweDsgKi9cclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICB9XHJcbiAgLmxkcy1lbGxpcHNpcyBkaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyN3B4O1xyXG4gICAgd2lkdGg6IDExcHg7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDc2O1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xyXG4gIH1cclxuICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgbGVmdDogNnB4O1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBsZWZ0OiA2cHg7XHJcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgIGxlZnQ6IDI2cHg7XHJcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICAgIGxlZnQ6IDQ1cHg7XHJcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE5cHgsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gXHJcbi5uZ3gtcGFnaW5hdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjFweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4IDI4cHggMTFweCAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDYxNHB4O1xyXG5cclxufSBcclxuXHJcblxyXG4ubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYwMDc2ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZlZmVmZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgLyogYm9yZGVyOiAwcHg7ICovXHJcbiAgICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5neC1wYWdpbmF0aW9uIGEsIC5uZ3gtcGFnaW5hdGlvbiBidXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZ3gtcGFnaW5hdGlvbiAuZGlzYWJsZWQge1xyXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2NhY2FjYSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2FjYWFhYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC42N2VtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMC42N2VtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZC1kZWNrIC5jYXJkIHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4OiAxIDAgMCU7XHJcbiAgICBmbGV4OiAxIDAgMCU7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tYmxvY2stZW5kOiAxZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmYwMDc2O1xyXG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\damil\Documents\Damilare Oyebanji\Personal\Master's Program\Winter Semester\GDSD\sellItApp\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map