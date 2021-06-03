import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ShareModule } from '../shared/share.module';
import { VehiclesAccountComponent } from './vehiclesAccount/vehicles-account/vehicles-account.component';
import { AddVehicleComponent } from './vehiclesAccount/add-vehicle/add-vehicle.component';

@NgModule({
  declarations: [DashboardPageComponent, VehiclesAccountComponent, AddVehicleComponent],
  imports: [CommonModule, ShareModule],
  exports: [DashboardPageComponent],
})
export class DashboardModule {}
