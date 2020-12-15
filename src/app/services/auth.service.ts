
import { Injectable } from "@angular/core";
import {Router} from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "../models/user";
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "https://spring-on-heroku1.herokuapp.com/api/";

  helper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;

  constructor(private http: HttpClient,private router:Router) { }

  login(model: any) {
    return this.http.post(this.authUrl + "login", model).pipe(
      map((response: any) => {
        const user = response;
        localStorage.setItem("token", user.token);
        localStorage.setItem("user", user.user.username);
        this.decodedToken = this.helper.decodeToken(user.token);
        this.currentUser = user.user.username;
      }),
      catchError(e =>{
        swal.fire('Error', `Usuario o clave incorrecta`, 'warning');
        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !this.helper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log('user out storage');
  }

}
