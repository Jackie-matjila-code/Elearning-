import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable} from 'rxjs';
import { auth } from 'firebase/app';
//import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //name: string = "" ;
  email: string = "";
  password: string = "";


  constructor(public authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


}
