import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Blog} from "../../models/blog.model";
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  selectedBlog: Blog = {
  
    title:'',
    content: '',
    name: '',
    date: '',
    
   
  };
  
  blogs: Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {

    // 
      }
    // 
     
      // 
   

  onSubmit(form: NgForm) {
    this.blogService.postBlog(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        // this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }
 

   

}
















