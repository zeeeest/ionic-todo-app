import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DashboardRoutingModule } from './dashboard-routes.module';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/components/shared-components.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [IonicModule, DashboardRoutingModule, SharedModule, CommonModule],
  exports: [],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
