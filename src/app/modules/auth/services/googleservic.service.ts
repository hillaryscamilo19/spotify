import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class GoogleservicService {
  private readonly URL = environment.api
  subject = new BehaviorSubject(false);
  private token!: string;

  constructor(private afauth: AngularFireAuth, private http: HttpClient) { }


  async loginWithGoogle(email: string, password: string) {
    try {
      console.log('usuario registrado');

      return await this.afauth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    } catch (err) {
      console.log('error en el login', err);
      return null;
    }
  }

  logout() {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_iN');
  }


}
