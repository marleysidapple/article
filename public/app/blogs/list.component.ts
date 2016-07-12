import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import { PostService } from './post.service';
import { HTTP_PROVIDERS } from '@angular/http';


@Component({
	selector: 'mycontent',
	templateUrl: `app/blogs/list.component.html`,
	directives: [ROUTER_DIRECTIVES],
	providers: [PostService, HTTP_PROVIDERS]
})


export class ListComponent { 


	allPosts; 
	constructor(private _router: Router, private _postService: PostService){
		this._postService.getPosts()
			.subscribe(
				posts => {this.allPosts = posts} 
				);  
	}


}