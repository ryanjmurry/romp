import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  maxDate: Date;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  createForm() {
    this.signupForm = this.fb.group({
      email: [''],
      password: [''],
      confirmPassword: [''],
      dateOfBirth: [''],
      agreeToTerms: ['']
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
