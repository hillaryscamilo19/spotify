import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});

  constructor(private asAuthServices: AuthService) {}


  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.min(12)
        ])
      }
    )
  }

  sendLogin(): void{
    const {email, password} = this.formLogin.value
    this.asAuthServices.sendCredentials(email, password)

  }

}
