import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FirebaseUIModule } from 'firebaseui-angular';
import { SignInRoutingModule } from './auth-routes.module';

import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [IonicModule, SignInRoutingModule, FirebaseUIModule],
  exports: [],
  declarations: [SignInComponent],
  providers: [],
})
export class SignInModule {}
