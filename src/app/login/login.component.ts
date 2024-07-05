import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    await this.authService.login(this.email, this.password);
    this.router.navigate(['/topics']);
  }

  async signup() {
    await this.authService.signup(this.email, this.password);
    this.router.navigate(['/topics']);
  }
}
