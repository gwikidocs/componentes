import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-hb',
  templateUrl: './boton-hb.component.html',
  styleUrls: ['./boton-hb.component.css']
})
export class BotonHbComponent implements OnInit {

  constructor() {}

  @Input() source: string;
  @Input() tipo: string;
  @Input() icono: string;
  @Input() texto: string;
  @Input() tipoTipografia: string;

  ngOnInit(): void {
  }

}
