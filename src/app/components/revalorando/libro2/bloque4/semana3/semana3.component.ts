import { Component } from '@angular/core';

@Component({
  selector: 'app-libro2-bloque4-semana3',
  templateUrl: './semana3.component.html',
  styleUrls: ['./semana3.component.css']
})
export class Libro2Bloque4Semana3Component {
  titulo = "El abejorro que no quería trabajar";
  colorTitulo = "rgb(155, 203, 118)";
  foco1 = "<b class='¿'>¿</b><b>Qué cosas te provocan flojera?</b>";
  foco2 = "<b class='¿'>¿</b><b>Alguna vez has dejado de cumplir tareas?</b>";
  colorFoco = "rgb(155, 203, 118)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_1/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Érase una vez, una soleada mañana de verano, en la que la brisa dejaba
  como borreguitos las nubecitas blancas en el cielo azul y los prados estaban
  llenos de flores de colores. Era el día ideal para recoger miel. Eso era lo
  que pensaron las abejas y todas se apresuraron a ponerse su chaqueta
  de terciopelo marrón, para salir a trabajar rápidamente. Todas menos el
  abejorro Patoso.</p>`;
  parrafo2 = `<p class="texto">Al abejorro Patoso no le gustaba trabajar. Pero cuando las otras abejas se
  iban, la colmena resultaba aburrida y estaba oscura, así que salía al sol y
  volaba pausadamente de flor en flor. Pero era tan lento trabajando y se
  paraba a descansar con tanta frecuencia, que no recogía casi nada de miel.
  Ese día, durante uno de esos descansos, mientras se mecía perezosamente
  de un lado a otro dentro de una rosa silvestre, escuchó una risa cerca. Patoso
  miró hacia arriba y sobre él, balanceándose despreocupadamente en el
  borde de un pétalo rosado, vio a una diminuta mariposa. Sus alas tenían
  unos colores muy bellos y además era muy pequeña para ser una mariposa,
  no mucho mayor que el propio Patoso. Esa mariposa, también era perezosa.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "La vida de Patoso";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_2/Bloque_1/Semana_1/Actividad.png";

  bloque = "1";
  actividad_1 = "Realiza un dibujo del campo donde las abejas recogían la miel. Apóyate en lo que entendiste de la lectura.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
