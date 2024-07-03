import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PocketBaseService } from './pocketbase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private pocketBaseService: PocketBaseService, private router: Router) {}

  canActivate(): boolean {
    if (this.pocketBaseService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
