import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShareModule } from './shared/share.module';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from '../app/dashboard/dashboard-page/dashboard-page.component';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'dashboard', component: DashboardPageComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DashboardModule,
    ShareModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
