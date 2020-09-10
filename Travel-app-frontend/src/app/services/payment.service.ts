import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cart } from '../models/cartModel';
import { environment } from '../../environments/environment';

@Injectable()

export class PaymentService {
  paymentURL = environment.apiBaseUrl+'/payment';
 
  
  constructor(private http: HttpClient) {
  }
  
  payment(): Promise<any> {
    // tslint:disable-next-line:prefer-const  
    let promise = new Promise((resolve, reject) => {
      this.http
      .get<Array<Cart>>(this.paymentURL)
      .subscribe(data => {
        resolve(data);
      },
      error => {
        reject(error);
      });
    });
    return promise;
  }

}
