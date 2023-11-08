import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;

  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern(
        "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
      )]]
    })
  }

  ngOnInit(): void {

  }

  get formControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log('Form', this.loginForm.value)
    localStorage.setItem('user', this.loginForm.value.email)
    localStorage.clear()
    console.log('storage', localStorage.getItem('user'))
    // if(this.loginForm.valid) {
    //   this.router.navigate(["/profile"])
    // }
  }
}
