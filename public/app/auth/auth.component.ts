import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';

@Component({
	selector: 'login',
	templateUrl: `app/auth/auth.component.html`,
	directives: [ROUTER_DIRECTIVES]

})


export class AuthComponent 
{ 
	constructor(private _router: Router){}
}