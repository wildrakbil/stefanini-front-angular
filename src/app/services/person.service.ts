import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Person } from '../models/person';
import { AuthService } from './auth.service';



const API_URL = 'http://localhost:8080/api/persons';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: "Bearer " + localStorage.getItem("token")
  })
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient,private auteService: AuthService) { }

  getPersons(): Observable<Person[]> {
    return this.http.get(API_URL,httpOptions)
    .pipe(map(response => response as Person[])
    );
  }
}
