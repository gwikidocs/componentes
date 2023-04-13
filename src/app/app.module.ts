import { forwardRef, NgModule } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvatarModule } from './componentes/avatar.module';
import { BotonModule } from './componentes/boton.module';
import { BuscadorModule } from './componentes/buscador.module';
import { HeaderModule } from './componentes/header.module';
import { ListaModule } from './componentes/lista.module';
import { TextfieldModule } from './componentes/textfield.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TextfieldModule,
    HeaderModule,
    BuscadorModule,
    AvatarModule,
    BotonModule,
    ListaModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
