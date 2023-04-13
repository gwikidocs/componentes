import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {

  constructor() { }

  @Input() control:FormControl;
  @Input() tipo: string;
  @Input() textPlaceholder: string;
  @Input() textLabel1: string;
  @Input() textLabel2: string;
  @Input() disabled: string;

  ngOnInit(): void {
  }

  @Input() operandoA: string;

  onString(): void {
    this.operandoA;
  }
}
