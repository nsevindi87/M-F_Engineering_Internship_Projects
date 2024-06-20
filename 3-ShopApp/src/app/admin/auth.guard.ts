import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../model/auth.services';

@Injectable()
export class AuthGuard{
    constructor(private router:Router, private authService:AuthService){}
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        if(!this.authService.authenticated){
            this.router.navigateByUrl("/admin/auth");
            return false;
        }
        return true;
    }
}