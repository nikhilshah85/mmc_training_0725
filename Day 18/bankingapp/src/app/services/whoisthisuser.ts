import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Whoisthisuser implements CanActivate {
  
      userName = 'Guest';
      private password = '';
      message = 'Please Login for Banking Services';
      isUserLoggedIn = false;

      checkCredentials(userName: string, password: string): boolean {
        if(userName === 'Nikhil' && password === '1234') {
          this.userName = userName;          
          this.message = 'Welcome to Banking Services';
          this.isUserLoggedIn = true;
          return this.isUserLoggedIn;
        } else {
          this.userName = 'Guest';
          this.password = '';
          this.message = 'Please Login for Banking Services';
          this.isUserLoggedIn = false;
          return this.isUserLoggedIn;
        }
      }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return this.isUserLoggedIn;
    }


}
