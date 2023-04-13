import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonHbComponent } from './boton-hb/boton-hb.component';



@NgModule({
  declarations: [BotonHbComponent],
  exports: [BotonHbComponent],
  imports: [
    CommonModule
  ]
})
export class BotonModule { }
