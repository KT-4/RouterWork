import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientList = [
    {
      clientid:1,
      firstName:'kashyap',
      lastName:'Trivedi'
    },
    {
      clientid:2,
      firstName:'kartk',
      lastName:'joshi'
    },
    {
      clientid:3,
      firstName:'kalpesh',
      lastName:'vyas'
    },
    {
      clientid:4,
      firstName:'kalpit',
      lastName:'dave'
    },
    {
      clientid:5,
      firstName:'kausar',
      lastName:'pathan'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
