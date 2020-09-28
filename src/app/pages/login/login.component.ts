import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.alertService.info('Checking User Info');
    const loginObserver = {
      next: x => {
        console.log('User logged in');
        this.alertService.success('Logged In');
      },
      error: err => {
        console.log(err);
        this.alertService.danger('Unable to Login');
      }
    };
    this.authService.login(f.value).subscribe(loginObserver);

  }


}
