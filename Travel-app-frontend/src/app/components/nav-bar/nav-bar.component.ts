import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService, private router : Router) { }

  displayLinks(): boolean {
    return !this.userService.isLoggedIn();
  }

  displayLogout(): boolean {
    return this.userService.isLoggedIn();
  }

  isAdmin(): boolean {
    return this.userService.isAdmin();
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

}
