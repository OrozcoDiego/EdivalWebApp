import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.component.html',
  styleUrls: ['./lectura.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LecturaComponent {
  @Input() titulo: string = "";
  @Input() colorTitulo: string = "";
  @Input() foco1: string = "";
  @Input() foco2: string = "";
  @Input() colorFoco: string = "";
  @Input() imagen: string = "";
  @Input() lectura: string[] = [];
  constructor(){}
}


