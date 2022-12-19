import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const LOGED_IN = 'LogeIn';


@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  // public saveToken(token: string): void {
  //   window.sessionStorage.removeItem(TOKEN_KEY);
  //   window.sessionStorage.setItem(TOKEN_KEY, token);
  // }

  // public getToken(): string | null {
  //   return window.sessionStorage.getItem(TOKEN_KEY);
  // }

  public saveUser(admin: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(admin));
  }

  public isLogedIn() {
    return window.sessionStorage.getItem(LOGED_IN);
  }
  public seLogedIn(loged:boolean){
    window.sessionStorage.removeItem(LOGED_IN);
    window.sessionStorage.setItem(LOGED_IN, JSON.stringify(loged));
  }

  public getUser(): any {
    const admin = window.sessionStorage.getItem(USER_KEY);
    if (admin) {
      return JSON.parse(admin);
    }

    return {};
  }
}
