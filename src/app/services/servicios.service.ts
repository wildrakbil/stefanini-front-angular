import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';
import swal from 'sweetalert2';

import { Service } from '../models/service';
import {Router} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: "Bearer " + localStorage.getItem("token")
  })
};

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  servicesUrl = 'https://spring-on-heroku1.herokuapp.com/api/services/';
  serviceUrl =  'https://spring-on-heroku1.herokuapp.com/api/service';

  constructor(private http: HttpClient, private router: Router) {}

  getServices(): Observable<Service[]> {

    console.log("httpOptions",httpOptions)

    return this.http.get<Service[]>(this.servicesUrl, httpOptions).pipe(
      catchError((e) => {
        this.router.navigate(['/login']);
        swal.fire('Error', `Debe iniciar sesion primero`, 'error');
        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }

  getService(id): Observable<Service> {
    return this.http.get<Service>(`${this.serviceUrl}/${id}`,httpOptions).pipe(
      catchError(e => {
        this.router.navigate(['/home']);
        console.error(e.error.mensaje);
        swal.fire('Error al consultar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }


  create(service: Service): Observable<Service> {
    return this.http.post(this.servicesUrl,service,httpOptions).pipe(
      map((response: any) => response.person as Service),
      catchError(e => {
        if (e.error.status == 500) {
          swal.fire('Nuevo cliente', `El cliente ${service.name} ya se encuentra creado`, 'error');
        }else{
          console.error(e.error.mensaje);
          swal.fire(e.error.mensaje, e.error.error + e.error.status, 'error');
        }
        return throwError(e);
      })
    );
  }

  update(service: Service): Observable<any> {
    return this.http.put(`${this.servicesUrl}/${service.id}`,service,httpOptions).pipe(
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

  delete(id: Number): Observable<Service> {
    return this.http.delete<Service>(`${this.servicesUrl}/${id}`, httpOptions).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }


}
