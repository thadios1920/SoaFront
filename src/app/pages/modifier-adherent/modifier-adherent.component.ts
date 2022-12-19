import { StorageServiceService } from './../../services/storage-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const URL=environment.apiUrl;

@Component({
  selector: 'app-modifier-adherent',
  templateUrl: './modifier-adherent.component.html',
  styleUrls: ['./modifier-adherent.component.css']
})
export class ModifierAdherentComponent implements OnInit { 

  constructor(
    private http:HttpClient,
    private storage:StorageServiceService,
    private router: Router,
  ) { }


  selectedFile : any 
  
  nom:string = "" 
  prenom:string = "" 
  email:string = "" 
  tel: string = ""
  password:string = "" 
   

    // upload Image
    onFileChanged(event: any){
      console.log(event);
      this.selectedFile = event.target.files[0];
      
    }

    getName(nom: string | any) {
      this.nom = nom;
      console.log(nom);
      
    }
    getTel(tel: Number | any) {
      this.tel = tel;
      console.log(tel);
      
    }
    getPrenom(prenom: string | any) { 
      this.prenom = prenom;
      console.log(prenom);

    }
   
    getEmail(email: string | any ) {
      this.email = email;
      console.log(email);
      
    }
    getPassword(password: string | any) {
      this.password = password;
      console.log(password);
    }

    OnEditAdherent() {
      let formData = new FormData();
      formData.set('nom', this.nom)
      formData.set('prenom', this.prenom)
      formData.set('email', this.email)
      formData.set('tel', this.tel)
      formData.set('password', this.password)
      formData.set('image',this.selectedFile)
  
      console.log(formData);
  

      this.http.post(URL+'/adherent',formData)
      .subscribe(data => console.log(data))
      
    }

  ngOnInit(): void {
   
    if (!this.storage.isLogedIn()) {
      this.router.navigate(["login"]) 
    }
  }

}
