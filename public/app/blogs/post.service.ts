import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';


@Injectable()
export class PostService{
	private _url = 'http://localhost:7000/api/posts';

	constructor(private _http: Http){ }

	getPosts(){
		return this._http.get(this._url)
		.map(res => res.json());
	}

	//pass the data from the form as an argument to post the data
	createPost(post){
		return this._http.post(this._url, JSON.stringify(post))
		.map(res => res.json());
	}
}