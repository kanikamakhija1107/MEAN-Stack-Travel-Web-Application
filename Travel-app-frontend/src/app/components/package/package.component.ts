import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service';
import { Router } from "@angular/router";
import { TravelPackageDetail } from 'src/app/services/travelPackageDetail.service';
// 
import { Package } from '../../models/package.model';
// 

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
  providers: [PackageService, TravelPackageDetail]
})
export class PackageComponent implements OnInit {
  
  // 
  packages: Package[];
  selectedProduct:Package;
// 



  constructor(private packageService: PackageService, private router: Router) { }

  ngOnInit() {
    // 
    this.fetchPackages();
// 
  }
// 
  fetchPackages(){
    this.packageService
      .getPackages()
      .subscribe((data: Package[]) => {
      this.packages = data;
      // console.log('Data Requested'); 
      console.log(this.packages); 

  });
  }

  nav(sproduct: Package){
    this.selectedProduct=sproduct;
    console.log(this.selectedProduct);
    this.packageService.navigate(this.selectedProduct);
  }
  // 
}
