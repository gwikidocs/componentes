import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';



@NgModule({
  declarations: [BuscadorComponent],
  imports: [
    CommonModule
  ],
  exports: [BuscadorComponent]
})
export class BuscadorModule { }
