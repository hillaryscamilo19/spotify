import { GoogleservicService } from './../../services/googleservic.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { response } from 'express';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  usuario = {
    email: '',
    password: '',
  };
  errorSession: boolean = false;
  formLogin: FormGroup = new FormGroup({});

  constructor(private GoogleApi: GoogleservicService,private authService: AuthService, private cookie: CookieService, private router: Router) {}


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
    this.authService.sendCredentials(email, password)

    .subscribe(responseOk => {
      console.log('Seccion iniciada correcta', responseOk);
      const { tokenSession, data } = responseOk;
      this.cookie.set('token', tokenSession, 4, '/')
      this.router.navigate(['/', 'tracks'])
    },
    err => {
      this.errorSession = true
      console.log('⚠Ocurrio error con tu email o password');
    })
  }



  googleToken() {
    const { email, password } = this.usuario;
    console.log(this.usuario);
    this.GoogleApi.loginWithGoogle(email, password).then((res) => {
      console.log('se registro:', res);
      this.router.navigate(['/']);
    });
  }

}
