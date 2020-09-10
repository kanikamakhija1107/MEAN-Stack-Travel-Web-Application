
import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';
import { Router } from "@angular/router";

// 
import { Feedback } from '../../models/feedback.model';
// 

@Component({
  selector: 'app-displayfeedback',
  templateUrl: './displayfeedback.component.html',
  styleUrls: ['./displayfeedback.component.scss']
})

export class DisplayfeedbackComponent implements OnInit {
  
  // 
  feedbacks: Feedback[];
// 
  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit() {
    // 
    this.fetchFeedbacks();
// 
  }
// 
fetchFeedbacks(){
    this.feedbackService
      .getFeedbacks()
      .subscribe((data: Feedback[]) => {
      this.feedbacks = data;
      // console.log('Data Requested'); 
      console.log(this.feedbacks); 

  });
  }
  // 
}















  