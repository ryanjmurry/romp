import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  maxDate: Date;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  private createForm() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      dateOfBirth: ['', Validators.required],
      agreeToTerms: ['', Validators.requiredTrue]
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.signupForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
