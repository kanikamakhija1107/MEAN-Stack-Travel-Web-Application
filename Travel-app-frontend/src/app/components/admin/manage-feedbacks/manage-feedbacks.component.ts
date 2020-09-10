import { Component, OnInit } from '@angular/core';
 import { FeedbackService } from '../../../services/feedback.service';
 import { Router } from "@angular/router";
 import { Feedback } from '../../../models/feedback.model';

@Component({
  selector: 'app-manage-feedbacks',
  templateUrl: './manage-feedbacks.component.html',
  styleUrls: ['./manage-feedbacks.component.scss']
})
export class ManageFeedbacksComponent implements OnInit { 
   feedback;
   feedbacks: Feedback[];

  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit() {
     this.fetchFeedbacks();
  }

   fetchFeedbacks(){
     this.feedbackService
     .getFeedbacks()
       .subscribe((data: Feedback[]) => {
      this.feedbacks = data;
       // console.log('Data Requested'); 
       console.log(this.feedbacks); 

 });
  }

  


}

























