import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'componente-textfield';

  operandoA:string;
  operandoB:string;
  resultado:number;

  onString():void {
    this.resultado = parseInt(this.operandoA) + parseInt(this.operandoB);
  }

  hello():void {
    alert("Hello");
  }

  public welcome() {   
    alert( "Welcome to Angular 11!")
  }   
}
