import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'todo-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  handleSignIn({ authResult }) {
    const { user } = authResult;
    const userData: User = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
    };
    this.authService.signIn(userData);
    this.router.navigate(['dashboard']);
  }

  handleSignInError(error) {
    console.warn('Sign in has been failed', error);
  }
}
