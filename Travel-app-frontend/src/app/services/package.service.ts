import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TravelPackageDetail } from './travelPackageDetail.service';
import { Package } from '../models/package.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PackageService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  packageNav: TravelPackageDetail;
  constructor(private http: HttpClient, private router: Router, private travelService: TravelPackageDetail) { }

  //HttpMethods

  postPackage(travelPackage: Package){
    return this.http.post(environment.apiBaseUrl+'/createPackage',travelPackage,this.noAuthHeader);
  }

  getPackages() {
    return this.http.get(environment.apiBaseUrl + '/package');
  }

  navigate(packageNav){
    console.log("search Prod Service"+packageNav._id);
    this.travelService.getProduct(packageNav._id);
    localStorage.setItem('TravelId',packageNav._id);
    console.log("packageNav"+packageNav.packageName);
    this.router.navigate(['/productDetail']);
  }

}

  

  

  


