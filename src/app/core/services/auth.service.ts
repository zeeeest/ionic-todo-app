import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FirebaseuiAngularLibraryService } from 'firebaseui-angular';
import { User } from 'src/app/shared/models/User';
import { TodoStoreService } from './todoStore.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: User;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore,
    private firebaseuiAngularLibraryService: FirebaseuiAngularLibraryService,
  ) {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.userData = user;
      this.router.navigate(['dashboard']);
    }
    this.firebaseuiAngularLibraryService.firebaseUiInstance.disableAutoSignIn();
  }

  signIn(user: User) {
    this.userData = user;
    this.setUser(user);
    localStorage.setItem('user', JSON.stringify(this.userData));
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  setUser(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`,
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.userData = null;
      this.router.navigate(['sign-in'], { replaceUrl: true });
    });
  }
}
