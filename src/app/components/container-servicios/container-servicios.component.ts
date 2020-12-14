import { Component, Inject, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { IPropertiesLPS, APP_CONFIG } from 'src/properties/properties.lps';

@Component({
  selector: 'app-container-servicios',
  templateUrl: './container-servicios.component.html',
  styleUrls: ['./container-servicios.component.scss']
})
export class ContainerServiciosComponent implements OnInit {

  opcion:string  ='01';

  content = '';

  listServices:Service[]=[
    {
      id : 1,
      name : "Lavado Basico",
      description:"Servicios de lavado basico",
      pathImg:"https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/149592/3a56685c9a301f73e2fc9c15bd8755d9b1878cfe.XL2.jpg",
      state:true
    },
    {
      id : 2,
      name : "Lavado Motor",
      description:"Servicios de lavado motor",
      pathImg:"https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/149592/3a56685c9a301f73e2fc9c15bd8755d9b1878cfe.XL2.jpg",
      state:true
    },
    {
      id : 3,
      name : "Lavado Cogineria",
      description:"Servicios de lavado cogineria ....",
      pathImg:"https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/149592/3a56685c9a301f73e2fc9c15bd8755d9b1878cfe.XL2.jpg",
      state:true
    },
    {
      id : 4,
      name : "Lavado Completo",
      description:"Servicios de lavado completoo",
      pathImg:"https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/149592/3a56685c9a301f73e2fc9c15bd8755d9b1878cfe.XL2.jpg",
      state:true
    }
    ,
    {
      id : 5,
      name : "Lavado Completo",
      description:"Servicios de lavado completoo",
      pathImg:"https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/149592/3a56685c9a301f73e2fc9c15bd8755d9b1878cfe.XL2.jpg",
      state:true
    }
    ,
    {
      id : 6,
      name : "Lavado Completo",
      description:"Servicios de lavado completoo",
      pathImg:"https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/149592/3a56685c9a301f73e2fc9c15bd8755d9b1878cfe.XL2.jpg",
      state:true
    }

  ];

  public _lpsConfig:IPropertiesLPS;

  constructor(
    private serviciosService: ServiciosService,
    @Inject(APP_CONFIG) private appConfig: any
    ) {
    this._lpsConfig = appConfig;
  }

  ngOnInit() {
    this.opcion= '01';
    this.serviciosService.getServices().subscribe(
      persons =>{
        this.listServices = persons
      },
      err => {
        this.content = JSON.parse(err.error).messsage;
      }
    );
  }

  selectOption(value){
    this.opcion= value
  }

}
