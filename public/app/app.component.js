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
var header_component_1 = require('./header/header.component');
var sidebar_component_1 = require('./sidebar/sidebar.component');
var auth_component_1 = require('./auth/auth.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var list_component_1 = require('./blogs/list.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent(_router, _zone) {
        this._router = _router;
        this._zone = _zone;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'parent',
            templateUrl: 'app/main.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, sidebar_component_1.SidebarComponent, auth_component_1.AuthComponent, dashboard_component_1.DashboardComponent]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/list', name: 'BlogList', component: list_component_1.ListComponent },
            { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
            { path: '/', name: 'Dashboard', component: dashboard_component_1.DashboardComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, core_1.NgZone])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map