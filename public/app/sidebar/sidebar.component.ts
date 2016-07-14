import { Component, AfterViewInit } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
declare var $:JQueryStatic;

@Component({
	selector: 'mysidebar',
	templateUrl: `app/sidebar/sidebar.component.html`,
	directives: [ROUTER_DIRECTIVES]

})




export class SidebarComponent { 
	constructor(private _router: Router){}


	ngAfterViewInit(){
		$('.xn-openable').off('click').on('click', function(){
			$(this).toggleClass('active');
		});

	}
		



}