import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PackageService } from '../../../services/package.service';
import { Package } from '../../../models/package.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.scss']
})
export class CreatePackageComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  noOfDays; 
  selectedFile = null;
  
  onFileSelected(event){
    console.log(event);
    this.selectedFile = event.target.files[0];
  }

  onUpload(){

  }

  selectedPackage: Package = {
    packageID: '',
    packageName: '',
    source:'',
    price: 0,
    maxPersons: 0,
    dates1:'',
    dates2:'',
    dates3:'',
    // noOfDays: 0,
    day1Title: '',
    day1Description: '',
    day2Title: '',
    day2Description: ''
  };
 

  constructor(private packageService: PackageService, private http: HttpClient) { }

  ngOnInit() {
    
  }

  onSubmit(form: NgForm) {
    this.packageService.postPackage(form.value).subscribe(
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
