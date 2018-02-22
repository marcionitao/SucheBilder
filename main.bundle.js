webpackJsonp([1,4],{

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 150;


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(99);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Suche ein Bild!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(326),
        styles: [__webpack_require__(318)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_image_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_masonry__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__image_list_image_list_component__ = __webpack_require__(163);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__image_list_image_list_component__["a" /* ImageListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_masonry__["a" /* MasonryModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdIconModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__shared_image_service__["a" /* ImageService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_image_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageListComponent = (function () {
    function ImageListComponent(imageService) {
        this.imageService = imageService;
        this.searchQuery = null;
        this.imagesFound = false;
        this.searching = false;
    }
    ImageListComponent.prototype.ngOnInit = function () {
    };
    ImageListComponent.prototype.handleSuccess = function (data) {
        this.imagesFound = true;
        this.images = data.hits;
        this.notFound = data.hits.length;
        console.log(this.notFound);
    };
    ImageListComponent.prototype.searchImage = function (query) {
        var _this = this;
        this.searchQuery = ''; // clear field input
        this.searching = true; // delay to load image
        return this.imageService.getImage(query).subscribe(function (data) { return _this.handleSuccess(data); }, function (error) { return console.log(error); }, function () { return _this.searching = false; });
    };
    return ImageListComponent;
}());
ImageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Component */])({
        selector: 'app-image-list',
        template: __webpack_require__(327),
        styles: [__webpack_require__(319)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_image_service__["a" /* ImageService */]) === "function" && _a || Object])
], ImageListComponent);

var _a;
//# sourceMappingURL=image-list.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "\r\n.main-content{\r\n  padding-top: 25px;\r\n  background-color: transparent!important;\r\n}\r\n\r\nbody{\r\n  background-color: transparent!important;\r\n}\r\n\r\nh1{\r\n  color: #333;\r\n  font-family: \"Fredoka One\", cursive;\r\n  text-align: center;\r\n  font-size: 4em;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.header{\r\n  padding-bottom: 3px;\r\n}\r\n\r\n#title{\r\n  display: inline-block;\r\n  font-size: 2em;\r\n  font-family: 'Pacifico', cursive;\r\n  text-align: right;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.pixabayLogo{\r\n  width: 150px;\r\n}\r\n\r\n@media(max-width: 32em) {\r\n  .pixabayLogo{\r\n    width: 50px;\r\n  }\r\n  #attribution {\r\n    font-size: 0px;\r\n  }\r\n}\r\n\r\n.logo{\r\n  padding-bottom: 24px;\r\n  text-align: center;\r\n  float:right;\r\n}\r\n\r\n#attribution{\r\n  display: block;\r\n  padding-bottom: 8px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "#search-container{\r\n    margin-top: 20%;\r\n}\r\n\r\n.search{\r\n    height: 60px;\r\n    max-height: 60px;\r\n    font-size: 3em;\r\n}\r\n\r\n.avatar{\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.searchButton{\r\n    background-color: #CA1740;\r\n    color: #fff;\r\n    margin-top: 20px;\r\n}\r\n\r\n.image-container{\r\n    width: 300px;\r\n    min-height: 100px;\r\n    max-width: 300px;\r\n    margin: 8px;\r\n    border-radius: 2px;\r\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\r\n    overflow: hidden;\r\n}\r\n\r\n.results{\r\n    padding: 8px;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n#centeredImage {\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 300px;\r\n    min-height: 100px;\r\n    max-width: 300px;\r\n   /* margin: 8px;*/\r\n    border-radius: 2px;\r\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\r\n    overflow: hidden;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"main-content\">\n    <div class=\"header\">\n      <img src=\"./assets/image/camera.png\" style=\"width:50px\">\n      <span id=\"title\"> {{ title }} </span>\n      <div class=\"logo\">\n        <div id=\"attribution\">All images provided by</div>\n        <a href=\"https://pixabay.com\" target=\"_blank\">\n          <img src= \"./assets/image/logo.png\" class=\"pixabayLogo\">\n        </a>\n      </div>\n    </div>\n\n    <app-image-list></app-image-list>\n  </div>\n</div>\n"

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = "<!--\n<input class=\"search\" [(ngModel)]=\"searchQuery\" placeholder=\"Search Images\">\n<button (click)=\"searchImage(searchQuery)\" type=\"button\">Find Image</button>\n\n<p *ngIf=\"searching\" >Fecting data...</p> <!--Delay to load images-->\n<!--\n<div *ngFor=\"let image of images\" class=\"image-container\">\n  <img src=\"{{ image.webformatURL }}\">\n  <p>Tags: {{ image.tags }} </p>\n  <p>User: {{ image.user }} </p>\n  <p>Comments: {{ image.comments }} </p>\n  <p>Likes: {{ image.likes }} </p>\n</div>\n-->\n<md-card style=\"padding-bottom: 10px;\">\n  <md-input-container>\n    <input class=\"search\" mdInput [(ngModel)]=\"searchQuery\" (keyup.enter)=\"searchImage(searchQuery)\" name=\"search\" placeholder=\"Search for Images\">\n  </md-input-container>\n  <br>\n  \n  <button (click)=\"searchImage(searchQuery)\" \n    md-raised-button class=\"searchButton\" type=\"button\">Find Image\n  </button>\n\n</md-card>\n\n<div *ngIf=\"searching\" >\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n</div>\n\n<md-card>\n  <!--<h4 *ngIf=\"imagesFound\" md-subeader>Results</h4>-->\n  <img *ngIf=\"notFound === 0\" src=\"./assets/image/noImageFound.jpg\" id=\"centeredImage\">\n  <masonry [useImagesLoaded]=\"true\">\n    <masonry-brick *ngFor=\"let image of images\" class=image-container>\n      <md-card>\n        <a href=\"{{ image.pageURL }}\" target=\"_bank\">\n          <md-card-header>\n            <div class=\"avatar\" md-card-avatar [ngStyle]=\"{'background-image':'url('+ image.userImageURL +')', 'background-size':'40px 40px'}\"></div>\n            <md-card-title>User: {{ image.user }}</md-card-title>\n          </md-card-header>\n          <img md-card-image src=\"{{image.webformatURL}}\">\n          <md-card-content>\n            <p>Tags: {{ image.tags }}</p>\n            <p>Comments: {{ image.comments }}</p>\n            <p>Likes: {{ image.likes }}</p>\n          </md-card-content>\n        </a>\n      </md-card>\n      <br><br>\n    </masonry-brick>\n  </masonry>\n</md-card>\n\n<div style=\"text-align: right\">\n  <a href=\"http://github.com/marcionitao/sucheBilder\"><img src=\"./assets/image/git.png\" style=\"width:50px; margin-top:20px\"></a>\n</div>"

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(151);


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
        // private query: string;
        this.API_KEY = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].PIXABAY_API_KEY; // key is in "environments" Folder
        this.API_URL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].PIXABAY_URL; // URL is in "environments" Folder
        this.URL = this.API_URL + this.API_KEY + '&q='; // join all variables
        this.perPage = '&per_page=200'; // Nº od image what to show per page
    }
    ImageService.prototype.getImage = function (query) {
        return this.http.get(this.URL + query + this.perPage)
            .map(function (response) { return response.json(); });
    };
    return ImageService;
}());
ImageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ImageService);

var _a;
//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    PIXABAY_API_KEY: '5960338-327167709f43a39e44657a62f',
    PIXABAY_URL: 'https://pixabay.com/api/?key='
};
//# sourceMappingURL=environment.js.map

/***/ })

},[367]);
//# sourceMappingURL=main.bundle.js.map