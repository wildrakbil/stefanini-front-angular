import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import {Router} from '@angular/router';

import swal from 'sweetalert2';



const API_URL = 'https://spring-on-heroku1.herokuapp.com/api/persons';
const API_PERSON_URL = 'https://spring-on-heroku1.herokuapp.com/api/person';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: "Bearer " + localStorage.getItem("token")
  })
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient,private router:Router) { }

  getPersons(): Observable<User[]> {
    return this.http.get<User[]>(API_URL,httpOptions)
    .pipe(
      catchError(e =>{
        this.router.navigate(['/login']);
        swal.fire('Error', `Debe iniciar sesion primero`, 'error');
        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }

  getPerson(id): Observable<User> {
    return this.http.get<User>(`${API_PERSON_URL}/${id}`,httpOptions).pipe(
      catchError(e => {
        this.router.navigate(['/home']);
        console.error(e.error.mensaje);
        swal.fire('Error al consultar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  create(person: User): Observable<User> {
    return this.http.post(API_PERSON_URL,person,httpOptions).pipe(
      map((response: any) => response.person as User),
      catchError(e => {
        if (e.error.status == 500) {
          swal.fire('Nuevo cliente', `El cliente ${person.username} ya se encuentra creado`, 'error');
        }else{
          console.error(e.error.mensaje);
          swal.fire(e.error.mensaje, e.error.error + e.error.status, 'error');
        }
        return throwError(e);
      })
    );
  }

  update(person: User): Observable<any> {
    return this.http.put(`${API_PERSON_URL}/${person.id}`,person,httpOptions).pipe(
      catchError(e => {
        if (e.error.status == 400) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  delete(id: Number): Observable<User> {
    return this.http.delete<User>(`${API_PERSON_URL}/${id}`, httpOptions).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }
}
