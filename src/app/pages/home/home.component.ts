import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

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

}
