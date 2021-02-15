import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () => import('./auth/auth.module').then(c => c.SignInModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(c => c.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthGuard],
})
export class PagesRoutingModule {}
