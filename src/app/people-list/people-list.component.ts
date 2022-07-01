import { Component, OnInit } from '@angular/core';

interface People {
  firstName: string;
  lastName: string;
  id: number;
}

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: People[] = [
    { id: 0, firstName: "Jon", lastName: "Michael"},
    { id: 1, firstName: "Joe", lastName: "Michael"},
    { id: 2, firstName: "Jojo", lastName: "Michael"},
    { id: 3, firstName: "Joseph", lastName: "Michael"},
    { id: 4, firstName: "James", lastName: "Michael"},
    { id: 5, firstName: "Joule", lastName: "Michael"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  deletePeople(peopleId: number) {
    this.people = this.people.filter(p => p.id != peopleId);
  }
}
