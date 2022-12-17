import { Adherent } from './../models/adherent';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageServiceService } from './storage-service.service';

const URL=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(
    private http:HttpClient,
    private tokenStorage:StorageServiceService
  ) { }

  //Get All Adherent
  public getAllAdherents():Observable <Adherent[]  > {
    return this.http.get<Adherent[]>(URL+'/adherent')
  }

  //Delete Adherent  
deleteAdherent(id:string | undefined ):Observable<Adherent>{
  return this.http.delete<Adherent>(URL+'/adherent/'+id);
  }

  //Ajouter Adherent
  addServiceDem(adherent:Adherent):Observable<Adherent>{
    return this.http.post<Adherent>(URL+'/adherent', adherent);
  }

   //Modier Adherent
 EditProfile(user:Adherent):Observable<Adherent>{
  return this.http.put<Adherent>(URL+'/adherent/'+this.tokenStorage.getUser().id, user);
  }

}
