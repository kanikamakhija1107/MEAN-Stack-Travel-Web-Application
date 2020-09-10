

import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router } from "@angular/router";

// 
import { Blog } from '../../models/blog.model';
// 

@Component({
  selector: 'app-displayblog',
  templateUrl: './displayblog.component.html',
  styleUrls: ['./displayblog.component.scss']
})


export class DisplayblogComponent implements OnInit {

  
  // 
  blogs: Blog[];
// 
  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    // 
    this.fetchBlogs();
// 
  }
// 
fetchBlogs(){
    this.blogService
      .getBlogs()
      .subscribe((data: Blog[]) => {
      this.blogs = data;
      // console.log('Data Requested'); 
      console.log(this.blogs); 

  });
  }
  // 
}














