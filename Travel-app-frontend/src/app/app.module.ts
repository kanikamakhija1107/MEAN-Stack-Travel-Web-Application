// built-in
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { UserService } from './services/user.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ManageBlogsComponent } from './components/admin/manage-blogs/manage-blogs.component';
import { ManageFeedbacksComponent } from './components/admin/manage-feedbacks/manage-feedbacks.component';

import { CreatePackageComponent } from './components/admin/create-package/create-package.component';
import { ManagePackageComponent } from './components/admin/manage-package/manage-package.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { JwtModule } from '@auth0/angular-jwt';
import { PackageComponent } from './components/package/package.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DisplayfeedbackComponent } from './components/displayfeedback/displayfeedback.component';
import { BlogComponent } from './components/blog/blog.component';
import { DisplayblogComponent } from './components/displayblog/displayblog.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FixedpackagesComponent } from './components/fixedpackages/fixedpackages.component';
import { EuropeComponent } from './components/fixedpackages/europe/europe.component';
import { AsiaComponent } from './components/fixedpackages/asia/asia.component';
import { AustraliaComponent } from './components/fixedpackages/australia/australia.component';
import { AfricaComponent } from './components/fixedpackages/africa/africa.component';
import { NorthamericaComponent } from './components/fixedpackages/northamerica/northamerica.component';
import { SouthamericaComponent } from './components/fixedpackages/southamerica/southamerica.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CartDisplayComponent } from './components/cart-display/cart-display.component';
import { cartDisplayService } from './services/cartDisplay.service';
import { PackageDetailsComponent } from './components/packageDetails/packageDetails.component';
import { TravelPackageDetail } from './services/travelPackageDetail.service';
import { PackageService } from './services/package.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
   
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    NavBarComponent,
    AdminComponent,
    AdminHomeComponent,
    ManageBlogsComponent,
    ManageFeedbacksComponent,
   
    CreatePackageComponent,
    ManagePackageComponent,
    HomepageComponent,
    AboutusComponent,
    PackageComponent,
    PackageComponent,
    FeedbackComponent,
    DisplayfeedbackComponent,
    BlogComponent,
    DisplayblogComponent,
    ContactusComponent,
    FixedpackagesComponent,
    EuropeComponent,
    AsiaComponent,
    AustraliaComponent,
    AfricaComponent,
    NorthamericaComponent,
    SouthamericaComponent,
    PaymentComponent,
    CartDisplayComponent,
    PackageDetailsComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    })
 
  ],
  
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    
    multi: true
  },
  AuthGuard,
  UserService,
  cartDisplayService,
  TravelPackageDetail,
  PackageService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
