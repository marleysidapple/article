import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';


@Component({
	selector: 'mycontent',
	templateUrl: `app/dashboard/dashboard.component.html`,
	directives: [ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS]
})


export class DashboardComponent { 
 
	constructor(private _router: Router){}


}