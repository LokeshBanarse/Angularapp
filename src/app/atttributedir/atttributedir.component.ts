import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atttributedir',
  templateUrl: './atttributedir.component.html',
  styleUrls: ['./atttributedir.component.css']
})
export class AtttributedirComponent implements OnInit {

  olorVal = 'blue';
  peoples: any[] = [
    {'name': 'Jack', 'country': 'UK'},
    {'name': 'Sumit', 'country': 'USA'},
    {'name': 'Anup', 'country': 'HK'},
    {'name': 'Tom', 'country': 'UK'},
    {'name': 'Surya', 'country': 'USA'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
