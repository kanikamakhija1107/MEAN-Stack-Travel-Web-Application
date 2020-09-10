import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Contactus } from '../models/contactus.model';

@Injectable({
  providedIn: 'root'
})
export class ContactusService { 


  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };


  constructor(private http: HttpClient) { }

  postContactus(travelContactus: Contactus){
    return this.http.post(environment.apiBaseUrl+'/contactus',travelContactus,this.noAuthHeader);
  }



}





















