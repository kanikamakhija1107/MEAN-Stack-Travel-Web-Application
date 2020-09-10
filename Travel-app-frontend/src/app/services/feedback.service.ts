import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Feedback } from '../models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };


  constructor(private http: HttpClient) { }

  postFeedback(travelFeedback: Feedback){
    return this.http.post(environment.apiBaseUrl+'/feedbacks',travelFeedback,this.noAuthHeader);
  }

  getFeedbacks(){
    return this.http.get(environment.apiBaseUrl + '/displayfeedbacks');
}

}

