import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-actividad-titulo',
  templateUrl: './actividad-titulo.component.html',
  styleUrls: ['./actividad-titulo.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ActividadTituloComponent {
  @Input() titulo: string[] = [];
  @Input() imagen: string = "";
}
