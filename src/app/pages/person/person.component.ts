import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Person } from 'src/app/models/person';
import { IdentificationTypeCode } from 'src/app/models/identificationTypeCode';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {

  person: Person = new Person();
  identificationTypet: IdentificationTypeCode  = new IdentificationTypeCode();

  titulo: string = "Crear Cliente";
  errores: string[];

  constructor(private personService: PersonService,
    private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPerson();
  }

  cargarPerson(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.personService.getPerson(id).subscribe((person) => this.person = person);
      }
    })
  }

  create(): void {
    this.personService.create(this.person)
      .subscribe(
        person => {
          this.router.navigate(['/home']);
          swal.fire('Nuevo cliente', `El cliente ${this.person.firstname} ha sido creado con éxito`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

  update(): void {
    this.personService.update(this.person)
      .subscribe(
        person => {
          swal.fire('Persona Actualizada',`${this.person.firstname}`, 'success');
          this.router.navigate(['/home']);
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

}
