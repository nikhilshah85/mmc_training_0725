import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Security implements CanActivate {
    
       isUserLoggedIn = false;
       userName ='Nikhil';
       password = '12345';
       Loginmessage = 'Please Login';
       jwt_token = 'algo to generate or store the jwt token'; 



       takeCredentials(userName: string, password: string)
       {
         alert('Login Request received');
          console.log('username ' + userName);
          console.log('password ' + password);
        if(userName == 'Nikhil' && password == '1234')
        {
          //here u make rest api calls / express calls to login method and get the 
          //credentials tested from database

          //before sending the credentials to rest, you may want to encrypt the password
          //apply salt opetation to password
          //generate a jwt token
         
          this.isUserLoggedIn = true;
          this.Loginmessage = 'Welcome ' + this.userName;
        }
        else
        {
          this.isUserLoggedIn = false;
          this.Loginmessage = 'Invalid Credentials';
        }        
       }

        logout()
        {
          this.isUserLoggedIn = false;
          this.Loginmessage = 'Please Login';
        }

  canActivate(): boolean {
      return this.isUserLoggedIn;           

     
    }
  
   





}
