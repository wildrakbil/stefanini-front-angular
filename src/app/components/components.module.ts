import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerServiciosComponent } from './container-servicios/container-servicios.component';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';
import { GaleriaServiciosComponent } from './galeria-servicios/galeria-servicios.component';
import { MosaicoServiciosComponent } from './mosaico-servicios/mosaico-servicios.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContainerServiciosComponent,
    GaleriaServiciosComponent,
    MosaicoServiciosComponent,
    ListaServiciosComponent

  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, ContainerServiciosComponent],
})
export class ComponentsModule {}
