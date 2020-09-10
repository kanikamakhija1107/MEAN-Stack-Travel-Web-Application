import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreatePackageComponent } from './components/admin/create-package/create-package.component';
import { PackageComponent } from './components/package/package.component';
import { ManagePackageComponent } from './components/admin/manage-package/manage-package.component';
import {ManageBlogsComponent} from './components/admin/manage-blogs/manage-blogs.component';
import {FeedbackComponent} from './components/feedback/feedback.component';
import { DisplayfeedbackComponent } from './components/displayfeedback/displayfeedback.component';
import {BlogComponent} from './components/blog/blog.component';
import { DisplayblogComponent} from './components/displayblog/displayblog.component';
import {ContactusComponent} from './components/contactus/contactus.component';
import { EuropeComponent} from './components/fixedpackages/europe/europe.component';
import { AsiaComponent} from './components/fixedpackages/asia/asia.component';
import { AustraliaComponent} from './components/fixedpackages/australia/australia.component';
import { AfricaComponent} from './components/fixedpackages/africa/africa.component';
import { NorthamericaComponent} from './components/fixedpackages/northamerica/northamerica.component';
import { SouthamericaComponent} from './components/fixedpackages/southamerica/southamerica.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CartDisplayComponent } from './components/cart-display/cart-display.component';
import { PackageDetailsComponent } from './components/packageDetails/packageDetails.component';
 import {ManageFeedbacksComponent} from './components/admin/manage-feedbacks/manage-feedbacks.component';
export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/', pathMatch: 'full'
    },
    {
        path: 'admin', component: AdminComponent, canActivate:[AuthGuard]
    },
    
    {
        path: 'homepage', component: HomepageComponent, canActivate:[AuthGuard]
    },
    {
        path: 'aboutus', component: AboutusComponent, canActivate:[AuthGuard]
    },
    {
        path: 'createPackage', component: CreatePackageComponent, canActivate:[AuthGuard]
    },
    {
        path: 'package', component: PackageComponent, canActivate:[AuthGuard]
    },
    {
        path: 'managePackage', component: ManagePackageComponent, canActivate:[AuthGuard]
    },
    {
        path: 'manageBlog', component: ManageBlogsComponent, canActivate:[AuthGuard]
    },

     {
        path: 'manageFeedback', component: ManageFeedbacksComponent, canActivate:[AuthGuard]
     },

    {
         path : 'feedbacks', component : FeedbackComponent, canActivate:[AuthGuard]
    },
    {
        path: 'displayfeedbacks', component : DisplayfeedbackComponent, canActivate:[AuthGuard]
    },
    {
        path: 'blogs', component : BlogComponent, canActivate:[AuthGuard]
    },
    {
        path: 'displayblogs', component : DisplayblogComponent, canActivate:[AuthGuard]
    },
    {
        path: 'contactus', component : ContactusComponent, canActivate:[AuthGuard]
    },
    {
        path: 'fixedpackages/europe', component : EuropeComponent, canActivate:[AuthGuard]
    },
    {
        path: 'fixedpackages/asia', component : AsiaComponent, canActivate:[AuthGuard]
    },
    {
        path: 'fixedpackages/africa', component : AfricaComponent, canActivate:[AuthGuard]
    },
    {
        path: 'fixedpackages/australia', component : AustraliaComponent, canActivate:[AuthGuard]
    },
    {
        path: 'fixedpackages/northamerica', component : NorthamericaComponent, canActivate:[AuthGuard]
    },
    {
        path: 'fixedpackages/southamerica', component : SouthamericaComponent, canActivate:[AuthGuard]
    },
    { 
        path: 'cart', component: CartDisplayComponent  
    },
    { 
        path: 'payment', component:PaymentComponent  
    },
    { 
        path: 'productDetail', component:PackageDetailsComponent  
    }



   

    
];