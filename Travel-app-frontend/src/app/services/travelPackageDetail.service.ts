import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Travel } from '../models/addToCart';
import { environment } from '../../environments/environment';
@Injectable()

export class TravelPackageDetail {
  travelInfoURL = environment.apiBaseUrl+'/productdetail';
  constructor(private http: HttpClient) {
  }
  getProduct(travelId:String): Promise<any> {
    // tslint:disable-next-line:prefer-const  
    let promise = new Promise((resolve, reject) => {
      console.log('Here is my travel id' + travelId);
      this.http.get<Travel>(this.travelInfoURL+"/"+travelId).subscribe(data => {
        resolve(data);
      },
      error => {
        reject(error);
      });
    });
    return promise;
  }
}
