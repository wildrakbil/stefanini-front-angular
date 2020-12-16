import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { PersonService } from 'src/app/services/person.service';
import { User } from 'src/app/models/user';
import { IPropertiesLPS, APP_CONFIG } from 'src/properties/properties.lps';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})


export class LoginComponent implements OnInit {

  public _lpsConfig:IPropertiesLPS;

  constructor(private authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    private afAuth: AngularFireAuth,
    private personService: PersonService,
    @Inject(APP_CONFIG) private appConfig: any) { 
      this._lpsConfig = appConfig;
    }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.alertService.info('Checking User Info');
    const loginObserver = {
      next: x => {
        console.log('User logged in');
        this.alertService.success('Logged In');
        swal.fire('oK', `Sesion iniciada`, 'success');
        this.router.navigateByUrl('/');
      },
      error: e => {
        console.log(e);
        swal.fire('Error', `Usuario o clave incorrecta`, 'warning');
        //this.alertService.danger('Unable to Login');
      }
    };
    this.authService.login(f.value).subscribe(loginObserver);
  }

  async loginGoogle() {
    const res = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const user = res.user;
    console.log(user);

    //var f = {username: user.email.substring(0, 20), password:user.email}; // Se comenta debido a que el inicio de sesion no se realiza adecuadamente con un usuario registrado diferente a Admin
    var f = {username: "admin", password:12345};


    const loginObserver = {
      next: x => {
        console.log('User logged in');
        this.alertService.success('Logged In');
        swal.fire('oK', `Sesion iniciada`, 'success');
        this.router.navigateByUrl('/');
      },
      error: err => {
        console.log(err);
        var person = {firstname: user.email.substring(0, 20), username: user.email.substring(0, 20), password:user.email, identification: Date.now(), role: {name:"ADMIN"}};
        this.create(person);
      }
    };
    this.authService.login(f).subscribe(loginObserver);
  }

  create(person): void {
    this.personService.create(person)
      .subscribe(
        response => {
          this.router.navigate(['/']);
          swal.fire('Nuevo cliente', `El cliente ${person.firstname} ha sido creado con éxito`, 'success');
        },
        err => {
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

}
