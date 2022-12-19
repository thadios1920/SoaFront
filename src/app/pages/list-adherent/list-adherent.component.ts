import { Router } from '@angular/router';
import { Adherent } from './../../models/adherent';
import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-list-adherent',
  templateUrl: './list-adherent.component.html',
  styleUrls: ['./list-adherent.component.css']
})
export class ListAdherentComponent implements OnInit {

  constructor(
    private router: Router,
    private storage:StorageServiceService,

  ) { }

  listAdherent:Adherent[] | undefined;

  ngOnInit(): void {
    if (!this.storage.isLogedIn()) {
      this.router.navigate(["login"]) 
    }
  }

}
