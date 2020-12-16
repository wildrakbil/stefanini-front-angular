/*2020-12-13
PROPIEDADES
Propiedades variabilidad de la LPS
*/
import { InjectionToken } from '@angular/core';
export const propertiesLps = {
  general: {
    nombre: 'Taller Virtual',
    direccion: 'Calle 150 # 999',
    telefono: '5551122',
    paginaweb: 'www.tallervirtual.com',
    logo:
      'https://img.freepik.com/vector-gratis/plantilla-logo-taller_1043-187.jpg?size=338&ext=jpg',
  },
  componentes: {
    footer: true,
    reservar: true,
    servicios: {
      lista: true,
      mosaico: true,
      galeria: true
    },
    login:{
      google:true
    }
  }
};

export interface IPropertiesLPS {
  general: {
    nombre: string;
    direccion: string;
    telefono: string;
    paginaweb: string;
    logo: string;
  };
  componentes: {
    footer: boolean;
    reservar: boolean;
    servicios: {
      lista: boolean;
      mosaico: boolean;
      galeria: boolean;
    },
    login:{
      google:false
    };
  };
}

export const APP_CONFIG = new InjectionToken('Application config');
