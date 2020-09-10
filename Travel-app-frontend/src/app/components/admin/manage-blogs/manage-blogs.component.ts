import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Router } from "@angular/router";
import { Blog } from '../../../models/blog.model';


@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.scss']
})

export class ManageBlogsComponent implements OnInit {
  blog;
  blogs: Blog[];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    this.fetchBlogs();
  }

  fetchBlogs(){
    this.blogService
      .getBlogs()
      .subscribe((data: Blog[]) => {
      this.blogs = data;
      // console.log('Data Requested'); 
      console.log(this.blogs); 

  });
  }

  


}















