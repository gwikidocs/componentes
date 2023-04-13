import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor() { }

  @Input() text: string;
  @Input() textPlaceholder: string;
  @Input() disabled: string;

  ngOnInit(): void {
  }

  
}
