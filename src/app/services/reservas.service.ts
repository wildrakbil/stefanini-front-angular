import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import {Router} from '@angular/router';
import { Reserva } from '../models/reserva';

import swal from 'sweetalert2';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: "Bearer " + localStorage.getItem("token")
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  reservasUrl = 'https://spring-on-heroku1.herokuapp.com/api/bookings';
  reservaUrl = 'https://spring-on-heroku1.herokuapp.com/api/booking';

  constructor(private http: HttpClient,private router:Router) { }

  create(reserva: any): Observable<Reserva> {
    return this.http.post(this.reservaUrl,reserva,httpOptions).pipe(
      map((response: any) => response),
      catchError(e => {
        if (e.error.status == 500) {
          swal.fire('Nueva Reserva', `Ya existe una reserva registrada en ese horario`, 'error');
        }else{
          console.error(e.error.mensaje);
          swal.fire(e.error.mensaje, e.error.error + e.error.status, 'error');
        }
        return throwError(e);
      })
    );
  }
  
  getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.reservasUrl,httpOptions)
    .pipe(
      catchError(e =>{
        this.router.navigate(['/login']);
        swal.fire('Error', `Debe iniciar sesion primero`, 'error');
        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }

  getPerson(id): Observable<Reserva> {
    return this.http.get<Reserva>(`${this.reservaUrl}/${id}`,httpOptions).pipe(
      catchError(e => {
        this.router.navigate(['/home']);
        console.error(e.error.mensaje);
        swal.fire('Error al consultar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  update(person: Reserva): Observable<any> {
    return this.http.put(`${this.reservasUrl}/${person.id}`,person,httpOptions).pipe(
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

  delete(id: Number): Observable<Reserva> {
    return this.http.delete<Reserva>(`${this.reservaUrl}/${id}`, httpOptions).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }
}
