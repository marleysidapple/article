"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var post_service_1 = require('./post.service');
var http_1 = require('@angular/http');
var ListComponent = (function () {
    function ListComponent(_router, _postService) {
        var _this = this;
        this._router = _router;
        this._postService = _postService;
        this._postService.getPosts()
            .subscribe(function (posts) { _this.allPosts = posts; });
    }
    ListComponent = __decorate([
        core_1.Component({
            selector: 'mycontent',
            templateUrl: "app/blogs/list.component.html",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, post_service_1.PostService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map