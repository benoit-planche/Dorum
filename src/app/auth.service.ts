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

  async signup(email: string, password: string) {
    console.log('email:', email, 'password:', password)
    const name = email.split('@')[0];
    console.log('email:', email, 'password:', password, 'name:', name);
    try {
      await this.pocketBaseService.pb.collection('users').create({
        email,
        password,
        passwordConfirm: password,
        name
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

  getCurrentUser(): any {
    return this.pocketBaseService.pb.authStore.model;
  }

  isAuthenticated(): boolean {
    return !!this.pocketBaseService.pb.authStore.token;
  }
}
