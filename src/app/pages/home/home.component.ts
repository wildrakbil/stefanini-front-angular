import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  persons :Person[];
  content = '';
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getPersons().subscribe(
      persons =>{
        this.persons = persons
      },
      err => {
        this.content = JSON.parse(err.error).messsage;
      }
    );
  }

  delete(person: Person): void {
    swal.fire('Está seguro?', `¿Seguro que desea eliminar al cliente ${person.firstname} ${person.lastname}?`,'warning'
    ).then((result) => {
      if (result.value) {

        this.personService.delete(person.id).subscribe(
          () => {
            this.persons = this.persons.filter(cli => cli !== person)
            swal.fire(
              'Persona Eliminada!',
              `Persona ${person.firstname} eliminada con éxito.`,
              'success'
            )
          }
        )

      }
    });
  }

}
