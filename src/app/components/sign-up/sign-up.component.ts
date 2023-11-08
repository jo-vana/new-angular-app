import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.scss']
})

export class SignUpComponent {
  hide = true;
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: ''
    })
  }

  onSubmit() {

  }
}
