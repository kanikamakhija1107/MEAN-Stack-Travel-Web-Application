import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Feedback} from "../../models/feedback.model";
import {FeedbackService} from '../../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})

export class FeedbackComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  selectedFeedback: Feedback = {
  
    name:'',
    review: '',
    rating: '',
    email:'',
   
  };
  
  feedbacks: Feedback[];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {

    // 
      }
    // 
     
      // 
   

  onSubmit(form: NgForm) {
    this.feedbackService.postFeedback(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        // this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }
 

   

}




































