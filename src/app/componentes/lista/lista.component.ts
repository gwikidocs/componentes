import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() icono: string;
  @Input() textoPrincipal: string;
  @Input() textoOpcional: string;
  @Input() textoOpcional2: string;
  @Input() disabled: string;
  @Input() to2: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
