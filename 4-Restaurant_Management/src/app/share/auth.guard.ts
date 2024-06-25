import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router:Router){}

  canActivate(){
    if(this.auth.isLogedIn()){
      return true;
    }
    alert("You are not logged in! Please login");
    this.router.navigate(['login']);
    return false;
  }

}
