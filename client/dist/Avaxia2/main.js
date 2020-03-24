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
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _settingspage_settingspage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settingspage/settingspage.component */ "./src/app/settingspage/settingspage.component.ts");
/* harmony import */ var _avaxipedia_avaxipedia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./avaxipedia/avaxipedia.component */ "./src/app/avaxipedia/avaxipedia.component.ts");
/* harmony import */ var _post_issue_post_issue_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-issue/post-issue.component */ "./src/app/post-issue/post-issue.component.ts");








const routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"] },
    { path: 'Settings', component: _settingspage_settingspage_component__WEBPACK_IMPORTED_MODULE_3__["SettingspageComponent"] },
    { path: 'Avaxipedia', component: _avaxipedia_avaxipedia_component__WEBPACK_IMPORTED_MODULE_4__["AvaxipediaComponent"] },
    { path: 'PostIssue', component: _post_issue_post_issue_component__WEBPACK_IMPORTED_MODULE_5__["PostIssueComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
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
        this.title = 'Avaxia';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _settingspage_settingspage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settingspage/settingspage.component */ "./src/app/settingspage/settingspage.component.ts");
/* harmony import */ var _avaxipedia_avaxipedia_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./avaxipedia/avaxipedia.component */ "./src/app/avaxipedia/avaxipedia.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _post_issue_post_issue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post-issue/post-issue.component */ "./src/app/post-issue/post-issue.component.ts");
/* harmony import */ var _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post-comment/post-comment.component */ "./src/app/post-comment/post-comment.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
        _settingspage_settingspage_component__WEBPACK_IMPORTED_MODULE_7__["SettingspageComponent"],
        _avaxipedia_avaxipedia_component__WEBPACK_IMPORTED_MODULE_8__["AvaxipediaComponent"],
        _post_issue_post_issue_component__WEBPACK_IMPORTED_MODULE_10__["PostIssueComponent"],
        _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_11__["PostCommentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                    _settingspage_settingspage_component__WEBPACK_IMPORTED_MODULE_7__["SettingspageComponent"],
                    _avaxipedia_avaxipedia_component__WEBPACK_IMPORTED_MODULE_8__["AvaxipediaComponent"],
                    _post_issue_post_issue_component__WEBPACK_IMPORTED_MODULE_10__["PostIssueComponent"],
                    _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_11__["PostCommentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/avaxipedia/avaxipedia.component.ts":
/*!****************************************************!*\
  !*** ./src/app/avaxipedia/avaxipedia.component.ts ***!
  \****************************************************/
/*! exports provided: AvaxipediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvaxipediaComponent", function() { return AvaxipediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AvaxipediaComponent_div_18_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", comment_r5.Prename, " ", comment_r5.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r5.PostTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r5.Content, " ");
} }
function AvaxipediaComponent_div_18_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AvaxipediaComponent_div_18_div_24_div_1_Template, 10, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r5 = ctx.$implicit;
    const problem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r5.Problem_ID === problem_r3.ID);
} }
function AvaxipediaComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AvaxipediaComponent_div_18_div_24_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const problem_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", problem_r3.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" #", problem_r3.ID, "000 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Poste On : ", problem_r3.PostTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", problem_r3.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.comments);
} }
class AvaxipediaComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.url = 'http://localhost:8000';
    }
    ngOnInit() { }
    EmptyProblems() {
        this.problems = []; // Empty previous problems while looking for another one
        this.problemIDs = [];
    }
    EmptyComments() {
        this.comments = [];
    }
    StoreProblem(problem) {
        this.problems.push(problem);
        this.problemIDs.push(problem.ID);
    }
    GetProblemByID(event) {
        if (event !== '') {
            this.EmptyProblems();
            this.EmptyComments();
            return this.api.getProblemByID(event).subscribe((data => {
                data.forEach(problem => {
                    this.StoreProblem(problem);
                    this.GetCommentsOfProblem(this.problemIDs);
                });
            }));
        }
    }
    GetProblemByName(event) {
        if (event.includes(' ')) {
            this.EmptyProblems();
            this.EmptyComments();
            return this.api.getProblemByName(event).subscribe((data => {
                data.forEach(problem => {
                    this.StoreProblem(problem);
                    console.log('Problem with ID :' + problem.ID + ' is stored');
                });
                this.GetCommentsOfProblem(this.problemIDs);
            }));
        }
    }
    StoreComment(comment) {
        this.comments.push(comment);
    }
    GetCommentsOfProblem(problemIDs) {
        return this.api.getComments(problemIDs).subscribe((data => {
            data.forEach(cmt => {
                this.StoreComment(cmt);
            });
        }));
    }
}
AvaxipediaComponent.ɵfac = function AvaxipediaComponent_Factory(t) { return new (t || AvaxipediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AvaxipediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AvaxipediaComponent, selectors: [["app-avaxipedia"]], decls: 21, vars: 1, consts: [[1, "page"], [1, "row"], [1, "title"], [1, "sub-title"], [1, "col-1"], [1, "col-3", 2, "display", "inline"], ["id", "problem-search", "type", "text", "placeholder", "Problem Code", "aria-label", "Search", 1, "form-control", 3, "keyup"], ["code", ""], [1, "col-3"], ["id", "problem-search", "type", "text", "placeholder", "Problem Name", "aria-label", "Search", 1, "form-control", 3, "keyup"], ["space", ""], [1, "row", "container"], ["id", "Avaxipedia-box", 1, "overflow-auto", "p-3", "mb-3", "mb-md-0", "mr-md-3"], ["class", "problem", 4, "ngFor", "ngForOf"], [1, "problem"], [1, "problem-box"], [1, "mini-avatar-container", "col-1"], ["src", "../../assets/avatars/1000.jpg", 1, "mini-avatar"], [1, "col-3", "problem-id"], [1, "problem-title"], [1, "sub-title", "problem-code"], [1, "sub-title", "problem-date"], [1, "col-6", "problem-description", "overflow-auto"], [1, "col-2", "btn-group-vertical", "problem-actions"], [1, "btn", "btn-info"], [1, "fas", "fa-list-ul"], [1, "far", "fa-comments"], [1, "all-comments"], ["class", "commentsss", 4, "ngFor", "ngForOf"], [1, "commentsss"], ["class", "problem-comments row", 4, "ngIf"], [1, "problem-comments", "row"], ["src", "../../assets/avatars/1002.jpg", 1, "mini-avatar-comment"], [1, "col-3", "comment-id"], [1, "comment-owner"], [1, "comment-date"], [1, "col-7", "comment-content"]], template: function AvaxipediaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Avaxia Knowledge base");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Avaxipedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AvaxipediaComponent_Template_input_keyup_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.GetProblemByID(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AvaxipediaComponent_Template_input_keyup_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); return ctx.GetProblemByName(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AvaxipediaComponent_div_18_Template, 25, 5, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.problems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#Avaxipedia-box[_ngcontent-%COMP%] {\n  max-height: 370px;\n  max-width: 100%;\n  width: 100%;\n  border-color: rgba(134, 168, 189, 0.356);\n  border-style: solid;\n  border-width: 2px;\n}\n\n.problem-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 120px !important;\n  background-color: rgba(255, 255, 255, 0.363);\n  margin-top: 17px;\n  margin-bottom: 17px;\n  padding: 15px;\n  border-radius: 15px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.problem-comments[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 20% !important;\n  background-color: rgba(255, 255, 255, 0.363);\n  border-radius: 50px;\n  margin-left: 20%;\n  margin-right: 5%;\n  margin-top: 1%;\n  margin-bottom: 1%;\n  padding: 2%;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(69, 96, 114, 0.315);\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.mini-avatar[_ngcontent-%COMP%] {\n  height: 80px;\n  border-radius: 50%;\n  margin-left: 10px;\n}\n\n.mini-avatar-comment[_ngcontent-%COMP%] {\n  height: 50px;\n  border-radius: 50%;\n  margin-left: 10px;\n}\n\n.problem-title[_ngcontent-%COMP%] {\n  float: left;\n  color: #4684a8;\n  font-weight: bold;\n}\n\n.problem-id[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 80%;\n}\n\n.problem-code[_ngcontent-%COMP%], .problem-date[_ngcontent-%COMP%] {\n  font-size: 70%;\n}\n\n.problem-description[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 70%;\n}\n\n.show-comments-btn[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  margin: 1px;\n}\n\n#problem-search[_ngcontent-%COMP%] {\n  margin-bottom: 8%;\n}\n\n.comment-owner[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: bold;\n  color: #4684a8;\n}\n\n.comment-id[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n\n.comment-date[_ngcontent-%COMP%] {\n  font-size: 60%;\n  color: gray;\n}\n\n.comment-content[_ngcontent-%COMP%] {\n  font-size: 65%;\n}\n\n.comment-btn[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  margin-right: 20px;\n  font-size-adjust: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plbGVsL0J1cmVhdS9KZWxlbC9EZXYvQW5ndWxhci9BdmF4aWEyL3NyYy9hcHAvYXZheGlwZWRpYS9hdmF4aXBlZGlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdmF4aXBlZGlhL2F2YXhpcGVkaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0RUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMkVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hdmF4aXBlZGlhL2F2YXhpcGVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjQXZheGlwZWRpYS1ib3h7XG4gIG1heC1oZWlnaHQ6IDM3MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sb3I6IHJnYmEoMTM0LCAxNjgsIDE4OSwgMC4zNTYpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxuLnByb2JsZW0tYm94e1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzYzKTtcbiAgbWFyZ2luLXRvcDoxN3B4O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ucHJvYmxlbS1jb21tZW50c3tcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiAyMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2Myk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgcGFkZGluZzogMiU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IHJnYmEoNjksIDk2LCAxMTQsIDAuMzE1KTtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ubWluaS1hdmF0YXJ7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm1pbmktYXZhdGFyLWNvbW1lbnR7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnByb2JsZW0tdGl0bGV7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogcmdiKDcwLCAxMzIsIDE2OCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvYmxlbS1pZHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4ucHJvYmxlbS1jb2RlLC5wcm9ibGVtLWRhdGV7XG4gIGZvbnQtc2l6ZTogNzAlO1xufVxuXG4ucHJvYmxlbS1kZXNjcmlwdGlvbntcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogNzAlXG59XG5cbi5zaG93LWNvbW1lbnRzLWJ0bntcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luOiAxcHhcbn1cblxuI3Byb2JsZW0tc2VhcmNoe1xuICBtYXJnaW4tYm90dG9tOiA4JTtcbn1cblxuLmNvbW1lbnQtb3duZXJ7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYig3MCwgMTMyLCAxNjgpO1xufVxuXG4uY29tbWVudC1pZHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uY29tbWVudC1kYXRle1xuICBmb250LXNpemU6IDYwJTtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5jb21tZW50LWNvbnRlbnR7XG4gIGZvbnQtc2l6ZTogNjUlO1xufVxuXG4uY29tbWVudC1idG57XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC1zaXplLWFkanVzdDogaW5oZXJpdDtcbn1cblxuXG5cblxuXG4iLCIjQXZheGlwZWRpYS1ib3gge1xuICBtYXgtaGVpZ2h0OiAzNzBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEzNCwgMTY4LCAxODksIDAuMzU2KTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG5cbi5wcm9ibGVtLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNjMpO1xuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ucHJvYmxlbS1jb21tZW50cyB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogMjAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNjMpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIHBhZGRpbmc6IDIlO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDY5LCA5NiwgMTE0LCAwLjMxNSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLm1pbmktYXZhdGFyIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWluaS1hdmF0YXItY29tbWVudCB7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnByb2JsZW0tdGl0bGUge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICM0Njg0YTg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvYmxlbS1pZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLnByb2JsZW0tY29kZSwgLnByb2JsZW0tZGF0ZSB7XG4gIGZvbnQtc2l6ZTogNzAlO1xufVxuXG4ucHJvYmxlbS1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDcwJTtcbn1cblxuLnNob3ctY29tbWVudHMtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luOiAxcHg7XG59XG5cbiNwcm9ibGVtLXNlYXJjaCB7XG4gIG1hcmdpbi1ib3R0b206IDglO1xufVxuXG4uY29tbWVudC1vd25lciB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM0Njg0YTg7XG59XG5cbi5jb21tZW50LWlkIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uY29tbWVudC1kYXRlIHtcbiAgZm9udC1zaXplOiA2MCU7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uY29tbWVudC1jb250ZW50IHtcbiAgZm9udC1zaXplOiA2NSU7XG59XG5cbi5jb21tZW50LWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC1zaXplLWFkanVzdDogaW5oZXJpdDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvaxipediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-avaxipedia',
                templateUrl: './avaxipedia.component.html',
                styleUrls: ['./avaxipedia.component.scss']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomepageComponent {
    constructor() {
        // document.getElementsByTagName('div')[0].style.marginLeft = '250';
    }
    ngOnInit() { }
    ngAfterViewInit() { }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 7, vars: 0, consts: [[1, "page"], [1, "row"], [1, "title"], [1, "sub-title"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to Avaxipedia !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavbarComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 3, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "shadow-lg"], ["src", "../../assets/logo.png"], ["src", "../../assets/1280px-Coca-Cola_logo.svg.png", 1, "partner-logo"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navbar[_ngcontent-%COMP%] {\n  min-height: 60px;\n  left: 250px;\n  right: 0px;\n  position: fixed;\n  background-color: white;\n  z-index: 10000;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n.partner-logo[_ngcontent-%COMP%] {\n  padding: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plbGVsL0J1cmVhdS9KZWxlbC9EZXYvQW5ndWxhci9BdmF4aWEyL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcbiAgbWluLWhlaWdodDogNjBweDtcbiAgbGVmdDogMjUwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDAwO1xuXG59XG5cbmltZ3tcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ucGFydG5lci1sb2dve1xuICBwYWRkaW5nOiA3cHg7XG59XG4iLCIubmF2YmFyIHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgbGVmdDogMjUwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5wYXJ0bmVyLWxvZ28ge1xuICBwYWRkaW5nOiA3cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/post-comment/post-comment.component.ts":
/*!********************************************************!*\
  !*** ./src/app/post-comment/post-comment.component.ts ***!
  \********************************************************/
/*! exports provided: PostCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCommentComponent", function() { return PostCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PostCommentComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PostCommentComponent.ɵfac = function PostCommentComponent_Factory(t) { return new (t || PostCommentComponent)(); };
PostCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostCommentComponent, selectors: [["app-post-comment"]], decls: 2, vars: 0, template: function PostCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "post-comment works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtY29tbWVudC9wb3N0LWNvbW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-comment',
                templateUrl: './post-comment.component.html',
                styleUrls: ['./post-comment.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/post-issue/post-issue.component.ts":
/*!****************************************************!*\
  !*** ./src/app/post-issue/post-issue.component.ts ***!
  \****************************************************/
/*! exports provided: PostIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostIssueComponent", function() { return PostIssueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PostIssueComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PostIssueComponent.ɵfac = function PostIssueComponent_Factory(t) { return new (t || PostIssueComponent)(); };
PostIssueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostIssueComponent, selectors: [["app-post-issue"]], decls: 11, vars: 0, consts: [[1, "page"], [1, "row"], [1, "title"], [1, "sub-title"]], template: function PostIssueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your Issue is not in our knowledge database ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Post your new Issue Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtaXNzdWUvcG9zdC1pc3N1ZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostIssueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-issue',
                templateUrl: './post-issue.component.html',
                styleUrls: ['./post-issue.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ApiService {
    constructor(http) {
        this.http = http;
        this.serverURL = 'http://localhost:8000/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            })
        };
    }
    getAllProblems() {
        return this.http.get(this.serverURL + 'problems', this.httpOptions);
    }
    getProblemByID(ID) {
        return this.http.get(this.serverURL + 'problem/' + ID, this.httpOptions);
    }
    getProblemByName(name) {
        return this.http.get(this.serverURL + 'problem/name/' + name, this.httpOptions);
    }
    getComments(problemIDs) {
        return this.http.get(this.serverURL + 'comments?array=[' + problemIDs + ']', this.httpOptions);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/settingspage/settingspage.component.ts":
/*!********************************************************!*\
  !*** ./src/app/settingspage/settingspage.component.ts ***!
  \********************************************************/
/*! exports provided: SettingspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingspageComponent", function() { return SettingspageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SettingspageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SettingspageComponent.ɵfac = function SettingspageComponent_Factory(t) { return new (t || SettingspageComponent)(); };
SettingspageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingspageComponent, selectors: [["app-settingspage"]], decls: 7, vars: 0, consts: [[1, "page"], [1, "row"], [1, "title"], [1, "sub-title"]], template: function SettingspageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Change your photo and update your name here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzcGFnZS9zZXR0aW5nc3BhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingspageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settingspage',
                templateUrl: './settingspage.component.html',
                styleUrls: ['./settingspage.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SidebarComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 24, vars: 0, consts: [[1, "wrapper"], ["id", "sidebar"], [1, "navbar", "navbar-expand-lg", "navbar-light", "shadow-lg"], [1, "avatar-container"], ["src", "../../assets/avatars/1000.jpg", 1, "avatar"], ["id", "sidebar-buttons"], [1, "nav", "flex-column"], [1, "nav-item"], ["routerLink", "", 1, "nav-link"], [1, "fas", "fa-home"], ["routerLink", "Avaxipedia", 1, "nav-link"], [1, "fas", "fa-search"], ["routerLink", "PostIssue", 1, "nav-link"], [1, "fas", "fa-question-circle"], ["routerLink", "Settings", 1, "nav-link"], [1, "fas", "fa-users-cog"], [1, "nav-lin-name"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Avaxipedia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Post New Issue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n}\n\n#sidebar[_ngcontent-%COMP%] {\n  width: 250px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  background-image: url('bg.png');\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.avatar-container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 130px;\n  margin: 10px;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border-style: solid;\n  border-width: 0.2px;\n  border-color: rgba(255, 255, 255, 0.3);\n  margin: 2px;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n  background-color: #4f8bfc;\n}\n\n#sidebar-buttons[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n\nsvg[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.nav-link-name[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  min-height: 60px;\n  position: absolute;\n  min-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plbGVsL0J1cmVhdS9KZWxlbC9EZXYvQW5ndWxhci9BdmF4aWEyL3NyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBRUEsK0JBQUE7RUFFQSw0QkFBQTtFQUFBLG9CQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFFRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDSkY7O0FET0E7RUFDRSxZQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7QUNKRjs7QURRQTtFQUNFLHlCQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7QUNMRjs7QURRQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcblxuXG59XG5cbiNzaWRlYmFyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmcucG5nXCIpO1xuXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uYXZhdGFyLWNvbnRhaW5lcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hdmF0YXJ7XG5cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5uYXYtbGlua3tcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2LWl0ZW17XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwLjJweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIG1hcmdpbjogMnB4O1xuXG59XG5cbi5uYXYtaXRlbTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc5LCAxMzksIDI1Mik7XG59XG5cbiNzaWRlYmFyLWJ1dHRvbnN7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuc3Zne1xuICBtYXJnaW4tcmlnaHQ6MjBweDtcbn1cblxuLm5hdi1saW5rLW5hbWV7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5uYXZiYXJ7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4iLCIud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNzaWRlYmFyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JnLnBuZ1wiKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5hdmF0YXItY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hdmF0YXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTMwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm5hdi1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2LWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMC4ycHg7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBtYXJnaW46IDJweDtcbn1cblxuLm5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmOGJmYztcbn1cblxuI3NpZGViYXItYnV0dG9ucyB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuc3ZnIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubmF2LWxpbmstbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5uYXZiYXIge1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return []; }, null); })();


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

module.exports = __webpack_require__(/*! /home/jelel/Bureau/Jelel/Dev/Angular/Avaxia2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map