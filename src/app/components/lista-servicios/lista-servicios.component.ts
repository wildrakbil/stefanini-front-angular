import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.scss']
})
export class ListaServiciosComponent implements OnInit {

  @Input() items: any; // decorate the property with @Input()

  @Input() reservar: boolean; // decorate the property with @Input()

  constructor() { }

  ngOnInit() {
  }

}
