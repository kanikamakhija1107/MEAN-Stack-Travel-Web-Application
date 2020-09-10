import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService,private router : Router) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  urlToNavigate: string;
  ngOnInit() {
    if(this.userService.isLoggedIn()){
      this.setUrl();
      this.router.navigateByUrl(this.urlToNavigate); 
    }
  }

  setUrl() {
    this.urlToNavigate = this.userService.isAdmin() ? 'admin' : 'homepage';
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        debugger
        this.userService.setToken(res['token']);
        this.setUrl();
        this.router.navigateByUrl(this.urlToNavigate);
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
