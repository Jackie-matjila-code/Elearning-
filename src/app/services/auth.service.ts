import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {}

  // // Sign in with Google
   GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
   }

   // Sign in with Facebook
   FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
        this.router.navigate(['/home']);
    }).catch((error) => {
        console.log(error)
    })
  }



}
