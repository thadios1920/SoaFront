import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-add-adherent',
  templateUrl: './add-adherent.component.html',
  styleUrls: ['./add-adherent.component.css']
})
export class AddAdherentComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private storage:StorageServiceService
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
  }
}