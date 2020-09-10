import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Travel } from '../models/addToCart';
import { environment } from '../../environments/environment';
import { Travel } from '../models/addToCart';
@Injectable()

export class addToCartService {
  private scanURL: string;
  
  constructor(private http: HttpClient) {
    this.scanURL = environment.apiBaseUrl+'/cart';
  }
addToCart(packagee: Travel): Promise<any> {
    console.log("angular service");
    // tslint:disable-next-line:prefer-const  
    let promise = new Promise((resolve, reject) => {
      this.http
      .post<Array<Travel>>(this.scanURL,packagee)
      .subscribe(data => {
        resolve(data);
        console.log("service:"+data);
      },
      error => {
        reject(error);
        alert("Error while adding product");
      });
    });
    return promise;
  }
}
