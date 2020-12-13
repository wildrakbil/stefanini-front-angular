import { Component, Inject, OnInit } from '@angular/core';
import { IPropertiesLPS, APP_CONFIG } from 'src/properties/properties.lps';

@Component({
  selector: 'app-container-servicios',
  templateUrl: './container-servicios.component.html',
  styleUrls: ['./container-servicios.component.scss']
})
export class ContainerServiciosComponent implements OnInit {

  opcion:string  ='01';

  listServices:any=[
    {
      id : 1,
      name : "Lavado Basico",
      descripcion:"Servicios de lavado basico",
      path_img:"https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/149592/3a56685c9a301f73e2fc9c15bd8755d9b1878cfe.XL2.jpg",
      state:""
    },
    {
      id : 2,
      name : "Lavado Motor",
      descripcion:"Servicios de lavado motor",
      path_img:"https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/149592/3a56685c9a301f73e2fc9c15bd8755d9b1878cfe.XL2.jpg",
      state:""
    },
    {
      id : 3,
      name : "Lavado Cogineria",
      descripcion:"Servicios de lavado cogineria ....",
      path_img:"https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/149592/3a56685c9a301f73e2fc9c15bd8755d9b1878cfe.XL2.jpg",
      state:""
    },
    {
      id : 4,
      name : "Lavado Completo",
      descripcion:"Servicios de lavado completoo",
      path_img:"https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/149592/3a56685c9a301f73e2fc9c15bd8755d9b1878cfe.XL2.jpg",
      state:""
    }
    ,
    {
      id : 5,
      name : "Lavado Completo",
      descripcion:"Servicios de lavado completoo",
      path_img:"https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/149592/3a56685c9a301f73e2fc9c15bd8755d9b1878cfe.XL2.jpg",
      state:""
    }
    ,
    {
      id : 6,
      name : "Lavado Completo",
      descripcion:"Servicios de lavado completoo",
      path_img:"https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/149592/3a56685c9a301f73e2fc9c15bd8755d9b1878cfe.XL2.jpg",
      state:""
    }

  ];

  public _lpsConfig:IPropertiesLPS;

  constructor( @Inject(APP_CONFIG) private appConfig: any) {
    this._lpsConfig = appConfig;
  }

  ngOnInit() {
    this.opcion= '01'
  }

  selectOption(value){
    this.opcion= value
  }

}
