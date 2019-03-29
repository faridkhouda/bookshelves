import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  path: import("/home/mebara/angular-workspace/bookshelves/node_modules/@angular/router/src/router_state").ActivatedRouteSnapshot[];
  route: import("/home/mebara/angular-workspace/bookshelves/node_modules/@angular/router/src/router_state").ActivatedRouteSnapshot;

  constructor(private router:Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) =>{
        firebase.auth().onAuthStateChanged(
          (user)=>{
            if(user) {
              resolve(true);
            } else {
              this.router.navigate(['/auth', 'signin']);
              resolve(false);
            }
          }
        )
      }
    )
  }
}
