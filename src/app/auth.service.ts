import { Injectable } from '@angular/core';
import { PocketBaseService } from './pocketbase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private pocketBaseService: PocketBaseService) {}

  async login(email: string, password: string) {
    await this.pocketBaseService.pb.collection('users').authWithPassword(email, password);
  }

  async signup(email: string, password: string) {
    const name = email.split('@')[0];
    try {
      await this.pocketBaseService.pb.collection('users').create({
        email,
        password,
        passwordConfirm: password,
        name
      });
    } catch (error) {
      console.error('Signup error:', error);
      alert(error);
    }
    await this.login(email, password);
  }

  logout() {
    this.pocketBaseService.pb.authStore.clear();
  }

  getCurrentUser(): any {
    return this.pocketBaseService.pb.authStore.model;
  }

  isAuthenticated(): boolean {
    return !!this.pocketBaseService.pb.authStore.token;
  }
}
