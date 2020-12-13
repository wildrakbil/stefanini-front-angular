import { Component, Inject, OnInit } from '@angular/core';
import { APP_CONFIG, IPropertiesLPS } from 'src/properties/properties.lps';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  public _lpsConfig:IPropertiesLPS;

  constructor(
    @Inject(APP_CONFIG) private appConfig: any
  ) {

    this._lpsConfig  = appConfig;

  }

  ngOnInit(): void {
  }

}
