import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports:[HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
