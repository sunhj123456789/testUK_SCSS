import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ShareModule } from '../shared/share.module';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, ShareModule],
  exports: [DashboardPageComponent],
})
export class DashboardModule {}
