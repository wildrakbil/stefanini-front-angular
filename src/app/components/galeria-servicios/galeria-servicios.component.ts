import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-servicios',
  templateUrl: './galeria-servicios.component.html',
  styleUrls: ['./galeria-servicios.component.scss']
})
export class GaleriaServiciosComponent implements OnInit {

  @Input() items: any; // decorate the property with @Input()

  @Input() reservar: boolean; // decorate the property with @Input()

  constructor() { }

  ngOnInit() {
  }

}
