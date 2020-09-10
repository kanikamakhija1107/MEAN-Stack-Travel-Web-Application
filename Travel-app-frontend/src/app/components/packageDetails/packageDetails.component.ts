import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/finally';
import { Travel } from '../../models/addToCart';
// import { Product } from '../../models/productScannerModel';
import { TravelPackageDetail } from '../../services/travelPackageDetail.service';
import { addToCartService } from '../../services/addToCart.service';
import { Location } from '@angular/common';
import { Package } from '../../models/package.model';
import { PackageService } from '../../services/package.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-packageDetails',
  templateUrl: './packageDetails.component.html',
  styleUrls: ['./packageDetails.component.scss'],
  providers: [TravelPackageDetail, addToCartService]
})
export class PackageDetailsComponent implements OnInit {

  packages: Package[];

  travelDetail: String;
  travelAdd: Travel;
  name = "";
  travelName = "";
  description = "";
  price = 0.0;
  travelPrice = 0.0;
  rating = 0;
  quantity;
  source;
  maxPersons = 0;
  noOfDays = 0;
  userDetails;
  userId = "";
  url='';
  inventorycount='';

  constructor(private packageService: PackageService, private travelPackageDetail: TravelPackageDetail, private _location: Location, private addToCart: addToCartService, private userService: UserService) { 
    this.travelPackageDetail=travelPackageDetail; 
  }

  ngOnInit() {
    // localStorage.getItem("TravelId");
    // console.log("--------" + localStorage.getItem("TravelId"));
    // console.log("Get lost in packages");
    this.fetchPackages();
    this.travelPackageDetail.getProduct(localStorage.getItem("TravelId")).then(
       data =>{
         var productDetails=JSON.parse(JSON.stringify(data));
         this.name = productDetails.name;
         this.price = productDetails.price;
       }
     );
  }

  fetchPackages() {
    this.packageService
      .getPackages()
      .subscribe((data: Package[]) => {
        this.packages = data;
        // console.log('Data Requested'); 
        console.log(this.packages);
        
      });
  }

  goBack(){
    this._location.back();
  }

  onSelectQty(qty){
    this.quantity = qty;
  }

  addtocart(packageName, price){
    // this.price = price;
    this.name = packageName;
    this.price = price;
    console.log("packageName"+packageName);
    if(isNaN(this.quantity) || this.quantity==0) {
      alert("Please select quantity");
    }
    else{
    this.price = this.price * this.quantity;
    // this.getData();
    this.setUserId();
    console.log("Hey this is user id" + this.userId + packageName);
    this.travelAdd = this.prepareAddToCart(packageName, this.price);
    console.log(this.travelAdd);
    console.log("------" + this.userId);
    alert("Product added successfully");
    this.addToCart.addToCart(this.travelAdd).then(
      product => { 
        alert("Product added successfully");
        }
      );
    }
  }

  prepareAddToCart(packageName, price): Travel {
    const travel: Travel = {
      userId: this.userId ,
      id: '',
      name: packageName as string,
      description: '',
      price: price as number,
      quantity: this.quantity as number,
      // image: this.url as string
    };
    return travel;
  }

  setUserId(){
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log(this.userDetails._id);
        this.userId = this.userDetails._id;
        console.log("Hey this is user id" + this.userId);
      },
      err => { 
        console.log(err);
        
      }
    );
  }

    getStars(rating: number){
    var val = rating;
    var size = val/5*100;
    return size + '%';
  }

}