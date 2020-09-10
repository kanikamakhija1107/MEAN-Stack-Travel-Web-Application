
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Contactus} from "../../models/contactus.model";
import {ContactusService} from '../../services/contactus.service';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  selectedContactus: Contactus = {
  
    name:'',
    email: '',
    enquirydetails: '',
    
    
  };
  
  contactusd: Contactus[];

  constructor(private contactusService: ContactusService) { }

  ngOnInit() {

    // 
      }
    // 
     
      // 
   

  onSubmit(form: NgForm) {
    this.contactusService.postContactus(form.value).subscribe(
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






















