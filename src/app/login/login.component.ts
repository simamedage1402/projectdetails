import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup
  
  
  constructor( private fb:FormBuilder,) {

   
  }
    



  ngOnInit() :void{
    this.loginForm = this.fb.group({
      firstname: ['' ],
      Lastname: ['' ],
      fatherName:[''],
      dob:[''],
      yearOfPassing:[''],
      gender:[''],
      company:[''],
      Maritalstatus:[''],
      Education:[''],
      university:[''],
      position:[''],
      board:['']


    });
  }
  



 
  submitform(){
    this.loginForm.value
    console.log(this.loginForm.value)
  }
  
  
}


