import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
    
    if (!this.userService.isAdmin()) {
      this.router.navigateByUrl('/userprofile');
      // this.userService.deleteToken();
      return false;
    }
  } 

}
