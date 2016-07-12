import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';

@Component({
	selector: 'myheader',
	templateUrl: `app/header/header.component.html`,
	directives: [ROUTER_DIRECTIVES]

})


export class HeaderComponent 
{ 
	constructor(private _router: Router){}
}