
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Person } from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:8080/api/";
  helper = new JwtHelperService();
  decodedToken: any;
  currentUser: Person;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.authUrl + "login", model).pipe(
      map((response: any) => {
        const user = response;
        localStorage.setItem("token", user.token);
        localStorage.setItem("user", JSON.stringify(user.userToReturn));
        this.decodedToken = this.helper.decodeToken(user.token);
        this.currentUser = user.userToReturn;
        
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !this.helper.isTokenExpired(token);
  }
}
