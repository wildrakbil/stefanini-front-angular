import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import { APP_CONFIG, IPropertiesLPS } from 'src/properties/properties.lps';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public _lpsConfig:IPropertiesLPS;

  userId: any;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    @Inject(APP_CONFIG) private appConfig: any
    ) {
      this._lpsConfig = appConfig;
      authService.getLoggedInId.subscribe(userId => this.changeName(userId));
    }

  ngOnInit(): void {
    this.userId=localStorage.getItem("user")?true:false;
  }

  private changeName(userId: Number): void {
    this.userId=localStorage.getItem("user")?true:false;
}

  logout() {
    this.alertService.info('Checking User Info');
    this.authService.logout();
    this.router.navigate(['login']);
    /*refrescar la pagina */
  }

}
