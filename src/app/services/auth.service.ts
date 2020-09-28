
import { Injectable } from "@angular/core";
import {Router} from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Person } from "../models/person";
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:8080/api/";
  helper = new JwtHelperService();
  decodedToken: any;
  currentUser: Person;

  constructor(private http: HttpClient,private router:Router) { }

  login(model: any) {
    return this.http.post(this.authUrl + "login", model).pipe(
      map((response: any) => {
        const user = response;
        localStorage.setItem("token", user.token);
        localStorage.setItem("user", JSON.stringify(user.userToReturn));
        this.decodedToken = this.helper.decodeToken(user.token);
        this.currentUser = user.userToReturn;
      }),
      catchError(e =>{
        swal.fire('Error', `Usuario o calve incorrecta`, 'warning');
        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !this.helper.isTokenExpired(token);
  }
}
