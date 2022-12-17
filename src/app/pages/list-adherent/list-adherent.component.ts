import { Adherent } from './../../models/adherent';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-adherent',
  templateUrl: './list-adherent.component.html',
  styleUrls: ['./list-adherent.component.css']
})
export class ListAdherentComponent implements OnInit {

  constructor() { }

  listAdherent:Adherent[] | undefined;

  ngOnInit(): void {
  }

}
