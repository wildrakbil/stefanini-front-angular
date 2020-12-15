import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { Service } from 'src/app/models/service';
import { User } from 'src/app/models/user';
import { ReservasService } from 'src/app/services/reservas.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  reserva: Reserva = new Reserva();
  titulo: string = "Reserva";
  errores: string[];
  servicio: Service = new Service();
  user: User = new User();
  horas: Number[];

  constructor(private reservasService: ReservasService,
    private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.servicio.id=1;
    this.user.id=1;
    this.reserva.user = this.user;
    this.reserva.service = this.servicio;
    this.horas = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  }

  create(): void{

    this.reserva.day = new DatePipe('en-US ').transform(this.reserva.day, 'yyyy-MM-dd');
    console.error(this.reserva.day);
    this.reservasService.create(this.reserva)
      .subscribe(
        person => {
          this.router.navigate(['/reservas/list']);
          swal.fire('Nueva Reserva', `El cliente ${this.reserva} ha sido creado con éxito`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

  update(){}

}
