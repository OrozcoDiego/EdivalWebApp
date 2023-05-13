import { Component } from '@angular/core';

@Component({
  selector: 'app-libro1-bloque1-semana6',
  templateUrl: './semana6.component.html',
  styleUrls: ['./semana6.component.css']
})
export class Libro1Bloque1Semana6Component {
  titulo = "El mejor deseo";
  colorTitulo = "rgb(188, 137, 189)";
  foco1 = "<b class='¿'>¿</b><b>A veces, por soñar despierto, olvidas las tareas que necesitas realizar?</b>";
  foco2 = "<b class='¿'>¿</b><b>Cuál es el mejor deseo que te gustaría pedir?</b>";
  colorFoco = "rgb(188, 137, 189)";
  imagen = "../../../../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_6/Lectura.png";
  lectura: string[] = [];
  parrafo1 = `<p class="texto">Sofi dejó a un lado el cuaderno, tomó en sus manos a Amy, la miró y dijo en
  voz alta: —Ojalá la tarea se hiciera sola. Sin soltar a Amy, abrió una vez más
  el cuaderno. ¡Los ejercicios estaban contestados! ¡La tarea se había hecho
  sola! Con un grito de alegría, Sofi comenzó a bailar por toda la habitación.
  Tenía una muñeca que cumplía los deseos. Esto era como un sueño. “<a class="¿ texto">¿</a>Qué
  puedo pedir?..., <a class="¿ texto">¿</a>qué puedo pedir?” pensaba. “<a class="¿ texto">¿</a>La paz en el mundo?”, <a class="¿ texto">¿</a>Un
  viaje a la playa?, “<a class="¿ texto">¿</a>Un viaje a Paris?”, “<a class="¿ texto">¿</a>Un viaje a...?” Habría que pensarlo
  muy bien, pues, después de todo, “grandes poderes conllevan grandes
  responsabilidades”.</p>`;
  parrafo2 = `<p class="texto">De pronto, Sofi se acordó de un cuento que había escuchado alguna vez, en
  donde los deseos se cumplían, pero con terribles consecuencias. “<a class="¿ texto">¿</a>Qué tal
  si pedía un viaje a París y de pronto se encontraba allá, sola, sin papás, sin
  saber francés y sin Amy para poder regresar? <a class="¿ texto">¿</a>Qué tal si la única manera
  de lograr la paz en el mundo es que éste se acabe?”. Era mejor esperar a
  entender cómo funcionaba la magia, antes de arriesgarse a pedir un deseo
  importante.</p>`;

  actividadTitulo: string[] = [];
  actividadTituloParte1 = "Pelota imaginaria";
  acctividadImagen = "../../../assets/images/Revalorando/Libro_1/Bloque_1/Semana_6/Actividad.png";

  bloque = "1";
  actividad_1 = "Con ayuda de tu maestro(a) participa en la dinámica.";

  ngOnInit() {
    this.lectura.push(this.parrafo1);
    this.lectura.push(this.parrafo2);
    this.actividadTitulo.push(this.actividadTituloParte1);
  }
}
