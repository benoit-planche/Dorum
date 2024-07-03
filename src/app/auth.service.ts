import { Injectable } from '@angular/core';
import { PocketBaseService } from './pocketbase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private pocketBaseService: PocketBaseService) {}

  async login(email: string, password: string) {
    try {
      await this.pocketBaseService.login(email, password);
    } catch (error) {
      alert(error);
    }
  }

  async signup(username: string, email: string, password: string) {
    try {
      await this.pocketBaseService.signup(username, email, password);
      await this.pocketBaseService.login(email, password);
    } catch (error) {
      console.error('Signup error:', error);
      alert(error);
    }
  }

  logout() {
    this.pocketBaseService.logout();
  }

  getCurrentUser() {
    return this.pocketBaseService.getCurrentUser();
  }
}
