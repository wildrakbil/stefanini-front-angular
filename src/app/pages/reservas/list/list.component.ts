import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';
import { Reserva } from 'src/app/models/reserva';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  reservas :Reserva[];
  content = '';

  constructor(private reservasService: ReservasService,
    private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.reservasService.getReservas().subscribe(
      reservas =>{
        this.reservas = reservas
      },
      err => {
        this.content = JSON.parse(err.error).messsage;
      }
    );
  }

  delete(reserva: Reserva):void{
    swal.fire('Está seguro?', `¿Seguro que desea cancelar la Reserva?`,'warning'
    ).then((result) => {
      if (result.value) {

        this.reservasService.delete(reserva.id).subscribe(
          () => {
            this.reservas = this.reservas.filter(cli => cli !== reserva)
            swal.fire(
              'Reserva Eliminada!',
              `Reserva ${reserva.id} eliminada con éxito.`,
              'success'
            )
          }
        )

      }
    });
  }

}
