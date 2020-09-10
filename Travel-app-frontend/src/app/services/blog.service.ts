import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };


  constructor(private http: HttpClient) { }

  postBlog(travelBlog: Blog){
    return this.http.post(environment.apiBaseUrl+'/blogs',travelBlog,this.noAuthHeader);
  }

  getBlogs(){
    return this.http.get(environment.apiBaseUrl + '/displayblogs');
}

}














