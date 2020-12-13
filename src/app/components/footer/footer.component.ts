import { Component, Inject, OnInit } from '@angular/core';
import { IPropertiesLPS, APP_CONFIG } from 'src/properties/properties.lps';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public _lpsConfig:IPropertiesLPS;

  constructor( @Inject(APP_CONFIG) private appConfig: any) {

    this._lpsConfig = appConfig;

  }

  ngOnInit() {
  }

}
