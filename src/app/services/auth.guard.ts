import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService, public route: Router) { }

  canActivate(): boolean {
    if (!this.authService.isConnected()) {
      this.route.navigate(['']);
      return false;
    }
    return true;
  }

}
