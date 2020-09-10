import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../../services/package.service';
import { Router } from "@angular/router";
import { Package } from '../../../models/package.model';


@Component({
  selector: 'app-manage-package',
  templateUrl: './manage-package.component.html',
  styleUrls: ['./manage-package.component.scss']
})
export class ManagePackageComponent implements OnInit {
  package;
  packages: Package[];

  constructor(private packageService: PackageService, private router: Router) { }

  ngOnInit() {
    this.fetchPackages();
  }

  fetchPackages(){
    this.packageService
      .getPackages()
      .subscribe((data: Package[]) => {
      this.packages = data;
      // console.log('Data Requested'); 
      console.log(this.packages); 

  });
  }

  


}
