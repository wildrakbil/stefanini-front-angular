import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mosaico-servicios',
  templateUrl: './mosaico-servicios.component.html',
  styleUrls: ['./mosaico-servicios.component.scss']
})
export class MosaicoServiciosComponent implements OnInit {

  @Input() items: any; // decorate the property with @Input()
  @Input() reservar: boolean; // decorate the property with @Input()

  constructor() { }

  ngOnInit() {
  }

}
