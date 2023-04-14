import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { AvatarModule } from './avatar.module';
import { AvatarComponent } from './avatar/avatar.component';



@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
    AvatarModule
  ],
  exports: [ListaComponent],
})
export class ListaModule { }
