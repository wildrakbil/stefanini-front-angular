import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private alertService: AlertService,) { }

  ngOnInit(): void {
  
  }

  logout() {
    this.alertService.info('Checking User Info');
    this.authService.logout();
    this.router.navigate(['login']);
    /*refrescar la pagina */
  }

}
