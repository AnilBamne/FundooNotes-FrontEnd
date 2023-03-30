import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  
  constructor(private auth:AuthguardService,private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // throw new Error('Method not implemented.');
    if(this.auth.IsloggedIn()){
      return true;
    }
    this.router.navigate(['login'])
    return false;
  }

  IsloggedIn(){
    return !!localStorage.getItem('token');
  }
}
