import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {

  constructor(
    private storage:StorageServiceService,
    private router: Router
  ) { }

  

  ngOnInit(): void {
    // if (!this.storage.isLogedIn()) {
    //   this.router.navigate(["login"]) 
    // }
  }

}
