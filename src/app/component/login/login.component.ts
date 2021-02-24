import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

// import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = " ";
  password = " ";
  constructor(public authService : AuthService) { }

  ngOnInit(): void {

  }

  login() {

 }
}
