import { Component, NgZone } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './blogs/list.component';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';

@Component({
  selector: 'parent',
  templateUrl:'app/main.html',
  directives: [ROUTER_DIRECTIVES, HeaderComponent, SidebarComponent]
})


@RouteConfig([
        { path: '/list', name: 'BlogList', component: ListComponent/*,  useAsDefault: false*/ },
   
])






export class AppComponent { 
	 constructor(private _router: Router , private _zone:NgZone){}
}

