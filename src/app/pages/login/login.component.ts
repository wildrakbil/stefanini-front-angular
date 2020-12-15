import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { PersonService } from 'src/app/services/person.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})


export class LoginComponent implements OnInit {

  

  constructor(private authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    private afAuth: AngularFireAuth,
    private personService: PersonService) { }

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
      error: err => {
        console.log(err);
        this.alertService.danger('Unable to Login');
      }
    };
    this.authService.login(f.value).subscribe(loginObserver);
  }

  async loginGoogle() {
    const res = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const user = res.user;
    console.log(user);

    var f = {username: user.email, password:user.email};


    const loginObserver = {
      next: x => {
        console.log('User logged in');
        this.alertService.success('Logged In');
        swal.fire('oK', `Sesion iniciada`, 'success');
        this.router.navigateByUrl('/');
      },
      error: err => {
        console.log(err);
        var person = {username: user.email, password:user.email, identification: Date.now()};
        this.alertService.danger('Unable to Login');
      }
    };
    this.authService.login(f).subscribe(loginObserver);
  }

  create(person): void {
    this.personService.create(person)
      .subscribe(
        person => {
          this.router.navigate(['/home']);
          swal.fire('Nuevo cliente', `El cliente ${person.firstname} ha sido creado con éxito`, 'success');
        },
        err => {
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

}
