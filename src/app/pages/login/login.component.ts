import { StorageServiceService } from './../../services/storage-service.service';
import { AuthServiceService } from './../../services/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
                                  private formBuilder: FormBuilder,
                                  private http: HttpClient,
                                  private router: Router,
                                  private authService:AuthServiceService,
                                  private tokenStorage:StorageServiceService
  ) { }

  submitted=false;
  messageError:String = "";
  public loginForm!: FormGroup;

  login(){
    // console.log("click")
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        this.tokenStorage.saveUser(data.user);

        // this.isLoginFailed = false;
        // this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;

        if(!this.tokenStorage.getUser()){
          this.router.navigate(["login"]) 
          console.log("Non")
        }else {
          console.log("Oui")
          alert('Bonjour admin:'+this.tokenStorage.getUser().prenom)
          this.router.navigate(["list"])

        }
        
      },
      err => {
        console.log(err);
      }
    );
  }

//   login(f)
// {
//   let data=f.value;
  
//   this.sa.signIn(data.email,data.password).then((user)=>{

//     this.route.navigate(['dashborad']);
//   localStorage.setItem("userConnect",user.user.uid);
//   }).catch(()=>{
//     this.messageError="Incorrect email and password"
//   })
// }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.minLength(4)]],
      })
  }

}
