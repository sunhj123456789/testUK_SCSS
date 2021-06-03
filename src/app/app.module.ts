import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShareModule } from './shared/share.module';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from '../app/dashboard/dashboard-page/dashboard-page.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './home/home.component';
import { VehiclesAccountComponent } from './dashboard/vehiclesAccount/vehicles-account/vehicles-account.component';
import { AddVehicleComponent } from './dashboard/vehiclesAccount/add-vehicle/add-vehicle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  {
    path: 'vehicles-account',
    component: VehiclesAccountComponent,
    children: [{ path: 'add-new', component: AddVehicleComponent }],
  },
  { path: 'add-new', component: AddVehicleComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    //DashboardModule,
    ShareModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent, HomeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
