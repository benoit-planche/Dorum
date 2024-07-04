import { Injectable } from '@angular/core';
import { PocketBaseService } from './pocketbase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private pocketBaseService: PocketBaseService) {}

  login(email: string, password: string) {
    return this.pocketBaseService.pb.collection('users').authWithPassword(email, password);
  }

  async signup(username: string, email: string, password: string) {
    try {
      this.pocketBaseService.pb.collection('users').create({
        username,
        email,
        password,
        passwordConfirm: password
      });
      await this.login(email, password);
    } catch (error) {
      console.error('Signup error:', error);
      alert(error);
    }
  }

  logout() {
    this.pocketBaseService.pb.authStore.clear();
  }

  getCurrentUser() {
    return this.pocketBaseService.pb.authStore.model;
  }

  isAuthenticated(): boolean {
    return !!this.pocketBaseService.pb.authStore.token;
  }
}
